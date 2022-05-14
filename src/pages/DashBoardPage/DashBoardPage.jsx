import React, { useState } from "react";
import { Dashboard } from "../../components";
import { Certification, Results } from "./subpages";
import { useParams } from "react-router-dom";

function DashBoardPage() {
  const [owner, setOwner] = useState("student");
  const { component } = useParams();

  const dashboardPages = {
    student: {
      certification: <Certification />,
      results: <Results />,
    },
  };

  const dashboardPage = dashboardPages[owner][component] || <div></div>;

  return <Dashboard owner={owner}>{dashboardPage}</Dashboard>;
}

export default DashBoardPage;
