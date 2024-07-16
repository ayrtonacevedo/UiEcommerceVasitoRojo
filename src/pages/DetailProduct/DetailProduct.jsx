import React, { useEffect } from "react";
import "./DetailProduct.css";
import CardDetailProduct from "../../components/CardDetailProduct/CardDetailProduct";
import { productDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetailId = useSelector((state) => state.productDetailId);

  useEffect(() => {
    dispatch(productDetail(id));
  }, [dispatch, id]);
  useEffect(() => {
    // Desplazar la página hacia arriba al montar un nuevo componente hijo
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="detailProduct">
      <CardDetailProduct productDetailId={productDetailId} />
    </div>
  );
};

export default DetailProduct;
