import React from 'react';

const Cat = ({ mood = 'neutral', className = '' }) => {
  // Mood-based facial features
  const getEyes = () => {
    switch (mood) {
      case 'happy':
        return (
          <>
            <path d="M35 45 Q40 40 45 45" stroke="#4a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M55 45 Q60 40 65 45" stroke="#4a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        );
      case 'sad':
      case 'crying':
        return (
          <>
            <circle cx="40" cy="45" r="3" fill="#4a4a4a" />
            <circle cx="60" cy="45" r="3" fill="#4a4a4a" />
            {mood === 'crying' && (
              <>
                <path d="M40 50 Q35 60 35 70" stroke="#87CEEB" strokeWidth="2" fill="none" />
                <path d="M60 50 Q65 60 65 70" stroke="#87CEEB" strokeWidth="2" fill="none" />
              </>
            )}
          </>
        );
      case 'angry':
        return (
          <>
            <path d="M35 40 L45 45" stroke="#4a4a4a" strokeWidth="3" strokeLinecap="round" />
            <path d="M65 40 L55 45" stroke="#4a4a4a" strokeWidth="3" strokeLinecap="round" />
            <circle cx="40" cy="50" r="2" fill="#4a4a4a" />
            <circle cx="60" cy="50" r="2" fill="#4a4a4a" />
          </>
        );
      case 'thinking':
        return (
          <>
            <circle cx="40" cy="40" r="3" fill="#4a4a4a" />
            <circle cx="60" cy="40" r="3" fill="#4a4a4a" />
            <path d="M35 30 Q40 25 45 30" stroke="#4a4a4a" strokeWidth="2" fill="none" />
          </>
        );
      case 'shy':
        return (
          <>
            <path d="M35 45 Q40 48 45 45" stroke="#4a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M55 45 Q60 48 65 45" stroke="#4a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="30" cy="55" r="5" fill="#ffb7b2" opacity="0.6" />
            <circle cx="70" cy="55" r="5" fill="#ffb7b2" opacity="0.6" />
          </>
        );
      default: // neutral
        return (
          <>
            <circle cx="40" cy="45" r="3" fill="#4a4a4a" />
            <circle cx="60" cy="45" r="3" fill="#4a4a4a" />
          </>
        );
    }
  };

  const getMouth = () => {
    switch (mood) {
      case 'happy':
      case 'shy':
        return <path d="M45 55 Q50 60 55 55" stroke="#4a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />;
      case 'sad':
      case 'crying':
        return <path d="M45 60 Q50 55 55 60" stroke="#4a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />;
      case 'angry':
        return <path d="M45 60 L55 60" stroke="#4a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />;
      case 'thinking':
        return <circle cx="50" cy="60" r="2" fill="#4a4a4a" />;
      default:
        return (
          <>
            <path d="M45 55 Q50 58 55 55" stroke="#4a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />
            <line x1="50" y1="55" x2="50" y2="58" stroke="#4a4a4a" strokeWidth="3" strokeLinecap="round" />
          </>
        );
    }
  };

  const getExtras = () => {
    if (mood === 'angry') {
      return (
        // Tiny knife
        <g transform="translate(75, 40) rotate(-10)">
          <rect x="0" y="0" width="4" height="20" fill="#C0C0C0" rx="1" />
          <rect x="-2" y="15" width="8" height="8" fill="#8B4513" rx="1" />
        </g>
      );
    }
    return null;
  };

  return (
    <div className={`relative w-32 h-32 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        {/* Ears */}
        <path d="M20 30 L30 10 L50 25" fill="#fdfd96" stroke="#4a4a4a" strokeWidth="3" strokeLinejoin="round" />
        <path d="M80 30 L70 10 L50 25" fill="#fdfd96" stroke="#4a4a4a" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Head */}
        <ellipse cx="50" cy="50" rx="35" ry="30" fill="#fdfd96" stroke="#4a4a4a" strokeWidth="3" />
        
        {/* Face */}
        {getEyes()}
        {getMouth()}
        
        {/* Whiskers */}
        <path d="M20 50 L10 45" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 55 L10 55" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 60 L10 65" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />
        
        <path d="M80 50 L90 45" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />
        <path d="M80 55 L90 55" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />
        <path d="M80 60 L90 65" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />

        {/* Extras */}
        {getExtras()}
      </svg>
    </div>
  );
};

export default Cat;
