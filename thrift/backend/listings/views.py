from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views import generic
from .models import Listings
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
class getListings(generic.ListView):
    model=Listings
    def get_queryset(self) -> QuerySet[Any]:
        return Listings.objects.all()

