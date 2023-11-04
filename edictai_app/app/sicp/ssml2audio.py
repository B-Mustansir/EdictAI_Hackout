import os
import azure.cognitiveservices.speech as speechsdk

def speech_synthesizer_bookmark_reached_cb(evt: speechsdk.SessionEventArgs):
    print('BookmarkReached event:')
    print('\tAudioOffset: {}ms'.format((evt.audio_offset + 5000) / 10000))
    print('\tText: {}'.format(evt.text))

def speech_synthesizer_synthesis_canceled_cb(evt: speechsdk.SessionEventArgs):
    print('SynthesisCanceled event')

def speech_synthesizer_synthesis_completed_cb(evt: speechsdk.SessionEventArgs):
    print('SynthesisCompleted event:')
    print('\tAudioData: {} bytes'.format(len(evt.result.audio_data)))
    print('\tAudioDuration: {}'.format(evt.result.audio_duration))

def speech_synthesizer_synthesis_started_cb(evt: speechsdk.SessionEventArgs):
    print('SynthesisStarted event')

def speech_synthesizer_synthesizing_cb(evt: speechsdk.SessionEventArgs):
    print('Synthesizing event:')
    print('\tAudioData: {} bytes'.format(len(evt.result.audio_data)))

def speech_synthesizer_viseme_received_cb(evt: speechsdk.SessionEventArgs):
    print('VisemeReceived event:')
    print('\tAudioOffset: {}ms'.format((evt.audio_offset + 5000) / 10000))
    print('\tVisemeId: {}'.format(evt.viseme_id))

def speech_synthesizer_word_boundary_cb(evt: speechsdk.SessionEventArgs):
    print('WordBoundary event:')
    print('\tBoundaryType: {}'.format(evt.boundary_type))
    print('\tAudioOffset: {}ms'.format((evt.audio_offset + 5000) / 10000))
    print('\tDuration: {}'.format(evt.duration))
    print('\tText: {}'.format(evt.text))
    print('\tTextOffset: {}'.format(evt.text_offset))
    print('\tWordLength: {}'.format(evt.word_length))

# This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
speech_config = speechsdk.SpeechConfig(subscription="", region="centralindia")

# Required for WordBoundary event sentences.
speech_config.set_property(property_id=speechsdk.PropertyId.SpeechServiceResponse_RequestSentenceBoundary, value='true')

audio_config = speechsdk.audio.AudioOutputConfig(use_default_speaker=True)
speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)

# Subscribe to events
speech_synthesizer.bookmark_reached.connect(speech_synthesizer_bookmark_reached_cb)
speech_synthesizer.synthesis_canceled.connect(speech_synthesizer_synthesis_canceled_cb)
speech_synthesizer.synthesis_completed.connect(speech_synthesizer_synthesis_completed_cb)
speech_synthesizer.synthesis_started.connect(speech_synthesizer_synthesis_started_cb)
speech_synthesizer.synthesizing.connect(speech_synthesizer_synthesizing_cb)
speech_synthesizer.viseme_received.connect(speech_synthesizer_viseme_received_cb)
speech_synthesizer.synthesis_word_boundary.connect(speech_synthesizer_word_boundary_cb)

# The language of the voice that speaks.
speech_synthesis_voice_name='en-IN-NeerjaNeural'

# ssml = f"""<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="mr-IN">
#   <voice name="mr-IN-AarohiNeural">
#     <prosody rate="medium">
#       <p>प्रधानमंत्री श्री नरेंद्र मोदी यांनी आज न्यू डेल्हीतील नॅशनल गॅलरी ऑफ मॉडर्न आर्टमध्ये त्यांना दिलेल्या विविध उपहारांचा एक विस्तृत प्रदर्शन दाखवण्याबद्दल पोस्ट केला.</p>
#       <p>प्रदर्शनात जपान, रशिया आणि फ्रांस या जगातील विविध देशांपासून वस्तूंची प्रदर्शन केली जाते आणि सोनेरी टाबला आणि क्रिस्टल गणेश मूर्ती यांसारख्या अनोख्या टुकड्या दाखवल्या जातात.</p>
#   </prosody>
#   </voice>
# </speak>"""
from prompt_tune import script
import re
def remove_punctuation(text):
    # Use a regular expression to remove all punctuation and signs
    cleaned_text = re.sub(r'[^\w\s]', '', text)
    return cleaned_text

text = input("Enter your text:\n")
cleaned_text = remove_punctuation(text)
# print(cleaned_text)
ssml = script(cleaned_text)

def ssml_to_audio(ssml):
    # Synthesize the SSML
    print("SSML to synthesize: \r\n{}".format(ssml))
    speech_synthesis_result = speech_synthesizer.speak_ssml_async(ssml).get()
    stream = speechsdk.AudioDataStream(speech_synthesis_result)
    stream.save_to_wav_file("audio_1.wav")

    if speech_synthesis_result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        print("SynthesizingAudioCompleted result")
    elif speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
        cancellation_details = speech_synthesis_result.cancellation_details
        print("Speech synthesis canceled: {}".format(cancellation_details.reason))
        if cancellation_details.reason == speechsdk.CancellationReason.Error:
            if cancellation_details.error_details:
                print("Error details: {}".format(cancellation_details.error_details))
                print("Did you set the speech resource key and region values?")

# ssml ="""<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><voice name="en-US-JennyNeural">
#   To address this issue, the paper introduces a <say-as interpret-as="verbatim">closedform</say-as> solution derived using a piecewise approximation technique.
# </voice></speak>"""
print(ssml)
ssml_to_audio(ssml)


