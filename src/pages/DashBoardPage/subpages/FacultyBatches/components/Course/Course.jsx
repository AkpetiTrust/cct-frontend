import React from "react";
import style from "./index.module.css";

function Course({ course }) {
  return (
    <div className={style.course}>
      <p>{course}</p>
    </div>
  );
}

export default Course;
