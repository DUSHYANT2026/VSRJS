import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopicsList from './components/TopicsList';
import Topic from './components/Topic';

const App = () => {
  return (
    <Router>
      <div class="flex justify-center items-start absolute top-0 left-0 w-full"> 
        <h1 class="bg-purple-500 text-white text-3xl p-4 rounded-lg text-center">DSA Coding Questions</h1>
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
