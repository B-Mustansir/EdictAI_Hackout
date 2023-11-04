import requests
def subject_json(scripts):
    headers = {
        'x-api-key': '',
        "Content-Type": "application/json",
    }

    data = {
        # 'referenceSources':True,
        'sourceId': "src_u2eiIYKqeemdNk6VShXZe",
        # f3 = src_151ckg3zdch65CjbJ1Emt
        # f1 = src_i9SUoSnlj8W5PhzyswOCr
        # f2 = src_0nAypZnUGcR547iSsfvWv
        # prompt = 
        # src_rx2vNl3PfHERGFobPWP3c
        
# src_151ckg3zdch65CjbJ1Emt
        'messages': [
                        {
                'role': "user",
                'content': """
     You are tasked with creating a JSON format based on the provided complete chunk of text (referred to as "chunk"). There will be no separate "mini chunk" provided. The Main Subject and sub-Subject should be directly extracted from the given complete chunk without any modification or alteration.
Also return all key phrases, entity names, person names which are part of sub-subject.


Your task is to extract the specified Main Subject and Sub-Subject directly from this chunk and structure them in a JSON format. Additionally, suggest visual content ideas that complement the subjects as specified.

Please fill in the following JSON format with the extracted subjects and visual content suggestions:

json formate:
{
    "Main Subject": ,
    "Main Visuals": ,
    "Sub-Subject": ,
    "Sub Visuals": ,
    "key phrase or entity": ,
}
If there is no highlighting phrase, or entity the don't write it .
Ensure that the Main Subject and Sub-Subject are exact excerpts from the given complete chunk as specified.
            .""",
            },
                       {
                'role': "user",
                'content': f"""Chunk is : {scripts}.
""",
            },


        ]
    }

    response_chat = requests.post(
        'https://api.chatpdf.com/v1/chats/message', headers=headers, json=data)

    # if response_chat.status_code == 200:
    #     print('Result:', response_chat.json()['content'])
    # else:
    #     print('Status:', response_chat.status_code)
    #     print('Error:', response_chat.text)

    # print(response_chat.json())
    return  response_chat.json()['content']

# chunk = "" "The Vivad se Vishwas II (Contractual Disputes) Scheme, administered by the Department of Expenditure under the Ministry of Finance, Government of India, provides a comprehensive framework for calculating the settlement amount to be offered to contractors"""
# ans = script(chunk)
# print(ans)