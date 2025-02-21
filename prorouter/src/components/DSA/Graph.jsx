import React from 'react';
import { NavLink } from 'react-router-dom';

function Graph() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div  className="text-5xl font-extrabold text-center mb-12 text-gray-900 bg-gradient-to-r from-violet-500 to-pink-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-300 cursor-pointer sm:flex sm:items-center sm:justify-center sm:gap-4">
        <span className="text-gray-100 sm:text-center hidden sm:block text-3xl">
          Graph (BFS, DFS, Shortest-Path)
        </span>
      </div>



      {/* Grid with 2 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Unique Gradient Cards with Hover Effects */}
        <NavLink to="/graph1">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              BFS And DFS Notes with Questions
            </span>
          </div>
        </NavLink>

        <NavLink to="/graph2">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              BFS And DFS ON Matrix OR Grids Notes
            </span>
          </div>
        </NavLink>

        <NavLink to="/graph3">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Union And Disjoints And MST Notes
            </span>
          </div>
        </NavLink>

        <NavLink to="/graph4">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Shortest Paths (Dijkstra, Floyd Warshall)
            </span>
          </div>
        </NavLink>

        <NavLink to="/graph5">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Kosaraju Algo, Bridges And Articulation Points 
            </span>
          </div>
        </NavLink>

        <NavLink to="/graph6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Most Asked Leetcode Questions (Graphs)
            </span>
          </div>
        </NavLink>

        <NavLink to="/graph7">
          <div className="bg-gradient-to-r from-teal-500 to-green-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Hard Questions Asked in Maang Companies
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Graph;