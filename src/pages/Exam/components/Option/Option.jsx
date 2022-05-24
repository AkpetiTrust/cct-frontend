import React from "react";

function Option({
  className,
  option,
  setQuestions,
  optionIndex,
  questionId,
  question,
}) {
  const letters = ["A", "B", "C", "D", "E"];

  const optionId = questionId + "" + option.id;

  const handleChange = () => {
    setQuestions((prevQuestions) => {
      let newQuestions = [...prevQuestions].map((question) =>
        question.id !== questionId
          ? question
          : { ...question, answerId: option.id }
      );
      localStorage.setItem("questions", JSON.stringify(newQuestions));
      return newQuestions;
    });
  };

  return (
    <div className={className}>
      <input
        onChange={handleChange}
        type="radio"
        name={questionId}
        id={optionId}
        checked={option.id === question.answerId}
      />
      <label htmlFor={optionId}>
        {letters[optionIndex]}. {option.option}
      </label>
    </div>
  );
}

export default Option;
