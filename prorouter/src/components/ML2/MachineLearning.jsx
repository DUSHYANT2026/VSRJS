import React from "react";
import { NavLink } from "react-router-dom";
import { BookOpen, Layers, GitBranch, ChevronRight } from "lucide-react";

const MachineLearning = () => {
  const topics = [
    {
      title: "History of ML",
      description: "Explore the evolution of machine learning from early concepts to modern applications.",
      icon: <BookOpen size={24} />,
      gradient: "from-blue-600 to-indigo-600",
      path: "/HistoryML",
    },
    {
      title: "AI vs ML vs Deep Learning",
      description: "Understand the key differences between artificial intelligence, machine learning, and deep learning.",
      icon: <Layers size={24} />,
      gradient: "from-emerald-600 to-teal-600",
      path: "/AIvsMLvsDL",
    },
    {
      title: "ML Pipeline",
      description: "Learn the end-to-end process of building and deploying machine learning models.",
      icon: <GitBranch size={24} />,
      gradient: "from-amber-500 to-orange-600",
      path: "/MLPipeline",
    },
  ];

  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
          Introduction to Machine Learning
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the fundamentals of machine learning and how it's transforming the world of technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {topics.map((topic, index) => (
          <NavLink key={index} to={topic.path} className="block group">
            <div className={`bg-gradient-to-br ${topic.gradient} p-6 rounded-xl shadow-lg h-full flex flex-col transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl border border-white/10`}>
              <div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {topic.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{topic.title}</h3>
              <p className="text-white/80 mb-4 flex-grow">{topic.description}</p>
              <div className="flex items-center text-white/90 text-sm font-medium mt-auto group-hover:text-white">
                Explore Topic <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to dive deeper?</h2>
            <p className="text-gray-300 mb-6">
              Explore our comprehensive curriculum designed to take you from ML basics to advanced concepts through interactive lessons.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg flex items-center">
              Start Learning Path <ChevronRight size={18} className="ml-2" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-emerald-400 mb-1">50+</div>
              <div className="text-sm text-gray-400">Interactive Lessons</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-1">20+</div>
              <div className="text-sm text-gray-400">Practical Projects</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-1">12+</div>
              <div className="text-sm text-gray-400">Real-world Datasets</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-amber-400 mb-1">5+</div>
              <div className="text-sm text-gray-400">ML Frameworks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;