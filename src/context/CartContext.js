import React, { createContext, useState, useEffect } from "react";

// Crear el contexto del carrito
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Cargar productos del localStorage al montar el componente
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCartProducts(storedProducts);
  }, []);

  // Función para actualizar los productos del carrito
  const updateCartProducts = (products) => {
    setCartProducts(products);
    localStorage.setItem("products", JSON.stringify(products));
  };

  // Función para calcular la cantidad total de productos en el carrito
  const calculateTotalQuantity = () => {
    // return cartProducts.reduce((acc, product) => acc + product.quantity, 0);
    return cartProducts.length;
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, updateCartProducts, calculateTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
