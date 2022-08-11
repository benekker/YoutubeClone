from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import CommentSerializer
from .models import Comment
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404

# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_by_video_id(request, video_id):
    if request.method == 'GET':
        comment =Comment.objects.filter(video_id = video_id)
        serializer = CommentSerializer(comment, many=True)
        return Response (serializer.data)

@api_view(['POST','PUT'])
@permission_classes([IsAuthenticated])
def user_comment (request, pk):
    if request.method == 'POST':
        serializer = CommentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'PUT':
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response (serializer.data, status=status.HTTP_200_OK)