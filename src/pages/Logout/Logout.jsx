import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components";
import { postToApi } from "../../utils/functions";
import style from "./index.module.css";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    postToApi("logout", null, true).then(() => {
      localStorage.removeItem("user");
      navigate("/");
    });
  });

  return (
    <div className={style.logout}>
      <Loading />
    </div>
  );
}

export default Logout;
