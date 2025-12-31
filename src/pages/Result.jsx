import React from 'react';
import LoveNote from '../components/LoveNote';

const Result = ({ onReplay }) => {
  return (
    <div className="w-full px-4 py-8">
      <LoveNote onReplay={onReplay} />
    </div>
  );
};

export default Result;
