import cv2
import numpy as np

def add_image_to_video(input_video_path, output_video_path, image_path, horizontal_position, vertical_position, in_time, out_time, in_transition_duration=1, out_transition_duration=1):
    cap = cv2.VideoCapture(input_video_path)
    image = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)  # Load the image with transparency
    
    frame_width = int(cap.get(3))
    frame_height = int(cap.get(4))

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_video_path, fourcc, 30.0, (frame_width, frame_height))

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        current_time = cap.get(cv2.CAP_PROP_POS_MSEC) / 1000.0

        if in_time <= current_time <= out_time:
            image_height, image_width, channels = image.shape  # Get image dimensions
            
            if horizontal_position == 'left':
                x = 20
            elif horizontal_position == 'center':
                x = (frame_width - image_width) // 2
            elif horizontal_position == 'right':
                x = frame_width - image_width - 20

            if vertical_position == 'top':
                y = 20
            elif vertical_position == 'center':
                y = (frame_height - image_height) // 2
            elif vertical_position == 'bottom':
                y = frame_height - image_height - 20

            roi = frame[y:y + image_height, x:x + image_width]

            if current_time - in_time < in_transition_duration:
                alpha = (current_time - in_time) / in_transition_duration
                overlay = image[:, :, :3]  # Extract the RGB channels from the image
                frame[y:y + image_height, x:x + image_width] = cv2.addWeighted(roi, 1 - alpha, overlay, alpha, 0)
            elif out_time - current_time < out_transition_duration:
                alpha = (out_time - current_time) / out_transition_duration
                overlay = image[:, :, :3]
                frame[y:y + image_height, x:x + image_width] = cv2.addWeighted(roi, 1 - alpha, overlay, alpha, 0)
            else:
                overlay = image[:, :, :3]
                frame[y:y + image_height, x:x + image_width] = overlay

        out.write(frame)

    cap.release()
    out.release()
    cv2.destroyAllWindows()

# Example usage:
add_image_to_video('videos/video_1.mp4', 'output_video.mp4', 'not_cat.png', 'center', 'bottom', 5, 10)
