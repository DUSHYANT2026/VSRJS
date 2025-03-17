import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";

export class AIML extends PureComponent {
  render() {
    return (
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300 cursor-pointer">
          AI/ML Roadmap - Step-by-Step Learning
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Foundations */}
          <NavLink to="/Foundation" className="block">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-gray-600 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Foundations of Machine Learning
              </h3>
              <p className="text-gray-300">
                Linear Algebra, Probability & Statistics, Calculus, Python
                basics.
              </p>
            </div>
          </NavLink>

          {/* Machine Learning Basics */}
          <NavLink to="/MachineLearning" className="block">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-green-400 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Introduction to Machine Learning
              </h3>
              <p className="text-gray-100">
                History of ML, AI/ML/Deep Learning Differences, ML Pipeline.
              </p>
            </div>
          </NavLink>

          {/* Data Preprocessing */}
          <NavLink to="/DataPreprocessing" className="block">
            <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-purple-500 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Data Preprocessing
              </h3>
              <p className="text-gray-100">
                Data Cleaning, Data Transformation, Feature Engineering, Data Splitting.
              </p>
            </div>
          </NavLink>

          {/* Supervised Learning */}
          <NavLink to="/SupervisedLearning" className="block">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-orange-400 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Supervised Learning
              </h3>
              <p className="text-gray-100">Regression, Classification.</p>
            </div>
          </NavLink>

          {/* Unsupervised Learning */}
          <NavLink to="/UnsupervisedLearning" className="block">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-pink-400 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Unsupervised Learning
              </h3>
              <p className="text-gray-100">
                Clustering, Dimensionality Reduction, Anomaly Detection.
              </p>
            </div>
          </NavLink>

          {/* Advanced Machine Learning Algorithms */}
          <NavLink to="/AdvancedML" className="block">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-cyan-400 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Advanced ML Algorithms
              </h3>
              <p className="text-gray-100">
                Ensemble Learning, Neural Networks, Time Series Forecasting.
              </p>
            </div>
          </NavLink>

          {/* Reinforcement Learning */}
          <NavLink to="/ReinforcementLearning" className="block">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-green-400 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Reinforcement Learning
              </h3>
              <p className="text-gray-100">
                Basics of RL, MDP, Q-Learning, Deep Q Networks (DQN), Policy Gradient Methods.
              </p>
            </div>
          </NavLink>

          {/* Model Evaluation */}
          <NavLink to="/ModelEvaluation" className="block">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-blue-400 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Model Evaluation
              </h3>
              <p className="text-gray-100">
                Evaluation Metrics, Hyperparameter Tuning, 	Regularization Techniques, Bias-Variance, Tradeoff.
              </p>
            </div>
          </NavLink>

          {/* Basic Deployment */}
          <NavLink to="/BasicDeployment" className="block">
            <div className="bg-gradient-to-r from-gray-800 to-black p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-gray-600 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-4">
                Deployment Basics
              </h3>
              <p className="text-gray-300">
                Model saving/loading and simple Flask API deployment.
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default AIML;
