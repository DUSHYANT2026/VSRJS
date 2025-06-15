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

function Narray6() {
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
        title: "Two Sum",
        description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
        approach: [
            "1. Use a hash map to store value-index pairs",
            "2. For each element, calculate complement (target - current)",
            "3. Check if complement exists in hash map",
            "4. If found, return current index and complement's index",
            "5. If not found, store current value and index in hash map"
        ],
        algorithmCharacteristics: [
            "Single Pass: Processes array in one iteration",
            "Hash Map Lookup: Constant time complement checks",
            "General Solution: Works for both sorted and unsorted arrays"
        ],
        complexityDetails: {
            time: "O(n)",
            space: "O(n)",
            explanation: "Single iteration through array with hash map storage"
        },
        cppcode: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numMap;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (numMap.find(complement) != numMap.end()) {
            return {numMap[complement], i};
        }
        numMap[nums[i]] = i;
    }
    return {};
}`,
        javacode: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> numMap = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (numMap.containsKey(complement)) {
            return new int[]{numMap.get(complement), i};
        }
        numMap.put(nums[i], i);
    }
    return new int[0];
}`,
        pythoncode: `def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []`,
        language: "python",
        complexity: "Time Complexity: O(n), Space Complexity: O(n)",
        link: "https://leetcode.com/problems/two-sum/"
    },
    {
        title: "Maximum Subarray (Kadane's Algorithm)",
        description: "Find the contiguous subarray which has the largest sum and return its sum.",
        approach: [
            "1. Initialize current and maximum sums with first element",
            "2. Iterate through array starting from second element",
            "3. For each element, decide whether to add to current subarray or start new subarray",
            "4. Update maximum sum whenever current sum exceeds it"
        ],
        algorithmCharacteristics: [
            "Dynamic Programming: Optimal substructure property",
            "Single Pass: Processes array in one iteration",
            "Edge Cases: Handles all negative numbers"
        ],
        complexityDetails: {
            time: "O(n)",
            space: "O(1)",
            explanation: "Single iteration through array with constant space"
        },
        cppcode: `int maxSubArray(vector<int>& nums) {
    if (nums.empty()) return 0;
    
    int maxSum = nums[0], currentSum = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}`,
        javacode: `public int maxSubArray(int[] nums) {
    if (nums.length == 0) return 0;
    
    int maxSum = nums[0], currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,
        pythoncode: `def max_subarray(nums):
    if not nums:
        return 0
    
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum`,
        language: "python",
        complexity: "Time Complexity: O(n), Space Complexity: O(1)",
        link: "https://leetcode.com/problems/maximum-subarray/"
    },
    {
        title: "Subarray Sum Equals K",
        description: "Find the total number of contiguous subarrays whose sum equals to a target value K.",
        approach: [
            "1. Use prefix sum with hash map to store sum frequencies",
            "2. Initialize with sum 0 having one occurrence",
            "3. For each element, calculate running sum",
            "4. Check if (sum - K) exists in hash map",
            "5. Add count of (sum - K) to result",
            "6. Update hash map with current sum"
        ],
        algorithmCharacteristics: [
            "Prefix Sum: Efficient subarray sum calculation",
            "Hash Map: Constant time lookups for sum frequencies",
            "Negative Values: Handles negative numbers in array"
        ],
        complexityDetails: {
            time: "O(n)",
            space: "O(n)",
            explanation: "Single pass with hash map storage of sum frequencies"
        },
        cppcode: `int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> sumMap;
    sumMap[0] = 1;
    int currentSum = 0, count = 0;
    
    for (int num : nums) {
        currentSum += num;
        if (sumMap.find(currentSum - k) != sumMap.end()) {
            count += sumMap[currentSum - k];
        }
        sumMap[currentSum]++;
    }
    return count;
}`,
        javacode: `public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> sumMap = new HashMap<>();
    sumMap.put(0, 1);
    int currentSum = 0, count = 0;
    
    for (int num : nums) {
        currentSum += num;
        count += sumMap.getOrDefault(currentSum - k, 0);
        sumMap.put(currentSum, sumMap.getOrDefault(currentSum, 0) + 1);
    }
    return count;
}`,
        pythoncode: `def subarray_sum(nums, k):
    sum_map = {0: 1}
    current_sum = 0
    count = 0
    
    for num in nums:
        current_sum += num
        count += sum_map.get(current_sum - k, 0)
        sum_map[current_sum] = sum_map.get(current_sum, 0) + 1
    
    return count`,
        language: "python",
        complexity: "Time Complexity: O(n), Space Complexity: O(n)",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/"
    },
    // Continuing with the remaining 7 problems in the same format...
    {
        title: "First Missing Positive",
        description: "Find the smallest missing positive integer in an unsorted array in O(n) time and constant space.",
        approach: [
            "1. Segregate positive numbers and ignore negatives",
            "2. Use array indices as hash keys to mark presence",
            "3. First pass: place each number in its correct position",
            "4. Second pass: find first index where number doesn't match position"
        ],
        algorithmCharacteristics: [
            "In-place Hashing: Uses array indices as hash keys",
            "Two Passes: Processes array in linear time",
            "Constant Space: Modifies input array without extra storage"
        ],
        complexityDetails: {
            time: "O(n)",
            space: "O(1)",
            explanation: "Two passes through array with in-place modification"
        },
        cppcode: `int firstMissingPositive(vector<int>& nums) {
    int n = nums.size();
    
    // Place each number in its correct position
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            swap(nums[i], nums[nums[i] - 1]);
        }
    }
    
    // Find first missing positive
    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    
    return n + 1;
}`,
        javacode: `public int firstMissingPositive(int[] nums) {
    int n = nums.length;
    
    // Place each number in its correct position
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            int temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    
    // Find first missing positive
    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    
    return n + 1;
}`,
        pythoncode: `def first_missing_positive(nums):
    n = len(nums)
    
    # Place each number in its correct position
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
            nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
    
    # Find first missing positive
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    
    return n + 1`,
        language: "python",
        complexity: "Time Complexity: O(n), Space Complexity: O(1)",
        link: "https://leetcode.com/problems/first-missing-positive/"
    },
    // The remaining 6 problems would follow the same pattern...
    {
        title: "Product of Array Except Self",
        description: "Given an array nums, return an array where each element is the product of all elements except nums[i].",
        approach: [
            "1. Initialize result array with 1s",
            "2. First pass (left to right): compute product of elements to the left",
            "3. Second pass (right to left): multiply with product of elements to the right",
            "4. Avoid division operation to handle zeros"
        ],
        algorithmCharacteristics: [
            "Prefix Product: Calculates products in two directions",
            "Division-Free: Handles zeros without division",
            "Linear Time: Two passes through the array"
        ],
        complexityDetails: {
            time: "O(n)",
            space: "O(1)",
            explanation: "Two passes through array (output array doesn't count as extra space)"
        },
        cppcode: `vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);
    
    // Left pass
    int leftProduct = 1;
    for (int i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Right pass
    int rightProduct = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}`,
        javacode: `public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    
    // Left pass
    int leftProduct = 1;
    for (int i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Right pass
    int rightProduct = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}`,
        pythoncode: `def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    
    # Left pass
    left_product = 1
    for i in range(n):
        result[i] = left_product
        left_product *= nums[i]
    
    # Right pass
    right_product = 1
    for i in range(n-1, -1, -1):
        result[i] *= right_product
        right_product *= nums[i]
    
    return result`,
        language: "python",
        complexity: "Time Complexity: O(n), Space Complexity: O(1)",
        link: "https://leetcode.com/problems/product-of-array-except-self/"
    },
    {
      title: "Group Anagrams",
      description: "Given an array of strings, group anagrams together (words with same letters in different order).",
      approach: [
          "1. Use a dictionary to group anagrams",
          "2. For each word, create a key by sorting its letters",
          "3. Alternatively, use character count tuple as key",
          "4. Add word to dictionary under its key",
          "5. Return grouped values from dictionary"
      ],
      algorithmCharacteristics: [
          "Hash Map Grouping: Efficiently groups anagrams using sorted keys",
          "Character Counting: Alternative approach using frequency counts",
          "Flexible Keys: Works with both sorted strings and count tuples"
      ],
      complexityDetails: {
          time: "O(N*KlogK)",
          space: "O(N*K)",
          explanation: "Where N is number of words and K is maximum word length"
      },
      cppcode: `vector<vector<string>> groupAnagrams(vector<string>& strs) {
  unordered_map<string, vector<string>> groups;
  for (string& s : strs) {
      string key = s;
      sort(key.begin(), key.end());
      groups[key].push_back(s);
  }
  
  vector<vector<string>> result;
  for (auto& pair : groups) {
      result.push_back(pair.second);
  }
  return result;
}`,
      javacode: `public List<List<String>> groupAnagrams(String[] strs) {
  Map<String, List<String>> groups = new HashMap<>();
  for (String s : strs) {
      char[] chars = s.toCharArray();
      Arrays.sort(chars);
      String key = new String(chars);
      groups.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
  }
  return new ArrayList<>(groups.values());
}`,
      pythoncode: `def group_anagrams(strs):
  from collections import defaultdict
  groups = defaultdict(list)
  for s in strs:
      key = tuple(sorted(s))
      groups[key].append(s)
  return list(groups.values())`,
      language: "python",
      complexity: "Time Complexity: O(N*KlogK), Space Complexity: O(N*K)",
      link: "https://leetcode.com/problems/group-anagrams/"
  },
  {
      title: "Longest Palindromic Substring",
      description: "Find the longest substring which reads the same forwards and backwards in a given string.",
      approach: [
          "1. Expand around center for both odd and even length palindromes",
          "2. For each character, expand to left and right while palindrome condition holds",
          "3. Track longest palindrome found",
          "4. Handle edge cases (empty string, single character)"
      ],
      algorithmCharacteristics: [
          "Center Expansion: Checks all possible palindrome centers",
          "Odd/Even Handling: Manages both palindrome types",
          "Optimal Detection: Finds longest palindrome efficiently"
      ],
      complexityDetails: {
          time: "O(n²)",
          space: "O(1)",
          explanation: "Worst case when all characters are centers of palindromes"
      },
      cppcode: `string longestPalindrome(string s) {
  if (s.empty()) return "";
  
  int start = 0, end = 0;
  for (int i = 0; i < s.size(); i++) {
      int len1 = expandAroundCenter(s, i, i);  // Odd length
      int len2 = expandAroundCenter(s, i, i+1);  // Even length
      int len = max(len1, len2);
      if (len > end - start) {
          start = i - (len - 1) / 2;
          end = i + len / 2;
      }
  }
  return s.substr(start, end - start + 1);
}

