from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from listings.views import ListingsViewSet, CategoryViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = routers.DefaultRouter()
router.register(r'listings', ListingsViewSet, basename='listings')
router.register(r'category', CategoryViewSet, basename='category')

urlpatterns = [

     #path('', include(router.urls)),
     path('listings/<str:category>/', views.getListings, name="listings"),
     ]

