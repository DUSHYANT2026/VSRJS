import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListTree, ListChecks, Award, BarChart4 } from "lucide-react";

export default function Linkedlist() {
  const topics = [
    {
      title: "Single Linked-List Notes with Questions",
      path: "/list1",
      gradient: "from-blue-500 to-purple-500",
      icon: <List className="w-6 h-6 mb-2" />
    },
    {
      title: "Doubly Linked-List Notes with Questions",
      path: "/list2",
      gradient: "from-green-500 to-teal-500",
      icon: <ListTree className="w-6 h-6 mb-2" />
    },
    {
      title: "Circular Linked-List Notes with Questions",
      path: "/list3",
      gradient: "from-yellow-500 to-orange-500",
      icon: <ListChecks className="w-6 h-6 mb-2" />
    },
    {
      title: "Most Asked Leetcode Questions (Linked-List)",
      path: "/list4",
      gradient: "from-pink-500 to-red-500",
      icon: <Award className="w-6 h-6 mb-2" />
    },
    {
      title: "Hard Questions Asked in Maang Companies",
      path: "/list5",
      gradient: "from-indigo-500 to-blue-500",
      icon: <BarChart4 className="w-6 h-6 mb-2" />
    }
  ];
return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6">
      <div className="mb-8 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 p-4 sm:p-6 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Linked-List
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