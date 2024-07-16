import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
