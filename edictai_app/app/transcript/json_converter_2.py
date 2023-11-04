apnaJson = []
output = []
for jid in apnaJson: 
    output.append({'chunk':jid['DisplayText'], 'start':(jid['Offset']/10000000), 'end':((jid['Duration']+jid['Offset'])/10000000)})
words = []
for jid in apnaJson:
    for chunk_words in jid['NBest'][0]['Words']:
        words.append({'word':chunk_words['Word'], 'start':chunk_words['Offset']/10000000, 'end':((chunk_words['Duration']+chunk_words['Offset'])/10000000)})
print(words)