import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Navbar1 from "../components/Navbar/Navbar1";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar1 />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
