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

function Narray3() {
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
      title: "Binary Search",
      description: "Standard implementation to find a target in a sorted array.",
      approach: [
        "1. Initialize left and right pointers",
        "2. Calculate mid index",
        "3. Compare mid element with target",
        "4. Adjust search range based on comparison"
      ],
      algorithmCharacteristics: [
        "Divide and Conquer: Halves search space each iteration",
        "Efficient: Logarithmic time complexity",
        "Requirement: Input must be sorted",
        "Deterministic: Always finds target if present"
      ],
      complexityDetails: {
        time: "O(log n)",
        space: "O(1)",
        explanation: "Halves the search space in each iteration"
      },
      cppcode: `int binarySearch(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
      javacode: `public int binarySearch(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
      pythoncode: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
      jscode: `function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/binary-search/"
    },
    {
      title: "Search Insert Position",
      description: "Find the index where target should be inserted to maintain order.",
      approach: [
        "1. Perform standard binary search",
        "2. Return left pointer if target not found",
        "3. Left pointer indicates proper insertion position"
      ],
      algorithmCharacteristics: [
        "Adaptation: Modified binary search",
        "Insertion Point: Returns where element should be",
        "Edge Cases: Handles empty array and boundaries",
        "Efficient: Same complexity as binary search"
      ],
      complexityDetails: {
        time: "O(log n)",
        space: "O(1)",
        explanation: "Same as binary search with slight modification"
      },
      cppcode: `int searchInsert(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}`,
      javacode: `public int searchInsert(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}`,
      pythoncode: `def search_insert(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return left`,
      jscode: `function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/search-insert-position/"
    },
    {
      title: "Count Occurrences in Sorted Array",
      description: "Count frequency of target in sorted array with duplicates.",
      approach: [
        "1. Find first occurrence of target",
        "2. Find last occurrence of target",
        "3. Calculate count as last - first + 1"
      ],
      algorithmCharacteristics: [
        "Two-Pass: Requires two binary searches",
        "Boundary Finding: Locates start and end indices",
        "Efficient: Still logarithmic time",
        "Duplicate Handling: Works with multiple occurrences"
      ],
      complexityDetails: {
        time: "O(log n)",
        space: "O(1)",
        explanation: "Two binary searches still maintain logarithmic complexity"
      },
      cppcode: `int countOccurrences(vector<int>& nums, int target) {
    auto first = lower_bound(nums.begin(), nums.end(), target);
    auto last = upper_bound(nums.begin(), nums.end(), target);
    return last - first;
}`,
      javacode: `public int countOccurrences(int[] nums, int target) {
    int first = findFirst(nums, target);
    if (first == -1) return 0;
    int last = findLast(nums, target);
    return last - first + 1;
}

private int findFirst(int[] nums, int target) {
    int left = 0, right = nums.length - 1, res = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] >= target) {
            if (nums[mid] == target) res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return res;
}

private int findLast(int[] nums, int target) {
    int left = 0, right = nums.length - 1, res = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] <= target) {
            if (nums[mid] == target) res = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res;
}`,
      pythoncode: `def count_occurrences(nums, target):
    def find_first():
        left, right, res = 0, len(nums) - 1, -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] >= target:
                if nums[mid] == target: res = mid
                right = mid - 1
            else:
                left = mid + 1
        return res
    
    def find_last():
        left, right, res = 0, len(nums) - 1, -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] <= target:
                if nums[mid] == target: res = mid
                left = mid + 1
            else:
                right = mid - 1
        return res
    
    first = find_first()
    return 0 if first == -1 else find_last() - first + 1`,
      jscode: `function countOccurrences(nums, target) {
    function findFirst() {
        let left = 0, right = nums.length - 1, res = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                if (nums[mid] === target) res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }

    function findLast() {
        let left = 0, right = nums.length - 1, res = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                if (nums[mid] === target) res = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }

    const first = findFirst();
    return first === -1 ? 0 : findLast() - first + 1;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
    },
    {
      title: "Search in Rotated Sorted Array",
      description: "Search target in array that was sorted then rotated.",
      approach: [
        "1. Identify which half is properly sorted",
        "2. Check if target lies within the sorted half",
        "3. If not, search the other half",
        "4. Handle rotation point logic"
      ],
      algorithmCharacteristics: [
        "Rotation Handling: Adapts to pivot point",
        "Partial Sorting: Works with one sorted half",
        "Efficient: Maintains logarithmic complexity",
        "Boundary Awareness: Carefully checks ranges"
      ],
      complexityDetails: {
        time: "O(log n)",
        space: "O(1)",
        explanation: "Still halves search space despite rotation"
      },
      cppcode: `int searchRotated(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}`,
      javacode: `public int searchRotated(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}`,
      pythoncode: `def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`,
      jscode: `function searchRotated(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    },
    // Remaining problems would continue in this format...
    {
      title: "Find Peak Element",
      description: "Find any peak element where neighbors are smaller.",
      approach: [
        "1. Compare mid element with its right neighbor",
        "2. If increasing, peak must be on right",
        "3. If decreasing, peak must be on left",
        "4. Converge to a peak element"
      ],
      algorithmCharacteristics: [
        "Local Peak: Finds any peak, not necessarily global",
        "Efficient: Logarithmic time complexity",
        "Boundary Handling: Works with array edges",
        "Comparison-Based: Only needs element comparisons"
      ],
      complexityDetails: {
        time: "O(log n)",
        space: "O(1)",
        explanation: "Halves search space by comparing neighbors"
      },
      cppcode: `int findPeakElement(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}`,
      javacode: `public int findPeakElement(int[] nums) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}`,
      pythoncode: `def find_peak_element(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] < nums[mid + 1]:
            left = mid + 1
        else:
            right = mid
    return left`,
      jscode: `function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/find-peak-element/"
    },
    {
      title: "Search in Rotated Sorted Array II",
      description: "Search in rotated array that may contain duplicates.",
      approach: [
        "1. Handle duplicates by incrementing left/decrementing right when nums[left] == nums[mid] == nums[right]",
        "2. Check which half is properly sorted",
        "3. Determine if target is in the sorted half",
        "4. Otherwise search the other half"
      ],
      algorithmCharacteristics: [
        "Duplicate Handling: Special case for triple equal elements",
        "Worst Case: Degrades to O(n) with many duplicates",
        "Adaptive: Still O(log n) for distinct elements",
        "Rotation Aware: Handles pivot point correctly"
      ],
      complexityDetails: {
        time: "O(log n) average, O(n) worst with many duplicates",
        space: "O(1)",
        explanation: "With many duplicates, may need to scan portions linearly"
      },
      cppcode: `bool searchRotatedWithDups(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return true;
        
        if (nums[left] == nums[mid] && nums[right] == nums[mid]) {
            left++;
            right--;
        }
        else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
}`,
      javacode: `public boolean searchRotatedWithDups(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return true;
        
        if (nums[left] == nums[mid] && nums[right] == nums[mid]) {
            left++;
            right--;
        }
        else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
}`,
      pythoncode: `def search_rotated_with_dups(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return True
        
        if nums[left] == nums[mid] == nums[right]:
            left += 1
            right -= 1
        elif nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return False`,
      jscode: `function searchRotatedWithDups(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return true;
        
        if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
            left++;
            right--;
        }
        else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log n) average, O(n) worst, Space Complexity: O(1)",
      link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"
    },
    {
      title: "Find Square Root",
      description: "Compute integer square root of a number.",
      approach: [
        "1. Binary search between 0 and x",
        "2. Compare mid*mid with x",
        "3. If mid*mid equals x, return mid",
        "4. Otherwise adjust search boundaries"
      ],
      algorithmCharacteristics: [
        "Integer Result: Returns floor of square root",
        "Early Termination: Stops when exact match found",
        "Overflow Prevention: Uses division instead of multiplication where needed",
        "Boundary Handling: Special cases for 0 and 1"
      ],
      complexityDetails: {
        time: "O(log n)",
        space: "O(1)",
        explanation: "Binary search over possible square root values"
      },
      cppcode: `int mySqrt(int x) {
    if (x < 2) return x;
    int left = 1, right = x / 2;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (mid == x / mid) return mid;
        if (mid < x / mid) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}`,
      javacode: `public int mySqrt(int x) {
    if (x < 2) return x;
    int left = 1, right = x / 2;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (mid == x / mid) return mid;
        if (mid < x / mid) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}`,
      pythoncode: `def mySqrt(x):
    if x < 2:
        return x
    left, right = 1, x // 2
    while left <= right:
        mid = (left + right) // 2
        if mid * mid == x:
            return mid
        if mid * mid < x:
            left = mid + 1
        else:
            right = mid - 1
    return right`,
      jscode: `function mySqrt(x) {
    if (x < 2) return x;
    let left = 1, right = Math.floor(x / 2);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/sqrtx/"
    },
    {
      title: "Koko Eating Bananas",
      description: "Find minimum eating speed to finish all bananas in h hours.",
      approach: [
        "1. Binary search between 1 and max(piles)",
        "2. For each speed, calculate hours needed",
        "3. Adjust search range based on whether speed is feasible",
        "4. Find the minimal valid speed"
      ],
      algorithmCharacteristics: [
        "Binary Search on Answer: Searches possible speeds",
        "Feasibility Check: Helper function calculates hours needed",
        "Optimal: Finds minimal valid solution",
        "Efficient: Avoids linear search"
      ],
      complexityDetails: {
        time: "O(n log m) where m is max pile size",
        space: "O(1)",
        explanation: "Binary search over possible speeds with linear validation"
      },
      cppcode: `int minEatingSpeed(vector<int>& piles, int h) {
    int left = 1, right = *max_element(piles.begin(), piles.end());
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canEatAll(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

bool canEatAll(vector<int>& piles, int speed, int h) {
    int hours = 0;
    for (int pile : piles) {
        hours += (pile + speed - 1) / speed;
        if (hours > h) return false;
    }
    return true;
}`,
      javacode: `public int minEatingSpeed(int[] piles, int h) {
    int left = 1, right = Arrays.stream(piles).max().getAsInt();
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canEatAll(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

private boolean canEatAll(int[] piles, int speed, int h) {
    int hours = 0;
    for (int pile : piles) {
        hours += (pile + speed - 1) / speed;
        if (hours > h) return false;
    }
    return true;
}`,
      pythoncode: `def minEatingSpeed(piles, h):
    left, right = 1, max(piles)
    while left < right:
        mid = (left + right) // 2
        if can_eat_all(piles, mid, h):
            right = mid
        else:
            left = mid + 1
    return left

def can_eat_all(piles, speed, h):
    hours = 0
    for pile in piles:
        hours += (pile + speed - 1) // speed
        if hours > h:
            return False
    return True`,
      jscode: `function minEatingSpeed(piles, h) {
    let left = 1, right = Math.max(...piles);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canEatAll(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function canEatAll(piles, speed, h) {
    let hours = 0;
    for (const pile of piles) {
        hours += Math.ceil(pile / speed);
        if (hours > h) return false;
    }
    return true;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(n log m), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/koko-eating-bananas/"
    },
    {
      title: "Bouquets on Consecutive Days",
      description: "Find minimum days to make m bouquets requiring k adjacent flowers.",
      approach: [
        "1. Binary search between min and max bloom days",
        "2. For each day, check if we can make enough bouquets",
        "3. Count consecutive flowers that have bloomed",
        "4. Adjust search range based on bouquet count"
      ],
      algorithmCharacteristics: [
        "Binary Search on Answer: Searches possible days",
        "Sliding Window: Counts consecutive bloomed flowers",
        "Feasibility Check: Validates bouquet creation",
        "Optimal: Finds earliest valid day"
      ],
      complexityDetails: {
        time: "O(n log d) where d is max bloom day",
        space: "O(1)",
        explanation: "Binary search with linear validation pass"
      },
      cppcode: `int minDays(vector<int>& bloomDay, int m, int k) {
    if (m * k > bloomDay.size()) return -1;
    
    int left = *min_element(bloomDay.begin(), bloomDay.end());
    int right = *max_element(bloomDay.begin(), bloomDay.end());
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canMakeBouquets(bloomDay, m, k, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

bool canMakeBouquets(vector<int>& bloomDay, int m, int k, int day) {
    int bouquets = 0, flowers = 0;
    for (int bloom : bloomDay) {
        flowers = bloom <= day ? flowers + 1 : 0;
        if (flowers == k) {
            bouquets++;
            flowers = 0;
            if (bouquets == m) return true;
        }
    }
    return false;
}`,
      javacode: `public int minDays(int[] bloomDay, int m, int k) {
    if (m * k > bloomDay.length) return -1;
    
    int left = Arrays.stream(bloomDay).min().getAsInt();
    int right = Arrays.stream(bloomDay).max().getAsInt();
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canMakeBouquets(bloomDay, m, k, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

private boolean canMakeBouquets(int[] bloomDay, int m, int k, int day) {
    int bouquets = 0, flowers = 0;
    for (int bloom : bloomDay) {
        flowers = bloom <= day ? flowers + 1 : 0;
        if (flowers == k) {
            bouquets++;
            flowers = 0;
            if (bouquets == m) return true;
        }
    }
    return false;
}`,
      pythoncode: `def minDays(bloomDay, m, k):
    if m * k > len(bloomDay):
        return -1
    
    left, right = min(bloomDay), max(bloomDay)
    while left < right:
        mid = (left + right) // 2
        if can_make_bouquets(bloomDay, m, k, mid):
            right = mid
        else:
            left = mid + 1
    return left

def can_make_bouquets(bloomDay, m, k, day):
    bouquets = flowers = 0
    for bloom in bloomDay:
        flowers = flowers + 1 if bloom <= day else 0
        if flowers == k:
            bouquets += 1
            flowers = 0
            if bouquets == m:
                return True
    return False`,
      jscode: `function minDays(bloomDay, m, k) {
    if (m * k > bloomDay.length) return -1;
    
    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canMakeBouquets(bloomDay, m, k, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function canMakeBouquets(bloomDay, m, k, day) {
    let bouquets = 0, flowers = 0;
    for (const bloom of bloomDay) {
        flowers = bloom <= day ? flowers + 1 : 0;
        if (flowers === k) {
            bouquets++;
            flowers = 0;
            if (bouquets === m) return true;
        }
    }
    return false;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(n log d), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/"
    },
    {
      title: "Kth Missing Positive Number",
      description: "Find the kth missing positive integer in increasing sequence.",
      approach: [
        "1. Binary search to find where missing count >= k",
        "2. Calculate missing numbers before index using nums[i] - i - 1",
        "3. Derive missing number from position and k"
      ],
      algorithmCharacteristics: [
        "Index Math: Uses index-position relationship",
        "Efficient: Logarithmic time complexity",
        "Edge Handling: Works with missing numbers at start",
        "Direct Calculation: Computes result from binary search position"
      ],
      complexityDetails: {
        time: "O(log n)",
        space: "O(1)",
        explanation: "Binary search with constant-time calculations"
      },
      cppcode: `int findKthPositive(vector<int>& arr, int k) {
    int left = 0, right = arr.size();
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] - mid - 1 < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left + k;
}`,
      javacode: `public int findKthPositive(int[] arr, int k) {
    int left = 0, right = arr.length;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] - mid - 1 < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left + k;
}`,
      pythoncode: `def findKthPositive(arr, k):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] - mid - 1 < k:
            left = mid + 1
        else:
            right = mid
    return left + k`,
      jscode: `function findKthPositive(arr, k) {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] - mid - 1 < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left + k;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/kth-missing-positive-number/"
    },
    {
      title: "Aggressive Cows",
      description: "Maximize minimum distance between cows in stalls.",
      approach: [
        "1. Sort the stall positions",
        "2. Binary search possible distances between 1 and max distance",
        "3. For each distance, check if cows can be placed",
        "4. Adjust search range based on placement feasibility"
      ],
      algorithmCharacteristics: [
        "Binary Search on Answer: Searches possible distances",
        "Greedy Placement: Places cows optimally for each distance",
        "Sorting Required: Needs sorted stall positions",
        "Optimal: Finds maximum minimum distance"
      ],
      complexityDetails: {
        time: "O(n log n) for sort + O(n log d) for search",
        space: "O(1)",
        explanation: "Sorting dominates, then binary search with linear validation"
      },
      cppcode: `int maxDistance(vector<int>& stalls, int cows) {
    sort(stalls.begin(), stalls.end());
    int left = 1, right = stalls.back() - stalls[0];
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (canPlaceCows(stalls, cows, mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

bool canPlaceCows(vector<int>& stalls, int cows, int minDist) {
    int count = 1, last = stalls[0];
    for (int i = 1; i < stalls.size(); i++) {
        if (stalls[i] - last >= minDist) {
            last = stalls[i];
            count++;
            if (count == cows) return true;
        }
    }
    return false;
}`,
      javacode: `public int maxDistance(int[] stalls, int cows) {
    Arrays.sort(stalls);
    int left = 1, right = stalls[stalls.length - 1] - stalls[0];
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (canPlaceCows(stalls, cows, mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

private boolean canPlaceCows(int[] stalls, int cows, int minDist) {
    int count = 1, last = stalls[0];
    for (int i = 1; i < stalls.length; i++) {
        if (stalls[i] - last >= minDist) {
            last = stalls[i];
            count++;
            if (count == cows) return true;
        }
    }
    return false;
}`,
      pythoncode: `def maxDistance(stalls, cows):
    stalls.sort()
    left, right = 1, stalls[-1] - stalls[0]
    
    while left <= right:
        mid = (left + right) // 2
        if can_place_cows(stalls, cows, mid):
            left = mid + 1
        else:
            right = mid - 1
    return right

def can_place_cows(stalls, cows, min_dist):
    count, last = 1, stalls[0]
    for i in range(1, len(stalls)):
        if stalls[i] - last >= min_dist:
            last = stalls[i]
            count += 1
            if count == cows:
                return True
    return False`,
      jscode: `function maxDistance(stalls, cows) {
    stalls.sort((a, b) => a - b);
    let left = 1, right = stalls[stalls.length - 1] - stalls[0];
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canPlaceCows(stalls, cows, mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

function canPlaceCows(stalls, cows, minDist) {
    let count = 1, last = stalls[0];
    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - last >= minDist) {
            last = stalls[i];
            count++;
            if (count === cows) return true;
        }
    }
    return false;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(n log n), Space Complexity: O(1)",
      link: "https://www.spoj.com/problems/AGGRCOW/"
    },
    {
      title: "Search in Row-wise and Column-wise Sorted Matrix",
      description: "Search target in matrix sorted row-wise and column-wise.",
      approach: [
        "1. Start from top-right corner",
        "2. If current element > target, move left",
        "3. If current element < target, move down",
        "4. Continue until target found or boundaries exceeded"
      ],
      algorithmCharacteristics: [
        "Staircase Search: Moves in two directions",
        "Efficient: Linear time in worst case",
        "Boundary Aware: Handles matrix edges properly",
        "No Extra Space: Works in constant space"
      ],
      complexityDetails: {
        time: "O(m + n)",
        space: "O(1)",
        explanation: "In worst case, traverses one row and one column"
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
    if (matrix.length == 0 || matrix[0].length == 0) return false;
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
      jscode: `function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        if (matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(m + n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/search-a-2d-matrix-ii/"
    },
    {
      title: "Search in Strictly Sorted 2D Matrix",
      description: "Search target in matrix where first element of row > last element of previous row.",
      approach: [
        "1. Treat matrix as 1D array using index conversion",
        "2. Binary search over the virtual 1D array",
        "3. Convert mid index to 2D coordinates (row = mid//n, col = mid%n)",
        "4. Compare element at calculated position with target"
      ],
      algorithmCharacteristics: [
        "Index Conversion: Maps 1D index to 2D coordinates",
        "Efficient: Standard binary search complexity",
        "Complete Coverage: Searches entire matrix",
        "No Extra Space: Works in constant space"
      ],
      complexityDetails: {
        time: "O(log(mn))",
        space: "O(1)",
        explanation: "Standard binary search over m*n elements"
      },
      cppcode: `bool search2DMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    int m = matrix.size(), n = matrix[0].size();
    int left = 0, right = m * n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int row = mid / n, col = mid % n;
        if (matrix[row][col] == target) return true;
        if (matrix[row][col] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}`,
      javacode: `public boolean search2DMatrix(int[][] matrix, int target) {
    if (matrix.length == 0 || matrix[0].length == 0) return false;
    int m = matrix.length, n = matrix[0].length;
    int left = 0, right = m * n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int row = mid / n, col = mid % n;
        if (matrix[row][col] == target) return true;
        if (matrix[row][col] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}`,
      pythoncode: `def search2DMatrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    m, n = len(matrix), len(matrix[0])
    left, right = 0, m * n - 1
    
    while left <= right:
        mid = (left + right) // 2
        row, col = mid // n, mid % n
        if matrix[row][col] == target:
            return True
        if matrix[row][col] < target:
            left = mid + 1
        else:
            right = mid - 1
    return False`,
      jscode: `function search2DMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    const m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / n), col = mid % n;
        if (matrix[row][col] === target) return true;
        if (matrix[row][col] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}`,
      language: "javascript",
      complexity: "Time Complexity: O(log(mn)), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/search-a-2d-matrix/"
    }
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
        Binary Search Problems with Solutions
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

export default Narray3;
