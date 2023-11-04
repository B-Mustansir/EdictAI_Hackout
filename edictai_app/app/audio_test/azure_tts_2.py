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
speech_config = speechsdk.SpeechConfig(subscription="21186bfc40b44f23bdd5d7afe3f19552", region="centralindia")

# Required for WordBoundary event sentences.
speech_config.set_property(property_id=speechsdk.PropertyId.SpeechServiceResponse_RequestSentenceBoundary, value='true')

audio_config = speechsdk.audio.AudioOutputConfig(use_default_speaker=True)
speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=None)

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

ssml = '''
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-IN">
  <voice name="{}">
    <prosody rate="+12%" pitch="medium" contour="(0%,+10%) (50%,+20%) (100%,+10%)" volume="medium">
      Breaking news! The Prime Minister, Shri Narendra Modi <break time="200ms"/> congratulated Muhammed Ajmal, Vithya Ramraj, Rajesh Ramesh and Venkatesan Subha for winning a silver medal in the 4x400m Mixed Relay event at the Asian Games. <break time="300ms"/> 
      <emphasis level="strong">What a splendid Silver for our Athletes in the 4x400m Mixed Relay event at the Asian Games!</emphasis> <break time="300ms"/> 
      <emphasis level="moderate">Congratulations on this spectacular win to Muhammed Ajmal, Vithya Ramraj, Rajesh Ramesh and Venkatesan Subha!</emphasis> <break time="300ms"/> 
      <emphasis level="moderate">Their teamwork was outstanding.</emphasis>
    </prosody>
  </voice>
</speak>
'''.format(speech_synthesis_voice_name)

# ssml = """<speak version='1.0' xml:lang='en-US' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='http://www.w3.org/2001/mstts'>
#     <voice name='{}'>
#         <mstts:viseme type='redlips_front'/>
#         The rainbow has seven colors: <bookmark mark='colors_list_begin'/>Red, orange, yellow, green, blue, indigo, and violet.<bookmark mark='colors_list_end'/>.
#     </voice>
# </speak>""".format(speech_synthesis_voice_name)

# Synthesize the SSML
print("SSML to synthesize: \r\n{}".format(ssml))
speech_synthesis_result = speech_synthesizer.speak_ssml_async(ssml).get()

speech_synthesis_stream = speechsdk.AudioDataStream(speech_synthesis_result)
speech_synthesis_stream.save_to_wav_file("audios/audio_7.wav")

if speech_synthesis_result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
    print("SynthesizingAudioCompleted result")
elif speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
    cancellation_details = speech_synthesis_result.cancellation_details
    print("Speech synthesis canceled: {}".format(cancellation_details.reason))
    if cancellation_details.reason == speechsdk.CancellationReason.Error:
        if cancellation_details.error_details:
            print("Error details: {}".format(cancellation_details.error_details))
            print("Did you set the speech resource key and region values?")

# https://www.chatpdf.com/c/6SeIkVuTSeKaSDZhF7lkJ