import React from "react";
import { NavLink } from "react-router-dom";

const ReinforcementLearning = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-300 cursor-pointer">
        Reinforcement Learning
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basics of RL */}
        <NavLink to="/BasicsOfRL" className="block">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-blue-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Basics of RL (Agent, Environment, Reward)
            </h3>
          </div>
        </NavLink>

        {/* Markov Decision Processes */}
        <NavLink to="/MDP" className="block">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-green-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Markov Decision Processes (MDP)
            </h3>
          </div>
        </NavLink>

        {/* Q-Learning */}
        <NavLink to="/QLearning" className="block">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-yellow-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Q-Learning
            </h3>
          </div>
        </NavLink>

        {/* Deep Q Networks */}
        <NavLink to="/DQN" className="block">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-red-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Deep Q Networks (DQN)
            </h3>
          </div>
        </NavLink>

        {/* Policy Gradient Methods */}
        <NavLink to="/PolicyGradientMethods" className="block">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-indigo-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Policy Gradient Methods
            </h3>
          </div>
        </NavLink>

        {/* Applications */}
        <NavLink to="/RLGamingRobotics" className="block">
          <div className="bg-gradient-to-r from-gray-500 to-black p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-gray-400 cursor-pointer">
            <h3 className="text-2xl font-bold text-white text-center">
              Applications (Game AI, Robotics)
            </h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ReinforcementLearning;