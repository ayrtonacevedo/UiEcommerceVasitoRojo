import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import logo from "../../img/navbar-logo.png";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiArrowCircleDown } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getBrandsByCategories } from "../../redux/actions";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const dispatch = useDispatch();

  const allBrandsByCategories = useSelector(
    (state) => state.allBrandsByCategories
  );
  const { calculateTotalQuantity } = useContext(CartContext);

  useEffect(() => {
    dispatch(getBrandsByCategories());
  }, [dispatch]);
  // useEffect(() => {
  //   console.log("Total products in cart:", calculateTotalQuantity());
  // }, [calculateTotalQuantity]);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [activeCategory, setActiveCategory] = useState(null); // Nuevo estado para controlar la categoría activa

  const handleClickBrand = (index) => {
    setActiveCategory(activeCategory === index ? null : index); // Cambia la categoría activa o la desactiva si ya está activa
  };

  return (
    <div className="navbar1">
      <div className="firstLine">
        <a href="/">
          <img src={logo} alt="Img Logo Vasito Rojo" className="logo" />
        </a>

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
            <span className="cartQuantity" id="cartQuantity">
              {calculateTotalQuantity()}
            </span>
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
        {allBrandsByCategories.map((category, index) => (
          <div key={index} className="select">
            <div className="categoryBybutton">
              <h4>{category.category}</h4>
              <button
                className="category-button"
                onClick={() => handleClickBrand(index)}
              >
                <HiArrowCircleDown size={20} style={{ color: "white" }} />
              </button>
            </div>
            <ul className="brands">
              {category.brands.map((brand, brandIndex) => (
                <li
                  key={brandIndex}
                  style={{
                    display: activeCategory === index ? "block" : null,
                  }}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
