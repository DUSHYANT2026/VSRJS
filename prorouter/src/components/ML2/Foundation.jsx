import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Foundation = () => {
  // Check user's preferred color scheme or saved preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return savedMode === "true";
    }
    // Otherwise check system preference
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update localStorage when darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const topics = [
    {
      title: "Linear Algebra",
      path: "/LinearAlgebra",
      description: "Vectors, matrices, eigenvalues, and transformations",
      gradient: "from-blue-500 to-purple-500",
      icon: "∑"
    },
    {
      title: "Probability & Statistics",
      path: "/Probability",
      description: "Distributions, hypothesis testing, and statistical inference",
      gradient: "from-green-500 to-teal-500",
      icon: "σ"
    },
    {
      title: "Calculus",
      path: "/Calculus",
      description: "Derivatives, integrals, and optimization techniques",
      gradient: "from-yellow-500 to-orange-500",
      icon: "∫"
    },
    {
      title: "Python for ML",
      path: "/Python",
      description: "NumPy, Pandas, Matplotlib, and SciKit-Learn",
      gradient: "from-pink-500 to-red-500",
      icon: "🐍"
    }
  ];

  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Header with breadcrumb */}
        <div className={`mb-6 flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <NavLink to="/" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Home</NavLink>
          <span className="mx-2">/</span>
          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Foundations</span>
        </div>

        {/* Title Section */}
        <div className="mb-10 text-center">
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Foundations of Machine Learning
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Master the essential mathematical concepts that form the backbone of all machine learning algorithms
          </p>
        </div>

        {/* Why this matters */}
        <div className={`mb-10 p-6 rounded-lg shadow-md border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Why Foundations Matter</h2>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Strong mathematical foundations are crucial for understanding machine learning algorithms. 
            These core concepts help you grasp how models work, troubleshoot issues, and develop new approaches.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {topics.map((topic, index) => (
            <NavLink to={topic.path} className="block" key={index}>
              <div className={`
                bg-gradient-to-r ${topic.gradient} p-6 rounded-lg shadow-md 
                hover:shadow-lg transform hover:translate-y-1 
                transition duration-300 border border-gray-200
              `}>
                <div className="flex items-center mb-3">
                  <span className="text-3xl text-white mr-3 font-bold">{topic.icon}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-white text-opacity-90 mb-4">
                  {topic.description}
                </p>
                <div className="mt-2">
                  <span className="inline-flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-sm">
                    Explore topic
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Learning Roadmap */}
        <div className={`p-6 rounded-lg shadow-md border mb-10 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Learning Path</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className={`rounded-full p-2 mr-4 ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Start with Linear Algebra</h3>
                <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>Begin with vector spaces and matrix operations</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className={`rounded-full p-2 mr-4 ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-600'}`}>
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Move to Probability & Statistics</h3>
                <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>Understand statistical concepts critical for ML</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className={`rounded-full p-2 mr-4 ${darkMode ? 'bg-yellow-800 text-yellow-300' : 'bg-yellow-100 text-yellow-600'}`}>
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Explore Calculus</h3>
                <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>Learn derivatives and gradients for optimization</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className={`rounded-full p-2 mr-4 ${darkMode ? 'bg-pink-900 text-pink-300' : 'bg-pink-100 text-pink-600'}`}>
                <span className="font-bold">4</span>
              </div>
              <div>
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Apply with Python</h3>
                <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>Implement concepts using Python libraries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between">
          <NavLink to="/" className={`px-4 py-2 rounded flex items-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Roadmap
          </NavLink>
          <NavLink to="/MachineLearning" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white flex items-center">
            Next: Introduction to ML
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Foundation;