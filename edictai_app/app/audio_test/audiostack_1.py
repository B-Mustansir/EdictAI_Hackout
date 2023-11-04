import audiostack
import os

audiostack.api_key = "0fcc523021dc458286fd125e0d92eaae"

script = audiostack.Content.Script.create(
  scriptText='''
  A function was organised in the Central Hall today to commemorate the rich legacy of the Parliament of India as the Members
  came together to bid adieu to the historical building before stepping into the New Building of Parliament.
  In his address to MPs in the Central Hall, the Vice-President described this transition as a journey from 'Tryst with Destiny
  to 'Tryst with Modernity' and called upon all Members to join the historic journey towards Bharat @2047.
  The Vice-President noted that the hallowed precincts of the Parliament building have witnessed many milestones in its seven
  decade long journey which continue to resonate with the aspirations of over a billion hearts.
  '''
)
  
print("Response from creating script", script.response)

scriptId = script.scriptId
print(scriptId)

for v in ["sara", "liam", "prabhat", "priyanka"]:
    item = audiostack.Speech.TTS.create(scriptItem=script, voice=v)
    print(item.response)

# We'll get our files with the list method
tts_files = audiostack.Speech.TTS.list(scriptId=scriptId)
print(tts_files.response)

for tts in tts_files:
    print("getting", tts.speechId)
    item = audiostack.Speech.TTS.get(tts.speechId)
		#We'll download each file
    item.download(fileName=item.speechId)

#We'll list the rendered files
tts_files = audiostack.Speech.TTS.list(scriptId=scriptId)
print(tts_files.response)

for tts in tts_files:
    # At this point we can delete the files (not needed anymore)
    item = audiostack.Speech.TTS.get(tts.speechId)
    r = item.delete()
    print(r)

print("Cost for this session: ", audiostack.credits_used_in_this_session())


# Response

