import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext.jsx";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme(); // Get the theme context

  // Synchronize dark mode state with localStorage
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
    setDarkMode(!darkMode); // Toggle the dark mode using setDarkMode from context
  };

  return (
    <header
      className={`sticky z-50 top-0 ${
        darkMode ? "bg-zinc-900 text-blue-400" : "bg-gradient-to-r from-teal-500 to-purple-500"
      } shadow-lg`}
    >
      <nav className="border-gray-200 px-4 lg:px-6 py-1.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className={`flex items-center font-bold sm:text-2xl transition duration-500 ${
              darkMode ? "text-white hover:text-blue-300" : "text-white hover:text-orange-300"
            }`}
          >
            <img
              src={"./aac2.jpg"}
              className="mr-2 h-16 rounded-2xl"
              alt="Logo"
            />
            <span>AllAboutCoding</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-white">Dark-Mode</span>
            </label>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-300 underline font-bold"
                        : darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-white hover:text-orange-300"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0 transition duration-300`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-300 underline font-bold"
                        : darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-white hover:text-orange-300"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0 transition duration-300`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-300 underline font-bold"
                        : darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-white hover:text-orange-300"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0 transition duration-300`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Leetcode"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-300 underline font-bold"
                        : darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-white hover:text-orange-300"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0 transition duration-300`
                  }
                >
                  LeetCode
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-300 underline font-bold"
                        : darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-white hover:text-orange-300"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0 transition duration-300`
                  }
                >
                  GitHub
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AIML"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-300 underline font-bold"
                        : darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-white hover:text-orange-300"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0 transition duration-300`
                  }
                >
                  AI-ML
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
