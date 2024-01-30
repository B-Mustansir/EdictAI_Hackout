from django.shortcuts import render,HttpResponse,redirect
from django.core.mail import send_mail
from edictai_app.app.audio_test.ssml_1 import data
from .app import new_final
from .models import Videos,Images,Videoclips
from django.core.files.base import ContentFile
from pathlib import Path
from django.core.files import File
import io
import json
def index(req):
    if req.method=="POST":
            print("post request arrived")
            url=req.POST.get('url')
            url2 = req.POST.get('url2')
            content_passed = req.POST.get('contentorurl')
            if content_passed=="url_pass":
                link=new_final.edict_video(url,content_passed)
            else:
                link=new_final.edict_video(url2,content_passed)
            
            return redirect(link)
    return render(req,"index.html")

def test(req):
    path = Path("videos/chunk_7.mp4")
    video=Videos()
    with path.open(mode="rb") as f:
        video.name="ASif"
        video.video = File(f, name=path.name)
        video.save()
    return HttpResponse("Test chal raha hai")


def posttest(req):
    print("body",req.body)
    json_data = req.body.decode('utf-8')
    
    python_data = json.loads(json_data)
    print(python_data['name'])
    return HttpResponse("Test chal raha hai")
    

# Create your views here.
