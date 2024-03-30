from django.db import models

class Members(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    designation = models.TextField()
    status = models.IntegerField()
    country = models.TextField()
