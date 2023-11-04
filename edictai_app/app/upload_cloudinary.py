import cloudinary
import cloudinary.uploader
from .env import *

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