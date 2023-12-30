import cloudinary
import cloudinary.uploader

import json
with open('config.json', 'r') as c:
    config_data = json.load(c)
    cloudinary_api_key = config_data['cloudinary_api_key']
    cloudinary_api_secret = config_data['cloudinary_api_secret']  

def upload_video(location):
    cloudinary.config( 
    cloud_name = "mentormee-cloud", 
  api_key = cloudinary_api_key, 
  api_secret = cloudinary_api_secret  
    )
    data = cloudinary.uploader.upload(location, 
    resource_type='video', 
    public_id='video_upload_example')
    return data['secure_url']

# print(upload_video("videos/videobyomkar.mp4"))