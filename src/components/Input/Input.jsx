import React from "react";
import style from "./index.module.css";

function Input({ type, ...props }) {
  return <input className={style.input} type={type} {...props} />;
}

export default Input;
