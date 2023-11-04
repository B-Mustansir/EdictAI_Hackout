from moviepy.editor import VideoFileClip, ImageClip, CompositeVideoClip
from moviepy.video.fx import fadein, fadeout

def add_image_to_video(input_video_path, output_video_path, image_path, horizontal_position, vertical_position, in_time, out_time, in_transition_duration=1, out_transition_duration=1):
    video_clip = VideoFileClip(input_video_path)
    image_clip = ImageClip(image_path, transparent=True)
    
    image_height = image_clip.h
    image_width = image_clip.w

    if horizontal_position == 'left':
        x = 20
    elif horizontal_position == 'center':
        x = (video_clip.w - image_width) // 2
    elif horizontal_position == 'right':
        x = video_clip.w - image_width - 20

    if vertical_position == 'top':
        y = 20
    elif vertical_position == 'center':
        y = (video_clip.h - image_height) // 2
    elif vertical_position == 'bottom':
        y = video_clip.h - image_height - 20
    
    # Set the duration of the image clip based on the fade-in and fade-out duration
    fadein_duration = min(in_transition_duration, (out_time - in_time))
    fadeout_duration = min(out_transition_duration, (out_time - in_time))
    image_duration = fadein_duration + fadeout_duration
    image_clip = image_clip.set_duration(image_duration)
    
    image_clip = image_clip.set_position((x, y))
    
    image_clip = fadein.fadein(image_clip, fadein_duration)
    image_clip = fadeout.fadeout(image_clip, fadeout_duration)
    
    video_with_image = CompositeVideoClip([video_clip.set_start(in_time), image_clip.set_start(in_time)])
    
    final_clip = CompositeVideoClip([video_with_image.set_end(out_time), video_clip.subclip(out_time).set_start(out_time)])
    
    final_clip = final_clip.set_duration(video_clip.duration)
    
    final_clip.write_videofile(output_video_path, codec='libx264')

add_image_to_video('videos/video_1.mp4', 'output.mp4', 'not_cat.png', 'center', 'bottom', 5, 10)