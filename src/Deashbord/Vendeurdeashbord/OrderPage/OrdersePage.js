import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrdersePage.css"; // Import the CSS file

const OrdersPage = () => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("userr"));
  const sellerId = user._id;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://futterclubs-1.onrender.com/api/products/seller/${sellerId}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchProducts();
  }, [sellerId]); // Include sellerId in the dependency array

  const handleDelete = async (productId) => {
    try {
      await axios.put(`https://futterclubs-1.onrender.com/api/products/delete/${productId}`);
      // Update the UI to remove the deleted product
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleAccept = async (productId) => {
    try {
      await axios.put(`https://futterclubs-1.onrender.com/api/products/accept/${productId}`);
      // Update the UI to reflect the accepted product
      setProducts(
        products.map((product) =>
          product._id === productId
            ? { ...product, status: "accepted" }
            : product
        )
      );
    } catch (error) {
      console.error("Error accepting product", error);
    }
  };

  return (
    <div className="order-container">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Clubs</th>
           
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              
              <td>{product.status}</td>
              <td>
                {product.status === "noted" && (
                  <>
                    <button
                      className="accept-btn"
                      onClick={() => handleAccept(product._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(product._id)}
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
