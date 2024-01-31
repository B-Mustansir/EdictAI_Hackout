import sys
from keybert import KeyBERT
from moviepy.editor import *
from moviepy.editor import *
from moviepy.editor import VideoFileClip, concatenate_videoclips
from moviepy.editor import *
from edictai_app.app.scraper import url_select
from edictai_app.app.keywords_extraction import get_keyword
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
from django.core.mail import send_mail, EmailMultiAlternatives
from .upload_blob import blob_file_upload
from .semantic_search import semantic_search, semantic_search_web
from .aadding_subtitle import addTranscription
from edictai_app.app.generateImage import generate_image
from .caption import get_caption
from .img_search import download_file
from .run_upload_video import yt_upload_video
from .upload_socials import *

def rename_file(original_path, new_name):
    try:
        print("entered renaming")
        directory, original_name = os.path.split(original_path)
        new_path = os.path.join(directory, new_name)
        if os.path.exists(new_path):
            os.remove(new_path)
        os.rename(original_path, new_path)
        print(f"File successfully renamed from {original_path} to {new_path}")
    except FileNotFoundError:
        print(f"Error: The file {original_path} was not found.")
    except FileExistsError:
        print(f"Error: The file {new_name} already exists.")
    except Exception as e:
        print(f"An error occurred: {e}")
        
        
def edict_video(url,content_passed):
    

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
    data_dict={}
    data=None
    context = None
    if(content_passed =="url_pass"):
        print("its url which is passed")
        print("url",url)
        if "pib.gov" in url:
            print("yes its pib")
            data_dict=content_scraper.scrap_content(url)
            web_img_data = []
            for k,l in enumerate(data_dict['all_images']):
                if(data_dict['all_images']=="https://static.pib.gov.in/WriteReadData/specificdocs/photo/2021/aug/ph202183101.png" or data_dict['all_images']=="https://static.pib.gov.in/WriteReadData/specificdocs/photo/2022/nov/ph20221121131401.png"):
                    continue
                web_img_path = download_file(l,"images","web_img"+str(k))
                web_data = {
                    'tags':get_caption("images/"+web_img_path),
                    'id':k,
                    'name':web_img_path,
                }
                web_img_data.append(web_data)        
        else:
            data_dict=url_select(url)
        data,context=ganerate_script.generate_script(data_dict["content"])
    else:
        print("its content passed")
        data,context=ganerate_script.generate_script(url)
        data_dict["title"] = context
        
    # data=data_dict['content']
    
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
    selected_chunks = []
    if(content_passed =="url_pass" and  ("pib.gov" in url)):
        for obj in web_img_data:
            sorted_indexes = semantic_search_web(chunks,obj['tags'])
            chunk_selected = chunks[sorted_indexes[0]]
            selected_chunks.append(chunk_selected)
            old_name = web_data['name']
            print("old name is", old_name)
            old_name_ext = os.path.splitext(old_name)[1]
            # modified_name = old_name.replace("web_img"+str(web_img_data['id']),"chunk_"+str(chunk_selected))
            new_name = "chunk_"+str(sorted_indexes[0])+old_name_ext
            # os.rename(old_name,new_name)        
            rename_file("images/"+old_name,new_name)
            
    
    image_filenames = []

    audio_filenames = []
    audios = []



    video_filenames = []



    # template = VideoFileClip('videos/template.mp4')
    # video_filenames.append('videos/intro.mp4')

    # Image Search
    for i, chunk in enumerate(chunks):
            if i in selected_chunks:
                continue
            keywords = keywords_extraction.get_keyword(chunk,context)
            print(keywords)
            # image_filename = img_search.google_image_search_api(keywords, i)
            r = 0
            api_json=img_search.multiple_image_search_google(keywords,i);
            final_url=semantic_search(api_json,keywords)
            while(1):
                if(r==len(final_url)):
                    download = generate_image(keywords, i)
                    print("filename",download)
                    image_filenames.append(download)
                    break
                print("final url")
                print(final_url)
                try:
                    download=img_search.multiple_image_search_google(query=keywords,chunk_number=i,url=final_url[r]['url'])
                    if(download==None):
                        r = r+1
                        continue
                except:
                    download = generate_image(keywords, i)
                print("print down",download)
                file_extension = os.path.splitext(download)[1]
                if file_extension is None or file_extension not in ['.png', '.jpg', '.jpeg', '.gif']:
                    os.remove("images/"+download)  # Remove the downloaded file
                    # img_search.multiple_image_search_google(keywords,i,limit=3,download_limit=1,url=None)
                    r = r+1
                    continue
                else:
                    print("filename",download)
                    image_filenames.append(download)
                    break


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
        print("imagefile",image_filenames[i])
        
        video_chunk = VideoFileClip(pan_effect(f"images/{image_filenames[i]}", audio_duration))

        textembed = textembed.set_duration(audio_duration)

        # final_video = CompositeVideoClip([video_chunk.set_audio(audios[i]),textembed])
        final_video = video_chunk.set_audio(audios[i])

        final_filename = f"videos/chunk_{i}.mp4"

        final_video.write_videofile(final_filename, fps=24)
        final_video.write_videofile(final_filename, fps=24, threads=4)
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
    final_subtitled_vid = addTranscription("videos/news_edicted_17.mp4")
    # final_subtitled_vid = "videos/news_edicted_17.mp4"
    link=upload_video(final_subtitled_vid)
    print(link)
    video=Videos()
    path = Path(final_subtitled_vid)
    id=0
    with path.open(mode="rb") as f:
        video.name=data_dict["title"]
        video.script=" ".join(chunks)
        video.video = File(f, name=path.name)
        video.link=link
        video.save()
        # id=video.id
    
    # video=Videos.objects.filter(id=id)
    
    # for i in image_filenames:
    #     img=Images()
    #     imglink=blob_file_upload(i)
    #     imglink=f"https://mentormeestorage.blob.core.windows.net/images/{imglink}"
    #     img.link=imglink
    #     img.video=video
    #     img.save()
        
        
        # with path.open(mode="rb") as f:
        #     img=Images()
        #     img.image=File(f, name=path.name)
        #     img.video=video
        #     img.save()
    
    # youtubeLink = yt_upload_video(final_subtitled_vid, data_dict["title"], data)
    # print(youtubeLink)
    Upload_video_on_one_click(link, data_dict["title"])
    send_mail(
    "New Video generated by EdictAI ",
    f"Title:{data_dict['title']} ,The link for video is {link}, To approve video upload visit thre link http://localhost:8000/videofeedback/{video.id}",
    "zxy40092@gmail.com",
    ["asif.mursal21@vit.edu","jadhavomkarb4u@gmail.com"],
    fail_silently=False,
    )
    return (link)

# edict_video("https://www.hindustantimes.com/world-news/g7-countries-to-unveil-new-sanctions-targeting-russia-over-ukraine-war-101684445984345.html")
