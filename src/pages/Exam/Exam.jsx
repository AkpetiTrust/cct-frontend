import React, { useState, useEffect } from "react";
import { Main, Loading } from "../../components";
import logo from "../../assets/logo.png";
import style from "./index.module.css";
import {
  Counter,
  Question,
  QuestionIndicator,
  SubmitConfirm,
  Warning,
} from "./components";
import { fetchFromApi, getFullTime, postToApi } from "../../utils/functions";
import { useNavigate, useParams } from "react-router-dom";

function Exam() {
  const [course, setCourse] = useState("");
  const [durationInMinutes, setDurationInMinutes] = useState(30);
  const [startTime, setStartTime] = useState();
  const [stopTime, setStopTime] = useState();
  const [questions, setQuestions] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [warningShown, setWarningShown] = useState(false);
  const [submitConfirmShown, setSubmitConfirmShown] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const questionProps = {
    questions,
    setQuestions,
    activeQuestionIndex,
    setActiveQuestionIndex,
    setSubmitConfirmShown,
  };

  useEffect(() => {
    let localQuestions = localStorage.getItem("questions");

    if (localQuestions) {
      let startTime = new Date(JSON.parse(localStorage.getItem("startTime")));
      setQuestions(JSON.parse(localQuestions));
      setStartTime(startTime);
      setStopTime(() => {
        let durationInMiliiseconds = durationInMinutes * 60 * 1000;
        let offset = 500;
        let stopTimestamp =
          startTime.getTime() + durationInMiliiseconds - offset;
        return new Date(stopTimestamp);
      });
      setCourse(localStorage.getItem("course"));
      return setLoading(false);
    }

    fetchFromApi(`get-exam/${id}`, true).then((result) => {
      if (result.error) {
        return navigate("/dashboard/cbt");
      }
      let questions = result.questions.sort(() => Math.random() - 0.5);
      questions.forEach((question) =>
        question.options.sort(() => Math.random() - 0.5)
      );
      questions = questions.map((question) => ({
        ...question,
        answerId: null,
      }));
      setQuestions(questions);
      let startTime = new Date();
      setStartTime(startTime);
      setStopTime(() => {
        let durationInMiliiseconds = durationInMinutes * 60 * 1000;
        let offset = 500;
        let stopTimestamp =
          startTime.getTime() + durationInMiliiseconds - offset;
        return new Date(stopTimestamp);
      });
      setCourse(result.course);
      setLoading(false);

      localStorage.setItem("questions", JSON.stringify(questions));
      localStorage.setItem("startTime", JSON.stringify(startTime));
      localStorage.setItem("course", result.course);
    });
  }, []);

  const handleSubmit = () => {
    let sortedQuestions = [...questions].sort((a, b) => a.id - b.id);
    let answers = sortedQuestions.map((question) => question.answerId);
    setLoading(true);
    postToApi(
      `submit-questions/${id}`,
      { answers: JSON.stringify(answers) },
      true
    ).then(() => {
      navigate("/submitted");
    });
    localStorage.removeItem("questions");
    localStorage.removeItem("startTime");
    localStorage.removeItem("course");
  };

  if (loading) return <Loading height={"100vh"} />;

  return (
    <Main className={style.exam}>
      <img src={logo} alt="logo" />
      <h1>{course.toUpperCase()} EXAM</h1>
      <div className={style.grid}>
        <section className={style.main}>
          <Question questionProps={questionProps} />
          <div className={style.info}>
            <p>
              Start Time : <b>{getFullTime(startTime)}</b>
            </p>
            <p>
              Stop Time : <b>{getFullTime(stopTime)}</b>
            </p>
            <p
              className={style.submit}
              onClick={() => {
                setSubmitConfirmShown(true);
              }}
            >
              Submit
            </p>
          </div>
        </section>
        <section className={style.aside}>
          <Counter
            handleSubmit={handleSubmit}
            setWarningShown={setWarningShown}
            stopTime={stopTime}
          />
          <QuestionIndicator
            questions={questions}
            setActiveQuestionIndex={setActiveQuestionIndex}
          />
        </section>
      </div>

      {warningShown && <Warning setWarningShown={setWarningShown} />}
      {submitConfirmShown && (
        <SubmitConfirm
          onSubmit={handleSubmit}
          setSubmitConfirmShown={setSubmitConfirmShown}
        />
      )}
    </Main>
  );
}

export default Exam;
