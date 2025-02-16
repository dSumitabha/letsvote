'use client'

import React, { useEffect, useState } from 'react';
import Poll from './components/Poll'; // Poll component to display each poll

const Feed = () => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch polls from the API
  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await fetch('/api/sample');
        const data = await response.json();
        setPolls(data); // Set the fetched polls data
      } catch (error) {
        console.error("Error fetching polls:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolls();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  if (loading) {
    return <div className="text-center">Loading polls...</div>;
  }

  return (
    <div className="poll-feed max-w-screen-lg mx-auto py-8">
      {/* Loop through the fetched polls and render Poll component for each */}
      {polls.map((poll) => (
        <Poll key={poll._id} pollData={poll} />
      ))}
    </div>
  );
};

export default Feed;
