import React, { useState } from "react";
import { Dashboard, Main } from "../../components";

function DashBoardPage() {
  const [owner, setOwner] = useState("student");
  return (
    <Dashboard owner={owner}>
      <Main />
    </Dashboard>
  );
}

export default DashBoardPage;
