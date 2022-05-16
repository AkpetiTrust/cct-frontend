import React from "react";
import style from "./index.module.css";

function CheckBox({ name, checked, onChange }) {
  return (
    <>
      <input
        checked={checked}
        onChange={onChange}
        className={style.input}
        type="checkbox"
        name={name}
        id={name}
      />
      <label className={style.label} htmlFor={name}></label>
    </>
  );
}

export default CheckBox;
