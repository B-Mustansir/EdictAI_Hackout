import cloudinary
import cloudinary.uploader

def upload_video(location):
    cloudinary.config( 
    cloud_name = "dcp8kk3ry", 
    api_key = "736952496664967", 
    api_secret = "nZhxjQEhB4NCe65EwBxIsmBaM8g" 
    )
    data = cloudinary.uploader.upload(location, 
    resource_type='video', 
    public_id='video_upload_example')
    return data['secure_url']

