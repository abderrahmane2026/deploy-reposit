import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrdersePage.css"; // Import the CSS file

const OrdersPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleAccept = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, status: "accepted" } : product
    );
    setProducts(updatedProducts);
  };

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
              <td>{product.id}</td>
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
