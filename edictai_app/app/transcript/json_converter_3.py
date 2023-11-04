import time
import logging
import azure.cognitiveservices.speech as speechsdk

# Set up logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.DEBUG)

class SpeechToTextProcessor:
    def __init__(self):
        pass

    def process(self):
        apnaJson = []
        words = []
        output = []

        audio_filepath = 'audios/chunk.wav'  # Replace with your audio file path
        locale = "en-US"  # Change as per requirement

        logger.debug(audio_filepath)
        audio_config = speechsdk.audio.AudioConfig(filename=audio_filepath)
        speech_config = speechsdk.SpeechConfig(subscription="", region="")
        speech_config.request_word_level_timestamps()
        speech_config.speech_recognition_language = locale
        speech_config.output_format = speechsdk.OutputFormat(1)

        # Creates a recognizer with the given settings
        speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)

        # Variable to monitor status
        done = False

        # Service callback for recognition text
        def parse_azure_result(evt):
            import json
            response = json.loads(evt.result.json)
            apnaJson.append(response)
            logger.debug(evt)

        # Service callback that stops continuous recognition upon receiving an event `evt`
        def stop_cb(evt):
            print('CLOSING on {}'.format(evt))
            speech_recognizer.stop_continuous_recognition()
            nonlocal done
            done = True

        # Connect callbacks to the events fired by the speech recognizer
        speech_recognizer.recognizing.connect(lambda evt: logger.debug('RECOGNIZING: {}'.format(evt)))
        speech_recognizer.recognized.connect(parse_azure_result)
        speech_recognizer.session_started.connect(lambda evt: logger.debug('SESSION STARTED: {}'.format(evt)))
        speech_recognizer.session_stopped.connect(lambda evt: logger.debug('SESSION STOPPED {}'.format(evt)))
        speech_recognizer.canceled.connect(lambda evt: logger.debug('CANCELED {}'.format(evt)))
        # Stop continuous recognition on either session stopped or canceled events
        speech_recognizer.session_stopped.connect(stop_cb)
        speech_recognizer.canceled.connect(stop_cb)

        # Start continuous speech recognition
        logger.debug("Initiating speech to text")
        speech_recognizer.start_continuous_recognition()
        while not done:
            time.sleep(.5)

        # Process apnaJson to create 'output' and 'words'
        for jid in apnaJson:
            output.append({'chunk': jid['DisplayText'], 'start': (jid['Offset'] / 10000000), 'end': ((jid['Duration'] + jid['Offset']) / 10000000)})

        for jid in apnaJson:
            for chunk_words in jid['NBest'][0]['Words']:
                words.append({'word': chunk_words['Word'], 'start': chunk_words['Offset'] / 10000000, 'end': ((chunk_words['Duration'] + chunk_words['Offset']) / 10000000)})

        print(words)

if __name__ == "__main__":
    processor = SpeechToTextProcessor()
    processor.process()
