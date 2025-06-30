from django.shortcuts import render,redirect
from django.http import HttpResponse,request
from .forms import RegistrationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
# Create your views here.
def cgpa(request):
  return render(request,'cgpa.html')

def register(request):
  if request.method=='POST':
    form=RegistrationForm(request.POST)
    if form.is_valid():
      form.save()
      username=form.cleaned_data.get('username')
      messages.success(request,f'{username} account successfully created')
      return redirect('login')
  else:
    form=RegistrationForm(request.POST)
  return render(request,'register.html',{'form':form})

@login_required
def logout_user(request):
    logout(request)
    return redirect('login')