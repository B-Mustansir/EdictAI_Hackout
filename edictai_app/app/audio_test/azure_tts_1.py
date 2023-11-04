import os
import azure.cognitiveservices.speech as speechsdk

# This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
speech_config = speechsdk.SpeechConfig(subscription="406be9b41328446a8b42f2819e2ccbfa", region="centralindia")
audio_config = speechsdk.audio.AudioOutputConfig(use_default_speaker=True)

# The language of the voice that speaks.
speech_config.speech_synthesis_voice_name='en-US-JennyNeural'

speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=None)

# Get text from the console and synthesize to the default speaker.
# print("Enter some text that you want to speak >")
# text = input()
text = '''
        By working together, the Ministry of Health and Family Welfare, the Ministry of Housing and Urban Affairs and National /State teams can create a synergy which will lead to more sustainable, healthy and safe urban environment for urban population.
        '''

speech_synthesis_result = speech_synthesizer.speak_text_async(text).get()
speech_synthesis_stream = speechsdk.AudioDataStream(speech_synthesis_result)
speech_synthesis_stream.save_to_wav_file("audios/basic_audio_1.wav")

if speech_synthesis_result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
    print("Speech synthesized for text [{}]".format(text))
elif speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
    cancellation_details = speech_synthesis_result.cancellation_details
    print("Speech synthesis canceled: {}".format(cancellation_details.reason))
    if cancellation_details.reason == speechsdk.CancellationReason.Error:
        if cancellation_details.error_details:
            print("Error details: {}".format(cancellation_details.error_details))
            print("Did you set the speech resource key and region values?")