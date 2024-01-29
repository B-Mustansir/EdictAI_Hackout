import os
from google_images_search import GoogleImagesSearch
# from .generate_image import *
import json
import requests
from urllib.parse import urlparse
with open('config.json', 'r') as c:
    config_data = json.load(c)
    img_search_1 = config_data['google_image_search_dev_api_key']
    img_search_2 = config_data['google_image_search_project_cx']

def download_file(url, output_directory, custom_filename):
    try:
        if not os.path.exists(output_directory):
            os.makedirs(output_directory, exist_ok=True)

        response = requests.get(url, stream=True)
        if response.status_code == 200:
            parsed_url = urlparse(url)
            path = parsed_url.path
            filename = os.path.basename(path)
            file_extension = os.path.splitext(filename)[1]

            new_filename = custom_filename + file_extension if custom_filename else filename
            output_path = os.path.join(output_directory, new_filename)

            with open(output_path, 'wb') as file:
                for chunk in response.iter_content(chunk_size=1024):
                    file.write(chunk)
            print(f"Downloaded: {url} => {output_path}")
            return file_extension
        else:
            print(f"Failed to download {url}. Status code: {response.status_code}")
    except requests.RequestException as e:
        print(f"Error downloading {url}: {e}")

# def google_image_search_api(query,chunk_number):
    
#     if("gender equality" in query):
#         query = "balanced scale of gender equality"

#     gis = GoogleImagesSearch(img_search_1, img_search_2)

#     _search_params = {
#         'q': query,
#         'num': 1,
#         'fileType': 'jpg|png|jpeg',
#         'rights': 'cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived',
#         'safe': 'off', ##
#         'imgType': 'imgTypeUndefined', ##
#         'imgSize': 'huge', ##
#         'imgDominantColor': 'imgDominantColorUndefined', ##
#         'imgColorType': 'imgColorTypeUndefined' ##
#     }

#     new_file_name = ""

#     try: 
#         # this will search, download and resize:
#         gis.search(search_params=_search_params, path_to_dir='images/')

#         # get the downloaded image object
#         image_object = gis.results()[0]

#         # get the old file name
#         old_file_name = image_object.path
#         print(old_file_name)
        
#         if '.svg' in old_file_name:
#             return generate_image(query,chunk_number)
        
#         if '.webp' in old_file_name:
#             return generate_image(query,chunk_number)
            

#         # create a new file name
#         new_file_name = f'chunk_{chunk_number}.{old_file_name.split(".")[-1]}'

#         # rename the file
#         os.replace(old_file_name, os.path.join('images', new_file_name))
#     except:
#         return generate_image(query,chunk_number)
    
#     # if(new_file_name!=""):
#     #     break
    
#     # rename_images()

#     return("images/"+new_file_name)

def google_image_search_api(query, chunk_number, limit=1):
    # Load credentials from config.json
    credentials_file_path = 'config.json'  # Change this path based on your actual credentials file
    with open(credentials_file_path, 'r') as c:
        credentials = json.load(c)

    directory = 'images/'
    filename = f'chunk_{chunk_number}'

    api_url = "https://www.googleapis.com/customsearch/v1"

    params = {
        'key': credentials['google_search_api_key'],
        'cx': credentials['google_search_engine_id'],
        'q': query,
        'gl': 'in',
        'searchType': 'image',  
        # 'imgType': 'stock', # clipart | face | lineart | stock | photo | animated
        # 'imgSize': 'huge',  # icon | small | medium | large | xlarge | xxlarge | huge
    }

    outputArray = []
    file_path = None

    try:
        response = requests.get(api_url, params=params)
        if response.status_code == 200:
            results = response.json()

            for position, imageObject in enumerate(results.get('items', [])):

                new_file_name = f'{filename}'
                # new_file_name = f'{filename}_{position}'
                file_path = os.path.join(directory, new_file_name)

                download_url = imageObject.get('link')

                # Download the image
                file_extension = download_file(download_url, directory, new_file_name)
                print(file_extension)
                print()

                # Check the file extension
                if file_extension is None or file_extension not in ['.png', '.jpg', '.jpeg', '.gif']:
                    print(f"Skipping iteration for chunk {chunk_number} due to unsupported file extension.")
                    os.remove(file_path+file_extension)  # Remove the downloaded file
                    continue
                else: 
                    file_path = file_path + file_extension
                    break

                # Add information to output array
                outputJson = {
                    'api': "google_image_search_api",
                    'id': position,
                    'source': imageObject.get('displayLink', ''),
                    'title': imageObject.get('title', ''),
                    'url': download_url,
                }
                outputArray.append(outputJson)

            return file_path

    except Exception as e:
        print(f"Google image search failed: {e}")

    # If no valid image was found, generate a placeholder image
    return file_path

def rename_images():

    # Path to the folder containing the image files
    folder_path = "images"

    # Get a list of all image files in the folder
    image_files = [f for f in os.listdir(folder_path) if f.endswith(".jpg")]

    # Loop through each image file and rename it
    for i, old_name in enumerate(image_files):
        new_name = f"coindesk_multiple_{i}.jpg"
        old_path = os.path.join(folder_path, old_name)
        new_path = os.path.join(folder_path, new_name)
        os.rename(old_path, new_path)

if __name__ == '__main__':
    google_image_search_api("FIDE World Junior Rapid Chess Championship",1)

# google_image_search_api("FIDE World Junior Rapid Chess Championship",69)