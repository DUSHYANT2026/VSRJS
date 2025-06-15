import { NavLink } from "react-router-dom";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 relative z-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Section 1 */}
          <div>
            <h2 className="text-lg font-bold text-white mb-3 border-b border-orange-500 pb-1 inline-block">
              Track Your Coding Journey
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://codolio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-400 transition duration-300 group"
                >
                  <span className="mr-2">🚀</span>
                  <span className="group-hover:underline">Codolio</span>
                  <ExternalLink className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg font-bold text-white mb-3 border-b border-orange-500 pb-1 inline-block">
              Resources
            </h2>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `flex items-center ${
                      isActive
                        ? "text-orange-400 font-semibold"
                        : "text-gray-400 hover:text-orange-400 transition duration-300"
                    } group`
                  }
                >
                  <span className="mr-2">🏠</span>
                  <span className="group-hover:underline">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `flex items-center ${
                      isActive
                        ? "text-orange-400 font-semibold"
                        : "text-gray-400 hover:text-orange-400 transition duration-300"
                    } group`
                  }
                >
                  <span className="mr-2">📖</span>
                  <span className="group-hover:underline">About</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `flex items-center ${
                      isActive
                        ? "text-orange-400 font-semibold"
                        : "text-gray-400 hover:text-orange-400 transition duration-300"
                    } group`
                  }
                >
                  <span className="mr-2">📞</span>
                  <span className="group-hover:underline">Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-lg font-bold text-white mb-3 border-b border-orange-500 pb-1 inline-block">
              Connect
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/DUSHYANT2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-400 transition duration-300 group"
                >
                  <Github className="mr-2 w-4 h-4" />
                  <span className="group-hover:underline">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dushyant-kumar-b8594a251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-400 transition duration-300 group"
                >
                  <Linkedin className="mr-2 w-4 h-4" />
                  <span className="group-hover:underline">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-lg font-bold text-white mb-3 border-b border-orange-500 pb-1 inline-block">
              Coding Platforms
            </h2>
            <div className="grid grid-cols-2 gap-2">
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
                  rel="noopener noreferrer"
                  className="text-xs bg-gray-800 py-1 px-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
                >
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
          <h2 className="text-base font-bold text-white mb-3 text-center">
            Coding Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
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
                rel="noopener noreferrer"
                className="text-xs bg-gray-800 py-1 px-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm"
              >
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center border-t border-gray-800 pt-3 flex items-center justify-between">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} All About Coding. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop} 
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-1 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}