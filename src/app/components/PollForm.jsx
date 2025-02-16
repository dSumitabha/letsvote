'use client'
import React, { useState } from 'react';

const PollForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = options.filter((_, idx) => idx !== index);
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    const pollData = {
      question,
      options,  // Don't re-map options, use the existing array
    };
    console.log("Poll Data to be submitted:", pollData);

    try {
      const response = await fetch('/api/newpoll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pollData),
      });

      if (response.ok) {
        alert('Poll created successfully');
        setQuestion('');
        setOptions(['', '']);
      } else {
        alert('Failed to create poll');
      }
    } catch (error) {
      console.error('Error creating poll:', error);
      alert('Error creating poll');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-900 text-gray-100 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-500">Create a New Poll</h2>
      
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Poll Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg"
          placeholder="Enter poll question"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Poll Options</label>
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mb-3">
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg"
              placeholder={`Option ${index + 1}`}
            />
            {options.length > 2 && (
              <button
                type="button"
                onClick={() => handleRemoveOption(index)}
                className="bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddOption}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Add Option
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
      >
        {loading ? 'Creating Poll...' : 'Create Poll'}
      </button>
    </form>
  );
};

export default PollForm;