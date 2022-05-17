import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import Step from "../Step/Step";
import Button from "../Button/Button";
import Table from "../Table/Table";
import style from "./index.module.css";

function MultistepForm({ role }) {
  const [activeTab, setActiveTab] = useState(1);
  const [steps, setSteps] = useState([
    { text: "Select students", tab: 1 },
    { text: "Pick time", tab: 2 },
    { text: "Assign faculty", tab: 3 },
  ]);
  const [students, setStudents] = useState([
    {
      name: "Akpeti Trust",
      courses: ["Web design", "PHP"],
      registration_number: "CCTXFSYT2022",
      email: "akpetitrust@gmail.com",
      selected: false,
    },
    {
      name: "Akpeti Trust",
      courses: ["Web design", "PHP"],
      registration_number: "CCTXFSYT2092",
      email: "akpetitrust@gmail.com",
      selected: false,
    },
    {
      name: "Akpeti Trust",
      courses: ["Web design", "PHP"],
      registration_number: "CCTXFSYT2082",
      email: "akpetitrust@gmail.com",
      selected: false,
    },
    {
      name: "Akpeti Trust",
      courses: ["Web design", "PHP"],
      registration_number: "CCTXFSYT2622",
      email: "akpetitrust@gmail.com",
      selected: false,
    },
    {
      name: "James John",
      courses: ["Web design", "PHP", "COMPTIA A+"],
      registration_number: "CCTXFSYT3622",
      email: "akpetitrust@gmail.com",
      selected: false,
    },
  ]);

  const [date, setDate] = useState("");

  const [faculties, setFaculties] = useState([
    {
      name: "Akpeti Trust",
      staff_id: "CCTXFSYT2022",
      email: "akpetitrust@gmail.com",
      inCharge: false,
    },
    {
      name: "Akpeti Trust",
      staff_id: "CCTXFSYT2092",
      email: "akpetitrust@gmail.com",
      inCharge: false,
    },
    {
      name: "Akpeti Trust",
      staff_id: "CCTXFSYT2082",
      email: "akpetitrust@gmail.com",
      inCharge: false,
    },
    {
      name: "Akpeti Trust",
      staff_id: "CCTXFSYT2622",
      email: "akpetitrust@gmail.com",
      inCharge: false,
    },
    {
      name: "James John",
      staff_id: "CCTXFSYT3622",
      email: "akpetitrust@gmail.com",
      inCharge: false,
    },
  ]);

  const handleCheck = (e, registration_number) => {
    const selected = e.target.checked;
    setStudents((prevStudents) =>
      [...prevStudents].map((student) =>
        student.registration_number === registration_number
          ? { ...student, selected }
          : student
      )
    );
  };

  return (
    <div className={style.multistep}>
      <div className={style.steps}>
        {steps.map((step) => (
          <Step
            active={activeTab === step.tab}
            setActiveTab={setActiveTab}
            step={step}
            key={step.tab}
          />
        ))}
      </div>
      <div className={style.container}>
        <div
          className={style.main}
          style={{ transform: `translateX(-${(activeTab - 1) * 100}%)` }}
        >
          <div className={style.students}>
            <Table>
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Registration No:</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {students.map(({ name, registration_number, selected }) => (
                  <tr key={registration_number}>
                    <td>{name}</td>
                    <td>{registration_number}</td>
                    <td>
                      <CheckBox
                        name={registration_number}
                        checked={selected}
                        onChange={(e) => {
                          handleCheck(e, registration_number);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button
              width={"300px"}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              NEXT STEP
            </Button>
          </div>
          <div className={style.time}>
            <p>Choose a time for the exam</p>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <Button
              width={"300px"}
              onClick={() => {
                setActiveTab(3);
              }}
            >
              NEXT STEP
            </Button>
          </div>
          <div className={style.faculty}>
            <p>Assign a faculty to upload the exam questions</p>
            <select>
              {faculties.map(({ name, staff_id }) => (
                <option key={staff_id}>{name}</option>
              ))}
            </select>
            <Button width={"300px"}>CREATE EXAM BATCH</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultistepForm;
