import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext.jsx";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        darkMode
          ? "bg-zinc-800 text-blue-400"
          : "bg-gradient-to-br from-teal-600 to-purple-600"
      } shadow-xl`}
    >
      <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center md:px-6">
        {/* Logo on the left */}
        <Link
          to="/"
          className={`flex items-center font-bold text-lg ${
            darkMode
              ? "text-white hover:text-blue-300"
              : "text-white hover:text-orange-200"
          } transition duration-200`}
        >
          <img src="./aac2.jpg" className="mr-2 h-8 rounded-full" alt="Logo" />
          <span className="hidden sm:inline">AllAboutCoding</span>
        </Link>

        {/* Desktop Navigation in center */}
        <nav className="hidden md:flex items-center space-x-4 mx-auto">
          {[
            { path: "/", name: "Home" },
            { path: "/about", name: "About" },
            { path: "/contact", name: "Contact" },
            { path: "/Leetcode", name: "LeetCode" },
            { path: "/Github", name: "GitHub" },
            { path: "/AIML", name: "AI-ML" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-2 py-1 text-sm font-medium rounded-lg transition duration-200 ${
                  isActive
                    ? darkMode
                      ? "bg-zinc-700 text-orange-300 font-bold"
                      : "bg-white/20 text-orange-200 font-bold"
                    : darkMode
                    ? "text-blue-400 hover:bg-zinc-700/70 hover:text-blue-300"
                    : "text-white hover:bg-white/10 hover:text-orange-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right section - dark mode toggle and mobile menu button */}
        <div className="flex items-center space-x-3">
          {/* Dark mode toggle at far right (desktop) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex items-center justify-between h-6 rounded-full w-12 px-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                darkMode
                  ? "bg-blue-600 focus:ring-blue-400"
                  : "bg-orange-400 focus:ring-orange-300"
              }`}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              <svg
                className={`w-3 h-3 text-white transition-opacity duration-300 ${
                  darkMode ? "opacity-100" : "opacity-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>

              {/* Toggle circle */}
              <span
                className={`absolute inline-flex items-center justify-center w-5 h-5 transform transition-transform duration-300 rounded-full bg-white shadow-md ${
                  darkMode ? "translate-x-5" : "translate-x-0"
                }`}
              />

              <svg
                className={`w-3 h-3 text-white transition-opacity duration-300 ${
                  darkMode ? "opacity-0" : "opacity-100"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200"
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                navOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {navOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                  className="transition-opacity duration-300 opacity-100"
                />
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16"
                    className="transition-all duration-300 origin-center"
                    transform={navOpen ? "rotate(45) translate(5,-5)" : ""}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 12h16"
                    className="transition-opacity duration-300"
                    opacity={navOpen ? "0" : "1"}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 18h16"
                    className="transition-all duration-300 origin-center"
                    transform={navOpen ? "rotate(-45) translate(5,5)" : ""}
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation with improved styling */}
      {navOpen && (
        <div
          className={`md:hidden absolute w-full ${
            darkMode
              ? "bg-zinc-800 border-t border-zinc-700"
              : "bg-gradient-to-r from-teal-600 to-purple-600 border-t border-white/10"
          } shadow-lg rounded-b-lg overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/contact", name: "Contact" },
              { path: "/Leetcode", name: "LeetCode" },
              { path: "/Github", name: "GitHub" },
              { path: "/AIML", name: "AI-ML" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? darkMode
                        ? "bg-zinc-700 text-orange-300"
                        : "bg-white/20 text-orange-200"
                      : darkMode
                      ? "text-blue-400 hover:bg-zinc-700/70 hover:text-blue-300"
                      : "text-white hover:bg-white/10 hover:text-orange-200"
                  }`
                }
                onClick={() => setNavOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Dark mode toggle inside mobile menu */}
            <div className="px-3 py-2 flex items-center justify-between border-t border-white/10 mt-2 pt-2">
              <span className="text-sm font-medium text-white">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>

              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none ${
                  darkMode ? "bg-blue-600" : "bg-orange-500"
                }`}
                aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
              >
                {/* Toggle handle with icon */}
                <span
                  className={`absolute inline-flex items-center justify-center w-4 h-4 transform transition-transform duration-300 rounded-full bg-white shadow-md ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                >
                  {darkMode ? (
                    <svg
                      className="w-2 h-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-2 h-2 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}