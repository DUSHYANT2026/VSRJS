import React from 'react'
import { NavLink} from 'react-router-dom'

function Home2() {
  return (
    <div className="mx-auto w-full max-w-7xl">

<div className="sm:flex sm:items-center sm:justify-between bg-orange-600 text-white font-bold underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-3xl ">
        All The Important Topics of DSA
    </span>
</div>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
  <NavLink to="/Arrays">
  <div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Array, String, Matrix And Binary Search
    </span>
</div>
  </NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/STL">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Standered Template Liberay (c++)
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Linkedlist">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Linked-List
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Stack">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Stack, Queue And Priority-Queue(Heaps)
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Recusion">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Recursion And Backtracking
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Dynamic">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Dynamic Programming
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Tree">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Tree(Binary Tree, Binary Search Tree And AVL)
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Graph">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Graph(BFS, DFS, Shortest-Path)
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Bitm">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Bit Manipulation And Maths
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Algorithm">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Algorithms (Sliding Window, Two-Pointers, Sorting, Greedy)
    </span>
</div>
</NavLink>

        </div>
  )
}

export default Home2