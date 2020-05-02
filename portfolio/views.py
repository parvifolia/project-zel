from django.shortcuts import render, get_object_or_404, redirect

def portfolio_view(request):
    return render (request, "portfolio/templates/home.html", {})

def m402(request):
    return render (request, "portfolio/templates/projects/m402.html", {})


def about_view(request):
    return render (request, "portfolio/templates/about.html", {})
    
def cv_view(request):
    return render (request, "portfolio/templates/cv.html", {})

def page404(request, exception=None):
    return render (request, "portfolio/templates/404.html", status=404)