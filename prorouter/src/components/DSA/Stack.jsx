import React from 'react'
import { NavLink } from 'react-router-dom'

function Stack() {
  return (
    <div className="mx-auto w-full max-w-7xl">

<div className="sm:flex sm:items-center sm:justify-between">
    <span className=" text-gray-900 sm:text-center font-bold hover:text-orange-500 hidden sm:block text-3xl hover:underline transition duration-500">
    Stack, Queue And Priority-Queue(Heaps)
    </span>
</div>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Stack1">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Stack, Monotonic Stack Notes with Questions
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Stack2">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Queue, Deque Notes with Questions
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Stack3">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
       Priority_Queue (Heaps) Notes with Questions
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Stack4">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
    Most Asked Leetcode Questions 
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Stack5">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-500 text-white font-bold  hover:bg-orange-600 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
    Hard Questions Asked in Maang Companies 
    </span>
</div>
</NavLink>
    </div>
  )
}

export default Stack