Response from creating script {'data': {'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'scriptText': '<as:section name="default">A function was organised in the Central Hall today to commemorate the rich legacy of the Parliament of India as the Members  came together to bid adieu to the historical building before stepping into the New Building of Parliament.  In his address to MPs in the Central Hall, the Vice-President described this transition as a journey from \'Tryst with Destiny  to \'Tryst with Modernity\' and called upon all Members to join the historic journey towards Bharat @2047.  The Vice-President noted that the hallowed precincts of the Parliament building have witnessed many milestones in its seven  decade long journey which continue to resonate with the aspirations of over a billion hearts.  </as:section>', 'metadata': '{}', 'creationDate': '2023-09-19T21:00:22.896684', 'lang': 'en', 'sections': [{'name': 'default', 'soundSegment': '', 'contentType': 'tts', 'content': "A function was organised in the Central Hall today to commemorate the rich legacy of the Parliament of India as the Members  came together to bid adieu to the historical building before stepping into the New Building of Parliament.  In his address to MPs in the Central Hall, the Vice-President described this transition as a journey from 'Tryst with Destiny  to 'Tryst with Modernity' and called upon all Members to join the historic journey towards Bharat @2047.  The Vice-President noted that the hallowed precincts of the Parliament building have witnessed many milestones in its seven  decade long journey which continue to resonate with the aspirations of over a billion hearts.", 'placeholders': {}, 'parent': '', 'subSections': [], 'uuid': 'e3472b40-fb90-4077-94e8-67caff57833f'}]}, 'meta': {'version': '2.0.0', 'requestId': '02c53d42-d55a-46eb-b805-26972ccb7298', 'creditsUsed': 0.1, 'creditsRemaining': 250.0}, 'message': 'Script created', 'warnings': [], 'statusCode': 200}
3c548655-25d4-4f98-b9c2-fd51456ee26b
{'data': {'speechId': 'd8c2d893-e2bc-4e2b-b466-ee69dc3fb823', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'scriptMetadata': {}, 'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'creationDate': 1695160663, 'sections': [{'sectionName': 'default', 'statusCode': '201', 'message': 'Synthesis successful.', 'audience': {}, 'url': 'https://v2.api.audio/file/9a1836b5-c33d-40a5-b9aa-d5b01dc4ba87', 'preview': 'A function was organised in the Central Hall today...', 'voice': 'sara', 'speed': 1, 'length': 35.7}]}, 'meta': {'version': 'beta', 'requestId': 'c477ccc8-a95d-4d3d-a99e-25b0ccbc22fd', 'creditsUsed': 0.57, 'creditsRemaining': 249.9}, 'message': 'Text-to-speech created', 'warnings': [], 'statusCode': 201}
{'data': {'speechId': '69dfae82-b964-45b7-9a48-eb71f9d02458', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'scriptMetadata': {}, 'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'creationDate': 1695160667, 'sections': [{'sectionName': 'default', 'statusCode': '201', 'message': 'Synthesis successful.', 'audience': {}, 'url': 'https://v2.api.audio/file/b76a1a49-aade-4544-b1d7-c95424dd9343', 'preview': 'A function was organised in the Central Hall today...', 'voice': 'liam', 'speed': 1, 'length': 33.1}]}, 'meta': {'version': 'beta', 'requestId': 'f591315b-0a07-49f9-9f5a-7ec265f76159', 'creditsUsed': 0.53, 'creditsRemaining': 249.3288}, 'message': 'Text-to-speech created', 'warnings': [], 'statusCode': 201}
{'data': {'speechId': 'acb0579b-31d5-4b2c-a03b-8a7500efd929', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'scriptMetadata': {}, 'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'creationDate': 1695160670, 'sections': [{'sectionName': 'default', 'statusCode': '201', 'message': 'Synthesis successful.', 'audience': {}, 'url': 'https://v2.api.audio/file/d4134408-0bd8-4432-80d2-43397a272f6d', 'preview': 'A function was organised in the Central Hall today...', 'voice': 'prabhat', 'speed': 1, 'length': 45.6}]}, 'meta': {'version': 'beta', 'requestId': '767dd85e-ec2c-4015-ac26-367954603923', 'creditsUsed': 0.73, 'creditsRemaining': 248.7992}, 'message': 'Text-to-speech created', 'warnings': [], 'statusCode': 201}
{'data': {'speechId': '35765306-3927-419f-8646-2f588bf57b5d', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'scriptMetadata': {}, 'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'creationDate': 1695160674, 'sections': [{'sectionName': 'default', 'statusCode': '201', 'message': 'Synthesis successful.', 'audience': {}, 'url': 'https://v2.api.audio/file/7e41f27b-e896-461d-bf4a-1783f06cb539', 'preview': 'A function was organised in the Central Hall today...', 'voice': 'priyanka', 'speed': 1, 'length': 32.8}]}, 'meta': {'version': 'beta', 'requestId': '4a85c4bc-29c0-49af-944a-3baafe563f3a', 'creditsUsed': 0.52, 'creditsRemaining': 248.0696}, 'message': 'Text-to-speech created', 'warnings': [], 'statusCode': 201}
{'data': {'speechIds': [{'speechId': 'acb0579b-31d5-4b2c-a03b-8a7500efd929', 'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'creationDate': 1695160670}, {'speechId': '35765306-3927-419f-8646-2f588bf57b5d', 'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'creationDate': 1695160674}, {'speechId': 'd8c2d893-e2bc-4e2b-b466-ee69dc3fb823', 'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'creationDate': 1695160663}, {'speechId': '69dfae82-b964-45b7-9a48-eb71f9d02458', 'projectName': 'untitled', 'moduleName': 'untitled', 'scriptName': 'untitled', 'scriptId': '3c548655-25d4-4f98-b9c2-fd51456ee26b', 'creationDate': 1695160667}]}, 'meta': {'version': '3.0.0', 'requestId': 'c9f1dd6a-1565-451c-b84e-185b234e4d07', 'creditsUsed': 2, 'creditsRemaining': 247.5448}, 'message': 'Requested text-to-speech files listed below', 'warnings': [], 'statusCode': 200}
Traceback (most recent call last):
  File "d:\sih 1\audiostack_1.py", line 30, in <module>
    for tts in tts_files:
  File "C:\Python311\Lib\site-packages\audiostack\helpers\api_list.py", line 19, in __next__
    return self.resolve_item(self.list_type, item)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Python311\Lib\site-packages\audiostack\speech\tts.py", line 51, in resolve_item
    return TTS.Item({"data": item})
           ^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Python311\Lib\site-packages\audiostack\speech\tts.py", line 12, in __init__
    super().__init__(response)
  File "C:\Python311\Lib\site-packages\audiostack\helpers\api_item.py", line 7, in __init__
    self.status_code = response["statusCode"]
                       ~~~~~~~~^^^^^^^^^^^^^^
KeyError: 'statusCode'