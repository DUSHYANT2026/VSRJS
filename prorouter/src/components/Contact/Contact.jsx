import React from 'react';
import { useTheme } from '../../ThemeContext'; // Assuming you have a ThemeContext

export default function Contact() {
  const { darkMode } = useTheme(); // Get darkMode state from context

  return (
    <div
      className={`relative flex items-top justify-center min-h-screen ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'
      } sm:items-center sm:pt-0`}
    >
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden shadow-xl sm:rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Contact Information */}
            <div
              className={`p-8 ${
                darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-pink-600 to-purple-600'
              } text-white sm:rounded-l-lg`}
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Have a Question? Contact Us
              </h1>
              <p className="mt-4 text-lg font-medium">
                Fill out the form to get in touch with our team. We're here to help!
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-blue-200"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    VIT Bhopal University<br />
                    Bhopal, Madhya Pradesh
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-blue-200"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    +91 7_8_4_6_7_
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-blue-200"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    dushyantpandit___@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form
              className={`p-8 ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
              } sm:rounded-r-lg`}
            >
              <div className="flex flex-col space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 border ${
                      darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className={`w-full px-4 py-3 border ${
                      darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300`}
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="tel" className="sr-only">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    placeholder="Mobile Number"
                    className={`w-full px-4 py-3 border ${
                      darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full ${
                    darkMode ? 'bg-pink-700 hover:bg-pink-800' : 'bg-pink-600 hover:bg-red-700'
                  } text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105`}
                >
                  Submit Your Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}