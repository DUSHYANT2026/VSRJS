import React from 'react'
import { Link,NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-6xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl transition duration-500 hover:text-orange-500 italic hover:underline">
                            ALL ABOUT CODING
                            <span className="hidden sm:block text-3xl">Data Structure Algorithm</span>
                            <span className="hidden sm:block text-3xl">Development</span>
                        </h2>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 h-90 rounded-2xl" src= {'./ALL_ABOUT_CODING.png' } alt="ALL ABOUT CODING" />
                </div>
            </aside>

            
<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

<div className="sm:flex sm:items-center sm:justify-between">
    <span className=" text-gray-900 sm:text-center font-bold hover:text-orange-500 hidden sm:block text-3xl hover:underline transition duration-500">
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
    );
}