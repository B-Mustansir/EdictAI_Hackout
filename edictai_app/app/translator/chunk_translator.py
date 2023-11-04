from azure.ai.translation.text import TextTranslationClient, TranslatorCredential
from azure.ai.translation.text.models import InputTextItem
from azure.core.exceptions import HttpResponseError

key = ""
endpoint = "https://api.cognitive.microsofttranslator.com/"
region = "centralindia"

credential = TranslatorCredential(key, region)
text_translator = TextTranslationClient(endpoint=endpoint, credential=credential)

def translate_chunk_gu(chunk):

    try:
        source_language = "en"
        # target_languages = ["hi-in", "ur", "pa", "gu", "mr", "kn", "ml", "ta", "or", "bn", "as"]
        target_languages = ["gu"]
        texty = chunk
        input_text_elements = [InputTextItem(text=texty)]

        response = text_translator.translate(content=input_text_elements, to=target_languages, from_parameter=source_language)

        for i, translation in enumerate(response[0].translations):
            print(f"{target_languages[i]}: {translation.text}")
            return(translation.text)

    except HttpResponseError as exception:
        print(f"Error Code: {exception.error.code}")
        print(f"Message: {exception.error.message}")
