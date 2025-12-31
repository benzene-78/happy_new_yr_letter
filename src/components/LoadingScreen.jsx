import React, { useState, useEffect } from 'react';
import Cat from './Cat';

const messages = [
  "Consulting the cats council 🐱",
  "Aligning stars ✨",
  "Measuring cuddle potential 💛",
  "Calculating purr-centages 📊",
  "Retrieving love data 💾"
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep % 20 === 0) { // Change message every second approx
        setMessageIndex(prev => (prev + 1) % messages.length);
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Small delay at 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-8">
      <Cat mood="thinking" className="animate-bounce-slow" />
      
      <div className="text-xl font-bold text-warm-brown animate-pulse">
        {messages[messageIndex]}
      </div>

      <div className="w-64 h-4 bg-white rounded-full overflow-hidden border-2 border-pastel-pink">
        <div 
          className="h-full bg-pastel-pink transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
