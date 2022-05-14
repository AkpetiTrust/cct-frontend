import React from "react";
import style from "./index.module.css";

function Button({ hasIcon, width, children, backgroundColor, ...props }) {
  return (
    <button
      style={{ width, backgroundColor }}
      className={style.button}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
