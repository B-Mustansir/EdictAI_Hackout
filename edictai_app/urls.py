from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('',views.index,name="index"),
    path("test/",views.test,name="test"),
    path('posttest/',csrf_exempt(views.posttest),name="posttest")
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
