import { useState } from "react";
import useInterval from "./useInterval";

function useCountDown(targetTime) {
  const [milliSecondsLeft, setMilliSecondsLeft] = useState(
    getMilliSecondsLeft(targetTime)
  );

  useInterval(() => {
    setMilliSecondsLeft(getMilliSecondsLeft(targetTime));
  }, 1000);

  const parseTime = () => {
    const secondsInAnHour = 3600;
    let totalSecondsLeft = milliSecondsLeft / 1000;

    if (milliSecondsLeft < 0) {
      totalSecondsLeft = 0;
    }

    let hoursLeft = Math.floor(totalSecondsLeft / secondsInAnHour);
    let excessSeconds = totalSecondsLeft % secondsInAnHour;
    let minutesLeft = Math.floor(excessSeconds / 60);
    let secondsLeft = Math.floor(excessSeconds % 60);

    return {
      hoursLeft: convertToTwoDigits(hoursLeft),
      minutesLeft: convertToTwoDigits(minutesLeft),
      secondsLeft: convertToTwoDigits(secondsLeft),
    };
  };

  return parseTime();
}

function getMilliSecondsLeft(targetTime) {
  return targetTime.getTime() - Date.now();
}

function convertToTwoDigits(number) {
  number = number.toString();
  if (number.length == 1) {
    number = "0" + number;
  }

  return number;
}

export default useCountDown;
