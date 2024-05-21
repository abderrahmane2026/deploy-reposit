import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

function ShopContextProvider(props) {
  const [all_product, setall_product] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setall_product(response.data);
        setCartItems(getDefaultCart(response.data)); // Initialize the cart based on fetched products
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchProducts();
  }, []);

  function getDefaultCart(products) {
    let cart = {};
    for (let product of products) {
      cart[product._id] = 0;
    }
    return cart;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    alert("Added to cart");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = (prev[itemId] || 1) - 1;
      if (newCount <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newCount };
    });
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
