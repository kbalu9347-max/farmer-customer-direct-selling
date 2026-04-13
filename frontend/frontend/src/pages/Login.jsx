import React, { useState } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
import { Link } from "react-router-dom";
>>>>>>> 5d7ef9b (frontend updates)
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const navigate = useNavigate();

  const handleLogin = async () => {

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/login/",
        {
          username: username,
          password: password
        }
      );

      console.log("LOGIN DATA:", response.data);

      // ✅ Save token & user
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login Successful ✅");

      // ✅ Redirect based on role
      if (response.data.user.role === "farmer") {
        navigate("/farmer-dashboard");
      } else {
        navigate("/");
      }
      window.location.reload();
    } catch (error) {
      console.log("ERROR:", error.response?.data);
      alert("Invalid Username or Password ❌");
    }

  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="register-text">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>

      </div>
    </div>
  );
=======

  const handleLogin = () => {
    if(username === "" || password === ""){
      alert("Please enter username and password");
    }
    else{
      alert("Login Successful");
    }
  }

  return(
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="register-text">
          Don't have an account? 
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  )
>>>>>>> 5d7ef9b (frontend updates)
}

export default Login;