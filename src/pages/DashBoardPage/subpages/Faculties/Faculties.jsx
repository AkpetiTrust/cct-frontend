import React, { useState, useEffect } from "react";
import {
  Button,
  Ellipsis,
  Loading,
  Main,
  SectionTitle,
  Table,
} from "../../../../components";
import { fetchFromApi } from "../../../../utils/functions";
import { Faculty, DeleteUser } from "./components";
import style from "./index.module.css";

function Faculties() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [facultyPopupShown, setFacultyPopupShown] = useState(false);
  const [facultyPopupRole, setFacultyPopupRole] = useState("add");
  const [facultyToEdit, setFacultyToEdit] = useState(null);

  const [deletePopupShown, setDeletePopupShown] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  useEffect(() => {
    fetchFromApi("staff", true).then((result) => {
      setFaculties(result.response);
      setLoading(false);
    });
  }, []);

  return (
    <Main className={style.faculties}>
      <div className={style.center}>
        <SectionTitle title={"FACULTIES"}>List of all faculties.</SectionTitle>
        {loading ? (
          <Loading height={"40vh"} />
        ) : (
          <>
            <Table>
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Email:</th>
                  <th>Staff Id:</th>
                </tr>
              </thead>
              <tbody>
                {faculties.map(({ name, staff_id, email, id }) => (
                  <tr key={staff_id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{staff_id}</td>
                    <td>
                      <Ellipsis
                        options={[
                          {
                            text: "Edit",
                            onClick: () => {
                              setFacultyPopupRole("edit");
                              setFacultyToEdit({
                                name,
                                staff_id,
                                email,
                                id,
                              });
                              setFacultyPopupShown(true);
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
                ))}
              </tbody>
            </Table>
            <Button
              onClick={() => {
                setFacultyPopupRole("add");
                setFacultyPopupShown(true);
                setFacultyToEdit(null);
              }}
            >
              ADD FACULTY
            </Button>
          </>
        )}
      </div>
      {facultyPopupShown && (
        <Faculty
          role={facultyPopupRole}
          setFacultyPopupShown={setFacultyPopupShown}
          faculty={facultyToEdit}
          setFaculties={setFaculties}
          setLoading={setLoading}
        />
      )}
      {deletePopupShown && (
        <DeleteUser
          setFaculties={setFaculties}
          setPopupShown={setDeletePopupShown}
          id={idToDelete}
        />
      )}
    </Main>
  );
}

export default Faculties;
