import React, { useState, useEffect } from "react";
import { Main } from "../../components";
import logo from "../../assets/logo.png";
import style from "./index.module.css";
import { Question } from "./components";

function Exam() {
  const [course, setCourse] = useState("PHP");
  const [durationInMinutes, setDurationInMinutes] = useState(50);
  const [startTime, setStartTime] = useState(new Date());
  const [stopTime, setStopTime] = useState(null);
  const [questions, setQuestions] = useState([
    {
      question:
        "What PHP global contains the request data for this url: https://example.com/index.php?query=test",
      options: [
        {
          option: "$_SERVER",
          id: 1,
        },
        {
          option: "$_POST",
          id: 2,
        },
        {
          option: "$_GET",
          id: 3,
        },
        {
          option: "$none",
          id: 4,
        },
      ],
      id: 1,
      answerId: null,
    },
    {
      question:
        "Who represents the goat in Daniel's vision of a sheep and a goat",
      options: [
        {
          option: "Rome",
          id: 1,
        },
        {
          option: "Greece",
          id: 2,
        },
        {
          option: "Babylon",
          id: 3,
        },
        {
          option: "Medo-Persia",
          id: 4,
        },
      ],
      id: 2,
      answerId: null,
    },
    {
      question:
        "From what book of the Bible did Daniel discern that Israel's time in captivity is 70 years long.",
      options: [
        {
          option: "Ezekiel",
          id: 1,
        },
        {
          option: "Nahum",
          id: 2,
        },
        {
          option: "Jeremiah",
          id: 3,
        },
        {
          option: "Isaiah",
          id: 4,
        },
      ],
      id: 3,
      answerId: null,
    },
    {
      question: "Which angel of Jehovah referred to Daniel as a precious man.",
      options: [
        {
          option: "Michael",
          id: 1,
        },
        {
          option: "Gabriel",
          id: 2,
        },
        {
          option: "Elijah",
          id: 3,
        },
        {
          option: "Job",
          id: 4,
        },
      ],
      id: 4,
      answerId: null,
    },
    {
      question: "Whose prayer did Mary's prayer resemble?",
      options: [
        {
          option: "Deborah",
          id: 1,
        },
        {
          option: "Hannah",
          id: 2,
        },
        {
          option: "Peninah",
          id: 3,
        },
        {
          option: "Esther",
          id: 4,
        },
      ],
      id: 5,
      answerId: null,
    },
    {
      question: "Whose prayer did Mary's prayer resemble?",
      options: [
        {
          option: "Deborah",
          id: 1,
        },
        {
          option: "Hannah",
          id: 2,
        },
        {
          option: "Peninah",
          id: 3,
        },
        {
          option: "Esther",
          id: 4,
        },
      ],
      id: 6,
      answerId: null,
    },
    {
      question: "Whose prayer did Mary's prayer resemble?",
      options: [
        {
          option: "Deborah",
          id: 1,
        },
        {
          option: "Hannah",
          id: 2,
        },
        {
          option: "Peninah",
          id: 3,
        },
        {
          option: "Esther",
          id: 4,
        },
      ],
      id: 7,
      answerId: null,
    },
    {
      question: "Whose prayer did Mary's prayer resemble?",
      options: [
        {
          option: "Deborah",
          id: 1,
        },
        {
          option: "Hannah",
          id: 2,
        },
        {
          option: "Peninah",
          id: 3,
        },
        {
          option: "Esther",
          id: 4,
        },
      ],
      id: 8,
      answerId: null,
    },
    {
      question: "Whose prayer did Mary's prayer resemble?",
      options: [
        {
          option: "Deborah",
          id: 1,
        },
        {
          option: "Hannah",
          id: 2,
        },
        {
          option: "Peninah",
          id: 3,
        },
        {
          option: "Esther",
          id: 4,
        },
      ],
      id: 9,
      answerId: null,
    },
    {
      question: "Whose prayer did Mary's prayer resemble?",
      options: [
        {
          option: "Deborah",
          id: 1,
        },
        {
          option: "Hannah",
          id: 2,
        },
        {
          option: "Peninah",
          id: 3,
        },
        {
          option: "Esther",
          id: 4,
        },
      ],
      id: 10,
      answerId: null,
    },
    {
      question: "Whose prayer did Mary's prayer resemble?",
      options: [
        {
          option: "Deborah",
          id: 1,
        },
        {
          option: "Hannah",
          id: 2,
        },
        {
          option: "Peninah",
          id: 3,
        },
        {
          option: "Esther",
          id: 4,
        },
      ],
      id: 11,
      answerId: null,
    },
  ]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const questionProps = {
    questions,
    setQuestions,
    activeQuestionIndex,
    setActiveQuestionIndex,
  };

  return (
    <Main className={style.exam}>
      <img src={logo} alt="logo" />
      <h1>{course.toUpperCase()} EXAM</h1>
      <div className={style.grid}>
        <section className={style.main}>
          <Question questionProps={questionProps} />
          <div className={style.info}>
            <p>
              Start Time : <b>{}</b>
            </p>
            <p>
              Stop Time : <b>{}</b>
            </p>
            <p className={style.submit}>Submit</p>
          </div>
        </section>
      </div>
    </Main>
  );
}

export default Exam;
