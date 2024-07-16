import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Layout.css";
const Layout = ({ children }) => {
  // useEffect(() => {
  //   // Desplazar la página hacia arriba al montar un nuevo componente hijo
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
