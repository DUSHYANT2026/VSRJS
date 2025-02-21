import React from 'react';
import { NavLink } from 'react-router-dom';

function Home2() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div  className="text-5xl font-extrabold text-center mb-12 text-gray-900 bg-gradient-to-r from-orange-500 to-pink-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-300 cursor-pointer sm:flex sm:items-center sm:justify-center sm:gap-4">
        <span className="text-gray-100 sm:text-center hidden sm:block text-3xl">
          All The Important Topics of DSA
        </span>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Unique Gradient Cards with Hover Effects */}
        <NavLink to="/Arrays">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Array, String, Matrix 
            </span>
          </div>
        </NavLink>

        <NavLink to="/STL">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Standard Template Library
            </span>
          </div>
        </NavLink>

        <NavLink to="/Linkedlist">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Linked-List
            </span>
          </div>
        </NavLink>

        <NavLink to="/Stack">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Stack, Queue And Heaps
            </span>
          </div>
        </NavLink>

        <NavLink to="/Recusion">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Recursion And Backtracking
            </span>
          </div>
        </NavLink>

        <NavLink to="/Dynamic">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Dynamic Programming
            </span>
          </div>
        </NavLink>

        <NavLink to="/Tree">
          <div className="bg-gradient-to-r from-teal-500 to-green-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Tree (Binary Tree, BST And AVL)
            </span>
          </div>
        </NavLink>

        <NavLink to="/Graph">
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Graph (BFS, DFS, Shortest-Path)
            </span>
          </div>
        </NavLink>

        <NavLink to="/Bitm">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Bit Manipulation And Maths
            </span>
          </div>
        </NavLink>

        <NavLink to="/Algorithm">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              All Algorithms
            </span>
          </div>
        </NavLink>

        <NavLink to="/Trie">
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
            <span className="text-white text-center text-2xl font-bold">
              Trie (Implementation)
            </span>
          </div>
        </NavLink>

      </div>
    </div>
  );
}

export default Home2;