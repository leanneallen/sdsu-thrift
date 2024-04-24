# Import necessary modules and classes
from django.db.models.query import QuerySet
from rest_framework import viewsets, routers
from django.urls import path, include
from django.contrib import admin
from .models import Listings, Category
from .serializers import ListingsSerializer, CategorySerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.views.generic import ListView
from .models import Category


class CategoryView(ListView):
    model = Category
    template_name = 'categories/category_list.html'


# Define the Listings viewset for API usage
class ListingsViewSet(viewsets.ModelViewSet):
    queryset = Listings.objects.all()
    serializer_class = ListingsSerializer

# Define the Category viewset for API usage
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Setup the DRF router for automatic URL routing
router = routers.DefaultRouter()
router.register(r'listings', ListingsViewSet, basename='listings')
router.register(r'category', CategoryViewSet, basename='category')

# URL patterns for Django project
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),  # Incorporates all routes defined by the router
    path('authentification/', include('authentification.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
