import React, { useState } from "react";
import { Dashboard } from "../../components";
import {
  Certification,
  Results,
  Feedback,
  Messages,
  Students,
  Faculties,
} from "./subpages";
import { useParams } from "react-router-dom";

function DashBoardPage() {
  const [owner, setOwner] = useState("admin");
  const { component } = useParams();

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
    },
  };

  const dashboardPage = dashboardPages[owner]?.[component] || <div></div>;

  return <Dashboard owner={owner}>{dashboardPage}</Dashboard>;
}

export default DashBoardPage;
