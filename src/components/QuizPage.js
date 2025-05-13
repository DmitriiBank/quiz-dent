import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizApp from './QuizApp';

const QuizPage = () => {
  const { quizId } = useParams(); // например: lesson1
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Загружаем JSON по пути, совместимому с GitHub Pages
    fetch(`${process.env.PUBLIC_URL}/quiz/${quizId}.json`)
        .then((res) => {
          if (!res.ok) throw new Error('Файл не найден');
          return res.json();
        })
        .then((data) => {
          setQuiz(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Ошибка загрузки теста:', err);
          setQuiz(null);
          setLoading(false);
        });
  }, [quizId]);

  if (loading) return <p>Загрузка...</p>;
  if (!quiz) return <p>Тест не найден</p>;

  return (
      <div className="quiz-page">
        <h2>{quiz.title}</h2>
        <QuizApp questions={quiz.questions} />
      </div>
  );
};

export default QuizPage;
