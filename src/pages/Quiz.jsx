import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import Cat from '../components/Cat';
import { questions } from '../data/questions';

const Quiz = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showKnifeCat, setShowKnifeCat] = useState(false);
  const [catMood, setCatMood] = useState('neutral');

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (optionId) => {
    // Special logic for Question 1 "No"
    if (currentQuestion.id === 1 && optionId === 'no') {
      setShowKnifeCat(true);
      setTimeout(() => {
        setShowKnifeCat(false);
        handleNext();
      }, 2000);
      return;
    }

    // Special logic for Question 2
    if (currentQuestion.id === 2) {
      // Just continue, maybe show a toast or something? 
      // Prompt says: Cat reacts with "Crying is allowed" or "I prepared tissues"
      // I'll just proceed for now, maybe add a small reaction state if I had more time, 
      // but the prompt implies the cat reacts. I'll update the cat mood in the UI.
    }

    handleNext();
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      // Reset mood for next question
      setCatMood('neutral');
    } else {
      onComplete();
    }
  };

  // Determine cat mood based on current question
  const getCatMoodForQuestion = () => {
    if (showKnifeCat) return 'angry';
    if (currentQuestion.id === 1) return 'happy';
    if (currentQuestion.id === 2) return 'crying'; // "No, I will cry" context
    if (currentQuestion.id === 3) return 'mischievous'; // or neutral/happy
    return 'neutral';
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Progress */}
      <div className="mb-8 flex justify-center gap-2">
        {questions.map((q, idx) => (
          <div 
            key={q.id}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === currentQuestionIndex ? 'bg-pastel-pink scale-125' : 
              idx < currentQuestionIndex ? 'bg-pastel-green' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-8">
        <Cat mood={getCatMoodForQuestion()} className="w-32 h-32 animate-float" />
        
        {/* Question 2 Reaction Text */}
        {currentQuestion.id === 2 && (
          <div className="bg-white/50 px-4 py-2 rounded-full text-sm text-warm-brown animate-fade-in">
            (I prepared tissues 🧻)
          </div>
        )}

        <QuestionCard 
          question={currentQuestion} 
          onAnswer={handleAnswer} 
        />
      </div>

      {/* Knife Cat Overlay */}
      {showKnifeCat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white p-8 rounded-3xl text-center max-w-sm mx-4 border-4 border-red-400 animate-bounce-slow">
            <Cat mood="angry" className="w-40 h-40 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-red-500 mb-2">Interesting choice.</h3>
            <p className="text-gray-700">But you can’t click no 😼</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
