import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { MdDelete } from "react-icons/md";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    // const orderDetails = {
    //   name: customerName,
    //   email: customerEmail,
    //   address: customerAddress,
    //   phone: customerPhone,
    //   paymentMethod,
    // };

    // const vendorOrders = all_product
    //   .filter((product) => cartItems[product._id] > 0)
    //   .reduce((acc, product) => {
    //     const vendorId = product.vendorId || "tayeb"; // Assuming each product has a vendorId
    //     if (!acc[vendorId]) {
    //       acc[vendorId] = [];
    //     }
    //     acc[vendorId].push({
    //       id: product._id,
    //       name: product.name,
    //       quantity: cartItems[product._id],
    //       price: product.price,
    //       total: product.price * cartItems[product._id],
    //     });
    //     return acc;
    //   }, {});

    // for (const vendorId in vendorOrders) {
    //   const vendorOrder = {
    //     ...orderDetails,
    //     items: vendorOrders[vendorId],
    //   };

    //   try {
    //     const response = await fetch(`/api/vendors/${vendorId}/orders`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(vendorOrder),
    //     });

    //     if (response.ok) {
    //       console.log(`Order sent to vendor ${vendorId}`);
    //     } else {
    //       console.error(`Failed to send order to vendor ${vendorId}`);
    //     }
    //   } catch (error) {
    //     console.error(`Error sending order to vendor ${vendorId}:`, error);
    //   }
    // }

    // // Optionally, clear the form and cart after submission
    // setCustomerName("");
    // setCustomerEmail("");
    // setCustomerAddress("");
    // setCustomerPhone("");
    // setPaymentMethod("");
    // setShowOrderForm(false);
    // // clearCart(); // Implement this function to clear the cart
  };

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
        {all_product.map((product) => {
          if (cartItems[product._id] > 0) {
            return (
              <div key={product._id}>
                <div className="cartitem-format">
                  <img
                    src={product.image}
                    alt=""
                    className="carticon-product-icon"
                  />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[product._id]}
                  </button>
                  <p>{product.price * cartItems[product._id]}</p>
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
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={adress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setCustomerPhone(e.target.value)}
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
