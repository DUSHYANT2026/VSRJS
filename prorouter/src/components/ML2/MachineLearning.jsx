import React from "react";
import { NavLink } from "react-router-dom";

const MachineLearning = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300 cursor-pointer">
        Introduction to Machine Learning
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* History of ML */}
        <NavLink to="/HistoryML" className="block">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-blue-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">History of ML</h3>
          </div>
        </NavLink>

        {/* AI vs ML vs Deep Learning */}
        <NavLink to="/AIvsMLvsDL" className="block">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-green-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">AI vs ML vs Deep Learning</h3>
          </div>
        </NavLink>

        {/* ML Pipeline */}
        <NavLink to="/MLPipeline" className="block">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-yellow-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">ML Pipeline</h3>
          </div>
        </NavLink>
        
      </div>
    </div>
  );
};

export default MachineLearning;