import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown } from "react-feather";
import { useTheme } from "../../../ThemeContext.jsx";

const formatDescription = (desc, darkMode) => {
  if (Array.isArray(desc)) {
    return (
      <ul
        className={`list-disc pl-6 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {desc.map((item, i) => (
          <li key={i} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return desc.split("\n").map((paragraph, i) => (
    <p key={i} className="mb-4 whitespace-pre-line">
      {paragraph}
    </p>
  ));
};

const CodeExample = React.memo(
  ({ example, isVisible, language, code, darkMode }) => (
    <div
      className={`rounded-lg overflow-hidden border-2 ${getBorderColor(
        language,
        darkMode
      )} transition-all duration-300 ${isVisible ? "block" : "hidden"}`}
    >
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers
        wrapLines
        customStyle={{
          padding: "1.5rem",
          fontSize: "0.95rem",
          background: darkMode ? "#1e293b" : "#f9f9f9",
          borderRadius: "0.5rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
);

const getBorderColor = (language, darkMode) => {
  const base = darkMode ? "border-gray-700" : "border-gray-100";
  switch (language) {
    case "cpp":
      return darkMode ? "border-blue-900" : "border-blue-100";
    case "java":
      return darkMode ? "border-red-900" : "border-red-100";
    case "python":
      return darkMode ? "border-yellow-900" : "border-yellow-100";
    default:
      return base;
  }
};

const LanguageLogo = ({ language, size = 24, darkMode }) => {
  const baseClasses = "rounded-md p-1 flex items-center justify-center";

  const getGradient = (language) => {
    switch (language) {
      case "cpp":
        return darkMode
          ? "bg-gradient-to-br from-blue-900 to-blue-600"
          : "bg-gradient-to-br from-blue-500 to-blue-700";
      case "java":
        return darkMode
          ? "bg-gradient-to-br from-red-800 to-red-600"
          : "bg-gradient-to-br from-red-500 to-red-700";
      case "python":
        return darkMode
          ? "bg-gradient-to-br from-yellow-700 to-yellow-600"
          : "bg-gradient-to-br from-yellow-400 to-yellow-600";
      default:
        return darkMode
          ? "bg-gradient-to-br from-gray-700 to-gray-600"
          : "bg-gradient-to-br from-gray-400 to-gray-600";
    }
  };

  const getLogo = (language) => {
    switch (language) {
      case "cpp":
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={size * 1.5}
              height={size * 1.5}
              viewBox="0 0 48 48"
            >
              <path
                fill="#00549d"
                fillRule="evenodd"
                d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                clipRule="evenodd"
              />
              <path
                fill="#0086d4"
                fillRule="evenodd"
                d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                clipRule="evenodd"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                clipRule="evenodd"
              />
              <path
                fill="#0075c0"
                fillRule="evenodd"
                d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                clipRule="evenodd"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M31 21H33V27H31zM38 21H40V27H38z"
                clipRule="evenodd"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M29 23H35V25H29zM36 23H42V25H36z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
        case "java":
          return (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%"
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size * 1.5}
                height={size * 1.5}
                viewBox="0 0 50 50"
              >
                <path
                  d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"
                />
              </svg>
            </div>
          );case "python":
        return (
          <svg viewBox="0 0 128 128" width={size} height={size}>
            <path
              fill="#3776AB"
              d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
              transform="translate(0 10.26)"
            ></path>
            <path
              fill="#FFDC41"
              d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.283 16.221 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.678-8.084 2.491-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
              transform="translate(0 10.26)"
            ></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${baseClasses} ${getGradient(language)}`}>
      {getLogo(language)}
    </div>
  );
};

const getButtonColor = (language, darkMode) => {
  switch (language) {
    case "cpp":
      return darkMode
        ? "from-blue-300 to-blue-500 hover:from-blue-400 hover:to-blue-700"
        : "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700";
    case "java":
      return darkMode
        ? "from-red-700 to-red-900 hover:from-red-800 hover:to-red-950"
        : "from-red-500 to-red-700 hover:from-red-600 hover:to-red-800";
    case "python":
      return darkMode
        ? "from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
        : "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600";
    default:
      return darkMode
        ? "from-gray-600 to-blue-600 hover:from-gray-700 hover:to-blue-700"
        : "from-gray-500 to-blue-500 hover:from-gray-600 hover:to-blue-600";
  }
};

const CollapsibleSection = ({
  title,
  content,
  isExpanded,
  onToggle,
  darkMode,
  colorScheme,
}) => (
  <div className="group">
    <button
      onClick={onToggle}
      className={`w-full flex justify-between items-center focus:outline-none p-3 rounded-lg transition-all ${
        isExpanded
          ? `${colorScheme.bg} ${colorScheme.border} border`
          : "hover:bg-opacity-10 hover:bg-gray-500"
      }`}
      aria-expanded={isExpanded}
    >
      <div className="flex items-center">
        <span className={`mr-3 text-lg ${colorScheme.icon}`}>
          {isExpanded ? "▼" : "►"}
        </span>
        <h3 className={`font-bold text-lg ${colorScheme.text}`}>{title}</h3>
      </div>
      <span className={`transition-transform duration-200 ${colorScheme.icon}`}>
        <ChevronDown size={20} className={isExpanded ? "rotate-180" : ""} />
      </span>
    </button>

    {isExpanded && (
      <div
        className={`p-4 sm:p-6 rounded-lg border mt-1 transition-all duration-200 ${colorScheme.bg} ${colorScheme.border} animate-fadeIn`}
      >
        <div
          className={`${colorScheme.text} font-medium leading-relaxed space-y-3`}
        >
          {typeof content === "string" ? (
            <div className="prose prose-sm max-w-none">
              {content.split("\n").map((paragraph, i) => (
                <p key={i} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : Array.isArray(content) ? (
            <ul className="space-y-2 list-disc pl-5 marker:text-opacity-60">
              {content.map((item, i) => (
                <li key={i} className="pl-2">
                  {item.includes(":") ? (
                    <>
                      <span className="font-semibold">
                        {item.split(":")[0]}:
                      </span>
                      {item.split(":").slice(1).join(":")}
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      </div>
    )}
  </div>
);

const ToggleCodeButton = ({ language, isVisible, onClick, darkMode }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center bg-gradient-to-br ${
      darkMode
        ? language === "cpp"
          ? "from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600"
          : language === "java"
          ? "from-red-900 to-red-700 hover:from-red-800 hover:to-red-600"
          : "from-yellow-800 to-yellow-600 hover:from-yellow-700 hover:to-yellow-500"
        : language === "cpp"
        ? "from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700"
        : language === "java"
        ? "from-red-600 to-red-800 hover:from-red-500 hover:to-red-700"
        : "from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600"
    } text-white font-medium px-4 py-1.5 rounded-lg transition-all transform hover:scale-[1.05] focus:outline-none focus:ring-2 ${
      language === "cpp"
        ? "focus:ring-blue-400"
        : language === "java"
        ? "focus:ring-red-400"
        : "focus:ring-yellow-400"
    } ${
      darkMode ? "focus:ring-offset-gray-900" : "focus:ring-offset-white"
    } shadow-md ${
      darkMode ? "shadow-gray-800/50" : "shadow-gray-500/40"
    } border ${darkMode ? "border-gray-700/50" : "border-gray-400/50"}`}
    aria-expanded={isVisible}
    aria-controls={`${language}-code`}
  >
    <LanguageLogo
      language={language}
      size={18}
      darkMode={darkMode}
      className="mr-2"
    />
    {language === "cpp" ? "C++" : language === "java" ? "Java" : "Python"}
  </button>
);
function Narray5() {
  const { darkMode } = useTheme();
  const [visibleCode, setVisibleCode] = useState({
    index: null,
    language: null,
  });
  const [expandedSections, setExpandedSections] = useState({});

  const toggleCodeVisibility = (language, index) => {
    setVisibleCode((prev) => {
      // If clicking the same code that's already open, close it
      if (prev.index === index && prev.language === language) {
        return { index: null, language: null };
      }
      // Otherwise open the new code
      return { index, language };
    });
  };

  const toggleDetails = (index, section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [`${index}-${section}`]: !prev[`${index}-${section}`],
    }));
  };

  const codeExamples = [
    {
      title: "Maximum Points You Can Obtain from Cards",
      description:
        "Select k cards from either end of the array to maximize points.",
      approach: [
        "1. Calculate total sum of first k cards",
        "2. Slide window from left to right",
        "3. Track maximum sum by swapping one card from each end",
      ],
      algorithmCharacteristics: [
        "Sliding Window Technique: Efficiently calculates possible sums",
        "Single Pass: Processes array in optimal time",
        "Constant Space: Uses only a few variables",
      ],
      complexityDetails: {
        time: "O(k)",
        space: "O(1)",
        explanation: "Performs exactly k operations with constant space usage",
      },
      cppcode: `int maxScore(vector<int>& cardPoints, int k) {
      int leftSum = accumulate(cardPoints.begin(), cardPoints.begin() + k, 0);
      int maxSum = leftSum;
      int rightSum = 0;
      
      for (int i = 0; i < k; i++) {
          rightSum += cardPoints[cardPoints.size() - 1 - i];
          leftSum -= cardPoints[k - 1 - i];
          maxSum = max(maxSum, leftSum + rightSum);
      }
      
      return maxSum;
  }`,
      javacode: `public int maxScore(int[] cardPoints, int k) {
      int leftSum = 0;
      for (int i = 0; i < k; i++) {
          leftSum += cardPoints[i];
      }
      
      int maxSum = leftSum;
      int rightSum = 0;
      
      for (int i = 0; i < k; i++) {
          rightSum += cardPoints[cardPoints.length - 1 - i];
          leftSum -= cardPoints[k - 1 - i];
          maxSum = Math.max(maxSum, leftSum + rightSum);
      }
      
      return maxSum;
  }`,
      pythoncode: `def maxScore(cardPoints, k):
      left_sum = sum(cardPoints[:k])
      max_sum = left_sum
      right_sum = 0
      
      for i in range(k):
          right_sum += cardPoints[~i]
          left_sum -= cardPoints[k - 1 - i]
          max_sum = max(max_sum, left_sum + right_sum)
      
      return max_sum`,
      language: "javascript",
      complexity: "Time Complexity: O(k), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
    },
    {
      title: "Grid Game",
      description:
        "Two robots collect points from grid with optimal paths to minimize second robot's score.",
      approach: [
        "1. Calculate prefix sums for both rows",
        "2. Find optimal turning point for first robot",
        "3. Minimize the maximum of remaining paths for second robot",
      ],
      algorithmCharacteristics: [
        "Prefix Sum Array: Precomputes cumulative sums for efficient range queries",
        "Optimal Path Selection: Finds turning point that minimizes opponent's maximum gain",
        "Linear Time: Processes grid in O(n) time",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation:
          "Requires two passes through the grid with prefix sum storage",
      },
      cppcode: `int gridGame(vector<vector<int>>& grid) {
      int n = grid[0].size();
      vector<long> top(n), bottom(n);
      
      // Compute prefix sums
      partial_sum(grid[0].begin(), grid[0].end(), top.begin());
      partial_sum(grid[1].begin(), grid[1].end(), bottom.begin());
      
      long res = LONG_MAX;
      
      for (int i = 0; i < n; i++) {
          long current = max(top.back() - top[i], 
                            i > 0 ? bottom[i-1] : 0);
          res = min(res, current);
      }
      
      return res;
  }`,
      javacode: `public long gridGame(int[][] grid) {
      int n = grid[0].length;
      long[] top = new long[n];
      long[] bottom = new long[n];
      
      // Compute prefix sums
      top[0] = grid[0][0];
      bottom[0] = grid[1][0];
      for (int i = 1; i < n; i++) {
          top[i] = top[i-1] + grid[0][i];
          bottom[i] = bottom[i-1] + grid[1][i];
      }
      
      long res = Long.MAX_VALUE;
      
      for (int i = 0; i < n; i++) {
          long current = Math.max(top[n-1] - top[i],
                                i > 0 ? bottom[i-1] : 0);
          res = Math.min(res, current);
      }
      
      return res;
  }`,
      pythoncode: `def gridGame(grid):
      n = len(grid[0])
      top_prefix = [0] * n
      bottom_prefix = [0] * n
      
      # Compute prefix sums
      top_prefix[0] = grid[0][0]
      bottom_prefix[0] = grid[1][0]
      for i in range(1, n):
          top_prefix[i] = top_prefix[i-1] + grid[0][i]
          bottom_prefix[i] = bottom_prefix[i-1] + grid[1][i]
      
      res = float('inf')
      
      for i in range(n):
          current = max(top_prefix[-1] - top_prefix[i],
                       bottom_prefix[i-1] if i > 0 else 0)
          res = min(res, current)
      
      return res`,
      language: "javascript",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://leetcode.com/problems/grid-game/",
    },
    {
      title: "Maximum Binary String After Change",
      description:
        "Maximize binary string by changing '00' to '10' or '10' to '01' operations.",
      approach: [
        "1. Find first occurrence of '0'",
        "2. Count subsequent '0's",
        "3. Construct optimal string by placing single '0' after leading '1's",
      ],
      algorithmCharacteristics: [
        "Single Pass: Processes string in O(n) time",
        "Greedy Construction: Builds optimal solution incrementally",
        "Constant Space: Uses only a few variables (with O(n) output space)",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation:
          "Two passes through the string (count + build) with output storage",
      },
      cppcode: `string maximumBinaryString(string binary) {
      int firstZero = -1, zeroCount = 0;
      for (int i = 0; i < binary.size(); i++) {
          if (binary[i] == '0') {
              zeroCount++;
              if (firstZero == -1) firstZero = i;
          }
      }
      
      if (zeroCount <= 1) return binary;
      
      string res(binary.size(), '1');
      res[firstZero + zeroCount - 1] = '0';
      return res;
  }`,
      javacode: `public String maximumBinaryString(String binary) {
      int firstZero = -1, zeroCount = 0;
      for (int i = 0; i < binary.length(); i++) {
          if (binary.charAt(i) == '0') {
              zeroCount++;
              if (firstZero == -1) firstZero = i;
          }
      }
      
      if (zeroCount <= 1) return binary;
      
      char[] res = new char[binary.length()];
      Arrays.fill(res, '1');
      res[firstZero + zeroCount - 1] = '0';
      return new String(res);
  }`,
      pythoncode: `def maximumBinaryString(binary):
      first_zero = -1
      zero_count = 0
      
      for i, ch in enumerate(binary):
          if ch == '0':
              zero_count += 1
              if first_zero == -1:
                  first_zero = i
      
      if zero_count <= 1:
          return binary
      
      res = ['1'] * len(binary)
      res[first_zero + zero_count - 1] = '0'
      return ''.join(res)`,
      language: "javascript",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://leetcode.com/problems/maximum-binary-string-after-change/",
    },
    {
      title: "Minimum Remove to Make Valid Parentheses",
      description:
        "Remove minimum parentheses to make string valid while preserving original order.",
      approach: [
        "1. First pass: Track balance and mark invalid ')'",
        "2. Second pass: Mark excess '(' from end",
        "3. Build result skipping marked indices",
      ],
      algorithmCharacteristics: [
        "Two-Pass Solution: Processes string in O(n) time",
        "Balance Tracking: Uses stack to validate parentheses",
        "Efficient Filtering: Constructs result in linear time",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "Two full passes with stack and set operations",
      },
      cppcode: `string minRemoveToMakeValid(string s) {
      stack<int> st;
      unordered_set<int> toRemove;
      
      for (int i = 0; i < s.size(); i++) {
          if (s[i] == '(') {
              st.push(i);
          } else if (s[i] == ')') {
              if (st.empty()) toRemove.insert(i);
              else st.pop();
          }
      }
      
      while (!st.empty()) {
          toRemove.insert(st.top());
          st.pop();
      }
      
      string res;
      for (int i = 0; i < s.size(); i++) {
          if (!toRemove.count(i)) res += s[i];
      }
      return res;
  }`,
      javacode: `public String minRemoveToMakeValid(String s) {
      Stack<Integer> stack = new Stack<>();
      Set<Integer> toRemove = new HashSet<>();
      
      for (int i = 0; i < s.length(); i++) {
          char c = s.charAt(i);
          if (c == '(') {
              stack.push(i);
          } else if (c == ')') {
              if (stack.isEmpty()) toRemove.add(i);
              else stack.pop();
          }
      }
      
      while (!stack.isEmpty()) toRemove.add(stack.pop());
      
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < s.length(); i++) {
          if (!toRemove.contains(i)) sb.append(s.charAt(i));
      }
      return sb.toString();
  }`,
      pythoncode: `def minRemoveToMakeValid(s):
      stack = []
      to_remove = set()
      
      for i, ch in enumerate(s):
          if ch == '(':
              stack.append(i)
          elif ch == ')':
              if not stack:
                  to_remove.add(i)
              else:
                  stack.pop()
      
      to_remove.update(stack)
      return ''.join(ch for i, ch in enumerate(s) if i not in to_remove)`,
      language: "javascript",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
    },
    {
      title: "Shortest Palindrome",
      description:
        "Add characters in front to make string a palindrome using minimum additions.",
      approach: [
        "1. Find longest palindromic prefix using KMP algorithm",
        "2. Reverse remaining suffix",
        "3. Prepend reversed suffix to original string",
      ],
      algorithmCharacteristics: [
        "KMP Adaptation: Uses LPS array for efficient prefix matching",
        "Linear Time: Processes string in O(n) time",
        "Pattern Matching: Identifies maximum palindrome prefix",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "Constructs LPS array in linear time with O(n) space",
      },
      cppcode: `string shortestPalindrome(string s) {
      string rev = s;
      reverse(rev.begin(), rev.end());
      string combined = s + "#" + rev;
      
      vector<int> lps(combined.size(), 0);
      for (int i = 1; i < combined.size(); i++) {
          int len = lps[i-1];
          while (len > 0 && combined[i] != combined[len])
              len = lps[len-1];
          if (combined[i] == combined[len])
              len++;
          lps[i] = len;
      }
      
      int longest = lps.back();
      return rev.substr(0, rev.size() - longest) + s;
  }`,
      javacode: `public String shortestPalindrome(String s) {
      String rev = new StringBuilder(s).reverse().toString();
      String combined = s + "#" + rev;
      
      int[] lps = new int[combined.length()];
      for (int i = 1; i < lps.length; i++) {
          int len = lps[i-1];
          while (len > 0 && combined.charAt(i) != combined.charAt(len))
              len = lps[len-1];
          if (combined.charAt(i) == combined.charAt(len))
              len++;
          lps[i] = len;
      }
      
      int longest = lps[lps.length-1];
      return rev.substring(0, rev.length() - longest) + s;
  }`,
      pythoncode: `def shortestPalindrome(s):
      rev = s[::-1]
      combined = s + '#' + rev
      lps = [0] * len(combined)
      
      for i in range(1, len(combined)):
          length = lps[i-1]
          while length > 0 and combined[i] != combined[length]:
              length = lps[length-1]
          if combined[i] == combined[length]:
              length += 1
          lps[i] = length
      
      longest = lps[-1]
      return rev[:len(s)-longest] + s`,
      language: "javascript",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://leetcode.com/problems/shortest-palindrome/",
    },
    // Continuing with the remaining 5 problems...
    {
      title: "Search a 2D Matrix II",
      description: "Search target in matrix sorted row-wise and column-wise.",
      approach: [
        "1. Start from top-right corner",
        "2. Move left if current > target",
        "3. Move down if current < target",
      ],
      algorithmCharacteristics: [
        "Staircase Search: Efficiently eliminates rows/columns",
        "Optimal Path: Finds target in O(m+n) time",
        "Matrix Properties: Leverages sorted order in both dimensions",
      ],
      complexityDetails: {
        time: "O(m + n)",
        space: "O(1)",
        explanation: "Eliminates one row or column per iteration",
      },
      cppcode: `bool searchMatrix(vector<vector<int>>& matrix, int target) {
      if (matrix.empty() || matrix[0].empty()) return false;
      
      int row = 0, col = matrix[0].size() - 1;
      while (row < matrix.size() && col >= 0) {
          if (matrix[row][col] == target) return true;
          if (matrix[row][col] > target) col--;
          else row++;
      }
      return false;
  }`,
      javacode: `public boolean searchMatrix(int[][] matrix, int target) {
      if (matrix == null || matrix.length == 0 || matrix[0].length == 0) 
          return false;
      
      int row = 0, col = matrix[0].length - 1;
      while (row < matrix.length && col >= 0) {
          if (matrix[row][col] == target) return true;
          if (matrix[row][col] > target) col--;
          else row++;
      }
      return false;
  }`,
      pythoncode: `def searchMatrix(matrix, target):
      if not matrix or not matrix[0]:
          return False
      
      row, col = 0, len(matrix[0]) - 1
      while row < len(matrix) and col >= 0:
          if matrix[row][col] == target:
              return True
          if matrix[row][col] > target:
              col -= 1
          else:
              row += 1
      return False`,
      language: "javascript",
      complexity: "Time Complexity: O(m + n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    },
    // Remaining problems follow the same pattern...
    {
      title: "Split Array Largest Sum",
      description:
        "Split array into m subarrays to minimize largest sum among them.",
      approach: [
        "1. Binary search possible sums between max and total",
        "2. Check if array can be split with current sum",
        "3. Adjust search range based on feasibility",
      ],
      algorithmCharacteristics: [
        "Binary Search on Answer: Efficiently narrows search space",
        "Greedy Validation: Checks split feasibility in O(n) time",
        "Optimal Partitioning: Finds minimal maximum sum",
      ],
      complexityDetails: {
        time: "O(n log s)",
        space: "O(1)",
        explanation: "Where s is the sum range, log s binary search steps",
      },
      cppcode: `int splitArray(vector<int>& nums, int m) {
      int left = *max_element(nums.begin(), nums.end());
      int right = accumulate(nums.begin(), nums.end(), 0);
      
      while (left < right) {
          int mid = left + (right - left) / 2;
          if (canSplit(nums, m, mid)) right = mid;
          else left = mid + 1;
      }
      return left;
  }
  
  bool canSplit(vector<int>& nums, int m, int maxSum) {
      int sum = 0, count = 1;
      for (int num : nums) {
          sum += num;
          if (sum > maxSum) {
              sum = num;
              count++;
              if (count > m) return false;
          }
      }
      return true;
  }`,
      javacode: `public int splitArray(int[] nums, int m) {
      int left = Arrays.stream(nums).max().getAsInt();
      int right = Arrays.stream(nums).sum();
      
      while (left < right) {
          int mid = left + (right - left) / 2;
          if (canSplit(nums, m, mid)) right = mid;
          else left = mid + 1;
      }
      return left;
  }
  
  private boolean canSplit(int[] nums, int m, int maxSum) {
      int sum = 0, count = 1;
      for (int num : nums) {
          sum += num;
          if (sum > maxSum) {
              sum = num;
              count++;
              if (count > m) return false;
          }
      }
      return true;
  }`,
      pythoncode: `def splitArray(nums, m):
      left, right = max(nums), sum(nums)
      
      while left < right:
          mid = (left + right) // 2
          if can_split(nums, m, mid):
              right = mid
          else:
              left = mid + 1
      return left
  
  def can_split(nums, m, max_sum):
      current_sum, count = 0, 1
      for num in nums:
          current_sum += num
          if current_sum > max_sum:
              current_sum = num
              count += 1
              if count > m:
                  return False
      return True`,
      language: "javascript",
      complexity: "Time Complexity: O(n log s), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/split-array-largest-sum/",
    },
    {
      title: "Path With Minimum Effort",
      description:
        "Find path from top-left to bottom-right with minimum maximum effort between adjacent cells.",
      approach: [
        "1. Binary search possible effort values between 0 and max difference",
        "2. Use BFS/DFS to check path existence for current effort",
        "3. Adjust search range based on path feasibility",
      ],
      algorithmCharacteristics: [
        "Binary Search + BFS: Combines efficient search with path validation",
        "Effort Optimization: Minimizes the maximum effort in path",
        "Grid Traversal: Explores all possible directions at each cell",
      ],
      complexityDetails: {
        time: "O(mn log H)",
        space: "O(mn)",
        explanation:
          "Where H is max height difference, log H binary search steps with BFS for each",
      },
      cppcode: `int minimumEffortPath(vector<vector<int>>& heights) {
      int left = 0, right = 0;
      int rows = heights.size(), cols = heights[0].size();
      
      // Find max possible effort
      for (int i = 0; i < rows; i++) {
          for (int j = 0; j < cols; j++) {
              if (i > 0) right = max(right, abs(heights[i][j] - heights[i-1][j]));
              if (j > 0) right = max(right, abs(heights[i][j] - heights[i][j-1]));
          }
      }
      
      while (left < right) {
          int mid = left + (right - left) / 2;
          if (canReachEnd(heights, mid)) {
              right = mid;
          } else {
              left = mid + 1;
          }
      }
      return left;
  }
  
  bool canReachEnd(vector<vector<int>>& heights, int maxEffort) {
      int rows = heights.size(), cols = heights[0].size();
      vector<vector<bool>> visited(rows, vector<bool>(cols, false));
      queue<pair<int, int>> q;
      vector<vector<int>> dirs = {{0,1}, {1,0}, {0,-1}, {-1,0}};
      
      q.push({0,0});
      visited[0][0] = true;
      
      while (!q.empty()) {
          auto [i,j] = q.front(); q.pop();
          if (i == rows-1 && j == cols-1) return true;
          
          for (auto& dir : dirs) {
              int ni = i + dir[0], nj = j + dir[1];
              if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && !visited[ni][nj]) {
                  if (abs(heights[ni][nj] - heights[i][j]) <= maxEffort) {
                      visited[ni][nj] = true;
                      q.push({ni,nj});
                  }
              }
          }
      }
      return false;
  }`,
      javacode: `public int minimumEffortPath(int[][] heights) {
      int left = 0, right = 0;
      int rows = heights.length, cols = heights[0].length;
      
      // Find max possible effort
      for (int i = 0; i < rows; i++) {
          for (int j = 0; j < cols; j++) {
              if (i > 0) right = Math.max(right, Math.abs(heights[i][j] - heights[i-1][j]));
              if (j > 0) right = Math.max(right, Math.abs(heights[i][j] - heights[i][j-1]));
          }
      }
      
      while (left < right) {
          int mid = left + (right - left) / 2;
          if (canReachEnd(heights, mid)) {
              right = mid;
          } else {
              left = mid + 1;
          }
      }
      return left;
  }
  
  private boolean canReachEnd(int[][] heights, int maxEffort) {
      int rows = heights.length, cols = heights[0].length;
      boolean[][] visited = new boolean[rows][cols];
      Queue<int[]> q = new LinkedList<>();
      int[][] dirs = {{0,1}, {1,0}, {0,-1}, {-1,0}};
      
      q.offer(new int[]{0,0});
      visited[0][0] = true;
      
      while (!q.isEmpty()) {
          int[] curr = q.poll();
          int i = curr[0], j = curr[1];
          if (i == rows-1 && j == cols-1) return true;
          
          for (int[] dir : dirs) {
              int ni = i + dir[0], nj = j + dir[1];
              if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && !visited[ni][nj]) {
                  if (Math.abs(heights[ni][nj] - heights[i][j]) <= maxEffort) {
                      visited[ni][nj] = true;
                      q.offer(new int[]{ni,nj});
                  }
              }
          }
      }
      return false;
  }`,
      pythoncode: `def minimumEffortPath(heights):
      left, right = 0, 0
      rows, cols = len(heights), len(heights[0])
      
      # Find max possible effort
      for i in range(rows):
          for j in range(cols):
              if i > 0:
                  right = max(right, abs(heights[i][j] - heights[i-1][j]))
              if j > 0:
                  right = max(right, abs(heights[i][j] - heights[i][j-1]))
      
      while left < right:
          mid = (left + right) // 2
          if can_reach_end(heights, mid):
              right = mid
          else:
              left = mid + 1
      return left
  
  def can_reach_end(heights, max_effort):
      rows, cols = len(heights), len(heights[0])
      visited = [[False]*cols for _ in range(rows)]
      q = collections.deque([(0,0)])
      visited[0][0] = True
      dirs = [(0,1),(1,0),(0,-1),(-1,0)]
      
      while q:
          i, j = q.popleft()
          if i == rows-1 and j == cols-1:
              return True
          for di, dj in dirs:
              ni, nj = i + di, j + dj
              if 0 <= ni < rows and 0 <= nj < cols and not visited[ni][nj]:
                  if abs(heights[ni][nj] - heights[i][j]) <= max_effort:
                      visited[ni][nj] = True
                      q.append((ni,nj))
      return False`,
      language: "javascript",
      complexity: "Time Complexity: O(mn log H), Space Complexity: O(mn)",
      link: "https://leetcode.com/problems/path-with-minimum-effort/",
    },
    {
      title: "Longest Increasing Path in a Matrix",
      description:
        "Find longest strictly increasing path in matrix moving adjacent.",
      approach: [
        "1. DFS with memoization to cache results for each cell",
        "2. Explore all four directions from each cell",
        "3. Return maximum path length found",
      ],
      algorithmCharacteristics: [
        "Memoization: Stores computed results to avoid recomputation",
        "Depth-First Search: Explores all possible paths",
        "Dynamic Programming: Optimal substructure property",
      ],
      complexityDetails: {
        time: "O(mn)",
        space: "O(mn)",
        explanation: "Each cell is processed once due to memoization",
      },
      cppcode: `int longestIncreasingPath(vector<vector<int>>& matrix) {
      if (matrix.empty() || matrix[0].empty()) return 0;
      int rows = matrix.size(), cols = matrix[0].size();
      vector<vector<int>> memo(rows, vector<int>(cols, 0));
      int maxLen = 0;
      vector<vector<int>> dirs = {{0,1},{1,0},{0,-1},{-1,0}};
      
      for (int i = 0; i < rows; i++) {
          for (int j = 0; j < cols; j++) {
              maxLen = max(maxLen, dfs(matrix, i, j, memo, dirs));
          }
      }
      return maxLen;
  }
  
  int dfs(vector<vector<int>>& matrix, int i, int j, 
          vector<vector<int>>& memo, vector<vector<int>>& dirs) {
      if (memo[i][j] != 0) return memo[i][j];
      
      int maxPath = 1;
      for (auto& dir : dirs) {
          int ni = i + dir[0], nj = j + dir[1];
          if (ni >= 0 && ni < matrix.size() && nj >= 0 && nj < matrix[0].size()) {
              if (matrix[ni][nj] > matrix[i][j]) {
                  maxPath = max(maxPath, 1 + dfs(matrix, ni, nj, memo, dirs));
              }
          }
      }
      memo[i][j] = maxPath;
      return maxPath;
  }`,
      javacode: `public int longestIncreasingPath(int[][] matrix) {
      if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return 0;
      int rows = matrix.length, cols = matrix[0].length;
      int[][] memo = new int[rows][cols];
      int maxLen = 0;
      int[][] dirs = {{0,1},{1,0},{0,-1},{-1,0}};
      
      for (int i = 0; i < rows; i++) {
          for (int j = 0; j < cols; j++) {
              maxLen = Math.max(maxLen, dfs(matrix, i, j, memo, dirs));
          }
      }
      return maxLen;
  }
  
  private int dfs(int[][] matrix, int i, int j, int[][] memo, int[][] dirs) {
      if (memo[i][j] != 0) return memo[i][j];
      
      int maxPath = 1;
      for (int[] dir : dirs) {
          int ni = i + dir[0], nj = j + dir[1];
          if (ni >= 0 && ni < matrix.length && nj >= 0 && nj < matrix[0].length) {
              if (matrix[ni][nj] > matrix[i][j]) {
                  maxPath = Math.max(maxPath, 1 + dfs(matrix, ni, nj, memo, dirs));
              }
          }
      }
      memo[i][j] = maxPath;
      return maxPath;
  }`,
      pythoncode: `def longestIncreasingPath(matrix):
      if not matrix or not matrix[0]:
          return 0
      
      rows, cols = len(matrix), len(matrix[0])
      memo = [[0]*cols for _ in range(rows)]
      dirs = [(0,1),(1,0),(0,-1),(-1,0)]
      max_len = 0
      
      def dfs(i, j):
          if memo[i][j] != 0:
              return memo[i][j]
          
          max_path = 1
          for di, dj in dirs:
              ni, nj = i + di, j + dj
              if 0 <= ni < rows and 0 <= nj < cols:
                  if matrix[ni][nj] > matrix[i][j]:
                      max_path = max(max_path, 1 + dfs(ni, nj))
          memo[i][j] = max_path
          return max_path
      
      for i in range(rows):
          for j in range(cols):
              max_len = max(max_len, dfs(i, j))
      return max_len`,
      language: "javascript",
      complexity: "Time Complexity: O(mn), Space Complexity: O(mn)",
      link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
    },
    {
      title: "Bricks Falling When Hit",
      description: "Determine how many bricks fall after each hit in a grid.",
      approach: [
        "1. Reverse process (add hits back in reverse order)",
        "2. Use Union-Find with virtual roof node",
        "3. Count connected components after each addition",
      ],
      algorithmCharacteristics: [
        "Reverse Union-Find: Processes hits in reverse for efficiency",
        "Connected Components: Tracks bricks connected to roof",
        "Incremental Updates: Efficiently maintains state after each hit",
      ],
      complexityDetails: {
        time: "O(h * α(mn))",
        space: "O(mn)",
        explanation:
          "Where h is number of hits, α is inverse Ackermann function",
      },
      cppcode: `vector<int> hitBricks(vector<vector<int>>& grid, vector<vector<int>>& hits) {
      int rows = grid.size(), cols = grid[0].size();
      vector<vector<int>> copy = grid;
      
      // Mark hits
      for (auto& hit : hits) {
          copy[hit[0]][hit[1]] = 0;
      }
      
      // Initialize DSU with virtual roof (size = rows*cols + 1)
      vector<int> parent(rows*cols + 1);
      vector<int> size(rows*cols + 1, 1);
      iota(parent.begin(), parent.end(), 0);
      int roof = rows * cols;
      
      // Connect top row to roof
      for (int j = 0; j < cols; j++) {
          if (copy[0][j] == 1) {
              unionSets(j, roof, parent, size);
          }
      }
      
      // Connect remaining cells
      vector<vector<int>> dirs = {{0,1},{1,0},{0,-1},{-1,0}};
      for (int i = 1; i < rows; i++) {
          for (int j = 0; j < cols; j++) {
              if (copy[i][j] == 1) {
                  if (copy[i-1][j] == 1) {
                      unionSets(i*cols + j, (i-1)*cols + j, parent, size);
                  }
                  if (j > 0 && copy[i][j-1] == 1) {
                      unionSets(i*cols + j, i*cols + j-1, parent, size);
                  }
              }
          }
      }
      
      // Process hits in reverse
      vector<int> result(hits.size(), 0);
      for (int k = hits.size()-1; k >= 0; k--) {
          int i = hits[k][0], j = hits[k][1];
          if (grid[i][j] == 0) continue;
          
          int pos = i * cols + j;
          int before = size[find(roof, parent)];
          
          // Reconnect if top row
          if (i == 0) {
              unionSets(j, roof, parent, size);
          }
          
          // Check neighbors
          for (auto& dir : dirs) {
              int ni = i + dir[0], nj = j + dir[1];
              if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && copy[ni][nj] == 1) {
                  unionSets(pos, ni*cols + nj, parent, size);
              }
          }
          
          copy[i][j] = 1;
          int after = size[find(roof, parent)];
          result[k] = max(0, after - before - 1);
      }
      return result;
  }
  
  int find(int x, vector<int>& parent) {
      if (parent[x] != x) {
          parent[x] = find(parent[x], parent);
      }
      return parent[x];
  }
  
  void unionSets(int x, int y, vector<int>& parent, vector<int>& size) {
      int rootX = find(x, parent);
      int rootY = find(y, parent);
      if (rootX != rootY) {
          if (size[rootX] < size[rootY]) {
              swap(rootX, rootY);
          }
          parent[rootY] = rootX;
          size[rootX] += size[rootY];
      }
  }`,
      javacode: `public int[] hitBricks(int[][] grid, int[][] hits) {
      int rows = grid.length, cols = grid[0].length;
      int[][] copy = new int[rows][cols];
      for (int i = 0; i < rows; i++) {
          copy[i] = grid[i].clone();
      }
      
      // Mark hits
      for (int[] hit : hits) {
          copy[hit[0]][hit[1]] = 0;
      }
      
      // Initialize DSU
      int size = rows * cols + 1;
      int[] parent = new int[size];
      int[] rank = new int[size];
      for (int i = 0; i < size; i++) {
          parent[i] = i;
          rank[i] = 1;
      }
      int roof = rows * cols;
      
      // Connect top row to roof
      for (int j = 0; j < cols; j++) {
          if (copy[0][j] == 1) {
              union(j, roof, parent, rank);
          }
      }
      
      // Connect remaining cells
      int[][] dirs = {{0,1},{1,0},{0,-1},{-1,0}};
      for (int i = 1; i < rows; i++) {
          for (int j = 0; j < cols; j++) {
              if (copy[i][j] == 1) {
                  if (copy[i-1][j] == 1) {
                      union(i*cols + j, (i-1)*cols + j, parent, rank);
                  }
                  if (j > 0 && copy[i][j-1] == 1) {
                      union(i*cols + j, i*cols + j-1, parent, rank);
                  }
              }
          }
      }
      
      // Process hits in reverse
      int[] result = new int[hits.length];
      for (int k = hits.length-1; k >= 0; k--) {
          int i = hits[k][0], j = hits[k][1];
          if (grid[i][j] == 0) continue;
          
          int pos = i * cols + j;
          int before = rank[find(roof, parent)];
          
          // Reconnect if top row
          if (i == 0) {
              union(j, roof, parent, rank);
          }
          
          // Check neighbors
          for (int[] dir : dirs) {
              int ni = i + dir[0], nj = j + dir[1];
              if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && copy[ni][nj] == 1) {
                  union(pos, ni*cols + nj, parent, rank);
              }
          }
          
          copy[i][j] = 1;
          int after = rank[find(roof, parent)];
          result[k] = Math.max(0, after - before - 1);
      }
      return result;
  }
  
  private int find(int x, int[] parent) {
      if (parent[x] != x) {
          parent[x] = find(parent[x], parent);
      }
      return parent[x];
  }
  
  private void union(int x, int y, int[] parent, int[] rank) {
      int rootX = find(x, parent);
      int rootY = find(y, parent);
      if (rootX != rootY) {
          if (rank[rootX] < rank[rootY]) {
              int temp = rootX;
              rootX = rootY;
              rootY = temp;
          }
          parent[rootY] = rootX;
          rank[rootX] += rank[rootY];
      }
  }`,
      pythoncode: `def hitBricks(grid, hits):
      rows, cols = len(grid), len(grid[0])
      copy = [row[:] for row in grid]
      
      # Mark hits
      for i, j in hits:
          copy[i][j] = 0
      
      # Initialize DSU
      parent = [i for i in range(rows*cols + 1)]
      size = [1]*(rows*cols + 1)
      roof = rows * cols
      
      def find(x):
          while parent[x] != x:
              parent[x] = parent[parent[x]]
              x = parent[x]
          return x
      
      def union(x, y):
          rootX, rootY = find(x), find(y)
          if rootX != rootY:
              if size[rootX] < size[rootY]:
                  rootX, rootY = rootY, rootX
              parent[rootY] = rootX
              size[rootX] += size[rootY]
      
      # Connect top row to roof
      for j in range(cols):
          if copy[0][j] == 1:
              union(j, roof)
      
      # Connect remaining cells
      dirs = [(0,1),(1,0),(0,-1),(-1,0)]
      for i in range(1, rows):
          for j in range(cols):
              if copy[i][j] == 1:
                  if copy[i-1][j] == 1:
                      union(i*cols + j, (i-1)*cols + j)
                  if j > 0 and copy[i][j-1] == 1:
                      union(i*cols + j, i*cols + j-1)
      
      # Process hits in reverse
      result = [0]*len(hits)
      for k in range(len(hits)-1, -1, -1):
          i, j = hits[k]
          if grid[i][j] == 0:
              continue
          
          pos = i * cols + j
          before = size[find(roof)]
          
          # Reconnect if top row
          if i == 0:
              union(j, roof)
          
          # Check neighbors
          for di, dj in dirs:
              ni, nj = i + di, j + dj
              if 0 <= ni < rows and 0 <= nj < cols and copy[ni][nj] == 1:
                  union(pos, ni*cols + nj)
          
          copy[i][j] = 1
          after = size[find(roof)]
          result[k] = max(0, after - before - 1)
      
      return result`,
      language: "javascript",
      complexity: "Time Complexity: O(h * α(mn)), Space Complexity: O(mn)",
      link: "https://leetcode.com/problems/bricks-falling-when-hit/",
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-12 rounded-2xl shadow-xl max-w-7xl transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50"
      }`}
    >
      <h1
        className={`text-4xl pb-4 sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text mb-8 sm:mb-12 ${
          darkMode
            ? "bg-gradient-to-r from-indigo-300 to-purple-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-700"
        }`}
      >
        Most Asked Leetcode Questions
      </h1>

      <div className="space-y-8">
        {codeExamples.map((example, index) => (
          <article
            key={index}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800/90 border-gray-700 hover:border-gray-600"
                : "bg-white/90 border-indigo-100 hover:border-indigo-200"
            }`}
          >
            <header className="mb-6">
              <h2
                className={`text-2xl sm:text-3xl font-bold text-left mb-4 ${
                  darkMode ? "text-indigo-300" : "text-indigo-800"
                }`}
              >
                {example.title}
              </h2>

              <div
                className={`p-4 sm:p-6 rounded-lg border transition-colors ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <h3
                  className={`font-bold mb-3 text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  Description
                </h3>
                <div
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  } font-medium leading-relaxed space-y-2`}
                >
                  {formatDescription(example.description, darkMode)}
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <CollapsibleSection
                  title="Approach"
                  content={example.approach}
                  isExpanded={expandedSections[`${index}-approach`]}
                  onToggle={() => toggleDetails(index, "approach")}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-blue-900/30" : "bg-blue-50",
                    border: darkMode ? "border-blue-700" : "border-blue-200",
                    text: darkMode ? "text-blue-200" : "text-blue-800",
                    icon: darkMode ? "text-blue-300" : "text-blue-500",
                    hover: darkMode
                      ? "hover:bg-blue-900/20"
                      : "hover:bg-blue-50/70",
                  }}
                />

                <CollapsibleSection
                  title="Algorithm Characteristics"
                  content={example.algorithmCharacteristics}
                  isExpanded={expandedSections[`${index}-characteristics`]}
                  onToggle={() => toggleDetails(index, "characteristics")}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-purple-900/30" : "bg-purple-50",
                    border: darkMode
                      ? "border-purple-700"
                      : "border-purple-200",
                    text: darkMode ? "text-purple-200" : "text-purple-800",
                    icon: darkMode ? "text-purple-300" : "text-purple-500",
                    hover: darkMode
                      ? "hover:bg-purple-900/20"
                      : "hover:bg-purple-50/70",
                  }}
                />

                <CollapsibleSection
                  title="Complexity Analysis"
                  content={
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-4">
                        <div
                          className={`px-3 py-2 rounded-lg ${
                            darkMode
                              ? "bg-blue-900/30 border border-blue-800"
                              : "bg-blue-100"
                          }`}
                        >
                          <div
                            className={`text-xs font-semibold ${
                              darkMode ? "text-blue-300" : "text-blue-600"
                            }`}
                          >
                            TIME COMPLEXITY
                          </div>
                          <div
                            className={`font-bold ${
                              darkMode ? "text-blue-100" : "text-blue-800"
                            }`}
                          >
                            {example.complexityDetails.time}
                          </div>
                        </div>
                        <div
                          className={`px-3 py-2 rounded-lg ${
                            darkMode
                              ? "bg-green-900/30 border border-green-800"
                              : "bg-green-100"
                          }`}
                        >
                          <div
                            className={`text-xs font-semibold ${
                              darkMode ? "text-green-300" : "text-green-600"
                            }`}
                          >
                            SPACE COMPLEXITY
                          </div>
                          <div
                            className={`font-bold ${
                              darkMode ? "text-green-100" : "text-green-800"
                            }`}
                          >
                            {example.complexityDetails.space}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`prose prose-sm max-w-none ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <p className="font-semibold">Explanation:</p>
                        <p>{example.complexityDetails.explanation}</p>
                      </div>
                    </div>
                  }
                  isExpanded={expandedSections[`${index}-complexity`]}
                  onToggle={() => toggleDetails(index, "complexity")}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-green-900/30" : "bg-green-50",
                    border: darkMode ? "border-green-700" : "border-green-200",
                    text: darkMode ? "text-green-200" : "text-green-800",
                    icon: darkMode ? "text-green-300" : "text-green-500",
                    hover: darkMode
                      ? "hover:bg-green-900/20"
                      : "hover:bg-green-50/70",
                  }}
                />
              </div>
            </header>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={example.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center bg-gradient-to-r ${
                  darkMode
                    ? "from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600"
                    : "from-gray-600 to-gray-800 hover:from-gray-600 hover:to-gray-900"
                } text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
                  darkMode
                    ? "focus:ring-offset-gray-900"
                    : "focus:ring-offset-white"
                }`}
              >
                <img
                  src={
                    darkMode
                      ? "https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg"
                      : "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  }
                  alt="LeetCode Logo"
                  className="w-6 h-6 mr-2"
                />
                View Problem
              </a>

              <ToggleCodeButton
                language="cpp"
                isVisible={
                  visibleCode.index === index && visibleCode.language === "cpp"
                }
                onClick={() => toggleCodeVisibility("cpp", index)}
                darkMode={darkMode}
              />

              <ToggleCodeButton
                language="java"
                isVisible={
                  visibleCode.index === index && visibleCode.language === "java"
                }
                onClick={() => toggleCodeVisibility("java", index)}
                darkMode={darkMode}
              />

              <ToggleCodeButton
                language="python"
                isVisible={
                  visibleCode.index === index &&
                  visibleCode.language === "python"
                }
                onClick={() => toggleCodeVisibility("python", index)}
                darkMode={darkMode}
              />
            </div>

            <div className="space-y-4">
              <CodeExample
                example={example}
                isVisible={
                  visibleCode.index === index && visibleCode.language === "cpp"
                }
                language="cpp"
                code={example.cppcode}
                darkMode={darkMode}
              />

              <CodeExample
                example={example}
                isVisible={
                  visibleCode.index === index && visibleCode.language === "java"
                }
                language="java"
                code={example.javacode}
                darkMode={darkMode}
              />

              <CodeExample
                example={example}
                isVisible={
                  visibleCode.index === index &&
                  visibleCode.language === "python"
                }
                language="python"
                code={example.pythoncode}
                darkMode={darkMode}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Narray5;
