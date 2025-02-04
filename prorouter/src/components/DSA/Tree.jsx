import React from 'react'
import { NavLink } from 'react-router-dom'

function Tree() {
  return (
    <div className="mx-auto w-full max-w-7xl">

<div className="sm:flex sm:items-center sm:justify-between bg-orange-600 text-white font-bold underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-3xl ">
        Tree(Binary Tree, Binary Search Tree And AVL)
    </span>
</div>


<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/tree1">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        BFS And DFS (Tree) Notes with Questions
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/tree2">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Binary Tree And Binary Search Tree Notes 
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/tree3">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        AVL Tree Notes with Questions
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/tree4">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
    Most Asked Leetcode Questions (Tree)
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/tree5">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
    Hard Questions Asked in Maang Companies 
    </span>
</div>
</NavLink>

    </div>
  )
}

export default Tree