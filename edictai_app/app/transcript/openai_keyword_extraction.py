import openai

openai.organization = ""
openai.api_key = ""

sentences = '''
['NLC India Ltd secures 810 MW Grid Connected Solar Photovoltaic Power Project in Rajasthan.', 'NLC India Limited, a Navratna Central Public Sector Undertaking (CPSE) under the Ministry of Coal has won 810 MW Solar PV project capacity from Rajasthan Rajya Vidyut Nigam Limited (RRVUNL).', 'NLCIL has successfully garnered the entire capacity of the 810 MW tender floated by RRVUNL in December 2022, for developing the project RRVUNL’s 2000 MW Ultra Mega Solar Park at Pugal Tehsil, Bikaner District, Rajasthan.', 'The Letter of Intent for this project has been issued by RRVUNL.', 'The land for the project and the power evacuation system connected to STU will be offered by RVUNL, paving the way for completion of the project at shorter period.', 'This is the largest Renewable project to be developed by the company.', 'With this project, the capacity of power project in Rajasthan will be 1.36 GW including 1.1 GW of green power, bringing economies of scale and optimized fixed costs.', 'Considering the good Solar radiation at Rajasthan, the higher CUF for the project is possible and will generate green power of more than 50 Billion Units and offsets more than 50,000 tonnes of carbon dioxide emissions during the life of the project.']
'''

sentence = '''
NLC India Limited, a Navratna Central Public Sector Undertaking (CPSE) under the Ministry of Coal has won 810 MW Solar PV project capacity from Rajasthan Rajya Vidyut Nigam Limited (RRVUNL).
'''

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    temperature=0.5,
    messages=[
        {
            "role": "system",
            "content": '''
            You will be provided with a block of text, and your task is to extract a list of keywords from it.
            Note: Keywords extracted would be used as a query to search for images on search engines. Extract those keywords which are easy to represent visually.
            '''
        },
        {
            "role": "user",
            "content": sentence
        }
    ]
)
print (response['choices'][0]['message']['content'])

'''
You are a highly skilled AI trained in keyword extraction and image search.
I will provide you with a list of sentences, you need to extract keywords from each of those and output the list of keywords for each sentence. This keyword would be used as a query to search for images on search engines.  
Please avoid unnecessary details or tangential points.
'''

# from keybert import KeyBERT
# import openai 

# def keywords_extraction(sentence):
#     kw_model = KeyBERT()
#     keywords = kw_model.extract_keywords(sentence,keyphrase_ngram_range=(1, 2),top_n=3,use_maxsum=True)
#     return(keywords)

# print(keywords_extraction('''
# NLC India Limited, a Navratna Central Public Sector Undertaking (CPSE) under the Ministry of Coal has won 810 MW Solar PV project capacity from Rajasthan Rajya Vidyut Nigam Limited (RRVUNL).
# '''))