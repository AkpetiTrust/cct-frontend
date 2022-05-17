import React, { useState } from "react";
import { Button, Main, SectionTitle } from "../../../../components";
import { CategoryCard } from "./components";
import style from "./index.module.css";

function Courses() {
  const [courses, setCourses] = useState([
    {
      title: "MS-OFFICE",
      category: "MICROSOFT",
      id: 1,
    },
    {
      title: "MS SQL-DATABASE",
      category: "MICROSOFT",
      id: 2,
    },
    {
      title: "MSCE",
      category: "MICROSOFT",
      id: 3,
    },
    {
      title: "COMPTIA A+",
      category: "COMPTIA",
      id: 4,
    },
    {
      title: "COMPTIA N+",
      category: "COMPTIA",
      id: 5,
    },
    {
      title: "SECURITY +",
      category: "COMPTIA",
      id: 6,
    },
    {
      title: "CCNA",
      category: "CISCO",
      id: 7,
    },
    {
      title: "CCNP",
      category: "CISCO",
      id: 8,
    },
  ]);

  const parseCoursesToCategories = () => {
    let categories = [];
    let categoryNames = [];
    courses.forEach(({ category }) => {
      if (!categoryNames.includes(category)) {
        categoryNames.push(category);
      }
    });

    categoryNames.forEach((category) => {
      let categoryObject = { category, courses: [] };
      categoryObject.courses = courses.filter(
        (course) => course.category === category
      );
      categories.push(categoryObject);
    });

    return categories;
  };

  return (
    <Main className={style.courses}>
      <SectionTitle isNotDecorated title={"COURSES"}>
        A list of the courses CCT offers
      </SectionTitle>
      <div className={style.categories}>
        {parseCoursesToCategories().map((categoryObject) => (
          <div key={categoryObject.category} className={style.column}>
            <CategoryCard categoryObject={categoryObject} />
          </div>
        ))}
      </div>
      <div className={style.button_grid}>
          <Button>ADD COURSE</Button>
      </div>
    </Main>
  );
}

export default Courses;
