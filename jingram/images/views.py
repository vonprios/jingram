from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers

# Create your views here.

class ListAllImages(APIView):

    # format=None으로 지정하면 json 포멧으로 응답
    def get(self, request, format=None):

        all_image = models.Image.objects.all() # 모델안에 있는 모든 오브젝트 종류의 이미지를 가져와라

        serializer = serializers.ImageSerializer(all_images, many=True)

        return Response(data=serializer.data)