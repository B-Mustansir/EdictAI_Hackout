# Create a talk 
import requests
import json
import os
import requests
import time

def create_a_talk(text): 

  url = "https://api.d-id.com/talks"

  payload = {
      "script": {
          "type": "text",
          "subtitles": "false",
          "provider": {
              "type": "microsoft",
              "voice_id": "en-IN-PrabhatNeural",
              "voice_config": {"rate": "medium"}
          },
          "ssml": "false",
          "input": f"{text}"
      },
      "config": {
          "fluent": "false",
          "pad_audio": "0.0"
      },
      "source_url": "https://i.ibb.co/0y0v4xM/Art-Photo-1-jpeg.jpg"
  }

  headers = {
      "accept": "application/json",
      "content-type": "application/json",
      "authorization": "Basic Y21sMGFXbzFPVGt5TjBCallYSndaWFJ5WVM1amIyMDp5Njh6eTUwNUl6NVlGVnVDNWc2eEk="
  }

  response = requests.post(url, json=payload, headers=headers)

  return(response)

# Response
  # {
  #   "id": "tlk_AbCs-xcz",
  #   "object": "talk",
  #   "created_at": "2020-09-03T13:56:54.995",
  #   "created_by": "123",
  #   "status": "created"
  # }

def get_a_talk(id):

  url = f"https://api.d-id.com/talks/{id}"

  headers = {
      "accept": "application/json",
      "authorization": "Basic Y21sMGFXbzFPVGt5TjBCallYSndaWFJ5WVM1amIyMDp5Njh6eTUwNUl6NVlGVnVDNWc2eEk="
  }

  response = requests.get(url, headers=headers)

  return(response)

# Response
  # {
  #   "user": {
  #     "features": [
  #       "stitch",
  #       "clips:write",
  #       "talks"
  #     ],
  #     "id": "auth0|6460b91700e0eb6feb78a6dd",
  #     "plan": "deid-trial",
  #     "authorizer": "basic",
  #     "email": "wiyapa2071@asuflex.com",
  #     "owner_id": "auth0|6460b91700e0eb6feb78a6dd"
  #   },
  #   "script": {
  #     "ssml": false,
  #     "subtitles": false,
  #     "type": "text",
  #     "provider": {
  #       "type": "microsoft",
  #       "voice_id": "en-IN-PrabhatNeural",
  #       "voice_config": {
  #         "rate": "medium"
  #       }
  #     }
  #   },
  #   "metadata": {
  #     "driver_url": "bank://lively/driver-01/original",
  #     "mouth_open": false,
  #     "num_faces": 1,
  #     "num_frames": 38,
  #     "processing_fps": 18.855547649457506,
  #     "resolution": [
  #       512,
  #       512
  #     ],
  #     "size_kib": 126.240234375
  #   },
  #   "audio_url": "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6460b91700e0eb6feb78a6dd/tlk_ODFYuHv1U1vSnMcGsd-3L/microsoft.wav?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1684156986&Signature=wZ26ZrzPL6YJhq1l7jATeSZEYSU%3D&X-Amzn-Trace-Id=Root%3D1-6460e0b9-1fa4bd8f267fe8925e469e9e%3BParent%3D09253ff62ade035b%3BSampled%3D0%3BLineage%3Da08e19fe%3A0",
  #   "created_at": "2023-05-14T13:23:05.152Z",
  #   "face": {
  #     "mask_confidence": -1,
  #     "detection": [
  #       185,
  #       116,
  #       326,
  #       329
  #     ],
  #     "overlap": "no",
  #     "size": 298,
  #     "top_left": [
  #       106,
  #       73
  #     ],
  #     "face_id": 0,
  #     "detect_confidence": 0.99826580286026
  #   },
  #   "config": {
  #     "stitch": false,
  #     "pad_audio": 0,
  #     "align_driver": true,
  #     "sharpen": true,
  #     "reduce_noise": false,
  #     "auto_match": true,
  #     "normalization_factor": 1,
  #     "logo": {
  #       "url": "d-id-logo",
  #       "position": [
  #         0,
  #         0
  #       ]
  #     },
  #     "motion_factor": 1,
  #     "result_format": ".mp4",
  #     "fluent": false,
  #     "align_expand_factor": 0.3
  #   },
  #   "source_url": "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6460b91700e0eb6feb78a6dd/tlk_ODFYuHv1U1vSnMcGsd-3L/source/Art-Photo-1-jpeg.jpg?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1684156986&Signature=gbvqHNEKr0RN75NPkjKl78zpN%2BQ%3D&X-Amzn-Trace-Id=Root%3D1-6460e0b9-1fa4bd8f267fe8925e469e9e%3BParent%3D09253ff62ade035b%3BSampled%3D0%3BLineage%3Da08e19fe%3A0",
  #   "created_by": "auth0|6460b91700e0eb6feb78a6dd",
  #   "status": "done",
  #   "driver_url": "bank://lively/",
  #   "modified_at": "2023-05-14T13:23:08.797Z",
  #   "user_id": "auth0|6460b91700e0eb6feb78a6dd",
  #   "subtitles": false,
  #   "id": "tlk_ODFYuHv1U1vSnMcGsd-3L",
  #   "duration": 2,
  #   "started_at": "2023-05-14T13:23:06.696",
  #   "result_url": "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6460b91700e0eb6feb78a6dd/tlk_ODFYuHv1U1vSnMcGsd-3L/1684070586657.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1684156988&Signature=%2Bhwvpw4RtQbF1ew%2FZ8FrWtYD5L4%3D&X-Amzn-Trace-Id=Root%3D1-6460e0bc-714ed011118c6cb40f967a81%3BParent%3D71185731153ca5b6%3BSampled%3D1%3BLineage%3D6b931dd4%3A0"
  # }

def create_a_video(name, text):

  responseTalk = create_a_talk(text)

  id_value = json.loads(responseTalk.text)["id"]

  responseLink = get_a_talk(id_value)

  while 'result_url' not in responseLink.text:
    time.sleep(1)
    responseLink = get_a_talk(id_value)

  result_value = json.loads(responseLink.text)['result_url']
  print(result_value)

  response = requests.get(result_value, stream=True)
  response.raise_for_status()

  directory = "videos"
  os.makedirs(directory, exist_ok=True)

  filename = name

  with open(f"{directory}/{filename}.mp4", 'wb') as file:
    for chunk in response.iter_content(chunk_size=8192):
      file.write(chunk)

  return(f"{directory}/{filename}.mp4")
  
