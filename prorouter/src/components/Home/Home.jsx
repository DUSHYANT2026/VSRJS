import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            
            <aside className="relative overflow-hidden text-black rounded-3xl sm:mx-16 mx-4 sm:py-24 py-16 shadow-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:shadow-3xl transform hover:scale-101 transition duration-500 ease-in-out">
    <div className="relative z-10 max-w-screen-xl px-8 pb-20 pt-16 sm:py-24 mx-auto sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center sm:items-start">
        <div className="max-w-xl space-y-8 text-center sm:text-left sm:ml-auto sm:mr-12">
            <h2 className="text-6xl font-bold sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 transition duration-500 hover:scale-105">
                All About Coding
            </h2>
            <div className="text-gray-700 text-xl sm:text-2xl space-y-6">
                <p className="font-semibold tracking-wide hover:text-orange-500 leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out">
                    Data Structure & Algorithm
                </p>
                <p className="font-semibold tracking-wide hover:text-orange-500 leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out">
                    Most Important LeetCode Questions
                </p>
                <p className="font-semibold tracking-wide hover:text-orange-500 leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out">
                    Most Important MAANG Interview Questions
                </p>
                <p className="font-semibold tracking-wide hover:text-orange-500 leading-relaxed transform hover:translate-x-4 transition duration-300 ease-in-out">
                    Learn DSA and Get Placed in MAANG Companies
                </p>
            </div>
            <NavLink to="./Home2" className="block mt-10">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-2xl shadow-xl hover:shadow-3xl transform hover:scale-110 transition duration-500 ease-in-out border border-gray-200 cursor-pointer">
                    <h3 className="text-3xl font-bold text-white mb-4">Start Learning DSA</h3>
                    <p className="text-gray-100 text-lg">
                        Click here to start learning DSA like a Professional
                    </p>
                </div>
            </NavLink>
        </div>

        <div className="flex-shrink-0 w-full sm:w-auto sm:max-w-xl mt-12 sm:mt-0">
            <img
                className="w-full h-[36rem] object-cover rounded-3xl shadow-2xl border-4 border-gray-300 transform hover:scale-105 transition duration-500 ease-in-out"
                src={'./aac2.jpg'}
                alt="ALL ABOUT CODING"
            />
        </div>
    </div>
</aside>

            <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                All The Important Topics of DSA
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Array, String, Matrix, Binary Search */}
                    <NavLink to="/Arrays" className="block">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Array, String, Matrix</h3>
                            <p className="text-gray-100">
                                Master the fundamentals of arrays, strings, and efficient searching with binary search.
                            </p>
                        </div>
                    </NavLink>

                    {/* Standard Template Library (C++) */}
                    <NavLink to="/STL" className="block">
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Standard Template Library</h3>
                            <p className="text-gray-100">
                                Learn to use the powerful STL in C++ for efficient coding and problem-solving.
                            </p>
                        </div>
                    </NavLink>

                    {/* Linked List */}
                    <NavLink to="/Linkedlist" className="block">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Linked List</h3>
                            <p className="text-gray-100">
                                Understand singly, doubly, and circular linked lists and their applications.
                            </p>
                        </div>
                    </NavLink>

                    {/* Stack, Queue, Priority Queue (Heaps) */}
                    <NavLink to="/Stack" className="block">
                        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Stack, Queue, Heaps</h3>
                            <p className="text-gray-100">
                                Explore stack, queue, and priority queue data structures and their use cases.
                            </p>
                        </div>
                    </NavLink>

                    {/* Recursion & Backtracking */}
                    <NavLink to="/Recusion" className="block">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Recursion & Backtracking</h3>
                            <p className="text-gray-100">
                                Solve complex problems using recursion and backtracking techniques.
                            </p>
                        </div>
                    </NavLink>

                    {/* Dynamic Programming */}
                    <NavLink to="/Dynamic" className="block">
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Dynamic Programming</h3>
                            <p className="text-gray-100">
                                Learn to optimize solutions using dynamic programming and memoization.
                            </p>
                        </div>
                    </NavLink>

                    {/* Tree (Binary Tree, BST, AVL) */}
                    <NavLink to="/Tree" className="block">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Tree (Binary Tree, BST, AVL)</h3>
                            <p className="text-gray-100">
                                Master tree data structures, including binary trees, BSTs, and AVL trees.
                            </p>
                        </div>
                    </NavLink>

                    {/* Graph (BFS, DFS, Shortest Path) */}
                    <NavLink to="/Graph" className="block">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Graph (BFS, DFS, Paths)</h3>
                            <p className="text-gray-100">
                                Understand graph traversal algorithms like BFS, DFS, and shortest path algorithms.
                            </p>
                        </div>
                    </NavLink>

                    {/* Bit Manipulation & Maths */}
                    <NavLink to="/Bitm" className="block">
                        <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Bit Manipulation & Maths</h3>
                            <p className="text-gray-100">
                                Solve problems using bit manipulation and mathematical concepts.
                            </p>
                        </div>
                    </NavLink>

                    {/* Algorithms (Sliding Window, Two Pointers, Sorting, Greedy) */}
                    <NavLink to="/Algorithm" className="block">
                        <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Algorithms</h3>
                            <p className="text-gray-100">
                                Learn key algorithms like sliding window, two pointers, sorting, and greedy algorithms.
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to="./Trie" className="block">
                        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Trie Implementation</h3>
                            <p className="text-gray-100">
                                Click here to start learning DSA like a Professional
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to="./Home2" className="block">
                        <div className="bg-gradient-to-r from-teal-500 to-purple-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 cursor-pointer">
                            <h3 className="text-2xl font-bold text-white mb-4">Start Learning DSA</h3>
                            <p className="text-gray-100">
                                Click here to start learning DSA like a Professional
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}