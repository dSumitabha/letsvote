// src/app/Components/Poll.jsx
'use client'

import React from 'react';

// Poll Component with Dark Theme (without progress bar)
const Poll = ({ pollData }) => {
  return (
    <div className="poll-container bg-gray-800 p-6 rounded-lg shadow-md mb-6 w-full max-w-lg mx-auto">
      <h3 className="text-xl font-semibold text-center mb-4 text-white">{pollData.question}</h3>
      <div className="poll-options space-y-4">
        {pollData.options.map((option, index) => (
          <div key={index} className="poll-option flex justify-between items-center">
            <div className="option-text text-lg text-white">{option.optionText}</div>
            <div className="vote-count text-sm text-gray-400">Votes: {option.votes}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poll;