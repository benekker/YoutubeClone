
from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.get_reply_by_comment_id),
    path('', views.create_reply),
]