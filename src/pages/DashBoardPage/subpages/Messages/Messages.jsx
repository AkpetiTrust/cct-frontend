import React, { useState } from "react";
import style from "./index.module.css";
import { Main, SectionTitle, Table, Button } from "../../../../components";
import { truncateWords } from "../../../../utils/functions";

function Messages() {
  const [messages, setMessages] = useState([
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 1,
    },
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 2,
    },
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 3,
    },
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 4,
    },
    {
      name: "Akpeti Trust",
      message:
        "I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so. I have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so soI have complaints regarding this this this. I'm just writing random words to make this a long text. Words that have no meaning are coming up. PHP, Web design, Excel, MS Word, so so so",
      id: 5,
    },
  ]);

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
            {messages.map(({ name, message, id }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{truncateWords(message, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button>DELETE SELECTED</Button>
      </div>
    </Main>
  );
}

export default Messages;