int expandAroundCenter(string& s, int left, int right) {
  while (left >= 0 && right < s.size() && s[left] == s[right]) {
      left--;
      right++;
  }
  return right - left - 1;
}`,
      javacode: `public String longestPalindrome(String s) {
  if (s == null || s.length() < 1) return "";
  
  int start = 0, end = 0;
  for (int i = 0; i < s.length(); i++) {
      int len1 = expandAroundCenter(s, i, i);
      int len2 = expandAroundCenter(s, i, i + 1);
      int len = Math.max(len1, len2);
      if (len > end - start) {
          start = i - (len - 1) / 2;
          end = i + len / 2;
      }
  }
  return s.substring(start, end + 1);
}

private int expandAroundCenter(String s, int left, int right) {
  while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
      left--;
      right++;
  }
  return right - left - 1;
}`,
      pythoncode: `def longest_palindrome(s):
  def expand(l, r):
      while l >= 0 and r < len(s) and s[l] == s[r]:
          l -= 1
          r += 1
      return r - l - 1
  
  start = end = 0
  for i in range(len(s)):
      len1 = expand(i, i)
      len2 = expand(i, i + 1)
      max_len = max(len1, len2)
      if max_len > end - start:
          start = i - (max_len - 1) // 2
          end = i + max_len // 2
  return s[start:end+1]`,
      language: "python",
      complexity: "Time Complexity: O(n²), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/longest-palindromic-substring/"
  },
  {
      title: "Minimum Window Substring",
      description: "Find the minimum window in string S that contains all characters of string T.",
      approach: [
          "1. Use sliding window technique with two pointers",
          "2. Maintain character frequency map for T",
          "3. Expand right pointer until all characters are included",
          "4. Contract left pointer to find minimum valid window",
          "5. Track minimum window throughout process"
      ],
      algorithmCharacteristics: [
          "Sliding Window: Efficiently finds optimal substring",
          "Frequency Counting: Tracks required characters",
          "Optimal Expansion: Minimizes window size while maintaining requirements"
      ],
      complexityDetails: {
          time: "O(M+N)",
          space: "O(1)",
          explanation: "Where M and N are lengths of S and T respectively"
      },
      cppcode: `string minWindow(string s, string t) {
  unordered_map<char, int> target;
  for (char c : t) target[c]++;
  
  int left = 0, right = 0;
  int required = target.size();
  int formed = 0;
  unordered_map<char, int> window;
  int minLen = INT_MAX;
  int start = 0;
  
  while (right < s.size()) {
      char c = s[right];
      window[c]++;
      
      if (target.count(c) && window[c] == target[c]) {
          formed++;
      }
      
      while (formed == required && left <= right) {
          if (right - left + 1 < minLen) {
              minLen = right - left + 1;
              start = left;
          }
          
          char leftChar = s[left];
          window[leftChar]--;
          if (target.count(leftChar) && window[leftChar] < target[leftChar]) {
              formed--;
          }
          left++;
      }
      right++;
  }
  
  return minLen == INT_MAX ? "" : s.substr(start, minLen);
}`,
      javacode: `public String minWindow(String s, String t) {
  Map<Character, Integer> target = new HashMap<>();
  for (char c : t.toCharArray()) {
      target.put(c, target.getOrDefault(c, 0) + 1);
  }
  
  int left = 0, right = 0;
  int required = target.size();
  int formed = 0;
  Map<Character, Integer> window = new HashMap<>();
  int minLen = Integer.MAX_VALUE;
  int start = 0;
  
  while (right < s.length()) {
      char c = s.charAt(right);
      window.put(c, window.getOrDefault(c, 0) + 1);
      
      if (target.containsKey(c) && window.get(c).equals(target.get(c))) {
          formed++;
      }
      
      while (formed == required && left <= right) {
          if (right - left + 1 < minLen) {
              minLen = right - left + 1;
              start = left;
          }
          
          char leftChar = s.charAt(left);
          window.put(leftChar, window.get(leftChar) - 1);
          if (target.containsKey(leftChar) {
              if (window.get(leftChar) < target.get(leftChar)) {
                  formed--;
              }
          }
          left++;
      }
      right++;
  }
  
  return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
}`,
      pythoncode: `def min_window(s, t):
  from collections import defaultdict
  
  target = defaultdict(int)
  for c in t:
      target[c] += 1
  
  left = right = 0
  required = len(target)
  formed = 0
  window = defaultdict(int)
  min_len = float('inf')
  result = ""
  
  while right < len(s):
      c = s[right]
      window[c] += 1
      
      if c in target and window[c] == target[c]:
          formed += 1
      
      while formed == required and left <= right:
          if right - left + 1 < min_len:
              min_len = right - left + 1
              result = s[left:right+1]
          
          left_char = s[left]
          window[left_char] -= 1
          if left_char in target and window[left_char] < target[left_char]:
              formed -= 1
          left += 1
      
      right += 1
  
  return result`,
      language: "python",
      complexity: "Time Complexity: O(M+N), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
      title: "Median of Two Sorted Arrays",
      description: "Find the median of two sorted arrays in O(log(min(m,n))) time complexity.",
      approach: [
          "1. Ensure first array is smaller for binary search efficiency",
          "2. Perform binary search on the smaller array",
          "3. Partition both arrays such that left halves contain median elements",
          "4. Adjust partitions based on comparison of border elements",
          "5. Calculate median based on even/odd total length"
      ],
      algorithmCharacteristics: [
          "Binary Search: Efficiently narrows search space",
          "Partitioning: Divides arrays for median calculation",
          "Edge Handling: Manages arrays of different lengths"
      ],
      complexityDetails: {
          time: "O(log(min(m,n)))",
          space: "O(1)",
          explanation: "Binary search on the smaller array"
      },
      cppcode: `double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
  if (nums1.size() > nums2.size()) {
      return findMedianSortedArrays(nums2, nums1);
  }
  
  int m = nums1.size(), n = nums2.size();
  int left = 0, right = m;
  int total = m + n;
  
  while (left <= right) {
      int partition1 = (left + right) / 2;
      int partition2 = (total + 1) / 2 - partition1;
      
      int maxLeft1 = (partition1 == 0) ? INT_MIN : nums1[partition1 - 1];
      int minRight1 = (partition1 == m) ? INT_MAX : nums1[partition1];
      
      int maxLeft2 = (partition2 == 0) ? INT_MIN : nums2[partition2 - 1];
      int minRight2 = (partition2 == n) ? INT_MAX : nums2[partition2];
      
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
          if (total % 2 == 0) {
              return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;
          } else {
              return max(maxLeft1, maxLeft2);
          }
      } else if (maxLeft1 > minRight2) {
          right = partition1 - 1;
      } else {
          left = partition1 + 1;
      }
  }
  return 0.0;
}`,
      javacode: `public double findMedianSortedArrays(int[] nums1, int[] nums2) {
  if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1);
  }
  
  int m = nums1.length, n = nums2.length;
  int left = 0, right = m;
  int total = m + n;
  
  while (left <= right) {
      int partition1 = (left + right) / 2;
      int partition2 = (total + 1) / 2 - partition1;
      
      int maxLeft1 = (partition1 == 0) ? Integer.MIN_VALUE : nums1[partition1 - 1];
      int minRight1 = (partition1 == m) ? Integer.MAX_VALUE : nums1[partition1];
      
      int maxLeft2 = (partition2 == 0) ? Integer.MIN_VALUE : nums2[partition2 - 1];
      int minRight2 = (partition2 == n) ? Integer.MAX_VALUE : nums2[partition2];
      
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
          if (total % 2 == 0) {
              return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
          } else {
              return Math.max(maxLeft1, maxLeft2);
          }
      } else if (maxLeft1 > minRight2) {
          right = partition1 - 1;
      } else {
          left = partition1 + 1;
      }
  }
  return 0.0;
}`,
      pythoncode: `def findMedianSortedArrays(nums1, nums2):
  if len(nums1) > len(nums2):
      nums1, nums2 = nums2, nums1
  
  m, n = len(nums1), len(nums2)
  left, right = 0, m
  total = m + n
  
  while left <= right:
      partition1 = (left + right) // 2
      partition2 = (total + 1) // 2 - partition1
      
      maxLeft1 = float('-inf') if partition1 == 0 else nums1[partition1-1]
      minRight1 = float('inf') if partition1 == m else nums1[partition1]
      
      maxLeft2 = float('-inf') if partition2 == 0 else nums2[partition2-1]
      minRight2 = float('inf') if partition2 == n else nums2[partition2]
      
      if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
          if total % 2 == 0:
              return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2
          else:
              return max(maxLeft1, maxLeft2)
      elif maxLeft1 > minRight2:
          right = partition1 - 1
      else:
          left = partition1 + 1
  
  return 0.0`,
      language: "python",
      complexity: "Time Complexity: O(log(min(m,n))), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },
  {
      title: "Word Search",
      description: "Given a 2D board and a word, determine if the word exists in the grid by adjacent cells (up, down, left, right).",
      approach: [
          "1. Use backtracking/DFS with pruning",
          "2. For each cell matching first character, start search",
          "3. Mark visited cells to prevent reuse",
          "4. Recursively check all four directions",
          "5. Unmark cells when backtracking"
      ],
      algorithmCharacteristics: [
          "Backtracking: Explores all possible paths",
          "DFS Traversal: Recursively checks adjacent cells",
          "Pruning: Early termination for invalid paths"
      ],
      complexityDetails: {
          time: "O(M*N*4^L)",
          space: "O(L)",
          explanation: "Where M*N is board size and L is word length"
      },
      cppcode: `bool exist(vector<vector<char>>& board, string word) {
  if (board.empty() || board[0].empty()) return false;
  
  int m = board.size(), n = board[0].size();
  for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
          if (dfs(board, word, i, j, 0)) {
              return true;
          }
      }
  }
  return false;
}

