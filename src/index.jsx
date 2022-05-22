import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DashBoardPage, Login, WaitingArea, Instructions, Exam } from "./pages";
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
        <Route path="/instructions/:id" exact element={<Instructions />} />
        <Route path="/exam/:id" exact element={<Exam />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
