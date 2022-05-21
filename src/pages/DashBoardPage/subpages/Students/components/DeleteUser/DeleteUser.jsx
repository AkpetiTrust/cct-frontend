import React from "react";
import { Popup, Button } from "../../../../../../components";
import style from "./index.module.css";

function DeleteUser({ setPopupShown, registration_number, setStudents }) {
  const handleDelete = () => {
    setStudents((prevStudents) =>
      [...prevStudents].filter(
        (student) => student.registration_number !== registration_number
      )
    );
    setPopupShown(false);
  };

  return (
    <Popup setPopupShown={setPopupShown}>
      <div className={style.inner}>
        <p className={style.title}>DELETE USER</p>
        <p>
          Are you sure you want to delete this user? This action is
          irreversible.
        </p>

        <Button onClick={handleDelete}>DELETE USER</Button>
      </div>
    </Popup>
  );
}

export default DeleteUser;