bool dfs(vector<vector<char>>& board, string& word, int i, int j, int index) {
  if (index == word.size()) return true;
  if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size()) return false;
  if (board[i][j] != word[index]) return false;
  
  char temp = board[i][j];
  board[i][j] = '#';  // Mark as visited
  
  bool found = dfs(board, word, i+1, j, index+1) ||
               dfs(board, word, i-1, j, index+1) ||
               dfs(board, word, i, j+1, index+1) ||
               dfs(board, word, i, j-1, index+1);
  
  board[i][j] = temp;  // Backtrack
  return found;
}`,
      javacode: `public boolean exist(char[][] board, String word) {
  if (board == null || board.length == 0 || board[0].length == 0) return false;
  
  int m = board.length, n = board[0].length;
  for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
          if (dfs(board, word, i, j, 0)) {
              return true;
          }
      }
  }
  return false;
}

private boolean dfs(char[][] board, String word, int i, int j, int index) {
  if (index == word.length()) return true;
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
  if (board[i][j] != word.charAt(index)) return false;
  
  char temp = board[i][j];
  board[i][j] = '#';  // Mark as visited
  
  boolean found = dfs(board, word, i+1, j, index+1) ||
                  dfs(board, word, i-1, j, index+1) ||
                  dfs(board, word, i, j+1, index+1) ||
                  dfs(board, word, i, j-1, index+1);
  
  board[i][j] = temp;  // Backtrack
  return found;
}`,
      pythoncode: `def exist(board, word):
  def dfs(i, j, index):
      if index == len(word):
          return True
      if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]):
          return False
      if board[i][j] != word[index]:
          return False
      
      temp = board[i][j]
      board[i][j] = '#'  # Mark as visited
      
      found = (dfs(i+1, j, index+1) or
               dfs(i-1, j, index+1) or
               dfs(i, j+1, index+1) or
               dfs(i, j-1, index+1))
      
      board[i][j] = temp  # Backtrack
      return found
  
  for i in range(len(board)):
      for j in range(len(board[0])):
          if dfs(i, j, 0):
              return True
  return False`,
      language: "python",
      complexity: "Time Complexity: O(M*N*4^L), Space Complexity: O(L)",
      link: "https://leetcode.com/problems/word-search/"
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
        Most Asked MAANG Questions
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

export default Narray6;
