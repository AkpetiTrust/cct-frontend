import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DashBoardPage, Login, WaitingArea } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<DashBoardPage />} />
        <Route path="/dashboard/:component" exact element={<DashBoardPage />} />
        <Route
          path="/dashboard/:component/:id"
          exact
          element={<DashBoardPage />}
        />
        <Route path="/waiting-area/:id" exact element={<WaitingArea />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
