import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Result from "./components/Result";
import Exam from "./components/Exam";

// export const ExamContext = React.createContext();

export default function App() {
  return (
    <Router>
      {/* <ExamContext.Provider>
        <Result />
        <Exam />
      </ExamContext.Provider> */}
      <div className="app">
        {/* <ul>
          <Link to="/">
            <li>Login</li>
          </Link>

          <Link to="/exam">
            <li> Exam</li>
          </Link>

          <Link to="/result">
            <li> Result</li>
          </Link>
        </ul> */}

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/exam" element={<Exam />} />
        </Routes>
      </div>
    </Router>
  );
}
