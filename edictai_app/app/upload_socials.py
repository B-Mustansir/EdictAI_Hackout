import time
import requests


def create_media_object(params):
    
    url = f"{params['endpoint_base']}{params['instagram_account_id']}/media"  # endpoint url

    endpoint_params = {
        'caption': params['caption'],
        'access_token': params['access_token']
    }

    if params['media_type'] == 'IMAGE':  # posting image
        endpoint_params['image_url'] = params['media_url']  # url to the asset
    else:  # posting video
        endpoint_params['media_type'] = params['media_type']  # specify media type
        endpoint_params['video_url'] = params['media_url']  # url to the asset

    response = requests.post(url, data=endpoint_params)

    return response.json()  # make the api call

def get_media_object_status(media_object_id, params):
    url = f"{params['endpoint_base']}/{media_object_id}"  # endpoint url

    endpoint_params = {
        'fields': 'status_code',
        'access_token': params['access_token']          
    }

    response = requests.get(url, params=endpoint_params)

    return response.json()  # make the api call

def publish_media(media_object_id, params):
    """ Publish content

    Args:
        media_object_id: id of the media object
        params: dictionary of params

    API Endpoint:
        https://graph.facebook.com/v5.0/{ig-user-id}/media_publish?creation_id={creation-id}&access_token={access-token}

    Returns:
        object: data from the endpoint

    """
    url = f"{params['endpoint_base']}{params['instagram_account_id']}/media_publish"  # endpoint url

    endpoint_params = {
        'creation_id': media_object_id,
        'access_token': params['access_token']
    }

    response = requests.post(url, data=endpoint_params)

    return response.json()  # make the api call

def get_content_publishing_limit(params):
    """ Get the API limit for the user

    Args:
        params: dictionary of params

    API Endpoint:
        https://graph.facebook.com/v5.0/{ig-user-id}/content_publishing_limit?fields=config,quota_usage

    Returns:
        object: data from the endpoint

    """
    url = f"{params['endpoint_base']}{params['instagram_account_id']}/content_publishing_limit"  # endpoint url

    endpoint_params = {
        'fields': 'config,quota_usage',
        'access_token': params['access_token']
    }

    response = requests.get(url, params=endpoint_params)

    return response.json()  




def Upload_video_on_one_click(url, caption) :
    params = {
        'endpoint_base': 'https://graph.facebook.com/v18.0/',
        'instagram_account_id': '17841462256631392',
        'access_token': "EAAJg4T8MjfsBOwFqoJIV1zt4exkDu2Vvz2ZCO9km65ZAhQjDWdwrP1QmDnyKzX6IfzuQlv5DNaYw7olMDYzO4qRXy2ciNLxzRGyStsa5ZAo3Ps5ibf0HEAi2a7GI7MjBUq93suaws3g015imQjMWbHFYMZCh47UtPBZAqyNsJvssjTbLsbHx1fSEi",
        'media_type': 'REELS',  # or 'IMAGE'
        'media_url': url,
        'caption': caption,
    }
    video_media_object_response = create_media_object(params)
    print(video_media_object_response)
    video_media_object_id = video_media_object_response.get('id', '')
    # Publish the video media object
    print("Creation Id", video_media_object_id)
    time.sleep(45)
    publish_media_response = publish_media(video_media_object_id, params)

    print("Video Media Published Response:")
    print(publish_media_response)

# Upload_video_on_one_click("https://res.cloudinary.com/mentormee-cloud/video/upload/v1706673332/video_upload_example.mp4","Video Created Using EdictAI News to Video Converter")
