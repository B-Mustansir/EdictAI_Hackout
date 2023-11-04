from django.shortcuts import render,HttpResponse,redirect
from django.core.mail import send_mail
from .app import new_final
from .models import Videos,Images,Videoclips
from django.core.files.base import ContentFile
from pathlib import Path
from django.core.files import File
def index(req):
    if req.method=="POST":
            print("post request arrived")
            url=req.POST['url']
            link=new_final.edict_video(url)
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

    
    

# Create your views here.
