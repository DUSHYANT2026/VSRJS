import React from "react";
import { useTheme } from "../../ThemeContext"; // Assuming you have a ThemeContext

export default function About() {
  const { darkMode } = useTheme(); // Get darkMode state from context

  return (
    <div
      className={`py-20 ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900"
          : "bg-gradient-to-r from-gray-50 to-gray-100"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 xl:px-16">
        <div className=" md:flex md:gap-12 lg:items-center">
          {/* Image Section */}
          <div className="image-container md:w-5/12 lg:w-4/12 transform transition duration-500 hover:scale-105">
            <img
              src={"./aac2.jpg"}
              alt="All About Coding"
              className={`image-flip rounded-3xl shadow-2xl   border-4 ${
                darkMode ? "border-purple-500" : "border-orange-500"
              }`}
              loading="lazy"
            />
          </div>

          {/* Content Section */}
          <div className="mt-10 md:mt-0 md:w-7/12 lg:w-8/12">
            {/* Heading */}
            <h2
              className={`text-4xl font-extrabold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode
                  ? "from-purple-400 to-pink-500"
                  : "from-orange-500 to-purple-600"
              }`}
            >
              Welcome to All About Coding
            </h2>

            {/* Description */}
            <p
              className={`mt-6 text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              At All About Coding, we are committed to helping you master Data
              Structures and Algorithms (DSA) while building a strong foundation
              for a successful tech career. Our mission is to empower learners
              with expertly curated resources and actionable insights tailored
              for success in academics, internships, and placements.
            </p>

            {/* What We Offer Section */}
            <h3
              className={`mt-8 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode
                  ? "from-purple-400 to-pink-500"
                  : "from-orange-500 to-purple-600"
              }`}
            >
              What We Offer:
            </h3>
            <ul className="mt-6 space-y-6">
              {[
                "Comprehensive DSA Resources: Simplified explanations with problem sets.",
                "Placement-Focused Roadmaps: Yearly guides to enhance skills and projects.",
                "Expert Insights: Strategies and tips for coding interviews.",
                "Community Support: Engage with like-minded learners and professionals.",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start transition duration-300 hover:translate-x-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span
                    className={`inline-block w-6 h-6 mt-1 mr-4 rounded-full items-center justify-center text-white font-bold ${
                      darkMode ? "bg-purple-500" : "bg-orange-500"
                    }`}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Closing Paragraph */}
            <p
              className={`mt-8 text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Whether you're just beginning or honing your expertise, All About
              Coding ensures an engaging and effective learning experience. Join
              us and unlock your full potential!
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://chat.whatsapp.com/BLXxM1kODlcEuN2gjuXjOU"
                target="_blank"
                rel="noopener noreferrer" // Security best practice
                className={`animated-gradient inline-block px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-110 ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-gradient-to-r from-orange-500 to-purple-600"
                }`}
                aria-label="Join Our WhatsApp Community"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
