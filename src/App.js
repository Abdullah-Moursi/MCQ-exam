import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Exam from "./components/Exam";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/exam" element={<Exam />} />
        </Routes>
      </div>
    </Router>
  );
}
