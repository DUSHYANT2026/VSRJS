import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  { id: 1, name: 'Arrays' },
  { id: 2, name: 'Strings' },
  { id: 3, name: 'Linked Lists' },
  { id: 4, name: 'Trees' },
  { id: 5, name: 'Graphs' },
];

const TopicsList = () => {
  return (
    <div>
      <h2>Topics</h2>
      <ul class = "space-y-8">
        {topics.map(topic => (
          <li key={topic.id}>
            <Link class="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300 gap-x-5 " to={`/topic/${topic.id}`}>{topic.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsList;
