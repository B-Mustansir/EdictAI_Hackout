inputList1 = [
    {'word': ' Good', 'start': 0.0, 'end': 0.34},
    {'word': ' morning', 'start': 0.34, 'end': 0.82},
    {'word': ' everyone', 'start': 0.98, 'end': 1.56},
    {'word': " I'm", 'start': 2.64, 'end': 2.78},
    {'word': ' here', 'start': 2.78, 'end': 3.0},
    {'word': ' today', 'start': 3.0, 'end': 3.38},
    {'word': ' to', 'start': 3.38, 'end': 3.68},
    {'word': ' talk', 'start': 3.68, 'end': 3.94},
    {'word': ' about', 'start': 3.94, 'end': 4.12},
    {'word': ' the', 'start': 4.12, 'end': 4.36},
    {'word': ' historic', 'start': 4.36, 'end': 4.76},
    {'word': ' passage', 'start': 4.76, 'end': 5.26},
    {'word': ' of', 'start': 5.26, 'end': 5.48},
    {'word': ' the', 'start': 5.48, 'end': 5.66},
    {'word': ' Nari', 'start': 5.66, 'end': 5.92},
    {'word': ' Shakti', 'start': 5.92, 'end': 6.38},
    {'word': ' Vandana', 'start': 6.38, 'end': 6.86}]

inputList2 = [
    {'sentence': "Good morning everyone", 'keywords': ['morning']},
    {'sentence':  "I'm here today to talk about the", 'keywords': ['talk', 'about']},
    {"sentence": "historic passage of the", "keywords": ["historic"]},
    {'sentence': "Nari Shakti Vandana", 'keywords': ['Nari']}
]

output = []


# item={'chunk':inputList2[0]['sentence'],'start_time':inputList1[0]['start'],'end_time':inputList1[0+len(inputList2[0]['sentence'].split())]['end'],'keywords':inputList2[0]['keywords']}
# print(item)
# # print(inputList1[len(inputList2[0]['sentence'])]['end'])

# for i in range(0,len(inputList2[0]['sentence'].split())):
#     if(inputList1[i]['word']==' Good'):
#         output.append(inputList1[i]['word'])
#     else:continue


finalop = []
currentStartWord = 0
for i in inputList2:
    keywordArray = []
    for j in i['keywords']:
        for k in range(currentStartWord, currentStartWord+len(i['sentence'].split())):
            if (inputList1[k]['word'].strip() == j):
                keywordArray.append({'word':j,'start_time':inputList1[k]['start'],'end_time':inputList1[k]['end']})

    print(inputList1[currentStartWord]['start'])
    item = {'chunk': i['sentence'], 'start_time': inputList1[currentStartWord]['start'],
            'end_time': inputList1[currentStartWord+len(i['sentence'].split())-1]['end'], 'keywords': keywordArray}
    finalop.append(item)
    print(currentStartWord)
    currentStartWord = currentStartWord+len(i['sentence'].split())

print(finalop)
