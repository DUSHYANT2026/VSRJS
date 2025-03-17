import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">
              Track Your Coding Journey
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://codolio.com/"
                  target="_blank"
                  className="flex items-center text-gray-400 hover:text-orange-400 transition duration-300"
                >
                  <span className="mr-2">🚀</span>
                  Codolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-6">Resources</h2>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    scrollToTop();
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 font-semibold flex items-center"
                      : "flex items-center text-gray-400 hover:text-orange-400 transition duration-300"
                  }
                >
                  <span className="mr-2">🏠</span>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => {
                    scrollToTop();
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 font-semibold flex items-center"
                      : "flex items-center text-gray-400 hover:text-orange-400 transition duration-300"
                  }
                >
                  <span className="mr-2">📖</span>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => {
                    scrollToTop();
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 font-semibold flex items-center"
                      : "flex items-center text-gray-400 hover:text-orange-400 transition duration-300"
                  }
                >
                  <span className="mr-2">📞</span>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-6">Media</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/DUSHYANT2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-400 transition duration-300"
                >
                  <span className="mr-2">🐙</span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dushyant-kumar-b8594a251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-400 transition duration-300"
                >
                  <span className="mr-2">🔗</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-6">
              Coding Platforms
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "LeetCode", link: "https://leetcode.com/problemset/" },
                { name: "CodeForces", link: "https://codeforces.com/" },
                { name: "CodeChef", link: "https://www.codechef.com/" },
                {
                  name: "GeeksForGeeks",
                  link: "https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions",
                },
                {
                  name: "HackerRank",
                  link: "https://www.hackerrank.com/dashboard",
                },
                {
                  name: "CodeStudio",
                  link: "https://www.naukri.com/code360/problems",
                },
              ].map(({ name, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  className="text-sm bg-gray-800 py-2 px-3 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300 flex items-center justify-center"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-6">
            Coding Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                name: "GFG-DSA",
                link: "https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/",
              },
              {
                name: "Take-U-Forward",
                link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
              },
              { name: "W3-School", link: "https://www.w3schools.com/dsa/" },
              {
                name: "Java-T-Point",
                link: "https://www.javatpoint.com/data-structure-tutorial",
              },
              {
                name: "CP-Algorithms",
                link: "https://cp-algorithms.com/index.html",
              },
            ].map(({ name, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                className="text-sm bg-gray-800 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-800 pt-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} All About Coding. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
