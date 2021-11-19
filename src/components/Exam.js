import React, {  useState } from "react";
import "../App.css";
import Result from "./Result";

export const ScoreContext = React.createContext();

const Exam = () => {
  const data = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
      answered: false,
    },
    {
      questionText: "Next to sun, which is the nearest star of the earth?",
      answerOptions: [
        { answerText: "Orion", isCorrect: false },
        { answerText: "Apha centuari", isCorrect: true },
        { answerText: "Sirius", isCorrect: false },
        { answerText: "Usra Majo", isCorrect: false },
      ],
      answered: false,
    },
    {
      questionText: "Which planet is known as “Bright Wandering Star”?",
      answerOptions: [
        { answerText: "Jupiter", isCorrect: true },
        { answerText: "Saturn", isCorrect: false },
        { answerText: "Venus", isCorrect: false },
        { answerText: "Mars", isCorrect: false },
      ],
      answered: false,
    },
    {
      questionText: "How many atoms are in an Oxygen molecule?",
      answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "2", isCorrect: true },
        { answerText: "1", isCorrect: false },
      ],
      answered: false,
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
      answered: false,
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
      answered: false,
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
      answered: false,
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(null);
  const [questions, setQuestions] = useState(data);


  const shuffledQuestions =
    questions[Math.floor(Math.random() * questions.length)];

  const handleAnswerOptionClick = (isCorrect, el) => {
    setQuestions(questions.map((e) => {
        if (e === el) {
            return {
                ...e,
                answered: true
            };
        }
        return e;
    }));
    console.log(questions, shuffledQuestions)
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

  const scorePercentage = ((score / questions.length) * 100).toFixed(1);
  return (
    <>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            <>
              <ScoreContext.Provider value={scorePercentage}>
                <Result />
              </ScoreContext.Provider>
            </>
          </div>
        ) : (
          !shuffledQuestions.answered && (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {shuffledQuestions.questionText}
                </div>
              </div>
              <div className="answer-section">
                {shuffledQuestions.answerOptions.map((answerOption) => (
                  <button
                    key={Math.random() * 100}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect, shuffledQuestions)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )
        )  
        }
      </div>
    </>
  );
};

export default Exam;
