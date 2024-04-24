from keybert import KeyBERT
import openai 
import json
# from .env import *
from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential
import google.generativeai as genai
with open('config.json', 'r') as c:
    config_data = json.load(c)
    azure_language_resource_api_key = config_data['azure_language_resource_api_key'] 
    azure_language_resource_endpoint = config_data['azure_language_resource_endpoint'] 

def authenticate_client(key, endpoint):
    ta_credential = AzureKeyCredential(key)
    text_analytics_client = TextAnalyticsClient(endpoint=endpoint, credential=ta_credential)
    return text_analytics_client

def keywords_extraction(sentence, key=azure_language_resource_api_key, endpoint=azure_language_resource_endpoint):
    client = authenticate_client(key, endpoint)

    try:
        documents = [sentence]

        response = client.extract_key_phrases(documents=documents)[0]

        if not response.is_error:
            # Return the top key phrase
            return response.key_phrases[0] if response.key_phrases else None
        else:
            print(response.id, response.error)
            return None

    except Exception as err:
        print("Encountered exception. {}".format(err))
        return None

# def keywords_extraction(sentence):
#     kw_model = KeyBERT()
#     keywords = kw_model.extract_keywords(sentence,keyphrase_ngram_range=(1, 2),top_n=1)
#     return(keywords[0][0])

# def keywords_extraction(sentence):
#     openai.organization = generate_script_openai_organization
#     openai.api_key = generate_script_openai_api_key
#     # print(openai.Model.list())

#     completion = openai.ChatCompletion.create(
#     model="gpt-3.5-turbo",
#     messages=[
#         {"role": "system", "content": "I want you to act as a Keyword extractor. I will provide you with a sentence from news article and you will generate keywords from that sentence to search image based on these keywords"},
#         {"role": "user", "content": f'''
#         Given the following sentence, please provide a concise query (1-2 words) that can be used to search for relevant images on Google.
#         Sentence: {sentence}
#         Note: Output the query only dont write anything else. Keep the query as simple as possible so that image could be searched easily. 
#         '''}
#     ]
#     )
#     print(completion.choices[0].message.content)
#     return (completion.choices[0].message.content)

# if __name__ == "__main__":

#     sentence = "In a remarkable display of bravery and expertise, the Indian Naval Ship Sumitra has successfully carried out its second anti-piracy operation off the coast of Somalia."
#     result = keywords_extraction(sentence)
#     print(result)




# def get_keyword(chunk, aim):
#     genai.configure(api_key="")

#     # Set up the model
#     generation_config = {
#         "temperature": 0.9,
#         "top_p": 1,
#         "top_k": 1,
#         "max_output_tokens": 2048,
#     }
#     model = genai.GenerativeModel(model_name="gemini-pro",
#                                   generation_config=generation_config,
#                                   )  # assuming safety_settings is defined

#     prompt_parts = [
#         f"""below are the script chunk of a video, The context and aim of video is {aim},
#         provide us keywords which can be important entity corresponding to the chunk keeping context in mind.
#         Also, keywords can be human entity, place names, things, overall it should a visual description of chunk in 2 words.
#         Chunks is:{chunk}
#         """,
#     ]

#     response = model.generate_content(prompt_parts)
#     print(response.text)
#     return response.text

# # Rest of your code...

# print(get_keyword("This festival reflects the priorities of today's India, with the goal of empowering the youth and utilizing the nation's resources more effectively.","Prime Minister's address on skill development and India's economic growth"))
from openai import OpenAI

def get_keyword(chunk, aim):
    # Ask ChatGPT to generate a script in JSON format

    
    shorts_prompt = f"""below are the script chunk of a video, The context and aim of video is {aim}.
        You have to provide us keywords which can be important entity corresponding to the chunk keeping strictly context in mind.
        Also, keywords can be human entity, place names, things, overall it should a visual description of chunk which can help us to get a releavant image for that chunk and complete video in 3-4 words.       
        Chunks is:{chunk}
    """


    client = OpenAI(
        api_key="", 
    )
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a image query generator for a chunk"},
            {"role": "user", "content": shorts_prompt},
        ],
        functions=[
            {
                "name": "keyword_gen",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "keyword": {"type": "string", "description": "relevant image search query in 3-4 words for given chunk. You have to provide us keywords which can be important entity corresponding to the chunk keeping strictly context in mind."}
                    },
                    "required": ["keyword"]
                }
            }
        ],
    )

 
    generated_text = completion.choices[0].message.function_call.arguments
    output = json.loads(generated_text)
    return output['keyword']


# keyword = get_keyword("This festival reflects the priorities of today's India, with the goal of empowering the youth and utilizing the nation's resources more effectively.", "Prime Minister's address on skill development and India's economic growth")
# print(keyword)