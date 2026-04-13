import React from "react";
import "./cart.css";
import tomato from "../assets/images/tomato.jpg";
import carrot from "../assets/images/carrot.jpg";

<<<<<<< HEAD
function Cart() {
  return (
    <div className="cart-container">
      <h2>Cart</h2>

      <div className="cart-table">
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        {/* Item 1 */}
        <div className="cart-row">
          <div className="product-info">
           
            <div>
              <p>Tomatoes</p>
              <small>₹50 / kg</small>
            </div>
          </div>

          <span>₹50/kg</span>

          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <span>₹100</span>
        </div>

        {/* Item 2 */}
        <div className="cart-row">
          <div className="product-info">
           
            <div>
              <p>Carrots</p>
              <small>₹30 / kg</small>
            </div>
          </div>

          <span>₹30/kg</span>

          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <span>₹60</span>
        </div>

        {/* Total Section */}
        <div className="cart-total">
          <h3>Total ₹130</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
=======
function Cart(){
  return(
    <div>
      <h1>Your Cart</h1>
    </div>
  )
>>>>>>> 5d7ef9b (frontend updates)
}

export default Cart;