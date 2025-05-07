from django.urls import path
from .views import practice1_view

urlpatterns = [
    path('', practice1_view, name='practice1'),
]
