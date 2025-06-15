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
            
            // Transform the API response to match our expected structure
            const transformedData = {
                username: data.username || username,
                totalSolved: data.totalSolved || 0,
                easySolved: data.easySolved || 0,
                mediumSolved: data.mediumSolved || 0,
                hardSolved: data.hardSolved || 0,
                ranking: data.ranking || 'N/A',
                contests: data.contestParticipation || []
            };
            
            setUserData(transformedData);
        } catch (err) {
            setError(err.message);
            setUserData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                        LeetCode Profile Viewer
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Check your LeetCode stats in a beautiful dashboard
                    </p>
                </div>

                {/* Input Section */}
                <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 max-w-md mx-auto shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/50">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter LeetCode Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && fetchLeetCodeData()}
                            className="w-full p-4 pr-12 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        />
                        <button
                            onClick={fetchLeetCodeData}
                            disabled={loading}
                            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed ${loading ? 'animate-pulse' : ''}`}
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : 'Fetch'}
                        </button>
                    </div>
                </div>

                {/* Loading & Error Message */}
                {loading && (
                    <div className="mt-8 flex flex-col items-center justify-center animate-fade-in">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-purple-600 rounded-full animate-ping"></div>
                            </div>
                        </div>
                        <p className="mt-4 text-lg text-purple-300 font-medium">Crunching LeetCode data...</p>
                    </div>
                )}

                {error && (
                    <div className="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-xl text-center max-w-md mx-auto animate-shake">
                        <p className="text-red-300 font-medium">{error}</p>
                    </div>
                )}

                {/* Profile Display */}
                {userData && (
                    <div className="mt-12 animate-fade-in-up">
                        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/50">
                            {/* Profile Header */}
                            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-1 rounded-full">
                                        <div className="bg-gray-900 p-1 rounded-full">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800 flex items-center justify-center">
                                                <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                                    {userData.username.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            href={`https://leetcode.com/${userData.username}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-2xl md:text-3xl font-bold text-white hover:text-purple-400 transition-colors duration-300"
                                        >
                                            {userData.username}
                                        </a>
                                        <p className="text-gray-400">LeetCode Enthusiast</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => window.open(`https://leetcode.com/u/${username}`, "_blank")}
                                    className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95 flex items-center space-x-2"
                                >
                                    <span>View Profile</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Problem Stats */}
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1">
                                    <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                        Problem Stats
                                    </h2>
                                    <div className="space-y-4">
                                        <StatItem 
                                            label="Total Solved" 
                                            value={userData.totalSolved} 
                                            color="text-purple-400" 
                                            icon="🧩"
                                        />
                                        <StatItem 
                                            label="Easy Solved" 
                                            value={userData.easySolved} 
                                            color="text-green-400" 
                                            icon="🟢"
                                        />
                                        <StatItem 
                                            label="Medium Solved" 
                                            value={userData.mediumSolved} 
                                            color="text-yellow-400" 
                                            icon="🟡"
                                        />
                                        <StatItem 
                                            label="Hard Solved" 
                                            value={userData.hardSolved} 
                                            color="text-red-400" 
                                            icon="🔴"
                                        />
                                    </div>
                                </div>

                                {/* Contest Stats */}
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1">
                                    <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                        Contest Stats
                                    </h2>
                                    <div className="space-y-4">
                                        <StatItem 
                                            label="Global Ranking" 
                                            value={userData.ranking} 
                                            color="text-blue-400" 
                                            icon="🏆"
                                        />
                                        <StatItem 
                                            label="Contest Participation" 
                                            value={userData.contests ? userData.contests.length : 'N/A'} 
                                            color="text-indigo-400" 
                                            icon="📊"
                                        />
                                        <div className="pt-4">
                                            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" 
                                                    style={{ width: `${Math.min(100, (userData.totalSolved / 500) * 100)}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-sm text-gray-400 mt-2">
                                                Progress: {Math.round((userData.totalSolved / 500) * 100)}% to 500 problems
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// StatItem component for better organization
function StatItem({ label, value, color, icon }) {
    return (
        <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:bg-gray-800/50 transition-colors duration-300">
            <div className="flex items-center space-x-3">
                <span className="text-lg">{icon}</span>
                <span className="text-gray-300">{label}</span>
            </div>
            <span className={`text-xl font-bold ${color}`}>{value}</span>
        </div>
    );
}

export default Leetcode;