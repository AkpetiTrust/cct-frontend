import React, { useState } from "react";
import style from "./index.module.css";
import {
  Main,
  SectionTitle,
  Table,
  Button,
  CheckBox,
  Ellipsis,
} from "../../../../components";
import { Message } from "./components";
import { truncateWords } from "../../../../utils/functions";

function Messages() {
  const [messages, setMessages] = useState([
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 1,
      selected: false,
    },
    {
      name: "James John",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 2,
      selected: false,
    },
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 3,
      selected: false,
    },
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 4,
      selected: false,
    },
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 5,
      selected: false,
    },
  ]);

  const [message, setMessage] = useState({ name: "", message: "", id: 0 });
  const [messageShown, setMessageShown] = useState(false);

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
    setMessages((prevMessages) => [
      ...prevMessages.filter((message) => !message.selected),
    ]);
  };

  return (
    <Main className={style.messages}>
      <div className={style.center}>
        <SectionTitle width={"300px"} title={"MESSAGES"}>
          Messages from students and the website's contact form
        </SectionTitle>

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
                <td>{name}</td>
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
