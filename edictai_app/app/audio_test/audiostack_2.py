import audiostack
import os

audiostack.api_key = ""

# # We'll get our files with the list method
# tts_files = audiostack.Speech.TTS.list(scriptId=scriptId)
# print(tts_files.response)

# for tts in tts_files:
#     print("getting", tts.speechId)
    # item = audiostack.Speech.TTS.get(tts.speechId)
	# 	#We'll download each file
    # item.download(fileName=item.speechId)

# item = audiostack.Speech.TTS.get("f1fe10aa-5f78-4f0a-bfeb-3b3868a1aff2")
# item = audiostack.Speech.TTS.get("5bd730b3-9dfb-4138-93d9-735d16d24b47")
# item = audiostack.Speech.TTS.get("b64e4144-392e-4b12-9ec8-7e45fc55b76f")
item.download(fileName="audio3")

# #We'll list the rendered files
# tts_files = audiostack.Speech.TTS.list(scriptId=scriptId)
# print(tts_files.response)

# for tts in tts_files:
#     # At this point we can delete the files (not needed anymore)
#     item = audiostack.Speech.TTS.get(tts.speechId)
#     r = item.delete()
#     print(r)

# print("Cost for this session: ", audiostack.credits_used_in_this_session())
