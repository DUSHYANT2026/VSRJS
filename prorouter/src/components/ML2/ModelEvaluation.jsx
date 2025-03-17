import React from "react";
import { NavLink } from "react-router-dom";

export const ModelEvaluation = () => {
  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      {/* Header Section */}
      <div className="text-5xl font-extrabold text-center mb-12 text-gray-100 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-gray-400 cursor-pointer sm:flex sm:items-center sm:justify-center sm:gap-4">
        <span className="sm:text-center text-3xl">
          Model Evaluation & Optimization
        </span>
      </div>

      {/* Grid Layout for Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Evaluation Metrics */}
        <NavLink
          to="/EvaluationMetrics"
          aria-label="Learn about Evaluation Metrics"
        >
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Evaluation Metrics
            </span>
          </div>
        </NavLink>

        {/* Hyperparameter Tuning */}
        <NavLink
          to="/HyperparameterTuning"
          aria-label="Learn about Hyperparameter Tuning"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Hyperparameter Tuning
            </span>
          </div>
        </NavLink>

        {/* Regularization Basics */}
        <NavLink
          to="/RegularizationBasics"
          aria-label="Learn about Regularization Basics"
        >
          <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Regularization Basics
            </span>
          </div>
        </NavLink>

        {/* Bias-Variance Tradeoff & Cross-Validation */}
        <NavLink
          to="/BiasVarianceTradeoff"
          aria-label="Learn about Bias-Variance Tradeoff & Cross-Validation"
        >
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Bias-Variance Tradeoff & Cross-Validation
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ModelEvaluation;
