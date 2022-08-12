
from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>', views.get_comments_by_video_id),
    path('<int:pk>/', views.update_user_comment),
    path('',views.user_comment),
    path('<int:pk>/like', views.like_comment)
]
