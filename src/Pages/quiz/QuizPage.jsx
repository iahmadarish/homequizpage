import React from 'react';
import { QuizProgressProvider } from './context/QuizProgressContext';
import Quiz from './Quiz';

const QuizPage = () => {
  return (
    <QuizProgressProvider>
      <Quiz />
    </QuizProgressProvider>
  );
};

export default QuizPage;