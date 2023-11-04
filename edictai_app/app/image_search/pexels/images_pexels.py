import requests
import os

API_KEY = ''
query = 'Nature'

base_url = 'https://api.pexels.com/v1/'

headers = {
    'Authorization': API_KEY,
}

params = {
    'query': query,
    'per_page': 5,
}

response = requests.get(base_url + 'search', headers=headers, params=params)

if response.status_code == 200:
    data = response.json()
    photos = data.get('photos', [])

    if photos:
        if not os.path.exists('images'):
            os.makedirs('images')

        for i, photo in enumerate(photos, 1):
            original_url = photo['src']['original']
            file_extension = original_url.split('.')[-1]
            new_filename = f"image_{i}.{file_extension}"
            local_filepath = os.path.join('images', new_filename)
            image_response = requests.get(original_url)
            if image_response.status_code == 200:
                with open(local_filepath, 'wb') as f:
                    f.write(image_response.content)
                print(f"Downloaded: {new_filename}")
            else:
                print(f"Failed to download: {new_filename}")
    else:
        print("No photos found.")
else:
    print(f'Error: {response.status_code}')
