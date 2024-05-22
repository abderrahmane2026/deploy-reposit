import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrdersePage.css"; // Import the CSS file

const sampleProducts = [
  { id: 1, name: 'Product 1', quantity: 5, status: 'confirmed' },
  { id: 2, name: 'Product 2', quantity: 3, status: 'noted' },
  { id: 3, name: 'Product 3', quantity: 8, status: 'confirmed' },
  { id: 4, name: 'Product 4', quantity: 2, status: 'noted' },
];

const OrderPage = () => {
  const [products, setProducts] = useState(sampleProducts);

  const handleDelete = (productId) => {
    // Delete product logic (not implemented in this example)
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleAccept = (productId) => {
    // Accept product logic (not implemented in this example)
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, status: "accepted" } : product
    );
    setProducts(updatedProducts);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="order-container">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{parseInt(product._id)}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.status}</td>
              <td>
                {product.status === "noted" && (
                  <>
                    <button
                      className="accept-btn"
                      onClick={() => handleAccept(product.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
