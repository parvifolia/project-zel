from django.shortcuts import render, get_object_or_404, redirect

def portfolio_view(request):
    return render (request, "portfolio/templates/home.html", {})

def m402(request):
    return render (request, "portfolio/templates/m402.html", {})
def m401(request):
    return render (request, "portfolio/templates/m401.html", {})
def m302(request):
    return render (request, "portfolio/templates/m302.html", {})
def m301(request):
    return render (request, "portfolio/templates/m301.html", {})


def about_view(request):
    return render (request, "portfolio/templates/about.html", {})
    
def cv_view(request):
    return render (request, "portfolio/templates/cv.html", {})

def workshop_view(request):
    return render (request, "portfolio/templates/workshop.html", {})

def flaneur(request):
    return render (request, "portfolio/templates/flaneur.html", {})
def goz(request):
    return render (request, "portfolio/templates/goz.html", {})
def meydan(request):
    return render (request, "portfolio/templates/meydan.html", {})

def cizim_view(request):
    return render (request, "portfolio/templates/draw.html", {})

def page404(request, exception=None):
    return render (request, "portfolio/templates/404.html", status=404) 