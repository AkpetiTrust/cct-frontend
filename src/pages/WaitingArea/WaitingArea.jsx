import React, { useState } from "react";
import { Curve, Main } from "../../components";
import style from "./index.module.css";
import { getHours } from "../../utils/functions";
import logo from "../../assets/logo.png";
import { CountDown } from "./components";

function WaitingArea() {
  const [course, setCourse] = useState("PHP");
  const [time, setTime] = useState(new Date("2022-05-22T16:40:00"));

  return (
    <Main className={style.waiting}>
      <div className={style.inner}>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h1 className={style.title}>EXAM AREA</h1>
        <p className={style.talk}>
          The {course} test is scheduled to start by {getHours(time)}, just wait
          a bit
        </p>
        <CountDown time={time} />
      </div>
      <Curve />
    </Main>
  );
}

export default WaitingArea;
