import cv2
import numpy as np

video_file = 'videos/video_1.mp4'
cap = cv2.VideoCapture(video_file)

image_file = 'cat.jpg'
image = cv2.imread(image_file)

horizontal_position = 'center'  # 'left', 'center', or 'right'
vertical_position = 'bottom'   # 'top', 'center', or 'bottom'

horizontal_padding = 50
vertical_padding = 50

frame_width = int(cap.get(3))
frame_height = int(cap.get(4))

output_file = 'output_video.mp4'
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter(output_file, fourcc, 30.0, (frame_width, frame_height))

start_time = 5
end_time = 10

fade_in_duration = 1
fade_out_duration = 1

while True:
    ret, frame = cap.read()
    if not ret:
        break

    current_time = cap.get(cv2.CAP_PROP_POS_MSEC) / 1000.0

    if start_time <= current_time <= end_time:
        image_height, image_width, _ = image.shape

        if horizontal_position == 'left':
            x = horizontal_padding
        elif horizontal_position == 'center':
            x = (frame_width - image_width) // 2
        elif horizontal_position == 'right':
            x = frame_width - image_width - horizontal_padding

        if vertical_position == 'top':
            y = vertical_padding
        elif vertical_position == 'center':
            y = (frame_height - image_height) // 2
        elif vertical_position == 'bottom':
            y = frame_height - image_height - vertical_padding

        roi = frame[y:y + image_height, x:x + image_width]

        if current_time - start_time < fade_in_duration:
            alpha = (current_time - start_time) / fade_in_duration
            frame[y:y + image_height, x:x + image_width] = cv2.addWeighted(roi, 1 - alpha, image, alpha, 0)
        elif end_time - current_time < fade_out_duration:
            alpha = (end_time - current_time) / fade_out_duration
            frame[y:y + image_height, x:x + image_width] = cv2.addWeighted(roi, 1 - alpha, image, alpha, 0)
        else:
            frame[y:y + image_height, x:x + image_width] = image

    out.write(frame)

cap.release()
out.release()
cv2.destroyAllWindows()