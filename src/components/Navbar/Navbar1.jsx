import React, { useState } from "react";
import "./Navbar1.css";
import logo from "../../img/navbar-logo.png";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar1 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar1">
      <div className="firstLine">
        <img src={logo} alt="Img Logo Vasito Rojo" className="logo" />

        <div className="searchBar">
          <input type="text" placeholder="Buscar productos, marcas y ofertas" />
          <button>
            <CiSearch size={20} />
          </button>
        </div>
        <div className="icons">
          <a href="/login">
            <FaCircleUser size={30} style={{ color: "white" }} />
          </a>
          <a href="/cart">
            <RiShoppingCartFill size={30} style={{ color: "white" }} />
          </a>
          <div className="hamburgerMenu" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "white" }} />
            ) : (
              <FaBars size={20} style={{ color: "white" }} />
            )}
          </div>
        </div>
      </div>
      <div className={click ? "categories active" : "categories"}>
        <ul>
          <li>vodka</li>
          <li>vodka</li>
          <li>vodka</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar1;
