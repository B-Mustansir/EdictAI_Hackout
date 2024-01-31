import json
import os
import time
import logging
import azure.cognitiveservices.speech as speechsdk
import subprocess
import google.generativeai as genai
import ast
from faster_whisper import WhisperModel

def gemini(chunk_list):

    genai.configure(api_key="AIzaSyBT1VMTnJFfXuifJJBtmzNfMVdrmdpECHc")
    model = genai.GenerativeModel('gemini-pro')
    prompt = f""" 
Task:
Given a list of chunks, {chunk_list}, your task is to modify each chunk by wrapping the i.mportant words inside HTML tags. Use tags like <b></b>, <strong></strong>, <i></i>, <u></u. Provide the modified list of chunks as the output without any additional details. Make sure include every string inside the list in double quotes "".
    """ 
    print("Processing")
    response = model.generate_content([prompt])
    text = response.text
    text = text.replace('`', '')
    text = text.replace('json', '')
    return text


def create_chunk_lists(subtitle_data, chunk_limit=5):
    chunk_lists = []
    current_chunk_list = []

    for chunk in subtitle_data:
        current_chunk_list.append(chunk)

        if len(current_chunk_list) == chunk_limit:
            chunk_lists.append(current_chunk_list)
            current_chunk_list = []

    if current_chunk_list:
        chunk_lists.append(current_chunk_list)

    return chunk_lists


def remove_file(file_path):
    try:
        os.remove(file_path)
        print(f"File {file_path} successfully removed.")
    except FileNotFoundError:
        print(f"Error: The file {file_path} was not found.")
    except PermissionError:
        print(f"Error: Permission denied. Unable to remove {file_path}.")
    except Exception as e:
        print(f"An error occurred: {e}")


def runCommand(command): 
    subprocess.run(command, shell=True)


def addSubtitles(video_path, subtitles):
    command = f'''ffmpeg -i {video_path} -vf subtitles={subtitles} final_output.mp4'''
    runCommand(command)


def extract_audio(video_path):
    output_path = "assets/input.wav"
    ffmpeg_command = [
        'ffmpeg',
        '-i', video_path,
        '-vn',
        '-acodec', 'pcm_s16le',
        '-ar', '44100',
        '-ac', '1',
        output_path
    ]
    subprocess.run(ffmpeg_command)


def saveJson(output, input):
    with open(output, 'w') as json_file:
        json.dump(input, json_file, indent=2)
    print(f"List saved to {output}")


def text_transcription(audio_path):
    model_size = "small"
    model = WhisperModel(model_size, device="cpu", compute_type="int8")
    segments, info = model.transcribe(audio_path, word_timestamps=True)
    segments = list(segments)  # The transcription will actually run here.
    wordlevel_info = []
    for segment in segments:
        for word in segment.words:
            wordlevel_info.append({'word':word.word,'start':word.start,'end':word.end})
    return wordlevel_info


def convert_to_srt(subtitle_list, output_file):
    srt_content = ""

    for index, subtitle in enumerate(subtitle_list, start=1):
        try:
            start_time = format_time(subtitle["start"])
            end_time = format_time(subtitle["end"])

            srt_content += f"{index}\n{start_time} --> {end_time}\n{subtitle['chunk']}\n\n"
        except:
            print(subtitle_list)
            continue
    with open(output_file, "w") as srt_file:
        srt_file.write(srt_content)


def format_time(seconds):
    hours, remainder = divmod(seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    milliseconds = int((seconds % 1) * 1000)
    return f"{int(hours):02d}:{int(minutes):02d}:{int(seconds):02d},{milliseconds:03d}"


def wordToChunk(wordlevel_info):
    def split_text_into_lines(data):
        MaxChars = 20
        MaxDuration = 1.5
        MaxGap = 0.5

        subtitles = []
        line = []
        line_duration = 0
        line_chars = 0

        for idx, word_data in enumerate(data):
            word = word_data["word"]
            start = word_data["start"]
            end = word_data["end"]

            line.append(word_data)
            line_duration += end - start

            temp = " ".join(item["word"] for item in line)

            new_line_chars = len(temp)
            duration_exceeded = line_duration > MaxDuration
            chars_exceeded = new_line_chars > MaxChars

            if idx > 0:
                gap = word_data['start'] - data[idx-1]['end']
                maxgap_exceeded = gap > MaxGap
            else:
                maxgap_exceeded = False

            if duration_exceeded or chars_exceeded or maxgap_exceeded:
                if line:
                    subtitle_line = {
                        "chunk": " ".join(item["word"] for item in line),
                        "start": line[0]["start"],
                        "end": line[-1]["end"]
                    }
                    subtitles.append(subtitle_line)
                    line = []
                    line_duration = 0
                    line_chars = 0

        if line:
            subtitle_line = {
                "chunk": " ".join(item["word"] for item in line),
                "start": line[0]["start"],
                "end": line[-1]["end"]
            }
            subtitles.append(subtitle_line)

        return subtitles

    linelevel_subtitles = split_text_into_lines(wordlevel_info)
    return linelevel_subtitles


def addTranscription(video_path):
    # video_path = "subtle.mp4"
    extract_audio(video_path)
    words = text_transcription("assets/input.wav")
    chunks = wordToChunk(words)
    chunk_lists = create_chunk_lists(chunks)
    chunks_modified = []
    for chunk_list in chunk_lists:
        chunks = gemini(chunk_list)
        newlist = ast.literal_eval(chunks)
        chunks_modified.extend(newlist)
    transcript = chunks_modified
    print(transcript)
    srtfile = "subtitle.srt"
    convert_to_srt(transcript, srtfile)
    addSubtitles(video_path, srtfile)
    remove_file("assets/input.wav")
    return "final_output.mp4"

# addTranscription("news_edicted_17.mp4")