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
# speech_config = speechsdk.SpeechConfig(subscription="9dfa789ee50047d7944ad4c9d277e8f3", region="eastus")

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

ssml = """
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="en-US">
  <voice name="en-US-JennyNeural">
    <mstts:viseme type="redlips_front"/>
    Rainbow has seven colors: Red, orange, yellow, green, blue, indigo, and violet.
  </voice>
</speak>
""".format(speech_synthesis_voice_name)

# Synthesize the SSML
# print("SSML to synthesize: \r\n{}".format(ssml))
# speech_synthesis_result = speech_synthesizer.speak_ssml_async(ssml).get()

# speech_synthesis_stream = speechsdk.AudioDataStream(speech_synthesis_result)
# speech_synthesis_stream.save_to_wav_file("audios/audio_7.wav")

# if speech_synthesis_result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
#     print("SynthesizingAudioCompleted result")
# elif speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
#     cancellation_details = speech_synthesis_result.cancellation_details
#     print("Speech synthesis canceled: {}".format(cancellation_details.reason))
#     if cancellation_details.reason == speechsdk.CancellationReason.Error:
#         if cancellation_details.error_details:
#             print("Error details: {}".format(cancellation_details.error_details))
#             print("Did you set the speech resource key and region values?")

speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)

def viseme_cb(evt):
    print("Viseme event received: audio offset: {}ms, viseme id: {}.".format(
        evt.audio_offset / 10000, evt.viseme_id))
    animation = evt.animation
    print(animation)
    print('\n')

speech_synthesizer.viseme_received.connect(viseme_cb)

# If VisemeID is the only thing you want, you can also use `speak_text_async()`
result = speech_synthesizer.speak_ssml_async(ssml).get()
print(result)