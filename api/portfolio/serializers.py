from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Education, Portfolio, Work


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = '__all__'


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = [
            'id',
            'title',
            'description',
            'image',
            'github_url',
            'web_url',
            'ordinal',
            'get_image_url',
            'get_view_count',
        ]
