import React from "react";
import { Popup, Button } from "../../../../../../components";
import { postToApi } from "../../../../../../utils/functions";
import style from "./index.module.css";

function DeleteUser({ setPopupShown, id, setFaculties }) {
  const handleDelete = () => {
    setFaculties((prevFaculties) =>
      [...prevFaculties].filter((faculty) => faculty.id !== id)
    );
    postToApi(`staff/${id}`, null, true, "DELETE");
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
