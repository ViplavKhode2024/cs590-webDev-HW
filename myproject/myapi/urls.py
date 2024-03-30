# from django.urls import path
# from . import views

# urlpatterns = [
#     path('login/', views.login, name='login'),
# ]

from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('login/', views.LoginView, name='api_login'),
    path('addmembers/', views.AddMember, name='api_add'),
    path('getdata/', views.GetData, name='get_data'),
    path('generate_pdf/', views.generate_pdf, name='generate_pdf'),
]