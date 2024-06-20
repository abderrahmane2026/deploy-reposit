import React, { useEffect, useState } from "react";
import "./ProdectList.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("userr"));
  const sellerId = user?._id;

  console.log(sellerId);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://futterclubs-1.onrender.com/api/products/seller/${sellerId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Expected array but got", data);
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    if (sellerId) {
      fetchProducts();
    }
  }, [sellerId]);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-quantity">Quantity: {product.quantity}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
