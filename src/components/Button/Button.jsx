import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function Button({
  hasIcon,
  width,
  children,
  backgroundColor,
  gap,
  to,
  ...props
}) {
  const hasIconStyle = hasIcon
    ? {
        display: "flex",
        justifyContent: "center",
        gap,
        alignItems: "center",
      }
    : {};

  let buttonStyle = { width, backgroundColor, ...hasIconStyle };

  if (to) {
    return (
      <Link to={to} style={buttonStyle} className={style.button} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button style={buttonStyle} className={style.button} {...props}>
      {children}
    </button>
  );
}

export default Button;
