import React from "react";
import { NavLink } from "react-router-dom";

const AdvancedML = () => {
  const topics = [
    {
      title: "Ensemble Learning",
      path: "/EnsembleLearning",
      description: "Bagging, Boosting, Random Forests, and Stacking techniques",
      color: "from-green-600 to-teal-600",
      border: "border-green-400",
      icon: "🌲"
    },
    {
      title: "Neural Networks",
      path: "/NeuralNetworks",
      description: "Deep learning fundamentals, architectures, and applications",
      color: "from-yellow-500 to-orange-500",
      border: "border-yellow-400",
      icon: "🧠"
    },
    {
      title: "Time Series Forecasting",
      path: "/TimeSeriesForecasting",
      description: "ARIMA, LSTM, and forecasting methodologies",
      color: "from-red-500 to-pink-500",
      border: "border-red-400",
      icon: "📈"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header with breadcrumb */}
        <div className="mb-6 flex items-center text-sm text-gray-400">
          <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Advanced Machine Learning</span>
        </div>

        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Advanced Machine Learning
          </h1>
          <p className="text-lg text-gray-300">
            Master sophisticated machine learning algorithms and techniques that power modern AI systems
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {topics.map((topic, index) => (
            <NavLink to={topic.path} className="block" key={index}>
              <div className={`
                bg-gradient-to-r ${topic.color} p-6 rounded-lg shadow-md 
                hover:shadow-lg transform hover:translate-y-1 
                transition duration-300 border ${topic.border} h-full
              `}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{topic.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-100 text-sm">
                  {topic.description}
                </p>
                <div className="mt-4 text-right">
                  <span className="inline-flex items-center text-white text-sm font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded border border-gray-600 flex items-center">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white">Recommended Books</h3>
                <p className="text-sm text-gray-300">Essential reading for advanced ML</p>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded border border-gray-600 flex items-center">
              <div className="bg-purple-600 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white">Video Tutorials</h3>
                <p className="text-sm text-gray-300">Step-by-step visual explanations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-10 flex justify-between">
          <NavLink to="/DataPreprocessing" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous: Data Preprocessing
          </NavLink>
          <NavLink to="/ReinforcementLearning" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white flex items-center">
            Next: Reinforcement Learning
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdvancedML;