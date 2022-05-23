import React from "react";
import { Link } from "react-router-dom";
import { Ul } from "../../../../../../components";
import style from "./index.module.css";

function CategoryCard({ categoryObject: { category, courses } }) {
  return (
    <div className={style.card}>
      <p className={style.title}>{category.toUpperCase()}</p>
      <Ul>
        {courses.map((course) => (
          <li key={course.title}>
            <Link to={`/dashboard/course/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </Ul>
    </div>
  );
}

export default CategoryCard;
