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
  href,
  htmlFor,
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

  if (href) {
    return (
      <a href={href} style={buttonStyle} className={style.button} {...props}>
        {children}
      </a>
    );
  }

  if (htmlFor) {
    return (
      <label
        htmlFor={htmlFor}
        style={buttonStyle}
        className={style.button}
        {...props}
      >
        {children}
      </label>
    );
  }

  return (
    <button style={buttonStyle} className={style.button} {...props}>
      {children}
    </button>
  );
}

export default Button;
