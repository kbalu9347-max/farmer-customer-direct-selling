from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model, authenticate
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegisterSerializer, UserSerializer

User = get_user_model()


# ✅ Register new user
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


# ✅ Login View (UPDATED - VERY IMPORTANT)
class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        # Authenticate user
        user = authenticate(username=username, password=password)

        if user is not None:
            # Generate JWT tokens
            refresh = RefreshToken.for_user(user)

            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": UserSerializer(user).data   # ✅ FIXED
            }, status=status.HTTP_200_OK)

        return Response(
            {"error": "Invalid username or password"},
            status=status.HTTP_401_UNAUTHORIZED
        )


# ✅ Get current logged-in user (optional)
class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


# ✅ Profile View (for dashboard)
class ProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, id):
        try:
            user = User.objects.get(id=id)
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response(
                {"error": "User not found"},
                status=status.HTTP_404_NOT_FOUND
            )


# ✅ Logout (handled in frontend for JWT)
class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        return Response(
            {"detail": "Logged out successfully"},
            status=status.HTTP_200_OK
        )