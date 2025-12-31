import React, { useState } from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import LoadingScreen from './components/LoadingScreen';
import Result from './pages/Result';

function App() {
  const [screen, setScreen] = useState('home'); // home, quiz, loading, result

  const handleStart = () => {
    setScreen('quiz');
  };

  const handleQuizComplete = () => {
    setScreen('loading');
  };

  const handleLoadingComplete = () => {
    setScreen('result');
  };

  const handleReplay = () => {
    setScreen('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float">☁️</div>
      <div className="absolute top-20 right-20 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>☁️</div>
      <div className="absolute bottom-10 left-1/4 text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>✨</div>
      <div className="absolute top-1/3 right-10 text-4xl opacity-20 animate-spin-slow">🌸</div>

      <main className="w-full max-w-4xl z-10 py-8">
        {screen === 'home' && <Home onStart={handleStart} />}
        {screen === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
        {screen === 'loading' && <LoadingScreen onComplete={handleLoadingComplete} />}
        {screen === 'result' && <Result onReplay={handleReplay} />}
      </main>

      <footer className="absolute bottom-4 text-center w-full text-white/60 text-sm font-medium">
        Made with 💛 for you
      </footer>
    </div>
  );
}

export default App;
