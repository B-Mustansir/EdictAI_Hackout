import azure.cognitiveservices.speech as speechsdk
speech_config = speechsdk.SpeechConfig(subscription="", region="")

audio_config = speechsdk.AudioConfig(filename="audio_test/audios/audio_7.wav")
speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)

result = speech_recognizer.recognize_once_async().get()
print(result.text)

def recognizing_handler(e : speechsdk.SpeechRecognitionEventArgs) :
    if speechsdk.ResultReason.RecognizingSpeech == e.result.reason and len(e.result.text) > 0 :
        print("Recognized: {}".format(result.text))
        print("Offset in Ticks: {}".format(result.offset))
        print("Duration in Ticks: {}".format(result.duration))
    
speech_config.request_word_level_timestamps()