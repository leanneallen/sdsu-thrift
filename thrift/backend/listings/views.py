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

class getListings(generic.ListView):
    model=Listings
    def get_queryset(self) -> QuerySet[Any]:
        return Listings.objects.all()

def getListings(request):
    listings = Listings.objects.all()
    serializer = ListingsSerializer(listings, many=True)
    return Response(serializer.data)


""" def getListings(request):
    category = None
    serializer = ListingsSerializer(listings, many=True)
    try:
        listings = Listings.objects.all()
        if(category):
            listings = listings.filter(category)
        
    except Exception as e:
        return Response({'error': str(e)}, status=500) """
class Category(generic.ListView):
    model=Category
    serializer_class = CategorySerializer
    queryset = Category.objects.all()