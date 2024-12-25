import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div >

<aside class="relative overflow-hidden text-black rounded-xl sm:mx-20 mx-4 sm:py-24 py-16 shadow-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300 hover:shadow-3xl transform hover:scale-105 transition duration-300">
  <div className="relative z-10 max-w-screen-xl px-8 pb-20 pt-12 sm:py-24 mx-auto sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center sm:items-start">
    <div className="max-w-xl space-y-8 text-center sm:text-left sm:ml-auto sm:mr-12">
      <h2 className="text-5xl font-bold sm:text-5xl transition duration-500 hover:text-orange-500 hover:underline">
        All About Coding
      </h2>
      <div className="text-gray-700 text-xl sm:text-2xl space-y-4">
        <p className="font-semibold tracking-wide hover:text-orange-400 leading-relaxed">Data Structure Algorithm</p>
        <p className="font-semibold tracking-wide hover:text-orange-400 leading-relaxed">Most important Leetcode Questions</p>
        <p className="font-semibold tracking-wide hover:text-orange-400 leading-relaxed">Most important Maang Interviews Questions</p>
        <p className="font-semibold tracking-wide hover:text-orange-400 leading-relaxed">Learn DSA And Get Placed in Maang Companies</p>
      </div>
      <NavLink to="/Home2">
        <button className="mt-6 px-8 py-4 text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 text-lg">
          Start Learning
        </button>
      </NavLink>
    </div>

    <div className="flex-shrink-0 w-full sm:w-auto sm:max-w-xl mt-10 sm:mt-0">
      <img className="w-full h-[32rem] object-cover rounded-2xl shadow-lg border-2 border-gray-300" src={'./aac2.jpg'} alt="ALL ABOUT CODING" />
    </div>
  </div>
</aside>    

</div>
    );
}