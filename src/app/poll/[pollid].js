'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Poll from '../components/Poll';  // Poll component to display each poll

const PollDetail = () => {
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { pollId } = router.query; // Get the pollId from the route

  // Fetch the poll data from the API
  useEffect(() => {
    if (!pollId) return;

    const fetchPoll = async () => {
      try {
        const response = await fetch(`/api/poll/${pollId}`);
        const data = await response.json();
        setPoll(data);
      } catch (error) {
        console.error("Error fetching poll:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoll();
  }, [pollId]);

  if (loading) {
    return <div className="text-center">Loading poll...</div>;
  }

  if (!poll) {
    return <div className="text-center">Poll not found!</div>;
  }

  return (
    <div className="poll-detail max-w-screen-lg mx-auto py-8">
      <Poll pollData={poll} /> {/* Render the Poll component with fetched data */}
      {/* You can add functionality to allow users to vote here */}
    </div>
  );
};

export default PollDetail;
