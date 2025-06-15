import React from "react";
import { NavLink } from "react-router-dom";
import { BookOpen, Code, Search, Grid, Award, Bolt } from "lucide-react";

function Arrays() {
  const topics = [
    {
      title: "Array Notes with Basic and Easy Questions",
      path: "/Narray1",
      gradient: "from-blue-600 to-purple-600",
      icon: <BookOpen className="w-6 h-6 mb-2" />
    },
    {
      title: "String Notes with Basic and Easy Questions",
      path: "/Narray2",
      gradient: "from-green-600 to-teal-600",
      icon: <Code className="w-6 h-6 mb-2" />
    },
    {
      title: "Binary Search Algorithms Notes with Questions",
      path: "/Narray3",
      gradient: "from-yellow-500 to-orange-500",
      icon: <Search className="w-6 h-6 mb-2" />
    },
    {
      title: "Matrix (2D Array) Notes with Medium Questions",
      path: "/Narray4",
      gradient: "from-pink-600 to-red-600",
      icon: <Grid className="w-6 h-6 mb-2" />
    },
    {
      title: "Most Asked Leetcode Questions",
      path: "/Narray5",
      gradient: "from-indigo-600 to-blue-600",
      icon: <Award className="w-6 h-6 mb-2" />
    },
    {
      title: "Hard Questions Asked in MAANG Companies",
      path: "/Narray6",
      gradient: "from-purple-600 to-pink-600",
      icon: <Bolt className="w-6 h-6 mb-2" />
    }
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6">
      <div className="mb-8 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 p-4 sm:p-6 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Array, String, Matrix & Binary Search
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

export default Arrays;