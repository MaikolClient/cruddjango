from django.db import models

# Create your models here.


class Programador(models.Model):
    nombre = models.CharField(max_length=50)
    pais = models.CharField(max_length=50)
    nacimiento = models.DateField()
    puntuacion = models.PositiveSmallIntegerField()

    class Meta:
        db_table = "programador"
