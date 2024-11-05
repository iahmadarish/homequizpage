import React, { createContext, useContext, useState, useEffect } from 'react';

const QuizProgressContext = createContext(undefined);

export const QuizProgressProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem('quizCurrentStep');
    return saved ? parseInt(saved) : 1;
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('quizCompletedTasks');
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('quizCurrentStep', currentStep.toString());
    localStorage.setItem('quizCompletedTasks', completedTasks.toString());
  }, [currentStep, completedTasks]);

  const completeTask = () => {
    const tasksPerStep = 7;
    if (completedTasks + 1 >= tasksPerStep) {
      if (currentStep < 3) {
        setCurrentStep(prev => prev + 1);
        setCompletedTasks(0);
      }
    } else {
      setCompletedTasks(prev => prev + 1);
    }
  };

  const resetProgress = () => {
    setCurrentStep(1);
    setCompletedTasks(0);
  };

  return (
    <QuizProgressContext.Provider 
      value={{ 
        currentStep, 
        completedTasks, 
        completeTask, 
        resetProgress 
      }}
    >
      {children}
    </QuizProgressContext.Provider>
  );
};

export const useQuizProgress = () => {
  const context = useContext(QuizProgressContext);
  if (context === undefined) {
    throw new Error('useQuizProgress must be used within a QuizProgressProvider');
  }
  return context;
};