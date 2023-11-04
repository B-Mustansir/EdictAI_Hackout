from PIL import Image
import io
import requests

def generate_image(query,chunk_number):
    r = requests.post('https://clipdrop-api.co/text-to-image/v1',
    files = {
        'prompt': (None, query, 'text/plain')
    },
    headers = { 'x-api-key': '1153f9eb75188d98b43284e7e93f4365e54369b0083862c69b5f6603e69d27378fa03979945b22ecd75f4dc413a8d2d0'}
    )


    if (r.ok):
        file_path = f'images/chunk_{chunk_number}.jpg'
        try:
            with open(file_path, 'wb') as file:
                file.write(r.content)
                print(f'Image saved to {file_path}')

        except Exception as e:
            print(f'Error: {e}')
    else:
        r.raise_for_status()

    return file_path