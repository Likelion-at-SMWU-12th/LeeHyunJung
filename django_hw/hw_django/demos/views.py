from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def myhobby(request):
    #return HttpResponse('나의 취미')
    return render(request, 'myhobby.html')