import React from "react";
import style from "./index.module.css";

function TimeBlock({ time, caption }) {
  return (
    <div className={style.block}>
      <p className={style.time}>{time}</p>
      <p className={style.caption}>{caption}</p>
    </div>
  );
}

export default TimeBlock;
