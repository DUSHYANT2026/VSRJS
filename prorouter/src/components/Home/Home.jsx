import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext.jsx";

export default function Home() {
  const { darkMode } = useTheme();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-zinc-900" : ""
      }`}
    >
      {/* Main Content Section */}
      <aside
        className={`relative overflow-hidden rounded-3xl sm:mx-16 mx-4 sm:py-24 py-16 shadow-2xl bg-gradient-to-r ${
          darkMode
            ? "from-gray-800 to-gray-900 border-gray-700 text-gray-300"
            : "from-gray-50 to-gray-100 border-gray-200 text-black"
        } border hover:shadow-3xl transform hover:scale-101 transition duration-500 ease-in-out`}
      >
        <div className="relative z-10 max-w-screen-xl px-8 pb-20 pt-16 sm:py-24 mx-auto sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center sm:items-start">
          <div className="max-w-xl space-y-8 text-center sm:text-left sm:ml-auto sm:mr-12">
            <h2
              className={`text-6xl pb-5 font-bold sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode
                  ? "from-orange-400 to-purple-500"
                  : "from-orange-500 to-purple-600"
              } transition duration-500 hover:scale-105`}
            >
              All About Coding
            </h2>
            <div
              className={`text-xl sm:text-2xl space-y-6 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <p
                className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
                  darkMode ? "hover:text-orange-400" : "hover:text-orange-500"
                }`}
              >
                Data Structure & Algorithm
              </p>
              <p
                className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
                  darkMode ? "hover:text-orange-400" : "hover:text-orange-500"
                }`}
              >
                Most Important LeetCode Questions
              </p>
              <p
                className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
                  darkMode ? "hover:text-orange-400" : "hover:text-orange-500"
                }`}
              >
                Most Important MAANG Interview Questions
              </p>
              <p
                className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
                  darkMode ? "hover:text-orange-400" : "hover:text-orange-500"
                }`}
              >
                Learn DSA and Get Placed in MAANG Companies
              </p>
            </div>
            <NavLink to="./Home2" onClick={scrollToTop} className="block mt-10">
              <div
                className={`bg-gradient-to-r p-8 rounded-2xl shadow-xl hover:shadow-3xl transform hover:scale-110 transition duration-500 ease-in-out border ${
                  darkMode
                    ? "from-pink-700 to-purple-700 border-gray-600"
                    : "from-pink-600 to-purple-600 border-gray-200"
                }`}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  Start Learning DSA
                </h3>
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-100"
                  }`}
                >
                  Click here to start learning DSA like a Professional
                </p>
              </div>
            </NavLink>
            <div
              className={`text-xl sm:text-2xl space-y-6 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <p
                className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
                  darkMode ? "hover:text-orange-400" : "hover:text-orange-500"
                }`}
              >
                Machine Learning Fundamentals
              </p>
              <p
                className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
                  darkMode ? "hover:text-orange-400" : "hover:text-orange-500"
                }`}
              >
                Most Important Machine Learning Algorithms
              </p>
              <p
                className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
                  darkMode ? "hover:text-orange-400" : "hover:text-orange-500"
                }`}
              >
                Key Machine Learning Interview Questions for Top Tech Companies
              </p>
              <p
                className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
                  darkMode ? "hover:text-orange-400" : "hover:text-orange-500"
                }`}
              >
                Learn Machine Learning and Get Hired by Top AI/ML Companies
              </p>
            </div>

            <NavLink to="./AIML" onClick={scrollToTop} className="block mt-10">
              <div
                className={`bg-gradient-to-r p-8 rounded-2xl shadow-xl hover:shadow-3xl transform hover:scale-110 transition duration-500 ease-in-out border ${
                  darkMode
                    ? "from-cyan-600 to-teal-600 border-gray-600"
                    : "from-cyan-500 to-teal-500 border-gray-200"
                }`}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  Start Learning Machine Learning
                </h3>
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-100"
                  }`}
                >
                  Click here to start learning Machine Learning
                </p>
              </div>
            </NavLink>
          </div>

          <div className="image-container flex-shrink-0 w-full sm:w-auto sm:max-w-xl mt-12 sm:mt-0">
            <img
              className={`w-full h-[36rem] object-cover rounded-3xl shadow-2xl border-4 ${
                darkMode ? "border-gray-600" : "border-gray-300"
              } image-flip`}
              src={"./aac2.jpg"}
              alt="ALL ABOUT CODING"
            />
          </div>
        </div>
      </aside>

      {/* DSA Topics Section */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-12 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
            darkMode
              ? "bg-gradient-to-r from-pink-600 to-red-600 border-gray-600 text-gray-300"
              : "bg-gradient-to-r from-pink-500 to-red-500 border-gray-200 text-gray-800"
          }`}
        >
          All The Important Topics of DSA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Array, String, Matrix, Binary Search */}
          <NavLink to="/Arrays" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-blue-600 to-purple-600 border-gray-600"
                  : "from-blue-500 to-purple-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Array, String, Matrix
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Master the fundamentals of arrays, strings, and efficient
                searching with binary search.
              </p>
            </div>
          </NavLink>

          {/* Standard Template Library (C++) */}
          <NavLink to="/STL" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-green-600 to-teal-600 border-gray-600"
                  : "from-green-500 to-teal-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Standard Template Library
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Learn to use the powerful STL in C++ for efficient coding and
                problem-solving.
              </p>
            </div>
          </NavLink>

          {/* Linked List */}
          <NavLink to="/Linkedlist" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-yellow-600 to-orange-600 border-gray-600"
                  : "from-yellow-500 to-orange-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Linked List
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Understand singly, doubly, and circular linked lists and their
                applications.
              </p>
            </div>
          </NavLink>

          {/* Stack, Queue, Priority Queue (Heaps) */}
          <NavLink to="/Stack" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-pink-600 to-red-600 border-gray-600"
                  : "from-pink-500 to-red-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Stack, Queue, Heaps
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Explore stack, queue, and priority queue data structures and
                their use cases.
              </p>
            </div>
          </NavLink>

          {/* Recursion & Backtracking */}
          <NavLink to="/Recusion" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-purple-600 to-indigo-600 border-gray-600"
                  : "from-purple-500 to-indigo-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Recursion & Backtracking
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Solve complex problems using recursion and backtracking
                techniques.
              </p>
            </div>
          </NavLink>

          {/* Dynamic Programming */}
          <NavLink to="/Dynamic" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-teal-600 to-cyan-600 border-gray-600"
                  : "from-teal-500 to-cyan-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Dynamic Programming
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Learn to optimize solutions using dynamic programming and
                memoization.
              </p>
            </div>
          </NavLink>

          {/* Tree (Binary Tree, BST, AVL) */}
          <NavLink to="/Tree" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-orange-600 to-amber-600 border-gray-600"
                  : "from-orange-500 to-amber-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Tree (Binary Tree, BST, AVL)
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Master tree data structures, including binary trees, BSTs, and
                AVL trees.
              </p>
            </div>
          </NavLink>

          {/* Graph (BFS, DFS, Shortest Path) */}
          <NavLink to="/Graph" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-blue-700 to-indigo-700 border-gray-600"
                  : "from-blue-600 to-indigo-600 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Graph (BFS, DFS, Paths)
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Understand graph traversal algorithms like BFS, DFS, and
                shortest path algorithms.
              </p>
            </div>
          </NavLink>

          {/* Bit Manipulation & Maths */}
          <NavLink to="/Bitm" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-green-700 to-teal-700 border-gray-600"
                  : "from-green-600 to-teal-600 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Bit Manipulation & Maths
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Solve problems using bit manipulation and mathematical concepts.
              </p>
            </div>
          </NavLink>

          {/* Algorithms (Sliding Window, Two Pointers, Sorting, Greedy) */}
          <NavLink to="/Algorithm" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-pink-700 to-purple-700 border-gray-600"
                  : "from-pink-600 to-purple-600 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Algorithms</h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Learn key algorithms like sliding window, two pointers, sorting,
                and greedy algorithms.
              </p>
            </div>
          </NavLink>

          {/* Trie Implementation */}
          <NavLink to="./Trie" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-pink-600 to-red-600 border-gray-600"
                  : "from-pink-500 to-red-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Trie Implementation
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Click here to start learning DSA like a Professional
              </p>
            </div>
          </NavLink>

          {/* Start Learning DSA */}
          <NavLink to="./Home2" onClick={scrollToTop} className="block">
            <div
              className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
                darkMode
                  ? "from-teal-600 to-purple-600 border-gray-600"
                  : "from-teal-500 to-purple-500 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Learning DSA
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                Click here to start learning DSA like a Professional
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}