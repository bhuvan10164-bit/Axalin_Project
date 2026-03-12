from django.db import models

class Product(models.Model):
    name        = models.CharField(max_length=200)
    brand       = models.CharField(max_length=200)
    category    = models.CharField(max_length=100)
    size        = models.CharField(max_length=10)
    stock       = models.IntegerField(default=0)
    price       = models.FloatField()
    image       = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.brand} – {self.name} ({self.size})"
