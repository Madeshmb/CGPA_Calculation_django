from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class RegistrationForm(UserCreationForm):
  email=forms.EmailField(required=True)
  
  class Meta:
    model=User
    fields=['username','email','password1','password2']
  
  def clean_email(self):
      email = self.cleaned_data.get('email')
      if not email.endswith('@gmail.com'):
          raise forms.ValidationError("Only Gmail addresses are allowed.")
      return email
  