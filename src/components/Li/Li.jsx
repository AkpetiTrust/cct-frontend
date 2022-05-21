import React from "react";
import style from "./index.module.css";

function Li({ children }) {
  return <li className={style.li}>{children}</li>;
}

export default Li;
