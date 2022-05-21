import React, { useState } from "react";
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
import { useParams } from "react-router-dom";

function DashBoardPage() {
  const [owner, setOwner] = useState("student");
  const { component, id } = useParams();

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
      batch: <NewBatch />,
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
