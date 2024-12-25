import React from 'react';

export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 text-gray-700 md:px-12 xl:px-16">
        <div className="md:flex md:gap-8 lg:items-center">
          <div className="md:w-5/12 lg:w-4/12">
            <img
              src={'./aac2.jpg'}
              alt="All About Coding"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div className="mt-10 md:mt-0 md:w-7/12 lg:w-8/12">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl lg:text-5xl">
              Welcome to All About Coding
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-800">
              At All About Coding, we aim to be your trusted companion on your journey to mastering Data Structures and Algorithms (DSA) while building a robust foundation for a thriving tech career. Our mission is to empower learners with expertly curated resources and actionable insights tailored for success in academics, internships, and placements.
            </p>

            <h3 className="mt-8 text-2xl font-semibold text-gray-900">What We Offer:</h3>
            <ul className="mt-4 space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 mt-1 mr-3 bg-orange-500 rounded-full"></span>
                <span className="font-medium">Comprehensive DSA Resources:</span> Detailed notes and problem sets designed to simplify complex concepts.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 mt-1 mr-3 bg-orange-500 rounded-full"></span>
                <span className="font-medium">Placement-Focused Roadmaps:</span> Year-by-year guidance to help you excel in skills, projects, and internships.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 mt-1 mr-3 bg-orange-500 rounded-full"></span>
                <span className="font-medium">Expert Insights:</span> Proven strategies and tips to excel in coding interviews and land your dream job.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 mt-1 mr-3 bg-orange-500 rounded-full"></span>
                <span className="font-medium">Community Support:</span> Connect with a vibrant network of learners and professionals.
              </li>
            </ul>

            <p className="mt-8 text-lg leading-relaxed text-gray-800">
              Whether you're just starting out or refining your skills, All About Coding is here to ensure your journey is both effective and enjoyable. Together, we’ll help you unlock your potential and achieve your goals.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
