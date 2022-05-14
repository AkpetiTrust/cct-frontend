import React from "react";
import style from "./index.module.css";

function SectionTitle({ title, children, isNotSpaced, isNotDecorated, width }) {
  let className = `${style.title} ${isNotSpaced ? style.no_space : ""} ${
    isNotDecorated ? style.no_decoration : ""
  }`;

  return (
    <div className={className}>
      <h1>{title}</h1>
      <p style={{ maxWidth: width }}>{children}</p>
    </div>
  );
}

export default SectionTitle;
