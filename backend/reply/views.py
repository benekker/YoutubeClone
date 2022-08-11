from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from backend import comment

from backend.comment import serializers
from .serializers import ReplySerializer
from .models import Reply
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_reply_by_comment_id(request, pk):
    if request.method == 'GET':
        reply = Reply.objects.filter(pk=pk)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reply(request,pk):
    if request.method == 'POST':
        serializer = ReplySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, comment = pk)
            return Response(serializer.data, status=status.HTTP_201_CREATED) 