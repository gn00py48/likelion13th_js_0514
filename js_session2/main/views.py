from django.shortcuts import render

def practice_view(request):
    return render(request, 'practice/practice.html')
