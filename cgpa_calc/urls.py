from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns=[
  path('',views.cgpa,name='cgpa'),
  path('register/',views.register,name='register'),
  path('login/',auth_views.LoginView.as_view(template_name='login.html'),name='login'),
  path('logout/',views.logout_user,name='logout')
]