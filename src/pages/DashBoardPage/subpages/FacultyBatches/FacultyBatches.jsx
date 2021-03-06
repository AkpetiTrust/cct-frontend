import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main, SectionTitle, Ul, Li, Loading } from "../../../../components";
import { fetchFromApi, getDateAndTime } from "../../../../utils/functions";
import style from "./index.module.css";

function FacultyBatches() {
  const [batches, setBatches] = useState([]);

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFromApi("courses").then((result) => {
      setCourses(result.response);
      fetchFromApi("faculty-batches", true).then((result) => {
        setBatches(
          result.response.map((batch) => ({
            ...batch,
            pending: batch.questions_json === null,
          }))
        );

        setLoading(false);
      });
    });
  }, []);

  return (
    <Main className={style.batches}>
      <SectionTitle
        title={"Exam Batches"}
        width="400px"
        isNotDecorated
        isNotSpaced
      >
        Exam batches you've been assigned to set questions for.
      </SectionTitle>

      {loading ? (
        <Loading height={"50vh"} />
      ) : (
        <>
          <section className={style.list_grid}>
            <div className={style.pending}>
              <p className={`${style.pending_title} ${style.title}`}>
                {" "}
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22.1004C14.5461 22.1004 16.9879 21.089 18.7882 19.2886C20.5886 17.4883 21.6 15.0465 21.6 12.5004C21.6 9.95431 20.5886 7.51252 18.7882 5.71217C16.9879 3.91182 14.5461 2.90039 12 2.90039C9.45392 2.90039 7.01212 3.91182 5.21177 5.71217C3.41142 7.51252 2.39999 9.95431 2.39999 12.5004C2.39999 15.0465 3.41142 17.4883 5.21177 19.2886C7.01212 21.089 9.45392 22.1004 12 22.1004ZM13.2 7.70039C13.2 7.38213 13.0736 7.07691 12.8485 6.85186C12.6235 6.62682 12.3183 6.50039 12 6.50039C11.6817 6.50039 11.3765 6.62682 11.1515 6.85186C10.9264 7.07691 10.8 7.38213 10.8 7.70039V12.5004C10.8001 12.8186 10.9265 13.1238 11.1516 13.3488L14.5452 16.7436C14.6567 16.8551 14.789 16.9435 14.9347 17.0039C15.0804 17.0642 15.2365 17.0953 15.3942 17.0953C15.5519 17.0953 15.708 17.0642 15.8537 17.0039C15.9993 16.9435 16.1317 16.8551 16.2432 16.7436C16.3547 16.6321 16.4431 16.4997 16.5035 16.3541C16.5638 16.2084 16.5949 16.0523 16.5949 15.8946C16.5949 15.7369 16.5638 15.5808 16.5035 15.4351C16.4431 15.2894 16.3547 15.1571 16.2432 15.0456L13.2 12.0036V7.70039Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
                Pending:
                <span className={style.arrow}>
                  <svg
                    width="112"
                    height="92"
                    viewBox="0 0 112 92"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_67_180)">
                      <path
                        d="M53.9567 26.5592C43.5893 28.4795 19.2093 46.1802 14.0395 55.559C15.1293 55.2795 15.9376 55.1398 16.7466 54.8252C18.2588 54.3358 19.7361 53.7765 21.283 53.3572C22.6188 53.0428 23.5298 53.4633 23.6658 54.4435C23.9061 55.6337 23.1666 56.0884 22.2168 56.473C18.453 57.9064 14.5841 59.3048 10.6804 60.6331C8.88669 61.2623 7.80252 60.3166 7.88178 58.3564C7.9206 57.5513 8.20537 56.7114 8.24419 55.9063C8.79507 50.6558 9.31035 45.5104 9.82564 40.3649C9.86284 39.9099 9.79487 39.4198 10.0068 39.1399C10.4308 38.58 11.0311 37.8452 11.5578 37.8454C12.1549 37.8107 12.9599 38.3712 13.2382 38.9314C13.5514 39.5616 13.5125 40.3667 13.5441 41.1368C13.4285 43.3771 13.1372 45.6172 13.0216 47.8575C12.9836 48.4875 13.0159 49.0826 13.0119 49.9578C13.4698 49.6429 13.681 49.538 13.787 49.398C24.1291 37.7114 37.0529 29.6316 51.1273 23.3375C53.2034 22.3933 55.4186 21.7293 57.5974 21.3453C60.3733 20.9266 62.8708 19.9476 65.2648 18.5836C70.0172 15.9605 75.0811 14.3177 80.5949 14.1103C83.6856 13.9718 86.7738 14.3583 89.7536 15.4099C96.4486 17.9334 100.289 22.8359 101.099 29.9423C101.705 35.5783 100.24 40.9333 97.619 45.9027C92.6596 55.3516 85.0092 62.0338 75.2277 66.3697C74.5238 66.7194 73.786 66.8241 73.0829 66.9988C72.1687 67.2784 71.4324 67.033 71.0505 66.0877C70.6686 65.1424 71.2333 64.5126 72.0076 64.1279C72.4299 63.9181 72.9574 63.7433 73.3798 63.5335C81.0496 60.2467 87.1135 54.9639 91.92 48.2103C94.5357 44.4661 96.3455 40.3364 97.1739 35.8212C97.6439 32.881 97.6924 29.9756 96.7223 27.1398C95.0935 22.4484 91.7011 19.5064 86.9308 18.3839C80.8984 16.8408 75.2042 18.0983 69.2228 20.7208C69.9583 21.1412 70.4486 21.4214 70.9041 21.6317C71.2544 21.8069 71.6751 21.9471 72.0958 22.0873C78.159 24.5756 81.6122 29.5829 81.512 36.0937C81.47 37.5989 81.3575 39.139 80.9999 40.539C77.8197 52.5091 70.0253 59.9614 58.2826 63.1762C53.0091 64.5739 48.1337 63.4164 44.3965 59.074C41.9167 56.2024 41.1602 52.7366 41.423 49.0262C41.6843 45.6659 42.7522 42.516 44.3112 39.4713C46.4018 35.3768 49.2278 31.7027 52.3685 28.3087C52.8976 27.7839 53.3216 27.224 53.9567 26.5592ZM62.8707 58.1027C67.9055 55.1647 72.4904 50.7913 75.1108 45.997C76.775 42.9874 77.8785 39.7324 77.8947 36.232C77.8476 31.1913 75.5466 27.6197 70.8499 25.7622C68.8871 24.9912 66.6412 24.7101 64.5004 24.464C63.5877 24.3936 62.4623 24.7781 61.7229 25.2328C54.994 30.0602 49.5944 35.9734 46.5039 43.708C45.6867 45.7728 45.2548 48.0829 45.1747 50.2182C45.0413 56.3089 49.4119 60.3366 55.4192 59.7094C57.9128 59.6055 60.34 58.6616 62.8707 58.1027Z"
                        fill="#FFDE80"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_67_180">
                        <rect
                          width="97.7838"
                          height="54"
                          fill="white"
                          transform="translate(0 43.5078) rotate(-26.4196)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
              <Ul>
                {batches
                  .filter((batch) => batch.pending)
                  .map((batch) => (
                    <li key={getDateAndTime(batch.time)}>
                      <Link to={`/dashboard/exam-batch/${batch.id}`}>
                        {getDateAndTime(batch.time)}
                      </Link>
                    </li>
                  ))}
              </Ul>
            </div>
            <div className={style.handled}>
              <p className={style.title}>Handled:</p>
              <Ul>
                {batches
                  .filter((batch) => !batch.pending)
                  .map((batch) => (
                    <li key={getDateAndTime(batch.time)}>
                      <Link to={`/dashboard/exam-batch/${batch.id}`}>
                        {getDateAndTime(batch.time)}
                      </Link>
                    </li>
                  ))}
              </Ul>
            </div>
          </section>
          <section className={style.courses}>
            <p className={style.title}>View batches by course</p>
            <ul className={style.grid}>
              {courses.map((course) => (
                <Li key={course.title}>
                  <a href="#">{course.title}</a>
                </Li>
              ))}
            </ul>
          </section>
        </>
      )}
    </Main>
  );
}

export default FacultyBatches;
