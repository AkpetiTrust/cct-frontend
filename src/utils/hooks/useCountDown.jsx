import { useState } from "react";
import useInterval from "./useInterval";
import { convertToTwoDigits } from "../functions";

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
  if (!targetTime) return 0;
  return targetTime.getTime() - Date.now();
}

export default useCountDown;
