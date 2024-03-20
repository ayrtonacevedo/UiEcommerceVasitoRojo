import React from "react";
import "./Footer.css";
import logo from "../../img/navbar-logo.png";
import { FaWarehouse } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <img src={logo} alt="Img Logo Vasito Rojo" className="logo" />
        <div className="redes">
          <h3>Contacto</h3>
          <div className="location">
            <FaWarehouse /> Rosario - Argentina
          </div>
          <div className="mail">
            <SiGmail /> vasitorojo@gmail.com
          </div>
          <div className="wsp">
            <FaWhatsapp /> +54 9 3454091988
          </div>
          <div className="iconosRs">
            <GrInstagram /> @elvasito.rojo
          </div>
        </div>
      </div>
      <div className="developer">
        <p>
          Designed and Developed by{" "}
          <a href="https://acevedevelop.vercel.app/">Ayrton Acevedo</a> | © 2024
          | Version 1.0
        </p>
      </div>
    </div>
  );
};

export default Footer;
