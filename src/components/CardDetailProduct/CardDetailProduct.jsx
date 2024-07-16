import React, { useState, useEffect } from "react";
import "./CardDetailProduct.css";
import { BuyButton } from "../BuyButton/BuyButton";

const CardDetailProduct = ({ productDetailId }) => {
  const [selectedImage, setSelectedImage] = useState(
    productDetailId.images ? productDetailId.images[0] : null
  );

  const handleImageHover = (image) => {
    setSelectedImage(image);
  };
  useEffect(() => {
    // Actualizar la imagen seleccionada cuando productDetailId cambie
    if (productDetailId.images && productDetailId.images.length > 0) {
      setSelectedImage(productDetailId.images[0]);
    }
  }, [productDetailId]);
  return productDetailId ? (
    <div className="container">
      <div className="containerCardDetailProduct">
        <div className="imgProduct">
          <div className="imgs">
            {productDetailId.images
              ? productDetailId.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image Product ${index + 1}`}
                    onMouseEnter={() => handleImageHover(image)}
                  />
                ))
              : null}
          </div>

          <div className="imgProductGrand">
            <img src={selectedImage} alt="Imagen Product Grande"></img>
          </div>
        </div>
        <div className="infoProduct">
          <h1 className="model">{productDetailId.model}</h1>
          <span className="price">${productDetailId.price}</span>
          <p>
            <strong>Volumen:</strong> {productDetailId.volume}
          </p>
          <p>
            <strong>Formato de venta:</strong> {productDetailId.sales_format}
          </p>
          <p>
            <strong>Unidades por paquete:</strong>{" "}
            {productDetailId.unit_per_pack}
          </p>
          <p>
            <strong>Stock:</strong> {productDetailId.stock}
          </p>
        </div>
        <div className="shop">
          <BuyButton product={productDetailId} />
        </div>
        <div className="caracteristicasProduct">
          <h2>Caracteristicas Principales</h2>
          <table className="tableCategory">
            <tbody>
              <tr>
                <td>
                  <strong>Categoría:</strong>
                </td>
                <td>{productDetailId.category}</td>
              </tr>
              <tr>
                <td>
                  <strong>Marca:</strong>
                </td>
                <td>{productDetailId.brand}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
};

export default CardDetailProduct;
