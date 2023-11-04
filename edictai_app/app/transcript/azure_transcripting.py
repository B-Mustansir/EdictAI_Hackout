import time
import logging
import azure.cognitiveservices.speech as speechsdk

class SpeechToTextProcessor:
    def __init__(self, audio_file_path, subscription_key, service_region, locale="en-US"):
        self.audio_file_path = audio_file_path
        self.subscription_key = subscription_key
        self.service_region = service_region
        self.locale = locale
        self.done = False
        self.transcript_display_list = []
        self.transcript_ITN_list = []
        self.confidence_list = []
        self.words = []
        self.speech_recognizer = None

    def parse_azure_result(self, evt):
        import json
        response = json.loads(evt.result.json)
        print(response)
        self.transcript_display_list.append(response['DisplayText'])
        confidence_list_temp = [item.get('Confidence') for item in response['NBest']]
        max_confidence_index = confidence_list_temp.index(max(confidence_list_temp))
        self.confidence_list.append(response['NBest'][max_confidence_index]['Confidence'])
        self.transcript_ITN_list.append(response['NBest'][max_confidence_index]['ITN'])
        self.words.extend(response['NBest'][max_confidence_index]['Words'])

    def stop_cb(self, evt):
        print('CLOSING on {}'.format(evt))
        self.speech_recognizer.stop_continuous_recognition()
        self.done = True

        print("Transcript Display List:")
        print(self.transcript_display_list)
        print("Confidence List:")
        print(self.confidence_list)
        print("Words:")
        print(self.words)

    def process(self):
        speech_config = speechsdk.SpeechConfig(subscription=self.subscription_key, region=self.service_region)
        audio_config = speechsdk.audio.AudioConfig(filename=self.audio_file_path)
        speech_config.request_word_level_timestamps()
        speech_config.speech_recognition_language = self.locale
        speech_config.output_format = speechsdk.OutputFormat(1)
        
        self.speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)
        self.speech_recognizer.recognized.connect(self.parse_azure_result)
        self.speech_recognizer.session_stopped.connect(self.stop_cb)
        
        self.speech_recognizer.start_continuous_recognition()
        while not self.done:
            time.sleep(.5)

# Example usage:
if __name__ == "__main__":
    audio_file_path = 'audios/chunk.wav'
    subscription_key = ''
    service_region = ''
    locale = "en-US"  # Change as per requirement

    speech_processor = SpeechToTextProcessor(audio_file_path, subscription_key, service_region, locale)
    speech_processor.process()
