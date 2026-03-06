from django.db import models

# Create your models here.


class Farmer(models.Model):
    name=models.CharField(max_length=100)
    phone=models.CharField(max_length=15)
    location=models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name=models.CharField(max_length=100)
    price = models.IntegerField()
    quantity = models.IntegerField()
    Farmer = models.ForeignKey(Farmer,
    on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Order(models.Model):
    product = models.ForeignKey(Product,
on_delete=models.CASCADE)
    customer_name =models.CharField(max_length=100)
    quantity=models.IntegerField()
