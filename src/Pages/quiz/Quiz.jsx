import React from 'react';
import { useQuizProgress } from './context/QuizProgressContext';
import QuizProgressBar from './components/QuizProgressBar';
import QuizQuestion from './components/QuizQuestion';

const Quiz = () => {
  const { currentStep, completedTasks, completeTask } = useQuizProgress();

  return (
    <div className="container mx-auto">
      <QuizProgressBar 
        currentStep={currentStep} 
        completedTasks={completedTasks} 
      />
      <QuizQuestion />
    </div>
  );
}

export default Quiz;