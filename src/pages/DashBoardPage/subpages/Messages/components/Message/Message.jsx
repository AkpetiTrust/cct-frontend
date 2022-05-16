import React from "react";
import style from "./index.module.css";
import { Button, Popup } from "../../../../../../components";

function Message({
  message: { name, message, id },
  setMessages,
  setMessageShown,
}) {
  return (
    <Popup setPopupShown={setMessageShown}>
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
    </Popup>
  );
}

export default Message;
