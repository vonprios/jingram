from django.contrib import admin
from . import models

# Register your models here.

# Admin 패널에서 어떻게 보일지 결정
@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    # pass 텅빈 클래스를 의미
    
    # 이미지 수정을 하고 싶은면
    list_display_links = (
        'location',
    )

    # 검색기능
    search_fields = (
        'location',
        'caption',
    )

    # 필터기능
    list_filter = (
        'location',
        'creator'
    )

    list_display = (
        'file',
        'location',
        'caption',
        'creator',
        'created_at',
        'updated_at',
    )

@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):

    list_display = (
        'creator',
        'image',
        'created_at',
        'updated_at',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'message',
        'creator',
        'image',
        'created_at',
        'updated_at',
    )