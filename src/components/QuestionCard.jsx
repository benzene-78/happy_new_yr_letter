import React, { useState, useEffect } from 'react';

const QuestionCard = ({ question, onAnswer }) => {
  const [runawayPos, setRunawayPos] = useState({ x: 0, y: 0 });
  const [isRunningAway, setIsRunningAway] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setRunawayPos({ x: 0, y: 0 });
    setIsRunningAway(false);
  }, [question]);

  const handleHover = (optionId) => {
    if (question.id === 3 && optionId === 'yes') {
      const x = Math.random() * 200 - 100; // -100 to 100
      const y = Math.random() * 200 - 100;
      setRunawayPos({ x, y });
      setIsRunningAway(true);
    }
  };

  const handleClick = (optionId) => {
    if (question.id === 3 && optionId === 'yes') {
      // Double check just in case they managed to click it
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      setRunawayPos({ x, y });
      setIsRunningAway(true);
      return;
    }
    onAnswer(optionId);
  };

  return (
    <div className="card w-full max-w-md mx-auto text-center animate-float">
      <h2 className="text-2xl font-bold mb-8 text-warm-brown">{question.text}</h2>
      
      <div className="flex flex-col gap-4">
        {question.options.map((option) => {
          const isRunaway = question.id === 3 && option.id === 'yes';
          
          return (
            <button
              key={option.id}
              onClick={() => handleClick(option.id)}
              onMouseEnter={() => handleHover(option.id)}
              style={isRunaway ? { transform: `translate(${runawayPos.x}px, ${runawayPos.y}px)`, transition: 'all 0.2s ease' } : {}}
              className={`btn-primary w-full ${isRunaway ? 'bg-red-200 hover:bg-red-300' : ''}`}
            >
              {option.text}
            </button>
          );
        })}
      </div>
      
      {isRunningAway && (
        <p className="mt-4 text-sm text-gray-500 italic animate-pulse">
          Nice try. 😼
        </p>
      )}
    </div>
  );
};

export default QuestionCard;
