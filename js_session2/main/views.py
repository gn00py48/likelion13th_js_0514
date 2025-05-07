from django.shortcuts import render

def practice1_view(request):
    return render(request, 'practice/practice1.html')
