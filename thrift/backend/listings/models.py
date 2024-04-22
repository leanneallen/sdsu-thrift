from django.db import models

class Listings(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    category = models.CharField(max_length=255)
    owner = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = 'postgres'
