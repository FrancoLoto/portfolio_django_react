from django.contrib.auth.models import User
from rest_framework import status, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Education, Portfolio, Work
from .serializers import (EducationSerializer, PortfolioSerializer,
                          UserSerializer, WorkSerializer)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


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
