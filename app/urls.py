from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('lista_programadores/', views.lista_programadores, name='lista_programadores')
]
