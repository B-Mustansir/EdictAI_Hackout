import sys
from keybert import KeyBERT
from moviepy.editor import *
from moviepy.editor import *
from moviepy.editor import VideoFileClip, concatenate_videoclips
from moviepy.editor import *
from . import keywords_extraction
from . import img_search
from .text_to_speech_azure import large_tts_azure
from . import content_scraper
from . import ganerate_script
from .creating_chunks import new_chunk_creator
from .transition import pan_effect
from .upload_cloudinary import upload_video
# from .chunk_translator import translate_chunk_gu
from ..models import Videoclips,Videos,Images
from pathlib import Path
from django.core.files import File


def edict_video(url):

    # Web Scraping
    # data = {"ministry name": ministry_name,
    #         "title":title,
    #         "postedon": posted_on,
    #         "content" : content,
    #         "releaseid":release_id,
    #         "visitorcount":visitor_count,
    #         "releaseLang":release_lang,
    #         "links_with_text":links_with_text,
    #         "all_images":all_images
    #         }
    # data = url_select(url)
    data_dict=content_scraper.scrap_content(url)
    
    # data=data_dict['content']
    data=ganerate_script.generate_script(data_dict['content'])
    print(data)

    # News Authentication 
    # Put here 

    chunks = new_chunk_creator(data)
    print("\nChunks: ")
    print(chunks)
    # chunks = [item for item in chunks if item != ""]
    # Text Summarization and Chunking
    
    # if(url_identify(url)=="single"):
    #     content = data["content"]
    #     chunks = create_chunks(content)
    # else:
    #     for single_data in data:
    #         chunks.append(single_data["headline"]+" "+single_data["subheadline"])
    #     print(chunks)
    
    image_filenames = []

    audio_filenames = []
    audios = []



    video_filenames = []



    # template = VideoFileClip('videos/template.mp4')
    # video_filenames.append('videos/intro.mp4')

    # Image Search
    for i, chunk in enumerate(chunks):
            keywords = keywords_extraction.keywords_extraction(chunk)
            print(keywords)
            image_filename = img_search.google_image_search_api(keywords, i)
            image_filenames.append(image_filename)
        # else:
        #     for single_data in data: 
        #         image_filename = single_data["image_path"]
        #         image_filenames.append(image_filename)
        #         print(image_filenames)

    # Studio Did 
    for i, chunk in enumerate(chunks):
        
        # Generate audio in other languages
        # chunky = translate_chunk_gu(chunk)
        # chunky=chunk
        audio_filename = large_tts_azure(chunk, i)
        # did_filename = create_a_video(f"did_chunk_{i}",chunk)
        audio_filenames.append(audio_filename)
        # did_filenames.append(did_filename)
#     for i, chunk in enumerate(chunks):
#         did_filenames.append(f"videos/did_chunk_{i}.mp4")

# Assuming create_video_chunk(audio_duration, image_path) function exists

    for i, chunk in enumerate(chunks):
        
        audio = AudioFileClip(audio_filenames[i])
        audio_duration = audio.duration
        audios.append(audio)

        words = chunk.split()
        num_words = len(words)
        words_per_part = num_words // 3
        part1 = ' '.join(words[:words_per_part])
        part2 = ' '.join(words[words_per_part:2 * words_per_part])
        part3 = ' '.join(words[2 * words_per_part:])
        new_chunk = f"{part1}\n{part2}\n{part3}"

        textembed = TextClip(new_chunk, fontsize=48, color="white", font="Arial-Rounded-MT-Bold",bg_color="gray").set_position(("center", "bottom"))

        video_chunk = VideoFileClip(pan_effect(image_filenames[i], audio_duration))

        textembed = textembed.set_duration(audio_duration)

        final_video = CompositeVideoClip([video_chunk.set_audio(audios[i]), textembed])

        final_filename = f"videos/chunk_{i}.mp4"

        final_video.write_videofile(final_filename, fps=24)
        video_filenames.append(final_filename)


    clips_final = [VideoFileClip(video_filename) for video_filename in video_filenames]

    # concatenate the clips
    final_clip = concatenate_videoclips(clips_final)
    
    audio_clip = AudioFileClip("audios/background_music.mp3")
    background_music_volume = 0.3 # Adjust the volume as needed
    audio_clip = audio_clip.volumex(background_music_volume)
    background_music = audio_clip.subclip(0, final_clip.duration)
    # Combine the video clip with the background music
    # final_video = final_clip.set_audio(background_music)
    final_audio = CompositeAudioClip([final_clip.audio, background_music])
    final_video = final_clip.set_audio(final_audio)
    # write the final video to file
    final_video.write_videofile("videos/news_edicted_17.mp4",codec="libx264")
    link=upload_video("videos/news_edicted_17.mp4")
    print(link)
    video=Videos()
    path = Path("videos/news_edicted_17.mp4")
    id=0
    with path.open(mode="rb") as f:
        video.name=data_dict['title']
        video.script=" ".join(chunks)
        video.video = File(f, name=path.name)
        video.link=link
        video.save()
        # id=video.id
    
    # video=Videos.objects.filter(id=id)
    
    for i in image_filenames:
        path = Path(i)
        with path.open(mode="rb") as f:
            img=Images()
            img.image=File(f, name=path.name)
            img.video=video
            img.save()
    
    # youtubeLink = yt_upload_video("news_edicted_13.mp4", data["headline"], data["subheadline"])
    # print(youtubeLink)
    return (link)

# edict_video("https://www.hindustantimes.com/world-news/g7-countries-to-unveil-new-sanctions-targeting-russia-over-ukraine-war-101684445984345.html")
