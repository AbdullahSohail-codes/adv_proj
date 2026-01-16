import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

// Generate random user details
const generateUserDetails = () => {
  const firstNames = ["John", "Emma", "Michael", "Sarah", "David", "Jessica", "Robert", "Anna"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis"];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Miami", "Seattle", "Boston"];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`;
  const phone = `+1 ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
  const city = cities[Math.floor(Math.random() * cities.length)];
  const address = `${Math.floor(Math.random() * 9000) + 1000} Main Street, ${city}, USA`;
  
  return { firstName, lastName, email, phone, address, city };
};

function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();
  const [userDetails] = useState(generateUserDetails());
  const [tax] = useState(0.08); // 8% tax

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const taxAmount = subtotal * tax;
  const total = subtotal + taxAmount;

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-content">
          <h1>🛒 Your Cart is Empty</h1>
          <p>Start adding movies and games to your cart!</p>
          <button onClick={() => navigate("/")} className="continue-shopping-btn">
            ← Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <button onClick={() => navigate("/")} className="back-button">
        ← Back to Shopping
      </button>

      <h1 className="cart-title">🛒 Shopping Cart</h1>

      <div className="cart-layout">
        {/* Customer Info Section */}
        <div className="customer-section">
          <h2>Customer Information</h2>
          <div className="customer-details">
            <div className="detail-item">
              <span className="label">Name:</span>
              <span className="value">{userDetails.firstName} {userDetails.lastName}</span>
            </div>
            <div className="detail-item">
              <span className="label">Email:</span>
              <span className="value">{userDetails.email}</span>
            </div>
            <div className="detail-item">
              <span className="label">Phone:</span>
              <span className="value">{userDetails.phone}</span>
            </div>
            <div className="detail-item">
              <span className="label">Address:</span>
              <span className="value">{userDetails.address}</span>
            </div>
            <div className="detail-item">
              <span className="label">City:</span>
              <span className="value">{userDetails.city}</span>
            </div>
          </div>
        </div>

        {/* Cart Items Section */}
        <div className="cart-items-section">
          <h2>Items ({cartItems.length})</h2>
          <div className="items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/100x150?text=No+Image")
                    }
                  />
                </div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p className="genre">Genre: {item.genre}</p>
                  <p className="story">{item.story.substring(0, 80)}...</p>
                </div>
                <div className="item-price">
                  <span className="price">${item.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="remove-button"
                  title="Remove from cart"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-box">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span className="amount">${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (8%):</span>
              <span className="amount">${taxAmount.toFixed(2)}</span>
            </div>
            <div className="summary-row shipping">
              <span>Shipping:</span>
              <span className="amount">FREE</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total:</span>
              <span className="amount">${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
