import sys
from keybert import KeyBERT
from moviepy.editor import *
from moviepy.editor import *
from moviepy.editor import VideoFileClip, concatenate_videoclips
from moviepy.editor import *
from django.core.mail import send_mail, EmailMultiAlternatives
from upload_cloudinary import upload_video


# video_filenames = [f"videos/chunk_{i}.mp4" for i in range(26)]

# clips_final = [VideoFileClip(video_filename) for video_filename in video_filenames]

# final_clip = concatenate_videoclips(clips_final)

# final_video=final_clip
#     # write the final video to file
# final_video.write_videofile("videos/news_edicted_17.mp4",codec="libx264")

link=upload_video("videos/news_edicted_17.mp4")
print(link)
send_mail(
    "New Video generated by EdictAI ",
    f"Title:Techspark video 1 ,The link for video is {link}, To approve video upload visit thre link http://localhost:8000/videofeedback/{video.id}",
    "zxy40092@gmail.com",
    ["asif.mursal21@vit.edu","jadhavomkarb4u@gmail.com"],
    fail_silently=False,
    )