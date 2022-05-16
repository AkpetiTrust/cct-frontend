import React, { useState } from "react";
import {
  Button,
  Ellipsis,
  Main,
  SectionTitle,
  Table,
} from "../../../../components";
import { truncateWords } from "../../../../utils/functions";
import { Student, DeleteUser } from "./components";
import style from "./index.module.css";

function Students() {
  const [students, setStudents] = useState([
    {
      name: "Akpeti Trust",
      courses: ["Web design", "PHP"],
      registration_number: "CCTXFSYT2022",
      email: "akpetitrust@gmail.com",
    },
    {
      name: "Akpeti Trust",
      courses: ["Web design", "PHP"],
      registration_number: "CCTXFSYT2092",
      email: "akpetitrust@gmail.com",
    },
    {
      name: "Akpeti Trust",
      courses: ["Web design", "PHP"],
      registration_number: "CCTXFSYT2082",
      email: "akpetitrust@gmail.com",
    },
    {
      name: "Akpeti Trust",
      courses: ["Web design", "PHP"],
      registration_number: "CCTXFSYT2622",
      email: "akpetitrust@gmail.com",
    },
    {
      name: "James John",
      courses: ["Web design", "PHP", "COMPTIA A+"],
      registration_number: "CCTXFSYT3622",
      email: "akpetitrust@gmail.com",
    },
  ]);

  const [studentPopupShown, setStudentPopupShown] = useState(false);
  const [studentPopupRole, setStudentPopupRole] = useState("add");
  const [studentToEdit, setStudentToEdit] = useState(null);

  const [deletePopupShown, setDeletePopupShown] = useState(false);
  const [numberToDelete, setNumberToDelete] = useState(0);

  return (
    <Main className={style.students}>
      <div className={style.center}>
        <SectionTitle title={"STUDENTS"}>List of all students.</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Course(s):</th>
              <th>Registration No:</th>
            </tr>
          </thead>
          <tbody>
            {students.map(({ name, courses, registration_number, email }) => (
              <tr key={registration_number}>
                <td>{name}</td>
                <td>{truncateWords(courses.join(", "), 3)}</td>
                <td>{registration_number}</td>
                <td>
                  <Ellipsis
                    options={[
                      {
                        text: "Edit",
                        onClick: () => {
                          setStudentPopupRole("edit");
                          setStudentToEdit({
                            name,
                            courses,
                            registration_number,
                            email,
                          });
                          setStudentPopupShown(true);
                        },
                      },
                      {
                        text: "Delete",
                        onClick: () => {
                          setNumberToDelete(registration_number);
                          setDeletePopupShown(true);
                        },
                      },
                    ]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          onClick={() => {
            setStudentPopupRole("add");
            setStudentPopupShown(true);
            setStudentToEdit(null);
          }}
        >
          ADD STUDENT
        </Button>
      </div>
      {studentPopupShown && (
        <Student
          role={studentPopupRole}
          setStudentPopupShown={setStudentPopupShown}
          student={studentToEdit}
          setStudents={setStudents}
        />
      )}
      {deletePopupShown && (
        <DeleteUser
          setStudents={setStudents}
          setPopupShown={setDeletePopupShown}
          registration_number={numberToDelete}
        />
      )}
    </Main>
  );
}

export default Students;
