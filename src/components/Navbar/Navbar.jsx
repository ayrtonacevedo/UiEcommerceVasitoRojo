import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../img/navbar-logo.png";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <img src={logo} alt="Logo vasito rojo" />

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <div className="icons1">
        <a href="/login">
          <FaCircleUser size={40} style={{ color: "white" }} />
        </a>
        <a href="/cart">
          <RiShoppingCartFill size={40} style={{ color: "white" }} />
        </a>
      </div>

      <div className="hamgurger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
