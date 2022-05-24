import React, { useState, useEffect } from "react";
import CheckBox from "../CheckBox/CheckBox";
import Step from "../Step/Step";
import Button from "../Button/Button";
import Table from "../Table/Table";
import style from "./index.module.css";
import Loading from "../Loading/Loading";
import {
  convertToTwoDigits,
  fetchFromApi,
  postToApi,
} from "../../utils/functions";
import { useNavigate, useParams } from "react-router-dom";

function MultistepForm({ role }) {
  const [activeTab, setActiveTab] = useState(1);
  const [steps, setSteps] = useState([
    { text: "Select students", tab: 1 },
    { text: "Pick time", tab: 2 },
    { text: "Assign faculty", tab: 3 },
  ]);
  const [students, setStudents] = useState([]);

  const [date, setDate] = useState(
    `${new Date().getFullYear()}-${convertToTwoDigits(
      new Date().getMonth() + 1
    )}-${convertToTwoDigits(new Date().getDate())}T${convertToTwoDigits(
      new Date().getHours()
    )}:${convertToTwoDigits(new Date().getMinutes())}`
  );

  const [faculties, setFaculties] = useState([]);

  const [selectedFaculty, setSelectedFaculty] = useState(0);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFromApi(`courses/${id}`, true).then((result) => {
      setStudents(
        result.response.students.map((student) => ({
          ...student,
          selected: false,
        }))
      );
      setFaculties(result.response.faculties);
      setSelectedFaculty(result.response.faculties[0]?.id);
      setLoading(false);
    });
  }, []);

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

  const handleSubmit = () => {
    let course_id = Number(id);
    let faculty_id = selectedFaculty;
    let time = date;
    let studentsToUpload = students
      .filter((student) => student.selected)
      .map((student) => student.id);

    setLoading(true);
    postToApi(
      "exam-batches",
      {
        course_id,
        faculty_id,
        time,
        students: JSON.stringify(studentsToUpload),
      },
      true
    ).then(() => {
      navigate(`/dashboard/course/${id}`);
    });
  };

  if (loading) return <Loading height={"50vh"} />;

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
            <select
              value={selectedFaculty}
              onChange={(e) => {
                setSelectedFaculty(Number(e.currentTarget.value));
              }}
            >
              {faculties.map(({ name, staff_id, id }) => (
                <option value={id} key={staff_id}>
                  {name}
                </option>
              ))}
            </select>
            <Button width={"300px"} onClick={handleSubmit}>
              CREATE EXAM BATCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultistepForm;
