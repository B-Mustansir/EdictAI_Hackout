import os
import openai
openai.organization = "org-5LY5AiUTjRELf7YC1UtBfo0j"
openai.api_key = "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"
# print(openai.Model.list())

response = openai.Image.create(
  prompt="clock icon",
  n=1,
  size="1024x1024"
)

image_url = response['data'][0]['url']
print(image_url)