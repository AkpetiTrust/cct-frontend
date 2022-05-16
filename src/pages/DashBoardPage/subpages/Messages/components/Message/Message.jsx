import React from "react";
import style from "./index.module.css";
import { Button } from "../../../../../../components";

function Message({
  message: { name, message, id },
  setMessages,
  setMessageShown,
}) {
  return (
    <div
      className={style.popup}
      onClick={(e) => {
        if (e.target.className === style.popup) {
          setMessageShown(false);
        }
      }}
    >
      <div className={style.inner}>
        <p className={style.title}>
          <span>{name}</span> says:
        </p>
        <p>{message}</p>
        <Button
          onClick={() => {
            setMessages((prevMessages) =>
              prevMessages.filter((message) => message.id !== id)
            );
            setMessageShown(false);
          }}
        >
          DELETE MESSAGE
        </Button>
      </div>
    </div>
  );
}

export default Message;
