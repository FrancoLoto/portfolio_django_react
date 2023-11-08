from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Category, Education, Portfolio, TechnologyTag


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class TechTagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnologyTag
        fields = [
            'id',
            'name'
        ]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name'
        ]


class PortfolioSerializer(serializers.ModelSerializer):
    tech_tags = TechTagsSerializer(many=True, read_only=True)
    category_name = serializers.CharField(source='category.name',
                                          read_only=True)

    class Meta:
        model = Portfolio
        fields = [
            'id',
            'title',
            'description',
            'content',
            'image',
            'github_url',
            'web_url',
            'ordinal',
            'get_view_count',
            'views',
            'tech_tags',
            'created_at',
            'category',
            'category_name'
        ]


class PortfolioListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Portfolio
        fields = [
            'id',
            'title',
            'description',
            'image',
            'ordinal'
        ]
