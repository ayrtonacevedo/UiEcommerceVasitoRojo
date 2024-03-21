import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Hooks de Redux para despachar acciones y seleccionar el estado
import { getProducts, getCategories } from "../../redux/actions"; // Acciones de Redux
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import CardProduct from "../../components/CardProduct/CardProduct";

const Home = () => {
  // useDispatch se utiliza para obtener la función dispatch de Redux
  const dispatch = useDispatch();
  // estados de redux
  const allProducts = useSelector((state) => state.allProducts);
  const allCategories = useSelector((state) => state.allCategories);

  // despacha las acciones cuando el componente se monta
  // useEffect(() => {
  //   dispatch(getProducts());
  //   dispatch(getCategories());
  // }, [dispatch]);

  return (
    <div className="home">
      <Carousel />
      <h1>Home</h1>
      <CardProduct />
    </div>
  );
};

export default Home;
