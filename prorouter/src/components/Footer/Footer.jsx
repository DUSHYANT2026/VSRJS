import React from 'react'
import { Link,NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        {/* <Link to="/" className="flex items-center">
                            <img
                                src={'./aac1.jpg'}
                                className="mr-3 h-16 rounded-xl "
                                alt="Logo"
                            />
                        </Link> */}

                        <h2 className="mb-6 text-sm font-bold hover:underline text-gray-900 uppercase">Track Your Coding Journey</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="https://codolio.com/" className="hover:underline  hover:text-gray-900  ">
                                        Codolio
                                    </Link>
                                </li>
                            </ul>

                    </div> 
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-bold hover:underline text-gray-900 uppercase ">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-3">
                                    <NavLink to="/" 
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline font-bold" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink to="/about" 
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline font-bold" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" 
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline font-bold" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold hover:underline text-gray-900 uppercase">Media</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/DUSHYANT2026"
                                        className="hover:underline  hover:text-gray-900 "
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/dushyant-kumar-b8594a251/"
                                        className="hover:underline  hover:text-gray-900 "
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-900 sm:text-center font-bold hover:underline ">
                        CODING PLATFORMS FOR PRACTICE
                    </span>

                    {/* <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div> */}
                    <div className="space-y-2 space-x-4">
                    <Link to="https://leetcode.com/problemset/" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>LeetCode</span>
                    </Link>
                    <Link to="https://codeforces.com/" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>CodeForeces</span>
                    </Link>
                    <Link to="https://www.codechef.com/" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>CodeChef</span>
                    </Link>
                    <Link to="https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions&itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=practice_header" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>GeeksForGeeks</span>
                    </Link>
                    <Link to="https://www.hackerrank.com/dashboard" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>HackerRank</span>
                    </Link>
                    <Link to="https://www.naukri.com/code360/problems" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>CodeStudio</span>
                    </Link>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-900 sm:text-center font-bold hover:underline">
                        CODING RESOURCES FOR LEARNING
                    </span>

                    <div className="space-y-2 space-x-4">
                    <Link to="https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>GFG-DSA</span>
                    </Link>
                    <Link to="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>Take-U-Forward</span>
                    </Link>
                    <Link to="https://www.w3schools.com/dsa/" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>W3-School</span>
                    </Link>
                    <Link to="https://www.javatpoint.com/data-structure-tutorial" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>Java-T-Point</span>
                    </Link>
                    <Link to="https://cp-algorithms.com/index.html" className="text-gray-500 hover:text-gray-900 font-bold hover:underline">
                        <span>CP-Algorithms</span>
                    </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}