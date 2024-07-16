import React, { useState, useEffect } from "react";
import "./CardCart.css";
import { CardEmptyCart } from "./CardEmptyCart";

const CardCart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updateProducts = storedProducts.map((product) => ({
      ...product,
      totalPrice: product.price * (product.quantity || 1),
    }));
    setCartProducts(updateProducts);
  }, []);

  const handleIncrease = (index) => {
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[index].quantity += 1;
    //actualizar el precio total basado en la nueva cantidad
    updatedCartProducts[index].totalPrice =
      updatedCartProducts[index].price * updatedCartProducts[index].quantity;
    setCartProducts(updatedCartProducts);
    saveLocal(updatedCartProducts);
  };

  const handleDecrease = (index) => {
    const updatedCartProducts = [...cartProducts];
    if (updatedCartProducts[index].quantity > 1) {
      updatedCartProducts[index].quantity -= 1;
      //actualizar el precio total basado en la nueva cantidad
      updatedCartProducts[index].totalPrice =
        updatedCartProducts[index].price * updatedCartProducts[index].quantity;
      setCartProducts(updatedCartProducts);
      saveLocal(updatedCartProducts);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartProducts = cartProducts.filter((_, i) => i !== index);
    setCartProducts(updatedCartProducts);
    saveLocal(updatedCartProducts);
  };

  const saveLocal = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };
  const calculateTotal = () => {
    return cartProducts.reduce((acc, product) => {
      // Solo sumamos el precio total si la cantidad es mayor a 0
      if (product.quantity > 0) {
        return acc + product.totalPrice;
      }
      return acc; // Devolvemos el acumulador sin cambios si la cantidad es 0
    }, 0); // Inicializamos el acumulador en 0
  };

  const calculateTotalQuantity = () => {
    return cartProducts.reduce((acc, product) => acc + product.quantity, 0);
  };
  return (
    <div className="CartContainer">
      <h4>Tu Carrito</h4>
      <div className="cardCartItems">
        <div className="itemProduct">
          {cartProducts.length ? (
            cartProducts.map((product, index) => (
              <div key={index} className="detailProductCart">
                <div>
                  {product.images && product.images.length > 0 && (
                    <img
                      src={product.images[0]}
                      className="imgProductCart"
                      alt="Img Product"
                    />
                  )}
                </div>
                <div className="model-eliminar">
                  <strong>{product.model}</strong>
                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(index)}
                  >
                    Eliminar
                  </button>
                </div>
                <div className="quantity-controls">
                  <button
                    className="btn-quantity"
                    onClick={() => handleDecrease(index)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className="btn-quantity"
                    onClick={() => handleIncrease(index)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="toPlay">
                    ${(product.price * product.quantity).toFixed(3)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <CardEmptyCart />
          )}
        </div>
        <div className="compra">
          <div className="resumenCompra">
            <h3>Resumen de compra</h3>
          </div>
          {cartProducts.length ? (
            <div className="compraItems">
              <p>Productos ({calculateTotalQuantity()})</p>
              <p className="totalPrice">
                Total: ${calculateTotal().toFixed(3)}
              </p>
              <button className="btnContinuarCompra">Continuar compra</button>
            </div>
          ) : (
            <p className="noProductsMessage">
              Aquí verás los importes de tu compra una vez que agregues
              productos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCart;
