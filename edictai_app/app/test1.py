import os
import azure.cognitiveservices.speech as speechsdk
from .env import * 

def recognize_from_microphone():
    speech_config = speechsdk.SpeechConfig(subscription=tes1_api_key, region="centralindia")
    speech_config.speech_recognition_language="en-US"
    audio_config = speechsdk.AudioConfig(filename="audios/chunk.wav")
    speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)

    result = speech_recognizer.recognize_once_async().get()