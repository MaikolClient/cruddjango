from django.shortcuts import render
from .models import Programador
from django.http import JsonResponse


# Create your views here.

def index(request):
    return render(request, 'index.html')

def lista_programadores(_request):
    programadores=list(Programador.objects.values())
    data={'programadores':programadores}
    return JsonResponse(data)