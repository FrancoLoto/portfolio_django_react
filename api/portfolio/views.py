from django.contrib.auth.models import User
from rest_framework import status, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Education, Portfolio
from .pagination import SmallSetPagination
from .serializers import (EducationSerializer, PortfolioListSerializer,
                          PortfolioSerializer, UserSerializer)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class PortfolioListView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        if Portfolio.objects.all().exists():
            projects = Portfolio.objects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(projects, request)
            serializer = PortfolioListSerializer(results, many=True)

            return paginator.get_paginated_response({"portfolio": serializer.data})
        else:
            return Response({"error": "No se encontraron proyectos."}, status=status.HTTP_404_NOT_FOUND)


class PortfolioDetailView(APIView):
    def get(self, request, id, format=None):
        print(f"Received request for project with ID {id}")
        if request is not None:
            if Portfolio.objects.filter(id=id).exists():
                project = Portfolio.objects.get(id=id)
                serializer = PortfolioSerializer(project)

                return Response({"project": serializer.data}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "El proyecto no fue encontrado."}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "La solicitud es nula."}, status=status.HTTP_400_BAD_REQUEST)
