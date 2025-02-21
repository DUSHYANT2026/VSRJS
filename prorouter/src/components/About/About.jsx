import React from 'react';

export default function About() {
  return (
    <div className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-8 text-gray-700 md:px-12 xl:px-16">
        <div className="md:flex md:gap-12 lg:items-center">
          <div className="md:w-5/12 lg:w-4/12 transform transition duration-500 hover:scale-105">
            <img
              src={'./aac2.jpg'}
              alt="All About Coding"
              className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-orange-500"
            />
          </div>

          <div className="mt-10 md:mt-0 md:w-7/12 lg:w-8/12">
            <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
              Welcome to All About Coding
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-800">
              At All About Coding, we are committed to helping you master Data Structures and Algorithms (DSA) while building a strong foundation for a successful tech career. Our mission is to empower learners with expertly curated resources and actionable insights tailored for success in academics, internships, and placements.
            </p>

            <h3 className="mt-8 text-2xl font-semibold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
              What We Offer:
            </h3>
            <ul className="mt-6 space-y-6 text-gray-700">
              <li className="flex items-start transition duration-300 hover:translate-x-2">
                <span className="inline-block w-6 h-6 mt-1 mr-4 bg-orange-500 rounded-full items-center justify-center text-white font-bold">✓</span>
                <span className="font-medium">Comprehensive DSA Resources:</span> Simplified explanations with problem sets.
              </li>
              <li className="flex items-start transition duration-300 hover:translate-x-2">
                <span className="inline-block w-6 h-6 mt-1 mr-4 bg-orange-500 rounded-full items-center justify-center text-white font-bold">✓</span>
                <span className="font-medium">Placement-Focused Roadmaps:</span> Yearly guides to enhance skills and projects.
              </li>
              <li className="flex items-start transition duration-300 hover:translate-x-2">
                <span className="inline-block w-6 h-6 mt-1 mr-4 bg-orange-500 rounded-full items-center justify-center text-white font-bold">✓</span>
                <span className="font-medium">Expert Insights:</span> Strategies and tips for coding interviews.
              </li>
              <li className="flex items-start transition duration-300 hover:translate-x-2">
                <span className="inline-block w-6 h-6 mt-1 mr-4 bg-orange-500 rounded-full items-center justify-center text-white font-bold">✓</span>
                <span className="font-medium">Community Support:</span> Engage with like-minded learners and professionals.
              </li>
            </ul>

            <p className="mt-8 text-lg leading-relaxed text-gray-800">
              Whether you're just beginning or honing your expertise, All About Coding ensures an engaging and effective learning experience. Join us and unlock your full potential!
            </p>

            <div className="mt-8 flex justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-110">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
