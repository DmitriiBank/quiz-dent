import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizSelectionPage.css';

const QuizSelectionPage = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const navigate = useNavigate();

    // Quiz categories with their details
    const quizCategories = [
        {
            id: 'lesson1',
            title: 'Лекция №1',
            description: 'Введение в стоматологию',
            icon: 'tooth-icon.svg',
            questionsCount: 20,
            difficulty: 'Средний'
        },
        {
            id: 'lesson2',
            title: 'Лекция №2',
            description: 'Кариес и ортопедические конструкции',
            icon: 'gum-icon.svg',
            questionsCount: 20,
            difficulty: 'Средний'
        }
    ];

    // Handle quiz selection
    const handleQuizSelect = (quizId) => {
        setSelectedQuiz(quizId);
    };

    // Start the selected quiz
    const startQuiz = () => {
        if (selectedQuiz) {
            navigate(`/quiz/${selectedQuiz}`);
        }
    };

    return (
        <div className="quiz-selection-container">
            <header className="selection-header">
                <p>Выберите тему теста для проверки своих знаний</p>
            </header>

            <div className="quiz-categories">
                {quizCategories.map((category) => (
                    <div
                        key={category.id}
                        className={`quiz-card ${selectedQuiz === category.id ? 'selected' : ''}`}
                        onClick={() => handleQuizSelect(category.id)}
                    >
                        <div className="quiz-card-header">
                            <div className="quiz-icon">
                                <img src={`/icons/${category.icon}`} alt={category.title} />
                            </div>
                            <h2>{category.title}</h2>
                        </div>

                        <div className="quiz-description">
                            <p>{category.description}</p>
                        </div>

                        <div className="quiz-meta">
              <span className="questions-count">
                <i className="question-icon"></i> {category.questionsCount} вопросов
              </span>
                            <span className="difficulty">
                Сложность: {category.difficulty}
              </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="quiz-selection-footer">
                <button
                    className="start-quiz-button"
                    disabled={!selectedQuiz}
                    onClick={startQuiz}
                >
                    {selectedQuiz ? 'Начать тест' : 'Выберите тест'}
                </button>
            </div>
        </div>
    );
};

export default QuizSelectionPage;