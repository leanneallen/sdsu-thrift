from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
from .views import Listings

router = routers.DefaultRouter()
router.register(r'listings', views.Listings)
router.register(r'category', views.Category)

urlpatterns = [
     #path('', views.index, name='index' ),
     path('api/', views.Listings.as_view(), name="listings"),
     ]