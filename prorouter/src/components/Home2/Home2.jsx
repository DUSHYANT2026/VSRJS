import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext.jsx";

function Home2() {
  const { darkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Category data to make the code more maintainable
  const categories = [
    {
      path: "/Arrays",
      title: "Array, String, Matrix",
      gradient: "from-blue-600 to-purple-600",
      lightGradient: "from-blue-500 to-purple-500",
    },
    {
      path: "/STL",
      title: "Standard Template Library",
      gradient: "from-green-600 to-teal-600",
      lightGradient: "from-green-500 to-teal-500",
    },
    {
      path: "/Linkedlist",
      title: "Linked List",
      gradient: "from-yellow-600 to-orange-600",
      lightGradient: "from-yellow-500 to-orange-500",
    },
    {
      path: "/Stack",
      title: "Stack, Queue & Heaps",
      gradient: "from-pink-600 to-red-600",
      lightGradient: "from-pink-500 to-red-500",
    },
    {
      path: "/Recusion",
      title: "Recursion & Backtracking",
      gradient: "from-indigo-600 to-blue-600",
      lightGradient: "from-indigo-500 to-blue-500",
    },
    {
      path: "/Dynamic",
      title: "Dynamic Programming",
      gradient: "from-purple-600 to-pink-600",
      lightGradient: "from-purple-500 to-pink-500",
    },
    {
      path: "/Tree",
      title: "Trees (Binary, BST, AVL)",
      gradient: "from-teal-600 to-green-600",
      lightGradient: "from-teal-500 to-green-500",
    },
    {
      path: "/Graph",
      title: "Graph Algorithms",
      gradient: "from-red-600 to-yellow-600",
      lightGradient: "from-red-500 to-yellow-500",
    },
    {
      path: "/Bitm",
      title: "Bit Manipulation & Maths",
      gradient: "from-blue-600 to-indigo-600",
      lightGradient: "from-blue-500 to-indigo-500",
    },
    {
      path: "/Algorithm",
      title: "All Algorithms",
      gradient: "from-orange-600 to-red-600",
      lightGradient: "from-orange-500 to-red-500",
    },
    {
      path: "/Trie",
      title: "Trie Data Structure",
      gradient: "from-pink-600 to-orange-600",
      lightGradient: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-zinc-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12">
        {/* Header Section with improved accessibility and animation */}
        <header
          className={`relative overflow-hidden text-center mb-10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border ${
            darkMode
              ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
              : "bg-gradient-to-br from-indigo-600 to-purple-600 border-gray-200"
          }`}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            DSA Topics Explorer
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200 max-w-xl mx-auto">
            Master all essential data structures and algorithms
          </p>
        </header>

        {/* Grid Section with improved cards - removed beginner/intermediate labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <NavLink
              to={category.path}
              onClick={scrollToTop}
              key={index}
              className="group"
            >
              <div
                className={`p-5 rounded-lg shadow-md group-hover:shadow-lg transform transition duration-300 group-hover:translate-y-[-3px] border h-full flex flex-col justify-between ${
                  darkMode
                    ? `bg-gradient-to-br ${category.gradient} border-gray-700`
                    : `bg-gradient-to-br ${category.lightGradient} border-gray-200`
                }`}
              >
                <div className="mb-3">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {category.title}
                  </h3>
                  <p className="text-gray-100 text-xs opacity-80">
                    Explore core concepts and practice problems
                  </p>
                </div>
                <div className="flex justify-end items-center">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home2;