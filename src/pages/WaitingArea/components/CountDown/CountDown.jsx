import React from "react";
import { useCountDown } from "../../../../utils/hooks";
import TimeBlock from "../TimeBlock/TimeBlock";
import style from "./index.module.css";

function CountDown({ time }) {
  const { hoursLeft, minutesLeft, secondsLeft } = useCountDown(time);

  return (
    <section className={style.countdown}>
      <TimeBlock time={hoursLeft} caption="HOURS" />
      <TimeBlock time={minutesLeft} caption="MINUTES" />
      <TimeBlock time={secondsLeft} caption="SECONDS" />
    </section>
  );
}

export default CountDown;
