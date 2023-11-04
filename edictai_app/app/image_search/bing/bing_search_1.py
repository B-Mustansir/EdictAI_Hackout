import requests
import matplotlib.pyplot as plt
from PIL import Image
from io import BytesIO
from bing_search_query import query

subscription_key = ""
search_url = "https://api.bing.microsoft.com/v7.0/images/search"
search_term = query

headers = {"Ocp-Apim-Subscription-Key" : subscription_key}

params  = {"q": search_term, "license": "public", "imageType": "photo"}

response = requests.get(search_url, headers=headers, params=params)
response.raise_for_status()
search_results = response.json()

if "value" in search_results and len(search_results["value"]) > 0:
    image_url = search_results["value"][0]["contentUrl"]
    image_data = requests.get(image_url)
    image_data.raise_for_status()
    save_path = "team_work_2.jpg"
    with open(save_path, "wb") as image_file:
        image_file.write(image_data.content)
    print(f"Image saved as {save_path}")

else:
    print("No images found.")
