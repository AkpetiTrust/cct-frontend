import React, { useState, useEffect } from "react";
import {
  Button,
  Ellipsis,
  Loading,
  Main,
  SectionTitle,
  Table,
} from "../../../../components";
import { truncateWords } from "../../../../utils/functions";
import { Student, DeleteUser } from "./components";
import { fetchFromApi } from "../../../../utils/functions";
import style from "./index.module.css";

function Students() {
  const [students, setStudents] = useState([]);

  const [studentPopupShown, setStudentPopupShown] = useState(false);
  const [studentPopupRole, setStudentPopupRole] = useState("add");
  const [studentToEdit, setStudentToEdit] = useState(null);

  const [deletePopupShown, setDeletePopupShown] = useState(false);
  const [idToDelete, setIdToDelete] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalCourses, setTotalCourses] = useState([]);

  useEffect(() => {
    fetchFromApi("students", true).then((result) => {
      setStudents(result.response);
      setLoading(false);
    });
    fetchFromApi("courses", true).then((result) => {
      setTotalCourses(result.response);
    });
  }, []);

  return (
    <Main className={style.students}>
      <div className={style.center}>
        <SectionTitle title={"STUDENTS"}>List of all students.</SectionTitle>
        {loading ? (
          <Loading height={"40vh"} />
        ) : (
          <>
            <Table>
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Course(s):</th>
                  <th>Registration No:</th>
                </tr>
              </thead>
              <tbody>
                {students.map(
                  ({ name, courses, registration_number, email, id }) => (
                    <tr key={registration_number}>
                      <td>{name}</td>
                      <td>
                        {truncateWords(
                          courses.map((course) => course.title).join(", "),
                          3
                        )}
                      </td>
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
                                  id,
                                });
                                setStudentPopupShown(true);
                              },
                            },
                            {
                              text: "Delete",
                              onClick: () => {
                                setIdToDelete(id);
                                setDeletePopupShown(true);
                              },
                            },
                          ]}
                        />
                      </td>
                    </tr>
                  )
                )}
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
          </>
        )}
      </div>
      {studentPopupShown && (
        <Student
          role={studentPopupRole}
          setStudentPopupShown={setStudentPopupShown}
          student={studentToEdit}
          setStudents={setStudents}
          totalCourses={totalCourses}
        />
      )}
      {deletePopupShown && (
        <DeleteUser
          setStudents={setStudents}
          setPopupShown={setDeletePopupShown}
          id={idToDelete}
        />
      )}
    </Main>
  );
}

export default Students;
