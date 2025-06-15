import React from "react";
import { NavLink } from "react-router-dom";

export const AIML = () => {
  const roadmapItems = [
    {
      title: "Foundations of Machine Learning",
      description: "Linear Algebra, Probability & Statistics, Calculus, Python basics.",
      path: "/Foundation",
      color: "bg-blue-700"
    },
    {
      title: "Introduction to Machine Learning",
      description: "History of ML, AI/ML/Deep Learning Differences, ML Pipeline.",
      path: "/MachineLearning",
      color: "bg-green-700"
    },
    {
      title: "Data Preprocessing",
      description: "Data Cleaning, Data Transformation, Feature Engineering, Data Splitting.",
      path: "/DataPreprocessing",
      color: "bg-purple-700"
    },
    {
      title: "Supervised Learning",
      description: "Regression, Classification.",
      path: "/SupervisedLearning",
      color: "bg-yellow-600"
    },
    {
      title: "Unsupervised Learning",
      description: "Clustering, Dimensionality Reduction, Anomaly Detection.",
      path: "/UnsupervisedLearning",
      color: "bg-pink-600"
    },
    {
      title: "Advanced ML Algorithms",
      description: "Ensemble Learning, Neural Networks, Time Series Forecasting.",
      path: "/AdvancedML",
      color: "bg-cyan-600"
    },
    {
      title: "Reinforcement Learning",
      description: "Basics of RL, MDP, Q-Learning, Deep Q Networks (DQN), Policy Gradient Methods.",
      path: "/ReinforcementLearning",
      color: "bg-green-600"
    },
    {
      title: "Model Evaluation",
      description: "Evaluation Metrics, Hyperparameter Tuning, Regularization Techniques, Bias-Variance Tradeoff.",
      path: "/ModelEvaluation",
      color: "bg-blue-600"
    },
    {
      title: "Deployment Basics",
      description: "Model saving/loading and simple Flask API deployment.",
      path: "/BasicDeployment",
      color: "bg-gray-700"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">
            AI/ML Learning Roadmap
          </h1>
          <p className="text-lg text-gray-300">
            Your step-by-step guide to mastering AI and Machine Learning
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item, index) => (
            <NavLink to={item.path} className="block" key={index}>
              <div className={`
                p-5 rounded-lg shadow-md border border-gray-700
                transition-all duration-200 hover:shadow-lg hover:scale-102
                h-full flex flex-col ${item.color} bg-opacity-90 hover:bg-opacity-100
              `}>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {item.description}
                </p>
                <div className="mt-auto pt-3 text-blue-300 text-sm font-medium">
                  Start learning →
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Start Button - Simplified */}
        <div className="mt-10 text-center">
          <NavLink to="/Foundation" className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-200">
            Begin Your Journey
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AIML;