
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuizSelectionPage.css';

const quizzes = [
  {
    id: "lesson1",
    title: "Лекция 1",
    description: "Введение в стоматологию",
    icon: "/image/icon_1.png",
  },
  {
    id: "lesson2",
    title: "Лекция 2",
    description: "Ортопедическая стоматология",
    icon: "/image/icon_2.png",
  },
  {
    id: "lesson3",
    title: "Лекция 3",
    description: "Окклюзия",
    icon: "/image/icon_3.png",
  },
  {
    id: "lesson4",
    title: "Лекция 4",
    description: "Окклюзия, прикус, артикуляция",
    icon: "/image/icon_4.png",
  },
  {
    id: "lesson5",
    title: "Лекция 5",
    description: "Анатомия коронок зубов",
    icon: "/image/icon_5.png",
  }
];

const QuizSelectionPage = () => {
  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
      <div className="quiz-selection-container">
        <div className="selection-header">
          <h1>Выберите тест</h1>
          <div className="quiz-categories">
            {quizzes.map((quiz) => (
                <div key={quiz.id} className="quiz-card" onClick={() => handleSelect(quiz.id)}>
                  <img src={process.env.PUBLIC_URL + quiz.icon} alt={quiz.title} className="quiz-icon"/>
                  <h2>{quiz.title}</h2>
                  <p className="quiz-description">{quiz.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default QuizSelectionPage;
