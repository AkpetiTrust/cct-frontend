import React, { useState } from "react";
import style from "./index.module.css";

function Select({ children, onClose, valueProp, onChange }) {
  const [value, setValue] = useState(valueProp);

  return (
    <div className={style.container}>
      <svg
        onClick={onClose}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.close}
      >
        <path
          d="M8.95297 2.70776L9.29233 3.04712L3.04705 9.29192L2.70769 8.9528L8.95297 2.70776Z"
          fill="black"
        />
        <path
          d="M3.04705 2.70776L9.29233 8.95256L8.95297 9.29216L2.70769 3.04736L3.04705 2.70776Z"
          fill="black"
        />
      </svg>
      <select
        onChange={(e) => {
          if (onChange(e)) {
            setValue(e.currentTarget.value);
          }
        }}
        value={value}
        className={style.select}
      >
        {children}
      </select>
    </div>
  );
}

export default Select;
