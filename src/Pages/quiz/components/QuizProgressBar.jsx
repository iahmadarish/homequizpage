import React from 'react';
import { Check } from 'lucide-react';
import { useQuizProgress } from '../../contexts/QuizProgressContext';

const QuizProgressBar = () => {
  const { currentStep, completedTasks } = useQuizProgress();
  const steps = [
    { number: 1, title: 'Take Scent Quiz' },
    { number: 2, title: 'Build Your Set' },
    { number: 3, title: 'Complete Payment' }
  ];

  const tasksPerStep = 7; // Step 1 has 7 questions
  const taskCompletionPercentage = (completedTasks / tasksPerStep) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                ${step.number < currentStep 
                  ? 'bg-[#8B4513] border-[#8B4513]' 
                  : step.number === currentStep 
                    ? 'border-[#8B4513] bg-white' 
                    : 'border-gray-300 bg-white'}`}
              >
                {step.number < currentStep ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span className={`text-sm font-medium
                    ${step.number === currentStep ? 'text-[#8B4513]' : 'text-gray-400'}`}>
                    {step.number}
                  </span>
                )}
              </div>
              
              <span className={`mt-2 text-sm font-medium
                ${step.number <= currentStep ? 'text-[#8B4513]' : 'text-gray-400'}`}>
                {step.title}
              </span>

              {step.number === currentStep && completedTasks > 0 && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24">
                  <div className="h-1 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-[#8B4513] rounded-full transition-all duration-300"
                      style={{ width: `${taskCompletionPercentage}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] mx-4">
                <div className={`h-full ${
                  step.number < currentStep ? 'bg-[#8B4513]' : 'bg-gray-300'
                }`} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuizProgressBar;
