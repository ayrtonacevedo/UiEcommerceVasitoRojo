import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

//import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "./redux/actions";
// const dispatch = useDispatch();
// const allProducts = useSelector((state) => state.allProducts);
// useEffect(() => {
//   dispatch(getProducts());
//   console.log(allProducts);
// });
