import requests
import os
import uuid
from urllib.parse import urlparse

API_KEY = 'nkT4wElq5FAkXda4hjKmLlmi9lIHwjEGMU28GMtDeqswijGgVbMvv3v0'
query = 'Nature'

base_url = 'https://api.pexels.com/videos/'

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
    videos = data.get('videos', [])

    if videos:
        if not os.path.exists('videos'):
            os.makedirs('videos')

        for i, video in enumerate(videos, 1):
            video_url = video['video_files'][0]['link']
            file_extension = os.path.splitext(urlparse(video_url).path)[-1]
            new_filename = f"video_{i}_{str(uuid.uuid4())}{file_extension}"
            local_filepath = os.path.join('videos', new_filename)
            video_response = requests.get(video_url)
            if video_response.status_code == 200:
                with open(local_filepath, 'wb') as f:
                    f.write(video_response.content)
                print(f"Downloaded: {new_filename}")
            else:
                print(f"Failed to download: {new_filename}")
    else:
        print("No videos found.")
else:
    print(f'Error: {response.status_code}')