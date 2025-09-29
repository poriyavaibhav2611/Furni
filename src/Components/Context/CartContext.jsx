import { createContext, useContext, useState } from "react";

// 1️⃣ Create context
export const CartContext = createContext();

// 2️⃣ Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.name === product.name);
      if (exist) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  // Update quantity
  const updateQuantity = (name, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: qty } : item
      )
    );
  };

   // ✅ Add this function
  const clearCart = () => setCart([]);


  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart  }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useCart = () => useContext(CartContext);
