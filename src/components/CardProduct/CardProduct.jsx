import React from "react";
import "./CardProduct.css";
const CardProduct = ({ img, price, model, volume }) => {
  // const product = {
  //   model: "Fernet Branca",
  //   volume: "750ml", // Volumen en mililitros (ml)
  //   sales_format: "Unidad", // Por ejemplo: Botella, Lata, etc.
  //   unit_per_pack: 1, // Unidades por paquete
  //   price: 8.999, // Precio en la moneda correspondiente
  //   images: [
  //     "https://http2.mlstatic.com/D_NQ_NP_690122-MLA68961244202_042023-O.webp",
  //   ],
  //   stock: 100, // Cantidad en stock
  //   category: "APERITIVO",
  //   brand: "BRANCA",
  // };
  return (
    <div className="cardProductContainer">
      <img src={img} alt="Image Product" className="cardImg" />
      <div className="cardDetail">
        <p className="cardPrice">$ {price}</p>
        <div className="cardModelName">
          <h2 className="cardModel">
            {model} {volume}
          </h2>
          {/* <p className="cardVolume">{product.volume}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
