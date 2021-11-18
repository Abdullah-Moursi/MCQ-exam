import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Result from "./components/Result";
import Exam from "./components/Exam";

export const ExamContext = React.createContext()

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of England?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: true },
        { answerText: "Paris", isCorrect: false },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of USA?",
      answerOptions: [
        { answerText: "New York", isCorrect: true },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: false },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "How many atoms are in an Oxygen molecule?",
      answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "2", isCorrect: true },
        { answerText: "1", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <Router>
      <div className="app">
        <ul>
          <Link to="/">
            <li>Login</li>
          </Link>

          <Link to="/exam">
            <li> Exam</li>
          </Link>

          <Link to="/result">
            <li> Result</li>
          </Link>
        </ul>

        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/result" element={<Result/>} />
          <Route exact path="/exam" element={<Exam/>} />
        </Routes>

        {showScore ? (
          <div className="score-section">
            You scored {((score / questions.length) * 100).toFixed(1)} %
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <ExamContext.Provider value={questions}>
        <Result/>
        <Exam/>
      </ExamContext.Provider>
    </Router>
  );
}
