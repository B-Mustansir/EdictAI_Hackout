import os
import openai
openai.organization = ""
openai.api_key = ""
# print(openai.Model.list())

response = openai.Image.create(
  prompt="clock icon",
  n=1,
  size="1024x1024"
)

image_url = response['data'][0]['url']
print(image_url)