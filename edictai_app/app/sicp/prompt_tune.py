import requests
import re

def add_speak_and_voice_tags(input_xml):
    # Check if <speak> and <voice> tags are present
    speak_present = re.search(r'<speak[^>]*>', input_xml)
    voice_present = re.search(r'<voice[^>]*>', input_xml)

    if not speak_present and not voice_present:
        # If both are missing, add both tags
        input_xml = f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><voice name="en-US-JennyNeural">{input_xml}</voice></speak>'
    elif not speak_present:
        # If only <speak> is missing, add it
        input_xml = f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">{input_xml}</speak>'
    elif not voice_present:
        # If only <voice> is missing, add it within <speak>
        input_xml = re.sub(r'<speak[^>]*>', f'<speak><voice name="en-US-JennyNeural">', input_xml)
        input_xml = input_xml.replace('</speak>', '</voice></speak>')

    return input_xml

def extract_text_between_speak_tags(text):
    # Define a regular expression pattern to match text between <speak> and </speak> tags.
    pattern = r'<(.*?)</speak>'
    
    # Use the re.findall function to find all matches of the pattern in the input text.
    matches = re.findall(pattern, text, re.DOTALL)
    
    # Reconstruct the matches with the <speak> and </speak> tags.
    extracted_text = ['<' + match + '</speak>' for match in matches]
    
    return extracted_text[0]


def script(scripts):
    headers = {
        'x-api-key': '',
        "Content-Type": "application/json",
    }
# sec_biHK4lRS8jyN3wsUapmqj14EwAllrR1v
    data = {
        'referenceSources':False,
        'sourceId': "src_EcUO1OGaEaoo6g5RAIrCJ",
        # src_qEYxtsLMRoH7J6jwSeFMT
        
        'messages': [                {
                'role': "user",
                'content': f"""Don't extend the given text, just take the given text as input , no annytype of extension like no suggestions , or self made comments should be made.
                  Please ensure that the response addresses the following:
                Firstly Identify the sentiment of complete data given and as per that set the standard pitch, tones and lexicons as per that.

Interpretation of SSML Tags: Understand and process the SSML tags used in the input text, such as <speak>, <prosody>, <voice>, <break>, <emphasis>, <phoneme>, and <lexicon>.

Conveying Intended Speech Characteristics: If the SSML includes instructions for pitch, rate, volume, or emphasis adjustments, ensure the generated response reflects these speech characteristics appropriately.

Emotion and Expression: If the SSML conveys emotional or expressive elements, respond in a way that captures the intended emotion or expression.

Handling Entity Names: If the SSML highlights entity names or specific words using SSML tags, acknowledge and respond to them accordingly.

Proper Pronunciation: If the SSML includes pronunciation guides using <phoneme> or <sub> tags, pronounce the words correctly in the response.

Pause and Speech Rate: Respond with appropriate pacing and breaks if the SSML indicates specific speech rates and pauses.

Lexicon Customization: Consider any custom lexicons provided in the SSML to ensure proper pronunciation of specific terms or words.
"""
         },      
               
                                    {
                'role': "user",
                'content': f"""              
                (don't return any extra data of explanation or any comment just return ssml) Generate SSML by using more intonations and lexicons to enhance the audio to sound more humanly for :
                {scripts}
"""
         },
        ]
    }

    response_chat = requests.post(
        'https://api.chatpdf.com/v1/chats/message', headers=headers, json=data)
    # print(response_chat)

    # if response_chat.status_code == 200:
    #     print('Result:', response_chat.json()['content'])
    # else:
    #     print('Status:', response_chat.status_code)
    #     print('Error:', response_chat.text)
    # # final = extract_text_between_backticks( response_chat.json()['content'])
    # # print(final)
    
        # Check if <speak> and <voice> tags are present
    # Check if <speak> and <voice> tags are present
    
    final = add_speak_and_voice_tags(response_chat.json()['content'])
    final = extract_text_between_speak_tags(final)

    return final

# Example usage:

# text = input("Enter your text:\n")

def create_text_document(text, filename):
    try:
        with open(filename, 'w') as file:
            file.write(text)
        print(f"Text has been successfully saved to {filename}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")


output_filename = "ssml.txt"


# output_ssml = script(text)
# print(output_ssml)
# create_text_document(output_ssml, output_filename)


#   {
#                 'role': "user",
#                 'content': f"""Don't extend the given text, just take the given text as input , no annytype of extension like no suggestions , or self made comments should be made.
#   Follow the steps to convert text to ssml:
#                 0.Check if text is grammetically correct , if not them make it correct so that its an perfect input for "text to ssml" llm,Don't extend the text.
#                 1.Firstly Identify the sentiment of complete data given and as per that set the standard pitch, tones and lexicons as per that.
#                 2.Identify the lines or words where we have some expression and make them in the ssml tags.
#                 3.Identify entity , adjectives and add tags and attributes to them.
# Refer the examples given in pdf for reference and correct use of tags and attributes.
#   Don't use character by character interpretation untill yu are 100% sure.
# """
#          },