import React from "react";
import Account from "../Account/Account";
import style from "./index.module.css";

function Main({ children, className, ...props }) {
  return (
    <main className={`${style.main} ${className}`} {...props}>
      {" "}
      <Account /> {children}
    </main>
  );
}

export default Main;
