import React from "react";
import { NavLink } from "react-router-dom";
import { Infinity, Combine, ListChecks, Trophy, BarChart4 } from "lucide-react";

function Recursion() {
  const topics = [
    {
      title: "Recursion Notes with Questions",
      path: "/recursion1",
      gradient: "from-blue-500 to-purple-500",
      icon: <Infinity className="w-6 h-6 mb-2" />,
      colSpan: "md:col-span-1"
    },
    {
      title: "Recursion + Backtracking Notes with Questions",
      path: "/recursion2",
      gradient: "from-green-500 to-teal-500",
      icon: <Combine className="w-6 h-6 mb-2" />,
      colSpan: "md:col-span-1"
    },
    {
      title: "Most Asked Leetcode Questions (Recursion)",
      path: "/recursion3",
      gradient: "from-yellow-500 to-orange-500",
      icon: <ListChecks className="w-6 h-6 mb-2" />,
      colSpan: "md:col-span-1"
    },
    {
      title: "Hard Questions Asked in Maang Companies",
      path: "/recursion4",
      gradient: "from-pink-500 to-red-500",
      icon: <Trophy className="w-6 h-6 mb-2" />,
      colSpan: "md:col-span-1"
    },
    {
      title: "Advanced Recursion Patterns",
      path: "/recursion5",
      gradient: "from-indigo-500 to-blue-500",
      icon: <BarChart4 className="w-6 h-6 mb-2" />,
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6">
      <div className="mb-8 rounded-xl bg-gradient-to-r from-pink-600 to-violet-500 p-4 sm:p-6 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Recursion And Backtracking
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {topics.map((topic, index) => (
          <NavLink 
            to={topic.path} 
            key={index}
            className="outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <div className={`bg-gradient-to-r ${topic.gradient} p-4 rounded-lg shadow hover:shadow-md transform hover:-translate-y-1 transition duration-300 h-full`}>
              <div className="flex flex-col items-center text-white">
                {topic.icon}
                <h2 className="text-lg font-semibold text-center">
                  {topic.title}
                </h2>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Recursion;