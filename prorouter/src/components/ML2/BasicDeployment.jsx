import React from 'react';

// Functional component for BasicDeployment
export const BasicDeployment = () => {
  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      {/* Header Section */}
      <div className="text-3xl font-bold text-center mb-8 text-gray-900 bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 cursor-pointer">
        Basic Deployment Concepts
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200">
        <p className="text-white text-lg">
          Learn about the basic concepts of deploying machine learning models and APIs.
        </p>
      </div>
    </div>
  );
}

export default BasicDeployment;