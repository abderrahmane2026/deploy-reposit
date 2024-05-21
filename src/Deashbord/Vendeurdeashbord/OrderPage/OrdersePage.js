import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderPage.css'; // Import the CSS file

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products'); // Replace with your actual API endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    // Delete product logic (not implemented in this example)
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleAccept = (productId) => {
    // Accept product logic (not implemented in this example)
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, status: 'accepted' } : product
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
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.status}</td>
              <td>
                {product.status === 'noted' && (
                  <>
                    <button className="accept-btn" onClick={() => handleAccept(product.id)}>Accept</button>
                    <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
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

export default OrderPage;
