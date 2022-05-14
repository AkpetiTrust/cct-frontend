import React from "react";
import SideNav from "../SideNav/SideNav";
import style from "./index.module.css";

function Dashboard({ children, owner }) {
  return (
    <div className={style.dashboard}>
      <SideNav owner={owner} />
      {children}
    </div>
  );
}

export default Dashboard;
