from django.db import models

class Videos(models.Model):
    video=models.FileField(upload_to="video/",blank=1)
    name=models.CharField(max_length=100)
    script=models.TextField(blank=1)
    audio=models.FileField(upload_to='audios/',blank=1)
    link=models.CharField(max_length=200,blank=1)
    timestamp=models.DateTimeField(auto_now_add=True)
    
class Images(models.Model):
    image=models.FileField(upload_to='images/',blank=1)
    video=models.ForeignKey(Videos,on_delete=models.CASCADE)

class Videoclips(models.Model):
    videoclip=models.FileField(upload_to='videoclips/')
    video=models.ForeignKey(Videos,on_delete=models.CASCADE)




# Create your models here.
