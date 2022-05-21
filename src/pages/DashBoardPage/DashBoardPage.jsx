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
} from "./subpages";
import { useParams } from "react-router-dom";

function DashBoardPage() {
  const [owner, setOwner] = useState("faculty");
  const { component, course, id } = useParams();

  const dashboardPages = {
    student: {
      certification: <Certification />,
      results: <Results />,
      feedback: <Feedback />,
    },
    admin: {
      messages: <Messages />,
      students: <Students />,
      faculties: <Faculties />,
      courses: <Courses />,
      batch: <NewBatch />,
    },
    faculty: {
      "exam-batches": <FacultyBatches />,
    },
  };

  let dashboardPage = dashboardPages[owner]?.[component] || <div></div>;

  if (course) {
    dashboardPage = <Course />;
  }

  return <Dashboard owner={owner}>{dashboardPage}</Dashboard>;
}

export default DashBoardPage;
