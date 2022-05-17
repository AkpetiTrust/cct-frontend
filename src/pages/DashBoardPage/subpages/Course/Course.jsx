import React, { useState } from "react";
import { Main, SectionTitle, Ul } from "../../../../components";
import style from "./index.module.css";

function Course() {
  const [title, setTitle] = useState("CCNA");
  const [description, setDescription] = useState(
    "A CISCO course. It has also evolved to include a command-line interface capability and can be used in standalone graphical applications"
  );
  const [duration, setDuration] = useState("3 months");
  const [prerequisites, setPrerequisites] = useState([
    "Basic computer literacy",
    "Basic Microsoft Windows navigation skills",
    "Basic Internet usage skills",
    "Basic e-mail usage skills",
  ]);
  const [cct_advantages, setCct_advantages] = useState([
    "Technology partners with Oracle",
    "Get trained by Oracle certified faculties",
    "Using Oracle's practical learning methodology",
  ]);
  const [faculties, setFaculties] = useState([
    "Mr. John Doe",
    "Mr. James Johnson",
  ]);

  const [students, setStudents] = useState([
    "James John",
    "K.A. Stroud",
    "John Bird",
    "Nelkon Parker",
  ]);

  const [batches, setBatches] = useState([
    {
      time: "May 27th 9am",
      id: 1,
    },
    {
      time: "May 29th 9am",
      id: 2,
    },
    {
      time: "June 7th 12am",
      id: 3,
    },
  ]);

  return (
    <Main className={style.course}>
      <div className={style.about}>
        <SectionTitle isNotDecorated isNotSpaced title={title}>
          {description}
        </SectionTitle>
        <div className={style.section}>
          <h3>Duration</h3>
          <p>{duration}</p>
        </div>
        <div className={style.section}>
          <h3>Prerequisites</h3>
          <Ul>
            {prerequisites.map((prerequisite) => (
              <li key={prerequisite}>{prerequisite}</li>
            ))}
          </Ul>
        </div>
        <div className={style.section}>
          <h3>CCT Advantage</h3>
          <Ul>
            {cct_advantages.map((cct_advantage) => (
              <li key={cct_advantage}>{cct_advantage}</li>
            ))}
          </Ul>
        </div>
        <div className={style.section}>
          <h3>Faculties in charge</h3>
          <p>{faculties.join(", ")}</p>
        </div>
        <button className={style.button}>
          EDIT INFO{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5864 3.58616C13.7709 3.39514 13.9915 3.24278 14.2356 3.13796C14.4796 3.03314 14.742 2.97797 15.0076 2.97566C15.2731 2.97335 15.5365 3.02396 15.7823 3.12452C16.0281 3.22508 16.2514 3.37359 16.4392 3.56137C16.6269 3.74916 16.7754 3.97246 16.876 4.21825C16.9766 4.46405 17.0272 4.72741 17.0249 4.99296C17.0226 5.25852 16.9674 5.52096 16.8626 5.76497C16.7578 6.00898 16.6054 6.22967 16.4144 6.41416L15.6214 7.20716L12.7934 4.37916L13.5864 3.58616ZM11.3794 5.79316L3.00037 14.1722V17.0002H5.82837L14.2084 8.62116L11.3784 5.79316H11.3794Z"
              fill="black"
              fillOpacity="0.68"
            />
          </svg>
        </button>
      </div>
      <div className={style.more_info}>
        <div className={style.section}>
          <h3>Exam Batches</h3>
          <Ul>
            {batches.map(({ time, id }) => (
              <li key={id}>
                <a href="#">{time}</a>
              </li>
            ))}
          </Ul>
        </div>
        <a href="#" className={style.button}>
          NEW BATCH{" "}
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.50005 2.5498C8.72548 2.5498 8.94168 2.63936 9.10109 2.79876C9.2605 2.95817 9.35005 3.17437 9.35005 3.3998V7.6498H13.6C13.8255 7.6498 14.0417 7.73936 14.2011 7.89876C14.3605 8.05817 14.45 8.27437 14.45 8.4998C14.45 8.72524 14.3605 8.94144 14.2011 9.10084C14.0417 9.26025 13.8255 9.3498 13.6 9.3498H9.35005V13.5998C9.35005 13.8252 9.2605 14.0414 9.10109 14.2008C8.94168 14.3603 8.72548 14.4498 8.50005 14.4498C8.27461 14.4498 8.05841 14.3603 7.89901 14.2008C7.7396 14.0414 7.65005 13.8252 7.65005 13.5998V9.3498H3.40005C3.17461 9.3498 2.95841 9.26025 2.79901 9.10084C2.6396 8.94144 2.55005 8.72524 2.55005 8.4998C2.55005 8.27437 2.6396 8.05817 2.79901 7.89876C2.95841 7.73936 3.17461 7.6498 3.40005 7.6498H7.65005V3.3998C7.65005 3.17437 7.7396 2.95817 7.89901 2.79876C8.05841 2.63936 8.27461 2.5498 8.50005 2.5498Z"
              fill="black"
              fillOpacity="0.75"
            />
          </svg>
        </a>
        <div className={style.section}>
          <h3>Students:</h3>
          <ol>
            {students.map((student) => (
              <li key={student}>{student}</li>
            ))}
          </ol>
        </div>
      </div>
    </Main>
  );
}

export default Course;
