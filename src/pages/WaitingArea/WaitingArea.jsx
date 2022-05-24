import React, { useState, useEffect } from "react";
import { Curve, Loading, Main } from "../../components";
import style from "./index.module.css";
import { fetchFromApi, getFullTime } from "../../utils/functions";
import logo from "../../assets/logo.png";
import { CountDown } from "./components";
import { useNavigate, useParams } from "react-router-dom";

function WaitingArea() {
  const [course, setCourse] = useState("PHP");
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFromApi(`get-batch/${id}`, true).then(({ response }) => {
      if (new Date(response.time).getTime() < Date.now()) {
        navigate(`/instructions/${id}`);
      }
      setTime(new Date(response.time));
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading height={"100vh"} />;

  return (
    <Main className={style.waiting}>
      <div className={style.inner}>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h1 className={style.title}>EXAM AREA</h1>
        <p className={style.talk}>
          The {course} test is scheduled to start by {getFullTime(time)}, just
          wait a bit
        </p>
        <CountDown time={time} />
      </div>
      <Curve />
    </Main>
  );
}

export default WaitingArea;
