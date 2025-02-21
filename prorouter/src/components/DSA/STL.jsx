import React from 'react';
import { NavLink } from 'react-router-dom';

function STL() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="text-5xl font-extrabold text-center mb-12 text-gray-900 bg-gradient-to-r from-purple-600 to-green-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-300 cursor-pointer sm:flex sm:items-center sm:justify-center sm:gap-4">
        <span className="text-gray-100 sm:text-center hidden sm:block text-3xl">
          Standard Template Library (C++)
        </span>
      </div>

      {/* Grid with 2 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Unique Gradient Cards with Hover Effects */}
        <NavLink to="/stl1">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Map (Ordered & Unordered) Notes with Questions
            </span>
          </div>
        </NavLink>

        <NavLink to="/Stl2">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Set (Multi, Ordered & Unordered) Notes 
            </span>
          </div>
        </NavLink>

        <NavLink to="/Stl3">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Stack, Queue, Dequeue Notes with Questions
            </span>
          </div>
        </NavLink>

        <NavLink to="/Stl4">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Vector, List Notes with Questions
            </span>
          </div>
        </NavLink>

        <NavLink to="/Stl5">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Most Asked Leetcode Questions (Hash Table)
            </span>
          </div>
        </NavLink>

        <NavLink to="/Stl6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Hard Questions Asked in Maang Companies
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default STL;