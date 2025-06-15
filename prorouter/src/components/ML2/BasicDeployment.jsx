import React from "react";
import { NavLink } from "react-router-dom";

const BasicDeployment = () => {
  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      {/* Main Header */}
      <div className="text-5xl font-extrabold text-center mb-12 text-gray-900 bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200 cursor-pointer">
        <span className="text-gray-100 text-center text-3xl sm:text-4xl block">
          Deployment and Real-World Projects
        </span>
      </div>

      {/* Subheadings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NavLink to="/SavingModels">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer h-full flex items-center justify-center">
            <span className="text-white text-center text-2xl font-bold">
              Saving and Loading Models (Pickle, Joblib)
            </span>
          </div>
        </NavLink>

        <NavLink to="/FlaskFastAPI">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer h-full flex items-center justify-center">
            <span className="text-white text-center text-2xl font-bold">
              Flask and FastAPI for Model Deployment
            </span>
          </div>
        </NavLink>

        <NavLink to="/RESTAPI">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer h-full flex items-center justify-center">
            <span className="text-white text-center text-2xl font-bold">
              REST API Development
            </span>
          </div>
        </NavLink>

        <NavLink to="/DockerDeployment">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer h-full flex items-center justify-center">
            <span className="text-white text-center text-2xl font-bold">
              Docker for ML Deployment
            </span>
          </div>
        </NavLink>

        <NavLink to="/CICD">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer h-full flex items-center justify-center">
            <span className="text-white text-center text-2xl font-bold">
              CI/CD for Machine Learning Models
            </span>
          </div>
        </NavLink>

        <NavLink to="/CloudDeployment">
          <div className="bg-gradient-to-r from-blue-400 to-indigo-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer h-full flex items-center justify-center">
            <span className="text-white text-center text-2xl font-bold">
              Cloud Deployment
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default BasicDeployment;