import React from "react";
import style from "./index.module.css";

function QuestionButton({ questionIndex, setActiveQuestionIndex, answered }) {
  return (
    <button
      className={`${style.button} ${answered ? style.answered : ""}`}
      onClick={() => {
        setActiveQuestionIndex(questionIndex);
      }}
    >
      {questionIndex + 1}
    </button>
  );
}

export default QuestionButton;
