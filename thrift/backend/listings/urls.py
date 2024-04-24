from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
     #path('', include(router.urls)),
     path('listings/<str:category>/', views.getListings, name="listings"),
     ]

