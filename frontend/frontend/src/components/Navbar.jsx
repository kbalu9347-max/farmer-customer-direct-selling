import React from "react";
import "../css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  // ✅ SAFE user parsing (no crash)
  let user = null;

  try {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    console.log("Error parsing user:", error);
    
  }

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h2>Farmer Direct Selling System</h2>
<<<<<<< HEAD

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/orders">Orders</Link>

        {/* ✅ If user NOT logged in */}
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {/* ✅ If user IS logged in */}
        {user && (
          <>
            <span className="username">
               👤 {user?.username || "Guest"}
           </span>
            {user.role === "farmer" && (
              <>
                <Link to="/farmer-dashboard">Dashboard</Link>
                <Link to="/add-product">Add Product</Link>
              </>
            )}

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

      </div>

=======
    <div className="nav-links">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/cart">Cart</a>
      <a href="/login">Login</a>
      <a href="/Register">Register</a>
</div>
>>>>>>> 5d7ef9b (frontend updates)
    </nav>
  );
}

export default Navbar;