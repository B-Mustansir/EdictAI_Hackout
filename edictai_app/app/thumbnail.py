from PIL import Image, ImageDraw, ImageFont,ImageOps

# Open the background image and resize it to the desired size
bg_image = Image.open("C:\\Users\\chawl\\Desktop\\n2v\\image captioning\\background.jpg")
bg_width, bg_height = bg_image.size
new_bg_size = (800, 600)
bg_image = bg_image.resize(new_bg_size)

# Open the two images to be added
image1 = Image.open("C:\\Users\\chawl\\Desktop\\n2v\\image captioning\\test.png")
image2 = Image.open("C:\\Users\\chawl\\Desktop\\n2v\\image captioning\\image1.jpeg")

# Resize the images to the desired size
new_size = (200, 200)
new_size2 = (200,300)
image1 = image1.resize(new_size2)
image2 = image2.resize(new_size)

# Add white border to the images
border_width = 8
image1 = ImageOps.expand(image1, border=border_width, fill=(255, 255, 255))
image2 = ImageOps.expand(image2, border=border_width, fill=(255, 255, 255))

# Calculate the position of the images
image1_x = border_width
image1_y = new_bg_size[1] - new_size[1] - border_width - 35
image2_x = new_bg_size[0] - new_size[0] - border_width - 35
image2_y = border_width

# Paste the images onto the background image at the desired positions
bg_image.paste(image1, (image1_x, image1_y))
bg_image.paste(image2, (image2_x, image2_y))

# Calculate the position of the text
text = "Sample Text"
font = ImageFont.truetype("C:\\Users\\chawl\\Desktop\\n2v\\Helvetica.ttf", 50)
text_width, text_height = font.getsize(text)
text_x1 = border_width
text_y1 = border_width
text_x2 = new_bg_size[0] - text_width - border_width
text_y2 = new_bg_size[1] - text_height - border_width

# Add text to the image
draw = ImageDraw.Draw(bg_image)
draw.text((text_x1, text_y1), text, font=font, fill=(255, 255, 255))
draw.text((text_x2, text_y2), text, font=font, fill=(255, 255, 255))

# Save the final image
bg_image.save("output.jpg")
