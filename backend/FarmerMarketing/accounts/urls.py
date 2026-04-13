from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    # ✅ Register
    path('register/', views.RegisterView.as_view(), name='register'),

    # ✅ Custom Login (FIXED)
    path('login/', views.LoginView.as_view(), name='login'),

    # ✅ Refresh Token
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # ✅ Current user
    path('me/', views.UserDetailView.as_view(), name='user_detail'),

    # ✅ Logout
    path('logout/', views.LogoutView.as_view(), name='logout'),

    # ✅ Profile
    path('profile/<int:id>/', views.ProfileView.as_view()),
]