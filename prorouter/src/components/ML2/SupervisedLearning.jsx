import React from "react";
import { NavLink } from "react-router-dom";

export const SupervisedLearning = () => {
  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      <div className="text-5xl font-extrabold text-center mb-12 text-gray-100 bg-gradient-to-r from-orange-500 to-pink-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-300 cursor-pointer">
        Supervised Learning
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Regression */}
        <NavLink to="/Regression" aria-label="Learn about Regression">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-blue-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Regression
            </h3>
          </div>
        </NavLink>

        {/* Classification */}
        <NavLink to="/Classification" aria-label="Learn about Classification">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-green-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Classification
            </h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SupervisedLearning;