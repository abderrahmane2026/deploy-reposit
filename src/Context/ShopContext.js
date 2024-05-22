import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

function ShopContextProvider(props) {
  const [all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setAllProduct(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const fetchCart = async () => {
      try {
        const clientId = "some-client-id"; // Replace with actual client ID logic
        const response = await axios.get(`/api/cart/${clientId}`);
        setCartItems(response.data.products);
      } catch (error) {
        console.error("Error fetching cart", error);
      }
    };

    fetchProducts();
    fetchCart();
  }, []);

  const addToCart = async (productId) => {
    try {
      const clientId = "some-client-id"; // Replace with actual client ID logic
      const response = await axios.post(
        `/api/cart/${clientId}/add/${productId}`
      );
      setCartItems(response.data.products);
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const clientId = "some-client-id"; // Replace with actual client ID logic
      const response = await axios.post(
        `/api/cart/${clientId}/remove/${productId}`
      );
      setCartItems(response.data.products);
    } catch (error) {
      console.error("Error removing from cart", error);
    }
  };

  const clearCart = async () => {
    const clientId = "some-client-id"; // Replace with actual client ID logic
    await axios.post(`/api/cart/${clientId}/clear`);
    setCartItems([]); // Clear the local cart state
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
