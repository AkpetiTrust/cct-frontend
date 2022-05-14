import React from "react";
import logo from "../../assets/logo.png";
import style from "./index.module.css";

function Logo() {
  return (
    <figure className={style.logo}>
      <img src={logo} alt="logo" />
      <p>COMPLETE COMPUTERS AND TECHNOLOGY</p>
    </figure>
  );
}

export default Logo;
