import React from "react";
import QuestionButton from "../QuestionButton/QuestionButton";
import style from "./index.module.css";

function QuestionIndicator({ questions, setActiveQuestionIndex }) {
  return (
    <div className={style.indicator}>
      <p className={style.title}>Question Indicator</p>
      <div className={style.buttons}>
        {questions.map((question, i) => (
          <QuestionButton
            answered={question.answerId !== null}
            questionIndex={i}
            setActiveQuestionIndex={setActiveQuestionIndex}
            key={question.id}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionIndicator;
