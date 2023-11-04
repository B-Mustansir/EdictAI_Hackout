from PIL import Image
import io
import requests

r = requests.post('https://clipdrop-api.co/text-to-image/v1',
  files = {
      'prompt': (None, 'Narendra Modi', 'text/plain')
  },
  headers = { 'x-api-key': ''}
)


if (r.ok):
    file_path = 'images/image.jpg'
    try:
        with open(file_path, 'wb') as file:
            file.write(r.content)
            print(f'Image saved to {file_path}')

            image = Image.open(file_path)
            current_width, current_height = image.size
            width_scale = 1440 / current_width
            height_scale = 2560 / current_height
            scale = min(width_scale, height_scale)

            new_width = int(current_width * scale)
            new_height = int(current_height * scale)

            resized_image = image.resize((new_width, new_height), Image.ANTIALIAS)
            output_image = Image.new('RGB', (1440, 2560))

            paste_x = (1440 - new_width) // 2
            paste_y = (2560 - new_height) // 2

            output_image.paste(resized_image, (paste_x, paste_y))
            output_image.save(file_path)

    except Exception as e:
        print(f'Error: {e}')
else:
    r.raise_for_status()