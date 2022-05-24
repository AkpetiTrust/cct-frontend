import React, { useState } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function Account() {
  const [letter, setLetter] = useState(
    JSON.parse(localStorage.getItem("user")).name[0].toUpperCase()
  );

  return (
    <Link to={"/dashboard/profile"} className={style.account}>
      {letter}
    </Link>
  );
}

export default Account;
