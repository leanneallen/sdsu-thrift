from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views import generic
from .models import Listings
from .models import Category
from .serializers import ListingsSerializer, CategorySerializer
from rest_framework.decorators import api_view
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

@api_view(['POST'])
def createListing(request):
    serializer = ListingsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['UPDATE'])
def updateListing(request, pk):
    listing = Listings.objects.get(id=pk)
    serializer = ListingsSerializer(instance=listing, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def getCategory(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)