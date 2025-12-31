import React from 'react';
import Cat from '../components/Cat';

const Home = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="relative mb-8">
        <div className="absolute -top-10 -left-10 text-4xl animate-bounce-slow">✨</div>
        <div className="absolute -top-5 -right-12 text-3xl animate-bounce-slow" style={{ animationDelay: '1s' }}>💖</div>
        <div className="absolute bottom-0 -left-16 text-2xl animate-bounce-slow" style={{ animationDelay: '2s' }}>⭐</div>
        
        <Cat mood="happy" className="w-48 h-48 animate-float" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6 leading-relaxed">
        Before the New Year sneaks in…<br/>
        this little cat has some<br/>
        <span className="text-pastel-pink bg-warm-brown px-2 py-1 rounded-lg inline-block transform -rotate-2 mt-2">VERY important questions</span> 🐾
      </h1>

      <button 
        onClick={onStart}
        className="btn-primary text-xl mt-8 animate-wiggle hover:animate-none"
      >
        Let’s begin, meow! 🐱
      </button>
    </div>
  );
};

export default Home;
