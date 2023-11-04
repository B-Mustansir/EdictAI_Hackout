from azure.cognitiveservices.search.videosearch import VideoSearchClient
from azure.cognitiveservices.search.videosearch.models import VideoPricing, VideoLength, VideoResolution, VideoInsightModule
from msrest.authentication import CognitiveServicesCredentials

subscription_key = "44c73eb7833547479ecab554876379af"
endpoint = "https://api.bing.microsoft.com/v7.0/videos/search"

client = VideoSearchClient(endpoint, CognitiveServicesCredentials(subscription_key))

video_result = client.videos.search(query="kittens")

if video_result.value:
    first_video_result = video_result.value[0]
    print("Video result count: {}".format(len(video_result.value)))
    print("First video id: {}".format(first_video_result.video_id))
    print("First video name: {}".format(first_video_result.name))
    print("First video url: {}".format(first_video_result.content_url))
else:
    print("Didn't see any video result data..")