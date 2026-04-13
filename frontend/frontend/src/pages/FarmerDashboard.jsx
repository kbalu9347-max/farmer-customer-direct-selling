import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Farmerdashboard.css";

const API_BASE = "http://127.0.0.1:8000/api";

function FarmerDashboard() {

  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Product state
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: ""
  });

  // Orders state
  const [orders, setOrders] = useState([]);

  // Edit profile state
  const [editData, setEditData] = useState({});

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (user?.id) {
      fetchProfile();
    }
  }, []);

  // ================= PROFILE =================
  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `${API_BASE}/accounts/profile/${user.id}/`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setProfile(res.data);
      setEditData(res.data); // for editing
    } catch (err) {
      console.log(err);
    }
  };

  // ================= ADD PRODUCT =================
  const handleAddProduct = async () => {
    try {
      await axios.post(
        `${API_BASE}/products/`,
        product,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert("✅ Product added successfully");
      setProduct({ name: "", price: "", quantity: "" });
      setActiveTab("dashboard");
    } catch (err) {
      console.log(err);
      alert("❌ Failed to add product");
    }
  };

  // ================= VIEW ORDERS =================
  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        `${API_BASE}/orders/`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setOrders(res.data);
      setActiveTab("orders");
    } catch (err) {
      console.log(err);
    }
  };

  // ================= EDIT PROFILE =================
  const handleUpdateProfile = async () => {
    try {
      await axios.put(
        `${API_BASE}/accounts/profile/${user.id}/`,
        editData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert("✅ Profile updated");
      fetchProfile();
      setActiveTab("dashboard");
    } catch (err) {
      console.log(err);
      alert("❌ Update failed");
    }
  };

  if (!user) return <h2>Please login first</h2>;

  return (
    <div className="dashboard-container">

      <h2>🌾 Farmer Dashboard</h2>

      {/* ================= DASHBOARD VIEW ================= */}
      {activeTab === "dashboard" && profile && (
        <div className="profile-card">

          <h3>👤 {profile.username}</h3>

          <div className="profile-info">
            <p><b>Email:</b> {profile.email}</p>
            <p><b>Phone:</b> {profile.phone}</p>
            <p><b>Location:</b> {profile.location}</p>
            <p><b>Farm Name:</b> {profile.farm_name}</p>
          </div>

          <div className="dashboard-actions">
            <button onClick={() => setActiveTab("addProduct")}>
              ➕ Add Product
            </button>

            <button onClick={fetchOrders}>
              📦 View Orders
            </button>

            <button onClick={() => setActiveTab("editProfile")}>
              ✏️ Edit Profile
            </button>
          </div>

        </div>
      )}

      {/* ================= ADD PRODUCT ================= */}
      {activeTab === "addProduct" && (
        <div className="form-card">
          <h3>Add Product</h3>

          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
          />

          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})}
          />

          <input
            type="number"
            placeholder="Quantity"
            value={product.quantity}
            onChange={(e) => setProduct({...product, quantity: e.target.value})}
          />

          <button onClick={handleAddProduct}>Submit</button>
          <button onClick={() => setActiveTab("dashboard")}>Back</button>
        </div>
      )}

      {/* ================= VIEW ORDERS ================= */}
      {activeTab === "orders" && (
        <div className="orders-card">
          <h3>Orders</h3>

          {orders.length === 0 ? (
            <p>No orders found</p>
          ) : (
            orders.map((order, index) => (
              <div key={index} className="order-item">
                <p><b>Order ID:</b> {order.id}</p>
                <p><b>Product:</b> {order.product}</p>
                <p><b>Quantity:</b> {order.quantity}</p>
                <p><b>Status:</b> {order.status}</p>
              </div>
            ))
          )}

          <button onClick={() => setActiveTab("dashboard")}>Back</button>
        </div>
      )}

      {/* ================= EDIT PROFILE ================= */}
      {activeTab === "editProfile" && (
        <div className="form-card">
          <h3>Edit Profile</h3>

          <input
            type="text"
            value={editData.username || ""}
            onChange={(e) => setEditData({...editData, username: e.target.value})}
          />

          <input
            type="text"
            value={editData.phone || ""}
            onChange={(e) => setEditData({...editData, phone: e.target.value})}
          />

          <input
            type="text"
            value={editData.location || ""}
            onChange={(e) => setEditData({...editData, location: e.target.value})}
          />

          <input
            type="text"
            value={editData.farm_name || ""}
            onChange={(e) => setEditData({...editData, farm_name: e.target.value})}
          />

          <button onClick={handleUpdateProfile}>Update</button>
          <button onClick={() => setActiveTab("dashboard")}>Back</button>
        </div>
      )}

    </div>
  );
}

export default FarmerDashboard;