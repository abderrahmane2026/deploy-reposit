import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ShopContext = createContext(null);

function ShopContextProvider(props) {
  const [all_product, setall_product] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setall_product(response.data);
        console.log(all_product);
        console.log(response.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchProducts();
  }, []);

  function getDefaultCart() {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
      cart[i] = 0;
    }
    return cart;
  }

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    alert("Added to cart");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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
