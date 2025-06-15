import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext.jsx";

export default function Home() {
  const { darkMode } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Data for topic cards to avoid repetition
  const dsaTopics = [
    {
      title: "Array, String, Matrix",
      description:
        "Master the fundamentals of arrays, strings, and efficient searching with binary search.",
      route: "/Arrays",
      gradient: darkMode
        ? "from-blue-600 to-purple-600"
        : "from-blue-500 to-purple-500",
    },
    {
      title: "Standard Template Library",
      description:
        "Learn to use the powerful STL in C++ for efficient coding and problem-solving.",
      route: "/STL",
      gradient: darkMode
        ? "from-green-600 to-teal-600"
        : "from-green-500 to-teal-500",
    },
    {
      title: "Linked List",
      description:
        "Understand singly, doubly, and circular linked lists and their applications.",
      route: "/Linkedlist",
      gradient: darkMode
        ? "from-yellow-600 to-orange-600"
        : "from-yellow-500 to-orange-500",
    },
    {
      title: "Stack, Queue, Heaps",
      description:
        "Explore stack, queue, and priority queue data structures and their use cases.",
      route: "/Stack",
      gradient: darkMode
        ? "from-pink-600 to-red-600"
        : "from-pink-500 to-red-500",
    },
    {
      title: "Recursion & Backtracking",
      description:
        "Solve complex problems using recursion and backtracking techniques.",
      route: "/Recusion",
      gradient: darkMode
        ? "from-purple-600 to-indigo-600"
        : "from-purple-500 to-indigo-500",
    },
    {
      title: "Dynamic Programming",
      description:
        "Learn to optimize solutions using dynamic programming and memoization.",
      route: "/Dynamic",
      gradient: darkMode
        ? "from-teal-600 to-cyan-600"
        : "from-teal-500 to-cyan-500",
    },
    {
      title: "Tree (Binary Tree, BST, AVL)",
      description:
        "Master tree data structures, including binary trees, BSTs, and AVL trees.",
      route: "/Tree",
      gradient: darkMode
        ? "from-orange-600 to-amber-600"
        : "from-orange-500 to-amber-500",
    },
    {
      title: "Graph (BFS, DFS, Paths)",
      description:
        "Understand graph traversal algorithms like BFS, DFS, and shortest path algorithms.",
      route: "/Graph",
      gradient: darkMode
        ? "from-blue-700 to-indigo-700"
        : "from-blue-600 to-indigo-600",
    },
    {
      title: "Bit Manipulation & Maths",
      description:
        "Solve problems using bit manipulation and mathematical concepts.",
      route: "/Bitm",
      gradient: darkMode
        ? "from-green-700 to-teal-700"
        : "from-green-600 to-teal-600",
    },
    {
      title: "Algorithms",
      description:
        "Learn key algorithms like sliding window, sorting, and greedy algorithms.",
      route: "/Algorithm",
      gradient: darkMode
        ? "from-pink-700 to-purple-700"
        : "from-pink-600 to-purple-600",
    },
    {
      title: "Trie Implementation",
      description:
        "Master prefix trees for efficient string operations and autocomplete features.",
      route: "/Trie",
      gradient: darkMode
        ? "from-pink-600 to-red-600"
        : "from-pink-500 to-red-500",
    },
    {
      title: "Start Learning DSA",
      description:
        "Begin your structured journey to master Data Structures and Algorithms.",
      route: "/Home2",
      gradient: darkMode
        ? "from-teal-600 to-purple-600"
        : "from-teal-500 to-purple-500",
    },
  ];

  // Data for features to avoid repetition
  const learningFeatures = [
    {
      text: "Data Structure & Algorithm",
      darkHoverColor: "hover:text-orange-400",
      lightHoverColor: "hover:text-orange-500",
    },
    {
      text: "Most Important LeetCode Questions",
      darkHoverColor: "hover:text-orange-400",
      lightHoverColor: "hover:text-orange-500",
    },
    {
      text: "Most Important MAANG Interview Questions",
      darkHoverColor: "hover:text-orange-400",
      lightHoverColor: "hover:text-orange-500",
    },
    {
      text: "Learn DSA and Get Placed in MAANG Companies",
      darkHoverColor: "hover:text-orange-400",
      lightHoverColor: "hover:text-orange-500",
    },
  ];

  const mlFeatures = [
    {
      text: "Machine Learning Fundamentals",
      darkHoverColor: "hover:text-orange-400",
      lightHoverColor: "hover:text-orange-500",
    },
    {
      text: "Most Important Machine Learning Algorithms",
      darkHoverColor: "hover:text-orange-400",
      lightHoverColor: "hover:text-orange-500",
    },
    {
      text: "Key Machine Learning Interview Questions for Top Tech Companies",
      darkHoverColor: "hover:text-orange-400",
      lightHoverColor: "hover:text-orange-500",
    },
    {
      text: "Learn Machine Learning and Get Hired by Top AI/ML Companies",
      darkHoverColor: "hover:text-orange-400",
      lightHoverColor: "hover:text-orange-500",
    },
  ];

  // Reusable FeatureText component
  const FeatureText = ({ feature }) => (
    <p
      className={`font-semibold tracking-wide leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out ${
        darkMode ? feature.darkHoverColor : feature.lightHoverColor
      }`}
    >
      {feature.text}
    </p>
  );

  // Reusable Card component
  const TopicCard = ({ topic }) => (
    <NavLink to={topic.route} onClick={scrollToTop} className="block">
      <div
        className={`bg-gradient-to-r p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
          topic.gradient
        } ${darkMode ? "border-gray-600" : "border-gray-200"}`}
      >
        <h3 className="text-xl font-bold text-white mb-3">{topic.title}</h3>
        <p
          className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-100"}`}
        >
          {topic.description}
        </p>
      </div>
    </NavLink>
  );

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Main container with limited width for desktop */}
      <div className="w-full max-w-5xl mx-auto">
        {/* Hero Section with improved layout and more compact */}
        <section
          className={`relative overflow-hidden rounded-3xl mx-auto sm:mx-12 md:mx-16 my-8 py-10 shadow-2xl bg-gradient-to-r ${
            darkMode
              ? "from-gray-800 to-gray-900 border-gray-700"
              : "from-gray-50 to-gray-100 border-gray-200"
          } border hover:shadow-3xl transform hover:scale-101 transition duration-500 ease-in-out`}
        >
          <div className="relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1
                className={`text-4xl md:text-5xl font-bold pb-3 bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? "from-orange-400 to-purple-500"
                    : "from-orange-500 to-purple-600"
                } transition duration-500 hover:scale-105`}
              >
                All About Coding
              </h1>

              <div
                className={`text-lg space-y-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {learningFeatures.map((feature, index) => (
                  <FeatureText key={index} feature={feature} />
                ))}
              </div>

              <NavLink
                to="./Home2"
                onClick={scrollToTop}
                className="inline-block"
              >
                <div
                  className={`bg-gradient-to-r px-6 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border ${
                    darkMode
                      ? "from-pink-700 to-purple-700 border-gray-600"
                      : "from-pink-600 to-purple-600 border-gray-200"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-1">
                    Start Learning DSA
                  </h3>
                  <p className="text-sm text-gray-100">
                    Click here to start learning DSA like a Professional
                  </p>
                </div>
              </NavLink>

              <div
                className={`text-lg space-y-3 mt-6 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {mlFeatures.map((feature, index) => (
                  <FeatureText key={index} feature={feature} />
                ))}
              </div>

              <NavLink
                to="./AIML"
                onClick={scrollToTop}
                className="inline-block"
              >
                <div
                  className={`bg-gradient-to-r px-6 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border ${
                    darkMode
                      ? "from-cyan-600 to-teal-600 border-gray-600"
                      : "from-cyan-500 to-teal-500 border-gray-200"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-1">
                    Start Learning Machine Learning
                  </h3>
                  <p className="text-sm text-gray-100">
                    Click here to start learning Machine Learning
                  </p>``
                </div>
              </NavLink>
            </div>

            {/* Image with animation - LARGER size */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:rotate-2 transition duration-500 ease-in-out max-w-sm md:max-w-md">
                <img
                  className={`w-full h-auto max-h-96 object-cover rounded-3xl border-4 ${
                    darkMode ? "border-gray-600" : "border-gray-300"
                  } hover:scale-105 transition-all duration-500`}
                  src={"./aac2.jpg"}
                  alt="ALL ABOUT CODING"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode ? "from-gray-900" : "from-gray-100"
                  } opacity-20`}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Section with improved spacing and animations */}
        <section className="w-full mx-auto px-4 py-12">
          <h2
            className={`text-3xl font-bold text-center mb-10 p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border ${
              darkMode
                ? "bg-gradient-to-r from-pink-600 to-red-600 border-gray-600 text-white"
                : "bg-gradient-to-r from-pink-500 to-red-500 border-gray-200 text-white"
            }`}
          >
            All The Important Topics of DSA
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dsaTopics.map((topic, index) => (
              <TopicCard key={index} topic={topic} />
            ))}
          </div>
        </section>

        {/* Footer Section - Smaller and more compact */}
        <footer
  className={`w-full mt-12 py-6 border-t ${
    darkMode
      ? "border-gray-800 bg-zinc-800"
      : "border-gray-200 bg-gray-50"
  } rounded-t-lg`}
>
  <div className="mx-auto px-4 text-center">
    <h3
      className={`text-xl font-bold mb-3 ${
        darkMode ? "text-gray-200" : "text-gray-800"
      }`}
    >
      Ready to Master Coding?
    </h3>
    <p
      className={`mb-4 text-sm ${
        darkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      Join thousands of developers who have transformed their careers
      with our comprehensive learning paths.
    </p>
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => window.location.href = "/login"}
        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
          darkMode
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-purple-500 text-white hover:bg-purple-600"
        }`}
      >
        Sign Up for Free
      </button>
      <button
        onClick={() => window.location.href = "/about"}
        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
          darkMode
            ? "border border-purple-600 text-purple-400 hover:bg-purple-900 hover:bg-opacity-30"
            : "border border-purple-500 text-purple-600 hover:bg-purple-100"
        }`}
      >
        Learn More
      </button>
    </div>
  </div>
</footer>
      </div>
    </div>
  );
}
