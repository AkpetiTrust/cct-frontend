import React from "react";
import style from "./index.module.css";

function Success({ setSuccess }) {
  return (
    <p
      onClick={() => {
        setSuccess(false);
      }}
      className={style.success}
    >
      Message sent successfully!
    </p>
  );
}

export default Success;
