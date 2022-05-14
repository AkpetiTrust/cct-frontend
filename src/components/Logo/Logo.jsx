import React from "react";
import logo from "../../assets/logo.png";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className={style.logo}>
      <img src={logo} alt="logo" />
      <p>COMPLETE COMPUTERS AND TECHNOLOGY</p>
    </Link>
  );
}

export default Logo;
