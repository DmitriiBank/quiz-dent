
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizSelectionPage.css';

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
    <div className="selection-container">
      <h1>Выберите тест</h1>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-card" onClick={() => handleSelect(quiz.id)}>
            <img src={quiz.icon} alt={quiz.title} />
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSelectionPage;
