import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountDown } from "../../../../utils/hooks";
import TimeBlock from "../TimeBlock/TimeBlock";
import style from "./index.module.css";

function CountDown({ time }) {
  const { hoursLeft, minutesLeft, secondsLeft } = useCountDown(time);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (hoursLeft === "00" && minutesLeft === "00" && secondsLeft === "00") {
      navigate(`/instructions/${id}`);
    }
  });

  return (
    <section className={style.countdown}>
      <TimeBlock time={hoursLeft} caption="HOURS" />
      <TimeBlock time={minutesLeft} caption="MINUTES" />
      <TimeBlock time={secondsLeft} caption="SECONDS" />
    </section>
  );
}

export default CountDown;
