import React from "react";
import "./CardEmptyCart.css";
import { RiShoppingCartFill } from "react-icons/ri";

export const CardEmptyCart = () => {
  return (
    <div className="CardEmptyCart">
      <RiShoppingCartFill size={60} style={{ color: "black" }} />
      <p>Agregá productos para armar tu carrito</p>
      <button className="btnContinueShopping">
        <a href="/">Continuar comprando</a>
      </button>
    </div>
  );
};
