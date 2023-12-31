from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'education', views.EducationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('portfolio', views.PortfolioListView.as_view()),
    path('portfolio/detail/<int:id>', views.PortfolioDetailView.as_view()),
]
