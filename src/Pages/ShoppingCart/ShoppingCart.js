import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { MdDelete } from "react-icons/md";
import "./ShoppingCart.css";
import axios from "axios";

export default function ShoppingCart() {
  const { all_product, cartItems, removeFromCart, clearCart } =
    useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const navigate = useNavigate();

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      address,
      phone,
      paymentMethod,
    };

    try {
      const response = await axios.post("/api/order/submit", formData);
      console.log(response.data);
      alert("Your order is submitted");

      // Clear the cart
      const clientId = "some-client-id"; // Replace with actual client ID logic
      await axios.post(`/api/cart/${clientId}/clear`);

      // Update the product quantities
      all_product.forEach(async (product) => {
        if (cartItems[product._id]) {
          try {
            await axios.put(`/api/products/${product._id}`, {
              quantity: product.quantity - cartItems[product._id],
            });
            console.log(`Updated product ${product._id} quantity`);
          } catch (error) {
            console.error(
              `Error updating product ${product._id} quantity`,
              error
            );
          }
        }
      });

      clearCart(); // Clear the local cart state
      navigate("/");
    } catch (error) {
      alert("Error submitting your order");
      console.log(error);
    }
  };

  if (!all_product || all_product.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shopping-cart-page">
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {cartItems.map((cartItem) => {
          const product = all_product.find((p) => p._id === cartItem.productID);
          if (product) {
            return (
              <div key={cartItem.productID}>
                <div className="cartitem-format">
                  <img
                    src={product.image}
                    alt=""
                    className="carticon-product-icon"
                  />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  <button className="cartitems-quantity">
                    {cartItem.quantity}
                  </button>
                  <p>{product.price * cartItem.quantity}</p>
                  <button
                    className="remove-button"
                    onClick={() => {
                      removeFromCart(product._id);
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <button className="order-button" onClick={() => setShowOrderForm(true)}>
        Order
      </button>

      {showOrderForm && (
        <div className="order-form">
          <h2>Submit Your Order</h2>
          <form onSubmit={handleOrderSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="payment-method">Payment Method:</label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
            </div>
            <button type="submit" className="submit-order-button">
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
