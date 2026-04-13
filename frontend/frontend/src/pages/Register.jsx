<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import "../css/RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
=======
import React from "react";
import "../css/RegisterPage.css";
>>>>>>> 5d7ef9b (frontend updates)

  const navigate = useNavigate();

<<<<<<< HEAD
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [farmName, setFarmName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/register/",
        {
          username: name,
          email: email,
          password: password,
          role: role,
          phone: phone,
          location: location,
          farm_name: farmName
        }
      );

      alert("Registration Successful ✅");

      // ✅ Store user data
      localStorage.setItem("user", JSON.stringify(response.data));

      // ✅ Redirect based on role
      if (role.toLowerCase() === "farmer") {
        navigate("/farmer-dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.log(error.response?.data);
      alert("Registration Failed ❌");
    }
  };
=======
return(
<div className="form-container">

  <h2>Register</h2>

  <label>Name</label>
  <input type="text" placeholder="Enter your name" />

  <label>Email</label>
  <input type="email" placeholder="Enter your email" />

  <label>Password</label>
  <input type="password" placeholder="Enter password" />

  <button>Register</button>

  <p>Already have an account? <a href="/login">Login</a></p>
>>>>>>> 5d7ef9b (frontend updates)

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">

        <h2>Register</h2>

        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ✅ Role Dropdown */}
        <select
          required
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="farmer">Farmer</option>
          <option value="customer">Customer</option>
        </select>

        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* ✅ Show Farm Name only if Farmer */}
        {role === "farmer" && (
          <input
            type="text"
            placeholder="Farm Name"
            onChange={(e) => setFarmName(e.target.value)}
          />
        )}

        <button type="submit">Register</button>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </form>
    </div>
  );
}

export default Register;