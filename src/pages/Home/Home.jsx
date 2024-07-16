import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Hooks de Redux para despachar acciones y seleccionar el estado
import { getProducts } from "../../redux/actions"; // Acciones de Redux
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import CardProduct from "../../components/CardProduct/CardProduct";
import { Link } from "react-router-dom";

const Home = () => {
  // useDispatch se utiliza para obtener la función dispatch de Redux
  const dispatch = useDispatch();
  // estados de redux
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getProducts());
    // dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="home">
      <Carousel />
      <h1>Home</h1>
      <div className="cartas-container">
        {allProducts?.map((p) => (
          <div className="carta" key={p.id}>
            <Link to={"/product/" + p.id}>
              <CardProduct
                img={p.images[0]}
                price={p.price}
                model={p.model}
                volume={p.volume}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
