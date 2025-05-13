import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizSelectionPage from './components/QuizSelectionPage';
import QuizPage from './components/QuizPage';
import './styles/style.css';

function App() {
    return (
        <BrowserRouter basename="/quiz-dent">
            <Routes>
                <Route path="/" element={<QuizSelectionPage />} />
                <Route path="/quiz/:quizId" element={<QuizPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
