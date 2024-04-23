from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views import generic
from .models import Listings
from .models import Category
from .serializers import ListingsSerializer, CategorySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


class Listings(generic.ListView):
    queryset=Listings.objects.all()
    serializer_class = ListingsSerializer
    model=Listings
    def getListings(self, *args):
        queryset = self.get_queryset()   
        if(args):
            return queryset.filter(category__name=args[0])
        return queryset

class Category(generic.ListView):
    model=Category
    serializer_class = CategorySerializer
    queryset = Category.objects.all()