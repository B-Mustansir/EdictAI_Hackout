# Create chunks 
import json
chunks_list = []
from Keyword_json import subject_json
import os
import openai
openai.organization = ""
openai.api_key = ""

news = '''
The Prime Minister, Shri Narendra Modi congratulated Raunak Sadhwani on the remarkable victory at the FIDE World Junior Rapid Chess Championship 2023. The Prime Minister posted on X; “Congratulations to @sadhwani2005 on the remarkable victory at the FIDE World Junior Rapid Chess Championship 2023! His strategic brilliance and skills have left the world in awe and made the nation proud. May he keep inspiring the youth of our country with his exceptional achievements. Best wishes for his future endeavours.”
'''

# completion = openai.ChatCompletion.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "system", "content": "I want you to act as a Newsreader. I will provide you with a news article and you will create a script for to make a video out of it."},
#     {"role": "user", "content": '''
#     Ensure that the script maintains an authentic and unbiased tone. Consider the video length to be 60-90 seconds. Our goal is to inform viewers about the official news from the government, and engage the viewers to see news in a visual format. 
#     Please break the script into meaningful chunks with independent meaning.
#     Each chunk containing about 15-20 words approx.
#     Separate these chunks using "<m>" in the output.  
#     Note: Don't add any instructions or text in the output. Give the output in <m> tags only. 
#      Think each chunk as an scene of a video .
#     Chunks must strictly follow any of below rules:
#     1.Chunk must individually contain the names, entities, or some important keywords in it.
#     2.There should be no chunk , which individually doesn't have any words which can contextually represesnt the complete news 
#     3.Either the chunk should represent 1 subject contextually of news or 2 subjects in which one will be main and second will be sub subject or temporary .
#     '''}, 
#         {"role": "user", "content": f'''
#     News article: {news}
#     '''}
#   ]
# )
# print(completion.choices[0].message.content)
# print()

# # Separating chunks
# import re
# chunks = completion.choices[0].message.content
# sentences = re.split(r"<m>|\\n|\n|</m>",chunks)

# sentences = [sentence.strip() for sentence in sentences]
# sentences = [sentence for sentence in sentences if sentence]

# print(sentences)
# print()
sentences = ['The Prime Minister, Shri Narendra Modi congratulated Raunak Sadhwani on the remarkable victory at the FIDE World Junior Rapid Chess Championship 2023.', 'The Prime Minister posted on X; “Congratulations to @sadhwani2005 on the remarkable victory at the FIDE World Junior Rapid Chess Championship 2023!', 'His strategic brilliance and skills have left the world in awe and made the nation proud.', 'May he keep inspiring the youth of our country with his exceptional achievements.', 'Best wishes for his future endeavors.”']

# # Creating keywords for sentences
# from keybert import KeyBERT

for sentence in sentences:
#     kw_model = KeyBERT()
#     extracted_keywords = kw_model.extract_keywords(sentence,keyphrase_ngram_range=(1, 1))
    keywords = []
#     if len(extracted_keywords)>3:
#         extracted_keywords = extracted_keywords[0:3]
#     for key in extracted_keywords: 
#         keywords.append(key[0])
#     print(keywords)
#     response = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",
#         temperature=0.25,
#         messages=[
#             {
#                 "role": "system",
#                 "content": '''
#                     You are tasked with creating a JSON format based on the provided complete chunk of text (referred to as "chunk"). There will be no separate "mini chunk" provided. The Main Subject and sub-Subject should be directly extracted from the given complete chunk without any modification or alteration.
# Also return all key phrases, entity names, person names which are part of sub-subject.


# Your task is to extract the specified Main Subject and Sub-Subject directly from this chunk and structure them in a JSON format. Additionally, suggest visual content ideas that complement the subjects as specified.

# Please fill in the following JSON format with the extracted subjects and visual content suggestions:

# json formate:
# {
#     "Main Subject": ,
#     "Main Visuals": ,
#     "Sub-Subject": ,
#     "Sub Visuals": ,
#     "key phrase or entity": ,
# }
# If there is no highlighting phrase, or entity the don't write it .
# Ensure that the Main Subject and Sub-Subject are exact excerpts from the given complete chunk as specified.
#                 '''
#             },
#             {
#                 "role": "user",
#                 "content": sentence
#             }
#         ]
#     )
   
    # keywords_str = json.loads(response['choices'][0]['message']['content'])
    output =  subject_json(sentence)
    print(output)
    start_index = output.index('{')
    end_index = output.rindex('}')
    data = output[start_index:end_index+1]
    keywords_str = json.loads(data)
    print(keywords_str.get('key phrase or entity'))
    for i in keywords_str.get('key phrase or entity').split(','):
        if i!=None and i!='':
            keywords.append(i)
    if keywords_str.get('Sub-Subject')!=None and keywords_str.get('Sub-Subject')!='':
        keywords.append(keywords_str.get('Sub-Subject'))
    print(keywords)

    # keywords_str = response['choices'][0]['message']['content']
    # print (keywords_str)

    chunks_list.append({'sentence':sentence, 'keywords': keywords})

