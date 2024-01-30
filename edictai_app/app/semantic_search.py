import requests

API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2"
headers = {"Authorization": "Bearer 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"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

def create_final_sentence(obj):
    # Combine title, tags, and description to create the final sentence
    final_sentence_parts = []

    if 'custom_properties' in obj and isinstance(obj['custom_properties'], dict):
        custom_properties = obj['custom_properties']
        
        if 'title' in custom_properties:
            final_sentence_parts.append(custom_properties['title'])
        
        if 'tags' in custom_properties:
            if isinstance(custom_properties['tags'], list):
                final_sentence_parts.extend(custom_properties['tags'])
            else:
                final_sentence_parts.append(custom_properties['tags'])

        if 'description' in custom_properties:
            final_sentence_parts.append(custom_properties['description'])
    else:
        if 'title' in obj:
            final_sentence_parts.append(obj['title'])
        
        if 'tags' in obj:
            if isinstance(obj['tags'], list):
                final_sentence_parts.extend(obj['tags'])
            else:
                final_sentence_parts.append(obj['tags'])

        if 'description' in obj:
            final_sentence_parts.append(obj['description'])

    final_sentence = ' '.join(final_sentence_parts)
    print(final_sentence)
    return final_sentence


import json
def find_max_similarity_index(query_sentence, sentences):
    output = query({
        "inputs": {
            "source_sentence": query_sentence,
            "sentences": sentences
        },
    })

    # Enumerate to keep track of original indices
    similarity_with_indices = list(enumerate(output))

    # Sort based on similarity score in descending order
    sorted_indices = sorted(similarity_with_indices, key=lambda x: x[1], reverse=True)

    # Extract the original indices from the sorted list
    sorted_indices = [index for index, _ in sorted_indices]

    return sorted_indices

# def find_max_similarity_index(query_sentence, sentences):
    # output = query({
    #     "inputs": {
    #         "source_sentence": query_sentence,
    #         "sentences": sentences
    #     },
    # })

    # # Find the index of the maximum similarity score
    # print("printing dict")
    # print(output)
    # try:
    #     max_similarity_index = output.index(max(output))
    # except:
    #     max_similarity_index = 0
    #     return max_similarity_index
    # print(len(output))
    

    # return max_similarity_index




# query_sentence = "A beautiful blue background"
# sentences = [
#     'a blue hd',
#     'hd background',
#     'a bokeh of blue wallpaper'
# ]


def semantic_search(api_jsons, query2):
    print(len(api_jsons))
    final_sentences = []
    print(final_sentences)

    filtered_api_jsons = []  # Create a new list for filtered objects

    for obj in api_jsons:
        url = obj.get('url', '')
        # Check if the length of the URL is between 150 and 200
        if len(url) <= 200:
            final_sentences.append(create_final_sentence(obj))
            # Add the 'api':'api' key-value pair
            filtered_api_jsons.append(obj)  # Add the filtered object to the new list
            print(obj)
    
    max_similarity_index = find_max_similarity_index(query2, final_sentences)

    print("filtered_api_jsons")
    print(len(filtered_api_jsons))
    ans = []
    for i in max_similarity_index:
        ans.append(filtered_api_jsons[i])

    # Fix: Return the entire list, not just one element
    return ans