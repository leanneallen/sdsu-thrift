from django.db import models
from django.urls import reverse
import uuid

class Listings(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4) #help_text= "Unique ID for this particular listing"
    title = models.CharField(max_length=32)
    image = models.ImageField(upload_to='media/')
    category = models.CharField(max_length=255)
    owner = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.title
    def get_absolute_url(self):
        return reverse('listings-detail', args=[str(self.title)])

class Category(models.Model):
    name = models.CharField(max_length=20)
    help_text = "Enter a category (e.g. Furniture)"
    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('category-detail', args=[str(self.name)])

