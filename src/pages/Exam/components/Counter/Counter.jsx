import React, { useState, useEffect } from "react";
import { useCountDown } from "../../../../utils/hooks";

function Counter({ stopTime, setWarningShown }) {
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
