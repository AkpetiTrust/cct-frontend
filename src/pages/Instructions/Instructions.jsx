import React, { useState, useEffect } from "react";
import { Button, Curve, Main, Loading } from "../../components";
import style from "./index.module.css";
import logo from "../../assets/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/functions";

function Instructions() {
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("30 minutes");
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questionsHaveEqualMarks, setQuestionsHaveEqualMarks] = useState(true);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFromApi(`get-batch/${id}`, true).then(({ response }) => {
      if (new Date(response.time).getTime() > Date.now()) {
        return navigate(`/waiting-area/${id}`);
      }

      setCourse(response.course);
      setNumberOfQuestions(response.questionNumber);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading height={"100vh"} />;

  return (
    <Main className={style.instructions}>
      <div className={style.inner}>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h1 className={style.title}>EXAM INSTRUCTIONS</h1>
        <p className={style.talk}>
          Read the instructions for your {course} exam very carefully before
          starting the exam.
        </p>
        <ol>
          <li>
            The exam will last for just <b>{duration}</b>
          </li>
          <li>
            There are a total of <b>{numberOfQuestions}</b> multiple choice
            questions.
          </li>
          {questionsHaveEqualMarks && <li>All questions carry equal marks.</li>}
          <li>Read carefully before answering a question.</li>
          <li>
            Once your time is up the questions will automatically be submitted
            for you.
          </li>
        </ol>
        <Button to={`/exam/${id}`}>START EXAM</Button>
      </div>
      <Curve />
    </Main>
  );
}

export default Instructions;
