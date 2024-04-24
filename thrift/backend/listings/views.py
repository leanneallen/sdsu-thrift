from django.db.models.query import QuerySet
from rest_framework import viewsets, routers
from django.urls import path, include
from django.contrib import admin
from .models import Listings, Category
from .serializers import ListingsSerializer, CategorySerializer
from rest_framework.response import Response

@api_view(['GET'])
def getListings(request, category = None):
    print(category)
    category = request.GET.get('category')
    listings = Listings.objects.all()
    if(category):
        listings = listings.filter(category=category)
    serializer = ListingsSerializer(listings, many=True)
    return Response(serializer.data )

@api_view(['GET'])
def getCategory(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


