from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import ReplySerializer
from .models import Reply
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_reply_by_comment_id(request, comment):
    if request.method == 'GET':
        reply = Reply.objects.filter(comment = comment)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reply(request):
    if request.method == 'POST':
        serializer = ReplySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED) 