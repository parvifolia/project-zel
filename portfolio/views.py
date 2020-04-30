from django.shortcuts import render, get_object_or_404, redirect

def portfolio_view(request):
    return render (request, "portfolio/templates/home.html", {})
