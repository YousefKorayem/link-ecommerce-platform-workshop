import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartPaid, setCartPaid] = useState(() => {
    const storedPaid = localStorage.getItem('cartPaid');
    return storedPaid ? JSON.parse(storedPaid) : false;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('cartPaid', JSON.stringify(cartPaid));
  }, [cartPaid]);

  const addToCart = (course) => {
    setCartItems((prev) => {
      const alreadyInCart = prev.find((item) => item.id === course.id);
      return alreadyInCart ? prev : [...prev, course];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setCartPaid(false); // Reset payment status
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartPaid,
        setCartPaid
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
