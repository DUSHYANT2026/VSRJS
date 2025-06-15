import React, { useState } from "react";

function Github() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [reposData, setReposData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchGitHubData = async () => {
        if (!username.trim()) {
            setError("Please enter a GitHub username.");
            return;
        }

        setLoading(true);
        setError(null);

        const headers = {
            'Authorization': `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`
        };

        try {
            const [userResponse, reposResponse] = await Promise.all([
                fetch(`https://api.github.com/users/${username}`, { headers }),
                fetch(`https://api.github.com/users/${username}/repos`, { headers })
            ]);

            if (!userResponse.ok || !reposResponse.ok) {
                throw new Error("User not found or API limit reached.");
            }

            const [user, repos] = await Promise.all([
                userResponse.json(),
                reposResponse.json()
            ]);

            setUserData(user);
            setReposData(repos);
        } catch (err) {
            setError(err.message);
            setUserData(null);
            setReposData([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                        GitHub Profile Explorer
                    </h1>
                    <p className="text-gray-300 max-w-lg mx-auto">
                        Discover GitHub profiles, repositories, and activity stats in a beautiful interface
                    </p>
                </header>

                {/* Search Section */}
                <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-2xl mx-auto mb-12 border border-gray-700/50">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Enter GitHub Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && fetchGitHubData()}
                            className="flex-grow p-4 rounded-xl bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-gray-400"
                        />
                        <button
                            onClick={fetchGitHubData}
                            disabled={loading}
                            className={`p-4 rounded-xl font-semibold transition-all duration-300 shadow-lg ${loading ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:scale-[1.02]'} flex items-center justify-center`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Fetching...
                                </>
                            ) : 'Fetch Profile'}
                        </button>
                    </div>
                </div>

                {/* Loading & Error States */}
                {loading && (
                    <div className="flex justify-center my-12">
                        <div className="animate-pulse flex flex-col items-center">
                            <div className="h-32 w-32 bg-gray-700 rounded-full mb-4"></div>
                            <div className="h-6 w-48 bg-gray-700 rounded mb-2"></div>
                            <div className="h-4 w-64 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="max-w-2xl mx-auto bg-red-900/50 border border-red-700 rounded-xl p-6 mb-12 backdrop-blur-sm text-center animate-fade-in">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-xl font-medium">{error}</p>
                        <p className="text-gray-300 mt-2">Please try again with a different username</p>
                    </div>
                )}

                {/* User Profile Section */}
                {userData && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Profile Card */}
                        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-700/50 lg:col-span-1 transform transition-all duration-500 hover:scale-[1.01]">
                            <div className="flex flex-col items-center">
                                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={userData.avatar_url}
                                        alt="GitHub Profile"
                                        className="w-40 h-40 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-xl mb-6 transition-all duration-300 hover:scale-105"
                                    />
                                </a>
                                <h2 className="text-2xl font-bold text-center mb-1">{userData.name || userData.login}</h2>
                                {userData.name && <p className="text-gray-400 mb-4">@{userData.login}</p>}
                                <p className="text-gray-300 text-center mb-6">{userData.bio || 'No bio available'}</p>
                                
                                <div className="grid grid-cols-2 gap-4 w-full mb-6">
                                    <div className="bg-gray-700/40 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold">{userData.followers}</p>
                                        <p className="text-gray-400 text-sm">Followers</p>
                                    </div>
                                    <div className="bg-gray-700/40 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold">{userData.following}</p>
                                        <p className="text-gray-400 text-sm">Following</p>
                                    </div>
                                    <div className="bg-gray-700/40 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold">{userData.public_repos}</p>
                                        <p className="text-gray-400 text-sm">Repos</p>
                                    </div>
                                    <div className="bg-gray-700/40 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold">{userData.public_gists || 0}</p>
                                        <p className="text-gray-400 text-sm">Gists</p>
                                    </div>
                                </div>
                                
                                {userData.location && (
                                    <div className="flex items-center text-gray-400 mb-2">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        {userData.location}
                                    </div>
                                )}
                                
                                {userData.blog && (
                                    <a href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="flex items-center text-blue-400 hover:underline mb-2">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                        </svg>
                                        Website
                                    </a>
                                )}
                                
                                <p className="text-gray-400 text-sm mt-4">
                                    Joined {new Date(userData.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                        </div>

                        {/* Stats and Repos */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Stats Section */}
                            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-700/50">
                                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700/50 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                    GitHub Statistics
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-700/50">
                                        <img
                                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&theme=dark&include_all_commits=true`}
                                            alt="GitHub Stats"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-700/50">
                                        <img
                                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true`}
                                            alt="GitHub Streak"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-700/50">
                                        <img
                                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true`}
                                            alt="Top Languages"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-700/50">
                                        <img
                                            src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github_dark`}
                                            alt="Profile Details"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Repositories Section */}
                            {reposData.length > 0 && (
                                <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-700/50">
                                    <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700/50 flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        Repositories ({reposData.length})
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {reposData
                                            .sort((a, b) => b.stargazers_count - a.stargazers_count)
                                            .map((repo) => (
                                                <div 
                                                    key={repo.id}
                                                    className="bg-gray-700/30 hover:bg-gray-700/50 rounded-xl p-5 border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:border-gray-600/50 group"
                                                >
                                                    <div className="flex justify-between items-start mb-3">
                                                        <a
                                                            href={repo.html_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-lg font-semibold hover:underline flex items-center"
                                                        >
                                                            {repo.name}
                                                            {repo.private && (
                                                                <span className="ml-2 text-xs bg-gray-600/50 px-2 py-1 rounded-md">
                                                                    Private
                                                                </span>
                                                            )}
                                                        </a>
                                                        <span className="text-xs bg-gray-600/50 px-2 py-1 rounded-md">
                                                            {repo.language || 'Unknown'}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                                        {repo.description || 'No description provided.'}
                                                    </p>
                                                    <div className="flex justify-between items-center text-sm text-gray-400">
                                                        <div className="flex space-x-4">
                                                            <span className="flex items-center">
                                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                                </svg>
                                                                {repo.stargazers_count}
                                                            </span>
                                                            <span className="flex items-center">
                                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                                                                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                                                                </svg>
                                                                {repo.forks_count}
                                                            </span>
                                                        </div>
                                                        <span className="text-xs">
                                                            Updated {new Date(repo.updated_at).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Github;