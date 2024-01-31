import cv2
# import numpy as np
import numpy as np

# Load the input image
input_image_path = 'chunk_3.jpg'

# Set the output video properties
# def pan_effect(input_image_path,custom_duration):
#     output_width = 1440
#     output_height = 2560
#     fps = 24
    
#     # Load the input image
#     image = cv2.imread(input_image_path)

#     # Calculate the aspect ratio of the input image
#     aspect_ratio = image.shape[1] / image.shape[0]

#     # Scale the image to match the output_height while maintaining aspect ratio
#     scaled_height = output_height
#     scaled_width = int(output_height * aspect_ratio)
#     image = cv2.resize(image, (scaled_width, scaled_height))

#     # Create a VideoWriter object to save the video
#     fourcc = cv2.VideoWriter_fourcc(*'mp4v')

#     # Customize the duration of the video (in seconds)
#     # custom_duration = 10  # Adjust this value as needed

#     # Calculate the panning effect based on the custom duration
#     num_frames = int(custom_duration * fps)
#     duration = custom_duration
#     out = cv2.VideoWriter('output_video.mp4', fourcc, fps, (output_width, output_height))

#     # Generate the panning effect for the video
#     for i in range(num_frames):
#         x_offset = int(i * (scaled_width - output_width) / (num_frames - 1))
#         frame = image[:, x_offset:x_offset + output_width, :]

#         # Resize the frame to match the output video dimensions
#         frame = cv2.resize(frame, (output_width, output_height))

#         # Write the frame to the output video
#         out.write(frame)

#     # Release the VideoWriter and close the video file
#     out.release()
#     return('output_video.mp4')

    
from moviepy.editor import VideoFileClip
def pan_effect(input_image_path, custom_duration):
    output_width = 1440
    output_height = 2560
    fps = 24

    if input_image_path =="images/":
        # If input image is None, create a black screen video
        black_screen = np.zeros((output_height, output_width, 3), dtype=np.uint8)
        out = cv2.VideoWriter('output_video.mp4', cv2.VideoWriter_fourcc(*'mp4v'), fps, (output_width, output_height))
        for _ in range(int(custom_duration * fps)):
            out.write(black_screen)
        out.release()
        return 'output_video.mp4'

    # Load the input image
    image = cv2.imread(input_image_path)

    # Check if the image is portrait
    if image.shape[0] > image.shape[1]:
        # If portrait, return the original image as video with fade-in and fade-out effects
        out = cv2.VideoWriter('output_video.mp4', cv2.VideoWriter_fourcc(*'mp4v'), fps, (output_width, output_height))
        for _ in range(int(custom_duration * fps)):
            out.write(cv2.resize(image, (output_width, output_height)))
        out.release()

        # Apply fade-in and fade-out effects using moviepy
        clip = VideoFileClip('output_video.mp4')
        clip = clip.fadeout(2)
        clip = clip.fadein(2)
        clip.write_videofile("output_video.mp4", fps=24, threads=4)

        return 'output_video.mp4'

    # Calculate the aspect ratio of the input image
    aspect_ratio = image.shape[1] / image.shape[0]

    # Scale the image to match the output_height while maintaining aspect ratio
    scaled_height = output_height
    scaled_width = int(output_height * aspect_ratio)
    image = cv2.resize(image, (scaled_width, scaled_height))

    # Create a VideoWriter object to save the video
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')

    # Customize the duration of the video (in seconds)
    num_frames = int(custom_duration * fps)
    out = cv2.VideoWriter('output_video.mp4', fourcc, fps, (output_width, output_height))

    # Generate the panning effect for the video
    for i in range(num_frames):
        x_offset = int(i * (scaled_width - output_width) / (num_frames - 1))
        frame = image[:, x_offset:x_offset + output_width, :]
        frame = cv2.resize(frame, (output_width, output_height))
        out.write(frame)

    # Release the VideoWriter and close the video file
    out.release()
    return 'output_video.mp4'


# pan_effect("images\chunk_13.jpg",10)