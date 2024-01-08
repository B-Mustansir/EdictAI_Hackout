from PIL import Image
import io
import requests
from urllib.parse import urlparse
from openai import OpenAI
import json
import os

with open('config.json', 'r') as c:
    config_data = json.load(c)
    generate_script_openai_organization = config_data['openai_organization'] 
    generate_script_openai_api_key = config_data['openai_api_key'] 

def generate_image(query,chunk_number):

    client = OpenAI(
        organization=generate_script_openai_organization,
        api_key=generate_script_openai_api_key,
    )

    # Create the image using OpenAI API
    response = client.images.generate(
        model="dall-e-2",
        prompt=f"{query}",
        size="1024x1024",
        quality="standard",
        n=1,
    )

    # Get the image URL from the response
    image_url = response.data[0].url

    # Define the filename for the downloaded image
    image_filename = f"images/chunk_{chunk_number}.jpg"

    # Download the image and save it with the desired filename
    response = requests.get(image_url)
    if response.status_code == 200:
        with open(image_filename, 'wb') as f:
            f.write(response.content)
        print(f"Image downloaded and saved as {image_filename}")
    else:
        print("Failed to download the image")
        
    return image_filename

    # Now the image is saved as "chunk.png" in your current working directory