from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
from .views import getListings

""" router = routers.DefaultRouter()
router.register(r'listings', views.getListings)
router.register(r'category', views.Category)
 """
urlpatterns = [
     #path('', include(router.urls)),
     path('api/', views.getListings, name="listings"),
     ]