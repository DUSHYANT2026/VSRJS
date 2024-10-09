import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopicsList from './components/TopicsList';
import Topic from './components/Topic';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center w-full py-6 space-y-4 bg-gray-100">
        <h1 className="bg-purple-600 text-white text-4xl font-bold p-6 rounded-lg shadow-lg text-center w-11/12 md:w-3/4">
          DATA STRUCTURE AND ALGORITHMS
        </h1>

        <h2 className="bg-purple-500 text-white text-2xl font-semibold p-5 rounded-lg shadow-lg text-center w-11/12 md:w-3/4">
          IMPORTANT QUESTIONS ACCORDING TO TOPICS
        </h2>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<TopicsList />} />
          <Route path="/topic/:topicId" element={<Topic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
