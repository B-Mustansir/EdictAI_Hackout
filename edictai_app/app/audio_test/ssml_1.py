import requests

headers = {
    'x-api-key': 'sec_wCTcXMskYQQsoBTahoAj9a2rBHwfXCG3',
    "Content-Type": "application/json",
}

prompt = '''

        '''

data = {
    'sourceId': "src_cha_6SeIkVuTSeKaSDZhF7lkJ",
    'messages': [
        {
            'role': "user",
            'content': f"{prompt}",
        }
    ]
}

response = requests.post(
    'https://api.chatpdf.com/v1/chats/message', headers=headers, json=data)

if response.status_code == 200:
    print('Result:', response.json()['content'])
else:
    print('Status:', response.status_code)
    print('Error:', response.text)


# Prompt 1
# Generate SSML for the following text to produce natural intonation, expressions, and audio cues according to the provided documentation:

# Text: ''' The Prime Minister, Shri Narendra Modi congratulated Muhammed Ajmal, Vithya Ramraj, Rajesh Ramesh and Venkatesan Subha for winning silver medal in  4x400m Mixed Relay event at the Asian Games. The Prime Minister posted on X : "What a splendid Silver for our Athletes in the 4x400m Mixed Relay event at the Asian Games. Congratulations on this spectacular win to Muhammed Ajmal, Vithya Ramraj, Rajesh Ramesh and Venkatesan Subha! Their teamwork was outstanding." '''

# Restrictions:
# - Follow SSML guidelines as per the provided documentation.
# - Ensure appropriate pitch, rate, and volume modulation for different expressions.
# - Insert natural pauses and breaks to mimic human speech.
# - Apply prosody and emphasis as necessary.