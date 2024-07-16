import React, { useContext } from "react";
import "./BuyButton.css";
import { CartContext } from "../../context/CartContext";

export const BuyButton = ({ product }) => {
  const { cartProducts, updateCartProducts } = useContext(CartContext);

  const onClick = () => {
    let products = [...cartProducts];

    // Buscar el producto en el array
    const existingProduct = products.find((p) => p.id === product.id);

    if (existingProduct) {
      // Si el producto ya existe, incrementar su cantidad
      existingProduct.quantity += 1;
    } else {
      // Si el producto no existe, agregarlo con una cantidad de 1
      products.push({
        ...product,
        quantity: 1,
      });
    }

    // Guardar en el almacenamiento local
    updateCartProducts(products);
  };

  return (
    <div className="buyButton">
      <button className="btnNow">
        <a href="/cart">Comprar ahora</a>
      </button>
      <button className="btnCarrito" onClick={onClick}>
        Agregar al carrito
      </button>
    </div>
  );
};
