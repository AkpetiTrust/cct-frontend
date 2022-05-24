import React, { useState, useEffect } from "react";
import { useCountDown } from "../../../../utils/hooks";

function Counter({ stopTime, setWarningShown, handleSubmit }) {
  const { hoursLeft, minutesLeft, secondsLeft } = useCountDown(stopTime);
  const [lessThanFiveMinutesLeft, setLessThanFiveMinutesLeft] = useState(false);

  useEffect(() => {
    if (
      hoursLeft === "00" &&
      Number(minutesLeft) <= 4 &&
      !lessThanFiveMinutesLeft
    ) {
      setLessThanFiveMinutesLeft(true);
      setWarningShown(true);
    }

    if (hoursLeft === "00" && minutesLeft === "00" && secondsLeft === "00") {
      handleSubmit();
    }
  });

  return (
    <p
      style={{
        fontSize: "18px",
        fontWeight: 700,
        color: lessThanFiveMinutesLeft ? "#E85F55" : "#292929",
      }}
    >
      {hoursLeft}:{minutesLeft}:{secondsLeft}
    </p>
  );
}

export default Counter;
