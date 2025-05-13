import React, { useState } from 'react';
import '../styles/style.css'; // Подключаем глобальные стили

const QuizApp = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (index) => {
    setSelected(index);
  };

  const handleNext = () => {
    const isCorrect = selected === questions[current].answer;
    if (isCorrect) setScore((prev) => prev + 1);
    setAnswers((prev) => [...prev, selected]);

    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((prev) => prev + 1);
    }

    setSelected(null);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  if (finished) {
    return (
        <div className="results-container">
          <h2 className="results-title">Результат</h2>
          <div className="results-summary">
            Вы ответили правильно на {score} из {questions.length} вопросов.
          </div>
          <ul className="answers-list">
            {questions.map((q, idx) => (
                <li
                    key={idx}
                    className={`answer-item ${
                        answers[idx] === q.answer ? 'correct' : 'incorrect'
                    }`}
                >
                  <div className="question-header">
                    <strong>{q.question}</strong>
                    <span
                        className={`status-badge ${
                            answers[idx] === q.answer ? 'correct' : 'incorrect'
                        }`}
                    >
                  {answers[idx] === q.answer ? 'верно' : 'ошибка'}
                </span>
                  </div>
                  {q.image && (
                      <div className="question-image-container">
                        <img src={process.env.PUBLIC_URL + q.image} alt="вопрос" className="question-image" />
                      </div>
                  )}
                  <div className="answer-comparison">
                    <div className="user-answer">
                      Ваш ответ: {q.options[answers[idx]] ?? '—'}
                    </div>
                    <div className="correct-answer">
                      Правильный ответ: {q.options[q.answer]}
                    </div>
                  </div>
                </li>
            ))}
          </ul>
          <button className="restart-button" onClick={restart}>
            Пройти заново
          </button>
        </div>
    );
  }

  const q = questions[current];

  return (
      <div className="quiz-container">
        <div className="question">
          <div className="question-text">
            {current + 1}. {q.question}
          </div>
          {q.image && (
              <div className="question-image-container">
                <img src={q.image} alt="вопрос" className="question-image" />
              </div>
          )}
          <div className="options">
            {q.options.map((opt, idx) => {
              const isSelected = selected === idx;
              const className = isSelected ? 'option selected' : 'option';
              return (
                  <div key={idx} className={className} onClick={() => handleAnswer(idx)}>
                    {opt}
                  </div>
              );
            })}
          </div>
          <div className="buttons-container">
            <button
                id="next-btn"
                className={selected !== null ? 'answer-mode' : ''}
                onClick={handleNext}
                disabled={selected === null}
            >
              {current + 1 === questions.length ? 'Показать результат' : 'Ответить'}
            </button>
          </div>
          <div className="progress-bar">
            <div
                className="progress"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`
                }}
            />
          </div>
        </div>
      </div>
  );
};

export default QuizApp;
