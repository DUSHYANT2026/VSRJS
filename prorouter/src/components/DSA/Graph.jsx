import React from 'react'
import { NavLink } from 'react-router-dom'

function Graph() {
  return (
    <div className="mx-auto w-full max-w-7xl">

<div className="sm:flex sm:items-center sm:justify-between">
    <span className=" text-gray-900 sm:text-center font-bold hover:text-orange-500 hidden sm:block text-3xl hover:underline transition duration-500">
     Graph(BFS, DFS, Shortest-Path)
    </span>
</div>


<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/graph1">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        BFS And DFS Notes with Questions
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/graph2">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        BFS And DFS ON Matrix OR Grids Notes
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/graph3">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Union And DisJoints And MST Notes
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/graph4">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Shotest Paths Algorithms (Djisktra, Bellman Ford, Floyd Warshal)
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/graph5">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        KosaRaju ALGO, Bridges And Articulation Points Notes
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/graph6">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
    Most Asked Leetcode Questions (Graphs)
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/graph7">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
    Hard Questions Asked in Maang Companies 
    </span>
</div>
</NavLink>
    </div>
  )
}

export default Graph