import os
from google_images_search import GoogleImagesSearch
from .generate_image import *
import json
with open('config.json', 'r') as c:
    config_data = json.load(c)
    img_search_1 = config_data['google_image_search_dev_api_key']
    img_search_2 = config_data['google_image_search_project_cx']

def google_image_search_api(query,chunk_number):
    
    if("gender equality" in query):
        query = "balanced scale of gender equality"

    gis = GoogleImagesSearch(img_search_1, img_search_2)

    _search_params = {
        'q': query,
        'num': 1,
        'fileType': 'jpg|png|jpeg',
        'rights': 'cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived',
        'safe': 'off', ##
        'imgType': 'imgTypeUndefined', ##
        'imgSize': 'huge', ##
        'imgDominantColor': 'imgDominantColorUndefined', ##
        'imgColorType': 'imgColorTypeUndefined' ##
    }

    new_file_name = ""

    try: 
        # this will search, download and resize:
        gis.search(search_params=_search_params, path_to_dir='images/')

        # get the downloaded image object
        image_object = gis.results()[0]

        # get the old file name
        old_file_name = image_object.path
        print(old_file_name)
        
        if '.svg' in old_file_name:
            return generate_image(query,chunk_number)
        
        if '.webp' in old_file_name:
            return generate_image(query,chunk_number)
            

        # create a new file name
        new_file_name = f'chunk_{chunk_number}.{old_file_name.split(".")[-1]}'

        # rename the file
        os.replace(old_file_name, os.path.join('images', new_file_name))
    except:
        return generate_image(query,chunk_number)
    
    # if(new_file_name!=""):
    #     break
    
    # rename_images()

    return("images/"+new_file_name)

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

# google_image_search_api("FIDE World Junior Rapid Chess Championship",69)