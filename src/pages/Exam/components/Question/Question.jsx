import React from "react";
import style from "./index.module.css";
import Option from "../Option/Option";
import { Button } from "../../../../components";

function Question({
  questionProps: {
    questions,
    setQuestions,
    activeQuestionIndex,
    setActiveQuestionIndex,
    setSubmitConfirmShown,
  },
}) {
  const questionToShow = questions[activeQuestionIndex];
  return (
    <div className={style.question_container}>
      <p className={style.title}>
        Question {activeQuestionIndex + 1} of {questions.length}
      </p>
      <p className={style.question}>{questionToShow.question}</p>
      <div className={style.options}>
        {questionToShow.options.map((option, i) => (
          <Option
            key={option.id}
            className={style.option}
            setQuestions={setQuestions}
            option={option}
            optionIndex={i}
            questionId={questionToShow.id}
            question={questionToShow}
          />
        ))}
      </div>
      <div className={style.btn_group}>
        <Button
          onClick={() => {
            let newIndex = activeQuestionIndex - 1;
            if (newIndex < 0) return;
            setActiveQuestionIndex(newIndex);
          }}
        >
          Previous
        </Button>
        {activeQuestionIndex === questions.length - 1 ? (
          <Button
            onClick={() => {
              setSubmitConfirmShown(true);
            }}
          >
            Submit
          </Button>
        ) : (
          <Button
            onClick={() => {
              let newIndex = activeQuestionIndex + 1;
              if (newIndex > questions.length - 1) return;
              setActiveQuestionIndex(newIndex);
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default Question;
