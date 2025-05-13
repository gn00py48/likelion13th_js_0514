from django.urls import path
from .views import practice_view

urlpatterns = [
    path('', practice_view, name='practice'),
]
