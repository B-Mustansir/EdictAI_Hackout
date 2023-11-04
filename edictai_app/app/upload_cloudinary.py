import cloudinary
import cloudinary.uploader

def upload_video(location):
    cloudinary.config( 
    cloud_name = "", 
    api_key = "", 
    api_secret = "" 
    )
    data = cloudinary.uploader.upload(location, 
    resource_type='video', 
    public_id='video_upload_example')
    return data['secure_url']

