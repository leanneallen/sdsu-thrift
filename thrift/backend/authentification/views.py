from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import UserRegistrationForm
from django.contrib.auth.decorators import login_required


def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect(reverse('login'))  # Assuming you have a URL named 'login'
    else:
        form = UserRegistrationForm()
    return render(request, 'registration/register.html', {'form': form})



@login_required
def profile(request):
    return render(request, 'registration/profile.html', {'user': request.user})
