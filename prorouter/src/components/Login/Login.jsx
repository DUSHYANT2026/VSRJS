import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    
    try {
      setError("");
      setLoading(true);
      await register(name, email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to create an account");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-zinc-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2
            className={`mt-6 text-center text-3xl font-extrabold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Create a new account
          </h2>
        </div>
        {error && (
          <div
            className={`p-4 rounded-md ${
              darkMode ? "bg-red-900 text-white" : "bg-red-100 text-red-800"
            }`}
          >
            {error}
          </div>
        )}
        <form
          className={`mt-8 space-y-6 p-8 rounded-lg ${
            darkMode ? "bg-zinc-800" : "bg-white shadow"
          }`}
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "bg-zinc-700 border-gray-600 text-white"
                    : "border-gray-300 text-gray-900"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "bg-zinc-700 border-gray-600 text-white"
                    : "border-gray-300 text-gray-900"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "bg-zinc-700 border-gray-600 text-white"
                    : "border-gray-300 text-gray-900"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  darkMode
                    ? "bg-zinc-700 border-gray-600 text-white"
                    : "border-gray-300 text-gray-900"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                darkMode
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                darkMode ? "focus:ring-indigo-500" : "focus:ring-indigo-500"
              }`}
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </div>
        </form>

        <div className={`text-center text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Already have an account?{" "}
          <Link
            to="/login"
            className={`font-medium ${
              darkMode
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-500"
            }`}
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}