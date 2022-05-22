import React, { useState } from "react";
import { Button, Curve, Main } from "../../components";
import style from "./index.module.css";
import logo from "../../assets/logo.png";

function Instructions() {
  const [course, setCourse] = useState("PHP");
  const [duration, setDuration] = useState("30 minutes");
  const [numberOfQuestions, setNumberOfQuestions] = useState(50);
  const [questionsHaveEqualMarks, setQuestionsHaveEqualMarks] = useState(true);

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
        <Button>START EXAM</Button>
      </div>
      <Curve />
    </Main>
  );
}

export default Instructions;
