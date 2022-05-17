import React from "react";
import { Ul } from "../../../../../../components";
import style from "./index.module.css";

function CategoryCard({ categoryObject: { category, courses } }) {
  return (
    <div className={style.card}>
      <p className={style.title}>{category.toUpperCase()}</p>
      <Ul>
        {courses.map((course) => (
          <li key={course.title}>
            <a href="#">{course.title}</a>
          </li>
        ))}
      </Ul>
    </div>
  );
}

export default CategoryCard;
