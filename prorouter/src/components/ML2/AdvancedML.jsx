import React from "react";
import { NavLink } from "react-router-dom";

const AdvancedML = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300 cursor-pointer">
        Advanced Machine Learning
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Ensemble Learning */}
        <NavLink to="/EnsembleLearning" className="block">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-green-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Ensemble Learning
            </h3>
          </div>
        </NavLink>

        {/* Neural Networks */}
        <NavLink to="/NeuralNetworks" className="block">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-yellow-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Neural Networks
            </h3>
          </div>
        </NavLink>

        {/* Time Series Forecasting */}
        <NavLink to="/TimeSeriesForecasting" className="block">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-red-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Time Series Forecasting
            </h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default AdvancedML;
