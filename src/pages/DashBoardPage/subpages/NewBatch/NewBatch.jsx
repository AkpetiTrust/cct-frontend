import React from "react";
import { Main, MultistepForm } from "../../../../components";
import style from "./index.module.css";

function NewBatch() {
  return (
    <Main className={style.new_batch}>
      <h1>Create CCNA exam batch</h1>
      <MultistepForm role="create" />
    </Main>
  );
}

export default NewBatch;
