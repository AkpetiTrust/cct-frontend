import React from "react";
import { Main, SectionTitle, Ul } from "../../../../components";
import style from "./index.module.css";

function Results() {
  return (
    <Main className={style.results}>
      <SectionTitle title={"RESULTS"} isNotDecorated>
        Get the results for your CCT exams.
      </SectionTitle>
      <section className={style.list}>
        <p className={style.title}>Available Results</p>
        <Ul></Ul>
      </section>
    </Main>
  );
}

export default Results;
