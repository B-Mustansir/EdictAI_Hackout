from moviepy.editor import VideoFileClip

# Load your video file
clip = VideoFileClip("final_output.mp4")

# Add a fade-in at the beginning (duration in seconds)
clip = clip.fadein(2)

# Add a fade-out at the end (duration in seconds)
clip = clip.fadeout(2)

# Write the result to a new file
clip = clip.subclip(4)
clip.write_videofile("output_video3.mp4")
