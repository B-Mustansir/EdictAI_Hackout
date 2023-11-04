import re
def new_chunk_creator(text):
    text=text.replace('*',"")
    sentences = re.split(r"<m>|\\n|\n",text)
    # sentences=[sentence.split("/n") for sentence in sentences]
    sentences = [sentence.strip() for sentence in sentences]
    sentences = [sentence for sentence in sentences if sentence]
    return (sentences)