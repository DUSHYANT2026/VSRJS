import React from 'react'
import { NavLink } from 'react-router-dom';
function Trie() {
    return (
        <div className="mx-auto w-full max-w-7xl">
          <div className="sm:flex sm:items-center sm:justify-between bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
            <span className="text-gray-100 sm:text-center hidden sm:block text-3xl">
              Trie (Implementation)
            </span>
          </div>
    
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    
          {/* Single Column Layout */}
          <div className="space-y-6">
            {/* Unique Gradient Cards with Hover Effects */}
            <NavLink to="/Trie1">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                <span className="text-white text-center text-2xl font-bold">
                  Trie Concept and Notes
                </span>
              </div>
            </NavLink>
    
            <NavLink to="/Trie2">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                <span className="text-white text-center text-2xl font-bold">
                  Most Asked Leetcode Questions (Tree)
                </span>
              </div>
            </NavLink>
    
            <NavLink to="/Trie3">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                <span className="text-white text-center text-2xl font-bold">
                  Hard Questions Asked in Maang Companies
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      );
    }

export default Trie