import React, { useState, useEffect } from "react";
import { Dashboard } from "../../components";
import {
  Certification,
  Results,
  Feedback,
  Messages,
  Students,
  Faculties,
  Courses,
  Course,
  NewBatch,
  FacultyBatches,
  ExamBatch,
  CBT,
} from "./subpages";
import { useParams, useNavigate } from "react-router-dom";

function DashBoardPage() {
  const [owner, setOwner] = useState("student");
  const { component } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return navigate("/");
    }

    if (user.registration_number) {
      setOwner("student");
    } else if (user.is_admin) {
      setOwner("admin");
    } else {
      setOwner("faculty");
    }
  }, []);

  const dashboardPages = {
    student: {
      certification: <Certification />,
      results: <Results />,
      feedback: <Feedback />,
      cbt: <CBT />,
    },
    admin: {
      messages: <Messages />,
      students: <Students />,
      faculties: <Faculties />,
      courses: <Courses />,
      course: <Course />,
      "new-batch": <NewBatch />,
    },
    faculty: {
      "exam-batches": <FacultyBatches />,
      "exam-batch": <ExamBatch />,
    },
  };

  let dashboardPage = dashboardPages[owner]?.[component] || <div></div>;

  return <Dashboard owner={owner}>{dashboardPage}</Dashboard>;
}

export default DashBoardPage;
