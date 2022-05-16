import React from "react";
import style from "./index.module.css";

function Popup({ children, setPopupShown }) {
  return (
    <div
      onClick={(e) => {
        if (e.target.className === style.popup) {
          setPopupShown(false);
        }
      }}
      className={style.popup}
    >
      {children}
    </div>
  );
}

export default Popup;
