from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
import prediction.views as views 

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path('prediction/', views.yolov8_prediction, name='yolov8_prediction'),
]

urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]


