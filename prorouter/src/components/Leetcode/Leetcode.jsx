import React, { useState } from "react";

function Leetcode() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchLeetCodeData = async () => {
        if (!username.trim()) {
            setError("Please enter a LeetCode username.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
            if (!response.ok) {
                throw new Error("User not found or API limit reached.");
            }

            const data = await response.json();
            setUserData(data);
        } catch (err) {
            setError(err.message);
            setUserData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
            {/* Input Section */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-xl text-center w-full max-w-md hover:shadow-2xl transition-shadow duration-300">
                <input
                    type="text"
                    placeholder="Enter LeetCode Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 hover:bg-gray-100"
                />
                <button
                    onClick={fetchLeetCodeData}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                >
                    Fetch Profile
                </button>
            </div>

            {/* Loading & Error Message */}
            {loading && (
                <div className="mt-6 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    <p className="ml-3 text-lg">Loading...</p>
                </div>
            )}
            {error && <p className="mt-4 text-red-500 text-lg">{error}</p>}

            {/* Profile Display */}
            {userData && (
                <div className="mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-xl text-center w-full max-w-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    {/* Profile Link */}
                    <a
                        href={`https://leetcode.com/${userData.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl font-bold mb-4 text-blue-400 hover:text-blue-300 hover:underline"
                    >
                        {userData.username}
                    </a>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {/* Problem Stats */}
                        <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Problem Stats</h2>
                            <div className="space-y-3">
                                <p className="text-lg text-gray-200">Total Solved: <span className="font-bold text-blue-300">{userData.totalSolved}</span></p>
                                <p className="text-lg text-gray-200">Easy Solved: <span className="font-bold text-green-400">{userData.easySolved}</span></p>
                                <p className="text-lg text-gray-200">Medium Solved: <span className="font-bold text-yellow-400">{userData.mediumSolved}</span></p>
                                <p className="text-lg text-gray-200">Hard Solved: <span className="font-bold text-red-400">{userData.hardSolved}</span></p>
                            </div>
                        </div>

                        {/* Contest Stats */}
                        <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Contest Stats</h2>
                            <div className="space-y-3">
                                <p className="text-lg text-gray-200">Global Ranking: <span className="font-bold text-blue-300">{userData.ranking}</span></p>
                            </div>
                            <div className="space-y-3">
                            <button
                              onClick={() => {
                              if (username) {
                                window.open(`https://leetcode.com/u/${username}`, "_blank");
                              }
                              }}
                              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                              >Leetcode Profile
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Leetcode;