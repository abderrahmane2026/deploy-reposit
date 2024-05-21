import React, { createContext, useState } from 'react';
import all_product from '../assetes/all_product'; 


export const ShopContext = createContext(null);

function getDefaultCart(){
  let cart = {};
  for(let i = 0; i < all_product.length; i++){
      cart[i] = 0;
  }
  return cart;
}

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    alert("Added to cart")
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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
