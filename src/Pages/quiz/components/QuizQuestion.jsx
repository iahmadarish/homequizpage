import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import lgoai from "../../utils/ai.png";
import human from "../../utils/man.png";
import { useQuizProgress } from '../../contexts/QuizProgressContext';

const QuizQuestion = () => {
  const { completeTask } = useQuizProgress(); // Import completeTask from context
  const [birthDate, setBirthDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setBirthDate(date);
    setShowCalendar(false);
    completeTask(); // Call completeTask each time a question is answered
  };

  const handleContinue = () => {
    if (birthDate) {
      console.log('Selected date:', birthDate.toDateString());
      // Add logic to proceed to the next question or display next question
      completeTask(); // Mark the task as completed when clicking continue
    } else {
      alert('Please select a date before continuing.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleContinue();
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img 
            src={lgoai} 
            alt="Monkey Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border">
          <p className="text-gray-800 text-lg">
            Now, may I know your age please? <span className="text-gray-600">(Keep this a secret between us. I'll be sending you a gift on your day)</span> 😉
          </p>
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-end space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">I was born on</span>
          <div className="relative">
            <input
              type="text"
              value={birthDate ? birthDate.toLocaleDateString('en-GB') : ''}
              onClick={() => setShowCalendar(true)}
              readOnly
              placeholder="dd / mm / year"
              className="border rounded px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent cursor-pointer"
            />
            {showCalendar && (
              <div className="absolute top-full left-0 mt-1 z-10">
                <Calendar
                  onChange={handleDateChange}
                  value={birthDate}
                  maxDate={new Date()}
                  minDetail="decade"
                  className="border rounded shadow-lg"
                />
              </div>
            )}
          </div>
          <img 
            src={human} 
            alt="User Avatar" 
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-end space-x-4">
        <div className="flex items-center text-gray-500">
          <span className="mr-2">⌨️</span>
          <span>Or Press Enter</span>
        </div>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors" onClick={handleContinue} onKeyPress={handleKeyPress}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
