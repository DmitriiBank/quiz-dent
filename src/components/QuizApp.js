import React, { useState, useEffect } from 'react';
import '../styles/style.css';


function QuizApp({ questions }) {
    // State management
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [score, setScore] = useState(0);
    const [tempSelectedOption, setTempSelectedOption] = useState(null);
    const [showResults, setShowResults] = useState(false);

    // Reset temp selection when changing questions
    useEffect(() => {
        setTempSelectedOption(userAnswers[currentQuestion]);
    }, [currentQuestion, userAnswers]);

    // Handle option selection
    const selectOption = (selectedIndex) => {
        if (userAnswers[currentQuestion] !== null) return;
        setTempSelectedOption(selectedIndex);
    };

    // Handle next button action
    const handleNextAction = () => {
        // If answer not submitted yet, but option selected - submit answer
        if (userAnswers[currentQuestion] === null && tempSelectedOption !== null) {
            const newUserAnswers = [...userAnswers];
            newUserAnswers[currentQuestion] = tempSelectedOption;
            setUserAnswers(newUserAnswers);

            if (tempSelectedOption === questions[currentQuestion].answer) {
                setScore(score + 1);
            }

            // If last question - show results
            if (currentQuestion === questions.length - 1) {
                setShowResults(true);
            }
        }
        // If answer already submitted - move to next question
        else if (userAnswers[currentQuestion] !== null) {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResults(true);
            }
        }
    };

    // Go to previous question
    const goToPrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Restart quiz
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setUserAnswers(Array(questions.length).fill(null));
        setTempSelectedOption(null);
        setShowResults(false);
    };

    // Determine next button text and state
    const getNextButtonState = () => {
        if (userAnswers[currentQuestion] === null) {
            return {
                text: 'Ответить',
                disabled: tempSelectedOption === null,
                className: 'answer-mode'
            };
        } else {
            if (currentQuestion === questions.length - 1) {
                return {
                    text: 'Показать результаты',
                    disabled: false,
                    className: 'results-mode'
                };
            } else {
                return {
                    text: 'Вперед',
                    disabled: false,
                    className: ''
                };
            }
        }
    };

    // Create question component with image if needed
    const renderQuestion = () => {
        const question = questions[currentQuestion];

        return (
            <div className="question">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
                </div>
                <div className="question-text">{question.question}</div>
                {question.image && (
                    <img src={question.image} alt="Картинка к вопросу" className="quiz-image" />
                )}
                <div className="options">
                    {question.options.map((option, index) => {
                        const isSelected = tempSelectedOption === index;
                        const isCorrect = userAnswers[currentQuestion] !== null && question.answer === index;
                        const isIncorrect = userAnswers[currentQuestion] !== null &&
                            userAnswers[currentQuestion] === index &&
                            userAnswers[currentQuestion] !== question.answer;

                        let optionClass = 'option';
                        if (isSelected) optionClass += ' selected';
                        if (userAnswers[currentQuestion] !== null) {
                            if (isCorrect) optionClass += ' correct';
                            else if (isIncorrect) optionClass += ' incorrect';
                        }

                        return (
                            <div
                                key={index}
                                className={optionClass}
                                onClick={() => selectOption(index)}
                            >
                                {option}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    // Render results
    const renderResults = () => {
        const percentage = Math.round((score / questions.length) * 100);

        return (
            <div className="results-container">
                <h2 className="results-title">Результаты теста</h2>

                <div className="results-summary">
                    <p>Правильных ответов: <strong>{score} из {questions.length}</strong></p>
                    <p>Процент правильных: <strong>{percentage}%</strong></p>
                </div>

                <div className="answers-list">
                    {questions.map((q, index) => {
                        const userAnswerIndex = userAnswers[index];
                        const isCorrect = userAnswerIndex === q.answer;
                        const userAnswerText = userAnswerIndex !== null
                            ? q.options[userAnswerIndex]
                            : 'Нет ответа';
                        const correctAnswerText = q.options[q.answer];

                        return (
                            <div key={index} className={`answer-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                                <div className="question-header">
                                    <h3>Вопрос {index + 1}</h3>
                                    <span className={`status-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                                    {isCorrect ? '✓ Верно' : '✗ Неверно'}
                                </span>
                                </div>

                                <p className="question-text">{q.question}</p>

                                {q.image && (
                                    <div className="question-image-container">
                                        <img
                                            src={q.image}
                                            alt="Иллюстрация вопроса"
                                            className="question-image"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                )}

                                <div className="answer-comparison">
                                    <div className="user-answer">
                                        <strong>Ваш ответ:</strong> {userAnswerText}
                                    </div>
                                    {!isCorrect && (
                                        <div className="correct-answer">
                                            <strong>Правильный ответ:</strong> {correctAnswerText}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="restart-button"
                    onClick={restartQuiz}
                >
                    Пройти тест заново
                </button>
            </div>
        );
    };

    // Get next button configuration
    const nextBtnState = getNextButtonState();

    return (
        <div className="quiz-container">
            {!showResults ? (
                <>
                    <div className="quiz-header">
                        <span>Вопрос <span id="current-question">{currentQuestion + 1}</span> из <span id="total-questions">{questions.length}</span></span>
                    </div>

                    <div id="question-container">
                        {renderQuestion()}
                    </div>

                    <div className="controls">
                        <button
                            id="prev-btn"
                            onClick={goToPrevQuestion}
                            disabled={currentQuestion === 0}
                        >
                            Назад
                        </button>
                        <button
                            id="next-btn"
                            className={nextBtnState.className}
                            onClick={handleNextAction}
                            disabled={nextBtnState.disabled}
                        >
                            {nextBtnState.text}
                        </button>
                    </div>
                </>
            ) :
                renderResults()
            }
        </div>
    );
}

export default QuizApp;