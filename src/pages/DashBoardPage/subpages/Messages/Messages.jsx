import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import {
  Main,
  SectionTitle,
  Table,
  Button,
  CheckBox,
  Ellipsis,
  Loading,
} from "../../../../components";
import { Message } from "./components";
import {
  fetchFromApi,
  postToApi,
  truncateWords,
} from "../../../../utils/functions";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState({ name: "", message: "", id: 0 });
  const [messageShown, setMessageShown] = useState(false);

  useEffect(() => {
    fetchFromApi("messages", true).then((result) => {
      setMessages(
        result.response.map((message) => ({ ...message, selected: false }))
      );
      setLoading(false);
    });
  }, []);

  const showMessage = (message) => {
    setMessage(message);
    setMessageShown(true);
  };

  const handleCheckChange = (e, id) => {
    const selected = e.currentTarget.checked;
    setMessages((prevMessages) => {
      let newMessages = prevMessages.map((message) =>
        message.id === id ? { ...message, selected } : message
      );
      return [...newMessages];
    });
  };

  const deleteSelected = () => {
    let idsTodelete = messages
      .filter((message) => message.selected)
      .map((message) => message.id);

    setMessages((prevMessages) => [
      ...prevMessages.filter((message) => !message.selected),
    ]);

    postToApi("delete-messages", { ids: JSON.stringify(idsTodelete) }, true);
  };

  return (
    <Main className={style.messages}>
      <div className={style.center}>
        <SectionTitle width={"300px"} title={"MESSAGES"}>
          Messages from students and the website's contact form
        </SectionTitle>

        {loading ? (
          <Loading height={"50vh"} />
        ) : (
          <>
            <Table>
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map(({ name, message, id, selected }) => (
                  <tr key={id}>
                    <td>{name ? name : "Anonymous"}</td>
                    <td
                      onClick={() => {
                        showMessage({ name, message, id });
                      }}
                    >
                      {truncateWords(message, 10)}
                    </td>
                    <td>
                      <Ellipsis
                        options={[
                          {
                            text: "View",
                            onClick: () => {
                              showMessage({ name, message, id });
                            },
                          },
                        ]}
                      />
                    </td>
                    <td>
                      <CheckBox
                        name={id}
                        checked={selected}
                        onChange={(e) => handleCheckChange(e, id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button onClick={deleteSelected}>DELETE SELECTED</Button>
          </>
        )}
      </div>

      {messageShown && (
        <Message
          message={message}
          setMessageShown={setMessageShown}
          setMessages={setMessages}
        />
      )}
    </Main>
  );
}

export default Messages;
