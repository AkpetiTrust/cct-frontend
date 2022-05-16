import React, { useState } from "react";
import {
  Button,
  Ellipsis,
  Main,
  SectionTitle,
  Table,
} from "../../../../components";
import { Faculty, DeleteUser } from "./components";
import style from "./index.module.css";

function Faculties() {
  const [faculties, setFaculties] = useState([
    {
      name: "Akpeti Trust",
      staff_id: "CCTXFSYT2022",
      email: "akpetitrust@gmail.com",
    },
    {
      name: "Akpeti Trust",
      staff_id: "CCTXFSYT2092",
      email: "akpetitrust@gmail.com",
    },
    {
      name: "Akpeti Trust",
      staff_id: "CCTXFSYT2082",
      email: "akpetitrust@gmail.com",
    },
    {
      name: "Akpeti Trust",
      staff_id: "CCTXFSYT2622",
      email: "akpetitrust@gmail.com",
    },
    {
      name: "James John",
      staff_id: "CCTXFSYT3622",
      email: "akpetitrust@gmail.com",
    },
  ]);

  const [facultyPopupShown, setFacultyPopupShown] = useState(false);
  const [facultyPopupRole, setFacultyPopupRole] = useState("add");
  const [facultyToEdit, setFacultyToEdit] = useState(null);

  const [deletePopupShown, setDeletePopupShown] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  return (
    <Main className={style.faculties}>
      <div className={style.center}>
        <SectionTitle title={"FACULTIES"}>List of all faculties.</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Email:</th>
              <th>Staff Id:</th>
            </tr>
          </thead>
          <tbody>
            {faculties.map(({ name, staff_id, email }) => (
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
                          });
                          setFacultyPopupShown(true);
                        },
                      },
                      {
                        text: "Delete",
                        onClick: () => {
                          setIdToDelete(staff_id);
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
      </div>
      {facultyPopupShown && (
        <Faculty
          role={facultyPopupRole}
          setFacultyPopupShown={setFacultyPopupShown}
          faculty={facultyToEdit}
          setFaculties={setFaculties}
        />
      )}
      {deletePopupShown && (
        <DeleteUser
          setFaculties={setFaculties}
          setPopupShown={setDeletePopupShown}
          staff_id={idToDelete}
        />
      )}
    </Main>
  );
}

export default Faculties;
