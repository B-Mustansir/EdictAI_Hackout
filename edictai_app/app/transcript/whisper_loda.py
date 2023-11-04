from faster_whisper import WhisperModel
model_size = "medium"
model = WhisperModel(model_size)

segments, info = model.transcribe("audios/chunk.wav", word_timestamps=True)
segments = list(segments)
for segment in segments:
    for word in segment.words:
        print("[%.2fs -> %.2fs] %s" % (word.start, word.end, word.word))

wordlevel_info = []

for segment in segments:
    for word in segment.words:
      wordlevel_info.append({'word':word.word,'start':word.start,'end':word.end})

print(wordlevel_info)