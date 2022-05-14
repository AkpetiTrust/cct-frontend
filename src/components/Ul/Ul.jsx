import React from "react";
import style from "./index.module.css";

function Ul({ children }) {
  return <ul className={style.ul}>{children}</ul>;
}

export default Ul;
