from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader

def index(request):
    return HttpResponse("<h1>Hello, world. You're at the polls index.</h1>")
