import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from "../../ThemeContext.jsx";

function Home2() {
  const { darkMode } = useTheme();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-zinc-900 text-gray-100" : "bg-white text-gray-900"}`}>
      <div className="mx-auto w-full max-w-7xl p-4">
        {/* Header Section */}
        <div
          className={`text-5xl font-extrabold text-center mb-12 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-gray-300"
              : "bg-gradient-to-r from-orange-500 to-pink-500 border-gray-200 text-white"
          }`}
        >
        <span className="sm:text-center hidden sm:block text-3xl">
          All The Important Topics of DSA
        </span>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Array, String, Matrix */}
        <NavLink to="/Arrays" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-blue-600 to-purple-600 border-gray-600"
                : "bg-gradient-to-r from-blue-500 to-purple-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Array, String, Matrix
            </span>
          </div>
        </NavLink>

        {/* Standard Template Library */}
        <NavLink to="/STL" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-green-600 to-teal-600 border-gray-600"
                : "bg-gradient-to-r from-green-500 to-teal-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Standard Template Library
            </span>
          </div>
        </NavLink>

        {/* Linked List */}
        <NavLink to="/Linkedlist" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-yellow-600 to-orange-600 border-gray-600"
                : "bg-gradient-to-r from-yellow-500 to-orange-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Linked-List
            </span>
          </div>
        </NavLink>

        {/* Stack, Queue, Heaps */}
        <NavLink to="/Stack" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-pink-600 to-red-600 border-gray-600"
                : "bg-gradient-to-r from-pink-500 to-red-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Stack, Queue And Heaps
            </span>
          </div>
        </NavLink>

        {/* Recursion & Backtracking */}
        <NavLink to="/Recusion" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-indigo-600 to-blue-600 border-gray-600"
                : "bg-gradient-to-r from-indigo-500 to-blue-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Recursion And Backtracking
            </span>
          </div>
        </NavLink>

        {/* Dynamic Programming */}
        <NavLink to="/Dynamic" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-purple-600 to-pink-600 border-gray-600"
                : "bg-gradient-to-r from-purple-500 to-pink-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Dynamic Programming
            </span>
          </div>
        </NavLink>

        {/* Tree (Binary Tree, BST, AVL) */}
        <NavLink to="/Tree" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-teal-600 to-green-600 border-gray-600"
                : "bg-gradient-to-r from-teal-500 to-green-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Tree (Binary Tree, BST And AVL)
            </span>
          </div>
        </NavLink>

        {/* Graph (BFS, DFS, Shortest Path) */}
        <NavLink to="/Graph" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-red-600 to-yellow-600 border-gray-600"
                : "bg-gradient-to-r from-red-500 to-yellow-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Graph (BFS, DFS, Shortest-Path)
            </span>
          </div>
        </NavLink>

        {/* Bit Manipulation & Maths */}
        <NavLink to="/Bitm" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-gray-600"
                : "bg-gradient-to-r from-blue-500 to-indigo-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Bit Manipulation And Maths
            </span>
          </div>
        </NavLink>

        {/* All Algorithms */}
        <NavLink to="/Algorithm" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-orange-600 to-red-600 border-gray-600"
                : "bg-gradient-to-r from-orange-500 to-red-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              All Algorithms
            </span>
          </div>
        </NavLink>

        {/* Trie Implementation */}
        <NavLink to="/Trie" onClick={scrollToTop}>
          <div
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-pink-600 to-orange-600 border-gray-600"
                : "bg-gradient-to-r from-orange-500 to-pink-500 border-gray-200"
            }`}
          >
            <span className="text-white text-center text-2xl font-bold">
              Trie (Implementation)
            </span>
          </div>
        </NavLink>
      </div>
    </div>
    </div>
  );
}

export default Home2;