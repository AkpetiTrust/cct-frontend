import React, { useState } from "react";
import { Button, Input, Popup } from "../../../../../../components";
import { postToApi } from "../../../../../../utils/functions";
import style from "./index.module.css";

function Faculty({
  role,
  faculty,
  setFacultyPopupShown,
  setFaculties,
  setLoading,
}) {
  const action = `${role === "add" ? "ADD" : "EDIT"} FACULTY`;

  const [name, setName] = useState(faculty?.name || "");
  const [email, setEmail] = useState(faculty?.email || "");
  const [id, setId] = useState(faculty?.id);
  const [error, setError] = useState(false);

  const addFaculty = () => {
    if (!name || !email) return;

    setLoading(true);

    postToApi("staff", { name, email }, true).then((result) => {
      if (result.errors) {
        setError(true);
        setLoading(false);
        return;
      }

      setFaculties((prevFaculties) => [...prevFaculties, result.response]);
      setLoading(false);
      setFacultyPopupShown(false);
    });
  };

  const editFaculty = () => {
    if (!name || !email) return;

    postToApi(`staff/${id}`, { name, email }, true, "PUT").then((result) => {
      if (result.errors) {
        setError(true);
        setLoading(false);
        return;
      }

      setFaculties((prevFaculties) =>
        [...prevFaculties].map((faculty) =>
          faculty.id === id ? { ...faculty, name, email } : faculty
        )
      );

      setLoading(false);
      setFacultyPopupShown(false);
    });
  };

  return (
    <Popup setPopupShown={setFacultyPopupShown}>
      <div className={style.inner}>
        <svg
          onClick={() => {
            setFacultyPopupShown(false);
          }}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.36623 5.36623C5.60064 5.13189 5.91852 5.00025 6.24998 5.00025C6.58143 5.00025 6.89932 5.13189 7.13373 5.36623L12.5 10.7325L17.8662 5.36623C17.9815 5.24684 18.1195 5.15161 18.272 5.0861C18.4245 5.02059 18.5885 4.98611 18.7545 4.98467C18.9205 4.98322 19.085 5.01485 19.2387 5.0777C19.3923 5.14055 19.5319 5.23337 19.6492 5.35074C19.7666 5.4681 19.8594 5.60767 19.9223 5.76129C19.9851 5.91491 20.0167 6.07951 20.0153 6.24548C20.0138 6.41146 19.9794 6.57548 19.9139 6.72798C19.8483 6.88049 19.7531 7.01842 19.6337 7.13373L14.2675 12.5L19.6337 17.8662C19.8614 18.102 19.9874 18.4177 19.9846 18.7455C19.9817 19.0732 19.8503 19.3867 19.6185 19.6185C19.3867 19.8503 19.0732 19.9817 18.7455 19.9846C18.4177 19.9874 18.102 19.8614 17.8662 19.6337L12.5 14.2675L7.13373 19.6337C6.89797 19.8614 6.58222 19.9874 6.25448 19.9846C5.92673 19.9817 5.61321 19.8503 5.38145 19.6185C5.14969 19.3867 5.01823 19.0732 5.01538 18.7455C5.01254 18.4177 5.13853 18.102 5.36623 17.8662L10.7325 12.5L5.36623 7.13373C5.13189 6.89932 5.00024 6.58143 5.00024 6.24998C5.00024 5.91852 5.13189 5.60064 5.36623 5.36623Z"
            fill="black"
          />
        </svg>

        <div className={style.center}>
          <p className={style.title}>{action}</p>
          <div className={style.form_group}>
            <label htmlFor="name">Name:</label>
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type={"text"}
              name="name"
              id="name"
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="email">Email:</label>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type={"text"}
              name="email"
              id="email"
            />
          </div>
          {error && <p className={style.error}>Email has been taken</p>}
          <Button onClick={role === "add" ? addFaculty : editFaculty}>
            {action}
          </Button>
        </div>
      </div>
    </Popup>
  );
}

export default Faculty;
