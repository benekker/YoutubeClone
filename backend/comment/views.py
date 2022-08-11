from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import CommentSerializer
from .models import Comment
from rest_framework import Status
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_by_video_id(request, video_id):
    if request.method == 'GET':
        comment =Comment.objects.filter(video_id = video_id)
        serializer = CommentSerializer(comment, many=True)
        return Response (serializer.data)

@api_view(['GET', 'POST','PUT'])
@permission_classes([IsAuthenticated])
def user_comment (request):
    if request.method == 'POST':
        serializer = CommentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()