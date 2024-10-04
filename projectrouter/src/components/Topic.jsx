import React from 'react';
import { useParams } from 'react-router-dom';

const questions = {
  1: [
    { id: 1, name: 'Find the largest element in an array' },
    { id: 2, name: 'Reverse an array' },
    { id: 3, name: 'Find missing number in a sorted array' }
  ],
  2: [
    { id: 1, name: 'Reverse a string' },
    { id: 2, name: 'Check if two strings are anagrams' }
  ],

};

const Topic = () => {
  const { topicId } = useParams();
  const topicQuestions = questions[topicId] || [];

  return (
    <div>
      <h2>Questions for Topic {topicId}</h2>
      <ul>
        {topicQuestions.map(q => (
          <li key={q.id}>{q.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Topic;
