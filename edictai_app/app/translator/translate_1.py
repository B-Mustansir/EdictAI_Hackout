from azure.ai.translation.text import TextTranslationClient, TranslatorCredential
from azure.ai.translation.text.models import InputTextItem
from azure.core.exceptions import HttpResponseError

key = ""
endpoint = "https://api.cognitive.microsofttranslator.com/"
region = "centralindia"

credential = TranslatorCredential(key, region)
text_translator = TextTranslationClient(endpoint=endpoint, credential=credential)

try:
    source_language = "en"
    target_languages = ["hi-in", "ur", "pa", "gu", "mr", "kn", "ml", "ta", "or", "bn", "as"]
    texty = '''

    Women MPs meet PM after passage of the Nari Shakti Vandan Adhiniyam Posted On: 22 SEP 2023 8:22AM by PIB Delhi Women Members of Parliament met Prime Minister to express their happiness over the passage of the historic Nari Shakti Vandan Adhiniyam last night. The Prime Minister posted on X : "Had the honor of meeting our dynamic women MPs who are absolutely thrilled at the passage of the Nari Shakti Vandan Adhiniyam. It is gladdening to see the torchbearers of change come together to celebrate the very legislation they have championed. With the passage of the Nari Shakti Vandan Adhiniyam, India stands at the cusp of a brighter, more inclusive future with our Nari Shakti being at the core of this transformation." Had the honor of meeting our dynamic women MPs who are absolutely thrilled at the passage of the Nari Shakti Vandan Adhiniyam. It is gladdening to see the torchbearers of change come together to celebrate the very legislation they have championed.

    '''
    input_text_elements = [InputTextItem(text=texty)]

    response = text_translator.translate(content=input_text_elements, to=target_languages, from_parameter=source_language)

    for i, translation in enumerate(response[0].translations):
        print(f"{target_languages[i]}: {translation.text}")

except HttpResponseError as exception:
    print(f"Error Code: {exception.error.code}")
    print(f"Message: {exception.error.message}")
