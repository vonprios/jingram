from rest_framework import serializers
from . import models

# 시리얼라이저는 json(javascript)과 파이썬의 연결다리역할
class ImageSerializer(serializers.Serializer):

    class Meta:
        model = models.Image
        fields = '__all__'


class CommentSerializer(serializers.Serializer):

    class Meta:
        model = models.Comment
        fields = '__all__'


class LikeSerializer(serializers.Serializer):

    class Meta:
        models = models.Like
        fields = '__all__'