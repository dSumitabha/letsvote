'use client'

import React from 'react';
import Poll from './components/Poll';  // Poll component to display each poll

const Feed = () => {
  // Static poll data for now
  const staticPollData = {
    question: 'What is your favorite programming language?',
    options: [
      { optionText: 'JavaScript', votes: 25 },
      { optionText: 'Python', votes: 18 },
      { optionText: 'C++', votes: 5 },
      { optionText: 'Java', votes: 10 }
    ]
  };

  return (
    <div className="poll-feed max-w-screen-lg mx-auto py-8">
      
      {/* Render the Poll component */}
      <Poll pollData={staticPollData} />
    </div>
  );
};

export default Feed;
