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
            const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`, { headers });

            if (!userResponse.ok || !reposResponse.ok) {
                throw new Error("User not found or API limit reached.");
            }

            const user = await userResponse.json();
            const repos = await reposResponse.json();

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
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
            {/* Input Section */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-xl text-center w-full max-w-md">
                <input
                    type="text"
                    placeholder="Enter GitHub Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                    onClick={fetchGitHubData}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
                >
                    Fetch Profile
                </button>
            </div>

            {/* Loading & Error Message */}
            {loading && <p className="mt-4 text-lg animate-pulse">Loading...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}

            {/* Profile Display */}
            {userData && (
                <div className="mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-xl text-center w-full max-w-md transition-all duration-300 hover:scale-105">
                    <a href={userData.html_url} className="hover:underline">
                        <img
                            src={userData.avatar_url}
                            alt="GitHub Profile"
                            className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg transition-all duration-300 hover:scale-110"
                        />
                    </a>
                    <p className="text-3xl font-bold mt-4">{userData.login}</p>
                    <p className="text-lg text-gray-300 mt-2">Followers: {userData.followers}</p>
                    <p className="text-lg text-gray-300 mt-2">Following: {userData.following}</p>
                    <p className="text-lg text-gray-300 mt-2">Public Repos: {userData.public_repos}</p>
                </div>
            )}

            {/* Repository List */}
            {reposData.length > 0 && (
                <div className="mt-8 w-full max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-6">Repositories</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reposData.map((repo) => (
                            <li
                                key={repo.id}
                                className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-5 rounded-xl shadow-md hover:bg-opacity-70 transition-all duration-300 hover:scale-105"
                            >
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-semibold hover:underline"
                                >
                                    {repo.name}
                                </a>
                                <p className="text-gray-300 mt-2">{repo.description || "No description provided."}</p>
                                <div className="flex items-center mt-4 text-gray-400">
                                    <span className="mr-4">⭐ {repo.stargazers_count}</span>
                                    <span>🍴 {repo.forks_count}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Github;