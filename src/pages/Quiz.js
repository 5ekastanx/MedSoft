// New file: src/pages/Quiz.js
import React, { useState } from 'react';
import { FaHeartbeat, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/pages/quiz.css';

export const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const questions = [
    {
      question: "Что делать при остановке сердца?",
      options: [
        "Немедленно начать СЛР",
        "Ждать скорую помощь",
        "Дать воды пострадавшему"
      ],
      correct: 0
    },
    {
      question: "Как остановить артериальное кровотечение?",
      options: [
        "Наложить жгут выше раны",
        "Приложить лед",
        "Наложить повязку"
      ],
      correct: 0
    },
    {
      question: "Что делать при ожоге 2 степени?",
      options: [
        "Охладить проточной водой",
        "Намазать маслом",
        "Проколоть пузыри"
      ],
      correct: 0
    }
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <Link to="/" className="back-button">
          <FaArrowLeft /> На главную
        </Link>
        
        <h1 className="quiz-title">
          <FaHeartbeat /> Тест знаний первой помощи
        </h1>

        {!showResult ? (
          <div className="quiz-content">
            <div className="quiz-progress">
              Вопрос {currentQuestion + 1} из {questions.length}
            </div>
            
            <div className="quiz-question">
              <h2>{questions[currentQuestion].question}</h2>
              
              <div className="quiz-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="quiz-option"
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            <h2>Результаты теста</h2>
            <p>Вы ответили правильно на {score} из {questions.length} вопросов</p>
            
            <div className="result-meter">
              <div 
                className="result-progress" 
                style={{ width: `${(score / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <Link to="/" className="btn btn-primary">
              Вернуться на главную
            </Link>
            
            <Link to="/courses" className="btn btn-outline">
              Изучить курсы
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};