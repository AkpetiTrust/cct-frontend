import React from "react";
import Account from "../Account/Account";

function Main({ children, ...props }) {
  return (
    <main {...props}>
      {" "}
      <Account /> {children}
    </main>
  );
}

export default Main;
