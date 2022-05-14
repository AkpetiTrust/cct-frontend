import React from "react";
import style from "./index.module.css";

function Button({ hasIcon, width, children, backgroundColor, gap, ...props }) {
  const hasIconStyle = hasIcon
    ? {
        display: "flex",
        justifyContent: "center",
        gap,
        alignItems: "center",
      }
    : {};

  return (
    <button
      style={{ width, backgroundColor, ...hasIconStyle }}
      className={style.button}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
