import React, { useEffect, useState } from "react";
import { Button, Loading, Main, SectionTitle } from "../../../../components";
import { fetchFromApi } from "../../../../utils/functions";
import { CategoryCard } from "./components";
import style from "./index.module.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFromApi("courses", true).then((result) => {
      setCourses(result.response);
      setLoading(false);
    });
  }, []);

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
      {loading ? (
        <Loading height={"40vh"} />
      ) : (
        <>
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
        </>
      )}
    </Main>
  );
}

export default Courses;