print()
print(chunks_list)
print()

import os
import azure.cognitiveservices.speech as speechsdk
speech_config = speechsdk.SpeechConfig(subscription="", region="")
audio_config = speechsdk.audio.AudioOutputConfig(use_default_speaker=True)
speech_config.speech_synthesis_voice_name='en-US-JennyNeural'
speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=None)

combined_chunks = " ".join(sentences)

speech_synthesis_result = speech_synthesizer.speak_text_async(combined_chunks).get()
speech_synthesis_stream = speechsdk.AudioDataStream(speech_synthesis_result)
speech_synthesis_stream.save_to_wav_file("chunk.wav")

if speech_synthesis_result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
    print("Speech synthesized for text [{}]".format(news))
elif speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
    cancellation_details = speech_synthesis_result.cancellation_details
    print("Speech synthesis canceled: {}".format(cancellation_details.reason))
    if cancellation_details.reason == speechsdk.CancellationReason.Error:
        if cancellation_details.error_details:
            print("Error details: {}".format(cancellation_details.error_details))
            print("Did you set the speech resource key and region values?")

from faster_whisper import WhisperModel
model_size = "small"
model = WhisperModel(model_size)

segments, info = model.transcribe("chunk.wav", word_timestamps=True)
segments = list(segments)
for segment in segments:
    for word in segment.words:
        print("[%.2fs -> %.2fs] %s" % (word.start, word.end, word.word))

wordlevel_info = []

for segment in segments:
    for word in segment.words:
      wordlevel_info.append({'word':word.word,'start':word.start,'end':word.end})

print(wordlevel_info)

# JSON Converter 

# output = []
# item={'chunk':chunks_list[0]['sentence'],'start_time':wordlevel_info[0]['start'],'end_time':wordlevel_info[0+len(chunks_list[0]['sentence'].split())]['end'],'keywords':chunks_list[0]['keywords']}
# print(item)
# # print(wordlevel_info[len(chunks_list[0]['sentence'])]['end'])

# for i in range(0,len(chunks_list[0]['sentence'].split())):
#     if(wordlevel_info[i]['word']==' Good'):
#         output.append(wordlevel_info[i]['word'])
#     else:continue

output = []
currentStartWord = 0
for i in chunks_list:
    keywordArray = []
    for j in i['keywords']:
        for k in range(currentStartWord, currentStartWord+len(i['sentence'].split())):
            j_list = j.split()
            print()
            print(j_list)
            if (wordlevel_info[k]['word'].strip().lower() == j_list[0].strip().lower()):
                key_phrase_start_time = wordlevel_info[k]['start']
            if (wordlevel_info[k]['word'].strip().lower() == j_list[-1].strip().lower()):
                key_phrase_end_time = wordlevel_info[k]['end']
                keywordArray.append({'word':j,'start_time':key_phrase_start_time,'end_time':key_phrase_end_time})

    print(wordlevel_info[currentStartWord]['start'])
    item = {'chunk': i['sentence'], 'start_time': wordlevel_info[currentStartWord]['start'],
            'end_time': wordlevel_info[currentStartWord+len(i['sentence'].split())-1]['end'], 'keywords': keywordArray}
    output.append(item)
    print(currentStartWord)
    currentStartWord = currentStartWord+len(i['sentence'].split())

print(output)


# output = []
# currentStartWord = 0
# for i in chunks_list:
#     keywordArray = []
#     sentence_words = i['sentence'].split()  # Split sentence into an array of words
#     for j in i['keywords']:
#         if j:
#             keyword_words = j.split()
#         else:
#             keyword_words = j 
#         if all(word in sentence_words for word in keyword_words):  # Check if all keyword words are in sentence words
#             start_index = sentence_words.index(keyword_words[0])  # Get start index of first keyword word
#             end_index = sentence_words.index(keyword_words[-1])  # Get end index of last keyword word
#             keywordArray.append({'word': j, 'start_time': wordlevel_info[currentStartWord+start_index]['start'], 'end_time': wordlevel_info[currentStartWord+end_index]['end']})

#     item = {'chunk': i['sentence'], 'start_time': wordlevel_info[currentStartWord]['start'],
#             'end_time': wordlevel_info[currentStartWord+len(sentence_words)-1]['end'], 'keywords': keywordArray}
#     output.append(item)
#     currentStartWord = currentStartWord+len(sentence_words)
