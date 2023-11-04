import pprint
import google.generativeai as palm

palm.configure(api_key='AIzaSyChDd8Vx0INbI9A9NPmxeuhdSTuV1jCpfg')

models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
model = models[0].name

def generate_script(news):
    # Prompt 1 for Creative Script Generation
    prompt = f"""Imagine yourself as a charismatic news anchor, ready to captivate your audience with an engaging video script. Craft a script based on the following news: "{news}".

Begin with a warm greeting and smoothly transition into highlighting the most significant and impactful points from the news article. Ensure that the script maintains an authentic and unbiased tone. Conclude the script by hinting at potential future developments, all within a video length of 60-90 seconds.

Remember, your goal is to inform, inspire, and engage your viewers. Make it captivating and creative while staying true to the news story.

Please break the script into meaningful chunks, each containing about 15-20 words, and separate them using <m>. """

    # Generate the creative script
    completion = palm.generate_text(    
        model=model,
        prompt=prompt,
        temperature=0,
        max_output_tokens=2000,
    )

    # Prompt 2 for Chunk Extraction
    prompt2 = f"""Take the creative script you generated earlier and remove any stars or keywords associated with them. Extract the 'chunk lines' from the following creative script:

{completion.result}

Ensure that each chunk consists of 15-20 words and conveys a distinct message or idea. Your output should be a series of these <m>-separated 'chunk lines' derived from the creative script."""
    
    # Generate and return the extracted chunks
    completion2 = palm.generate_text(    
        model=model,
        prompt=prompt2,
        temperature=0,
        max_output_tokens=4000,
    )
    print('completion2/n')
    print(completion2.result)
    return completion2.result

# text = ''' 
# The Prime Minister, Shri Narendra Modi interacted with Team G20 at Bharat Mandapam today. The Prime Minister also addressed the gathering on the occasion.
# Speaking on the occasion, the Prime Minister underlined the accolades that are being showered for the successful organization of G20 and credited the ground level functionaries for this success.
# '''

# print(generate_script(text))