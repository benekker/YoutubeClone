
from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>', views.get_comments_by_video_id),
    path('<int:pk>/', views. user_comment)
]
