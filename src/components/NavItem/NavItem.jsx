import React from "react";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function NavItem({ name, to, icon, active }) {
  return (
    <li className={`${style.item} ${active ? style.active : ""}`}>
      <Link to={to}>
        <Icon name={icon} /> {name}
      </Link>
    </li>
  );
}

export default NavItem;
