import React from "react";
import style from "./index.module.css";

function Step({ active, step: { text, tab }, setActiveTab }) {
  return (
    <div
      className={`${style.step} ${active ? style.active : ""}`}
      onClick={() => {
        setActiveTab(tab);
      }}
    >
      <p className={style.tab}>{tab}</p>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default Step;
