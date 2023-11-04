from keybert import KeyBERT

def keywords_extraction(sentence):
    kw_model = KeyBERT()
    keywords = kw_model.extract_keywords(sentence,keyphrase_ngram_range=(1, 2),top_n=1)
    return(keywords[0][0])
