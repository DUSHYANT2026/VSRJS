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

function Narray1() {
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
      title: "Second Largest Element in Array",
      description:
        "Find the second largest element in an array in O(n) time with O(1) space complexity.",
      approach: [
        "1. Initialize two variables to track largest and second largest",
        "2. Iterate through the array once",
        "3. Update variables when finding larger elements",
        "4. Handle edge cases (all same elements, array size < 2)",
      ],
      algorithmCharacteristics: [
        "Single Pass: Processes array in one iteration",
        "Constant Space: Uses only two variables",
        "Handles Duplicates: Properly manages equal elements",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation:
          "Single iteration through the array with constant time comparisons",
      },
      cppcode: `#include <vector>
#include <climits>
using namespace std;

int secondLargest(vector<int>& nums) {
    int first = INT_MIN, second = INT_MIN;
    for (int num : nums) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num != first) {
            second = num;
        }
    }
    return second == INT_MIN ? -1 : second;
}`,
      javacode: `public int secondLargest(int[] nums) {
    int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
    for (int num : nums) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num != first) {
            second = num;
        }
    }
    return second == Integer.MIN_VALUE ? -1 : second;
}`,
      pythoncode: `def second_largest(nums):
    first = second = float('-inf')
    for num in nums:
        if num > first:
            second, first = first, num
        elif num > second and num != first:
            second = num
    return -1 if second == float('-inf') else second`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/second-largest-element-in-an-array/",
    },
    {
      title: "Move Zeroes to End",
      description:
        "Move all zeros to the end while maintaining the relative order of non-zero elements.",
      approach: [
        "1. Use two pointers approach",
        "2. One pointer tracks position for next non-zero",
        "3. Another pointer scans the array",
        "4. Fill remaining positions with zeros",
      ],
      algorithmCharacteristics: [
        "In-place Operation: Modifies input array directly",
        "Order Preservation: Maintains relative order of non-zero elements",
        "Efficient: Single pass through array",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "One pass to move non-zeros, one pass to fill zeros",
      },
      cppcode: `void moveZeroes(vector<int>& nums) {
    int nonZero = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != 0) {
            nums[nonZero++] = nums[i];
        }
    }
    while (nonZero < nums.size()) {
        nums[nonZero++] = 0;
    }
}`,
      javacode: `public void moveZeroes(int[] nums) {
    int nonZero = 0;
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[nonZero++] = nums[i];
        }
    }
    while (nonZero < nums.length) {
        nums[nonZero++] = 0;
    }
}`,
      pythoncode: `def moveZeroes(nums):
    non_zero = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[non_zero] = nums[i]
            non_zero += 1
    while non_zero < len(nums):
        nums[non_zero] = 0
        non_zero += 1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/move-zeroes/",
    },
    {
      title: "Reverse an Array",
      description:
        "Reverse the elements of an array in-place using two pointers.",
      approach: [
        "1. Initialize start and end pointers",
        "2. Swap elements at these pointers",
        "3. Move pointers towards center",
        "4. Stop when pointers meet",
      ],
      algorithmCharacteristics: [
        "In-place: No additional storage needed",
        "Efficient: O(n) time complexity",
        "Symmetrical: Works for even and odd lengths",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Performs n/2 swaps for array of size n",
      },
      cppcode: `void reverseArray(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        swap(nums[left++], nums[right--]);
    }
}`,
      javacode: `public void reverseArray(int[] nums) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}`,
      pythoncode: `def reverse_array(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/reverse-string/", // Similar concept
    },
    {
      title: "Rotate Array",
      description: "Rotate array to the right by k steps (with wrap-around).",
      approach: [
        "1. Normalize k using modulo operation",
        "2. Reverse entire array",
        "3. Reverse first k elements",
        "4. Reverse remaining elements",
      ],
      algorithmCharacteristics: [
        "In-place Rotation: No extra space needed",
        "Three Reversals: Elegant O(n) solution",
        "Handles Large k: Uses modulo arithmetic",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Three passes through the array",
      },
      cppcode: `void rotate(vector<int>& nums, int k) {
    k %= nums.size();
    reverse(nums.begin(), nums.end());
    reverse(nums.begin(), nums.begin() + k);
    reverse(nums.begin() + k, nums.end());
}`,
      javacode: `public void rotate(int[] nums, int k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}
private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        int temp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp;
    }
}`,
      pythoncode: `def rotate(nums, k):
    k %= len(nums)
    nums.reverse()
    nums[:k] = reversed(nums[:k])
    nums[k:] = reversed(nums[k:])`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/rotate-array/",
    },
    {
      title: "Next Permutation",
      description:
        "Find lexicographically next greater permutation of numbers.",
      approach: [
        "1. Find first decreasing element from end (pivot)",
        "2. Find smallest larger element to its right",
        "3. Swap them",
        "4. Reverse suffix after pivot",
      ],
      algorithmCharacteristics: [
        "In-place Modification: Changes input array directly",
        "Lexicographical Order: Finds next permutation in sequence",
        "Efficient: O(n) time solution",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "At most two passes through the array",
      },
      cppcode: `void nextPermutation(vector<int>& nums) {
    int i = nums.size() - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        int j = nums.size() - 1;
        while (nums[j] <= nums[i]) j--;
        swap(nums[i], nums[j]);
    }
    reverse(nums.begin() + i + 1, nums.end());
}`,
      javacode: `public void nextPermutation(int[] nums) {
    int i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        int j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
}
private void reverse(int[] nums, int start) {
    int end = nums.length - 1;
    while (start < end) swap(nums, start++, end--);
}
private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}`,
      pythoncode: `def nextPermutation(nums):
    i = len(nums) - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    if i >= 0:
        j = len(nums) - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    nums[i+1:] = reversed(nums[i+1:])`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/next-permutation/",
    },
    {
      title: "Majority Element II",
      description:
        "Find all elements appearing more than ⌊n/3⌋ times (Boyer-Moore variant).",
      approach: [
        "1. Extended Boyer-Moore voting algorithm",
        "2. Track two potential candidates",
        "3. Count occurrences in first pass",
        "4. Verify counts in second pass",
      ],
      algorithmCharacteristics: [
        "Linear Time: O(n) time complexity",
        "Constant Space: O(1) extra space",
        "Generalization: Works for n/k frequency",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Two passes through the array with constant operations",
      },
      cppcode: `vector<int> majorityElement(vector<int>& nums) {
    int count1 = 0, count2 = 0;
    int candidate1 = INT_MIN, candidate2 = INT_MIN;
    
    for (int num : nums) {
        if (num == candidate1) count1++;
        else if (num == candidate2) count2++;
        else if (count1 == 0) { candidate1 = num; count1 = 1; }
        else if (count2 == 0) { candidate2 = num; count2 = 1; }
        else { count1--; count2--; }
    }
    
    // Verification pass
    count1 = count2 = 0;
    for (int num : nums) {
        if (num == candidate1) count1++;
        else if (num == candidate2) count2++;
    }
    
    vector<int> result;
    if (count1 > nums.size() / 3) result.push_back(candidate1);
    if (count2 > nums.size() / 3) result.push_back(candidate2);
    return result;
}`,
      javacode: `public List<Integer> majorityElement(int[] nums) {
    int count1 = 0, count2 = 0;
    Integer candidate1 = null, candidate2 = null;
    
    for (int num : nums) {
        if (candidate1 != null && num == candidate1) count1++;
        else if (candidate2 != null && num == candidate2) count2++;
        else if (count1 == 0) { candidate1 = num; count1 = 1; }
        else if (count2 == 0) { candidate2 = num; count2 = 1; }
        else { count1--; count2--; }
    }
    
    // Verification pass
    count1 = count2 = 0;
    for (int num : nums) {
        if (num == candidate1) count1++;
        else if (candidate2 != null && num == candidate2) count2++;
    }
    
    List<Integer> result = new ArrayList<>();
    if (count1 > nums.length / 3) result.add(candidate1);
    if (count2 > nums.length / 3) result.add(candidate2);
    return result;
}`,
      pythoncode: `def majorityElement(nums):
    count1 = count2 = 0
    candidate1 = candidate2 = None
    
    for num in nums:
        if num == candidate1: count1 += 1
        elif num == candidate2: count2 += 1
        elif count1 == 0: candidate1, count1 = num, 1
        elif count2 == 0: candidate2, count2 = num, 1
        else: count1 -= 1; count2 -= 1
    
    # Verification
    result = []
    for candidate in [candidate1, candidate2]:
        if nums.count(candidate) > len(nums) // 3:
            result.append(candidate)
    return result`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/majority-element-ii/",
    },
    {
      title: "Best Time to Buy and Sell Stock II",
      description:
        "Maximize profit by buying and selling stocks multiple times.",
      approach: [
        "1. Greedy approach capturing all increasing sequences",
        "2. Buy at valleys, sell at peaks",
        "3. Sum all positive differences between consecutive days",
      ],
      algorithmCharacteristics: [
        "Single Pass: Processes array in one iteration",
        "Greedy: Captures all profitable transactions",
        "Efficient: O(n) time solution",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "One pass through the price array",
      },
      cppcode: `int maxProfit(vector<int>& prices) {
    int profit = 0;
    for (int i = 1; i < prices.size(); i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
}`,
      javacode: `public int maxProfit(int[] prices) {
    int profit = 0;
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
}`,
      pythoncode: `def maxProfit(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            profit += prices[i] - prices[i-1]
    return profit`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    },
    {
      title: "Minimize the Heights II",
      description:
        "Minimize maximum difference between heights after adjusting each element by ±k.",
      approach: [
        "1. Sort the array",
        "2. Initialize result as current difference",
        "3. Consider all possible splits where first i elements are increased and rest decreased",
        "4. Track minimum possible maximum difference",
      ],
      algorithmCharacteristics: [
        "Sorting Based: Requires sorted array",
        "Boundary Checks: Handles edge cases carefully",
        "Optimal Adjustment: Finds best increase/decrease split",
      ],
      complexityDetails: {
        time: "O(n log n)",
        space: "O(1)",
        explanation: "Dominant factor is sorting the array",
      },
      cppcode: `int getMinDiff(int arr[], int n, int k) {
    sort(arr, arr + n);
    int ans = arr[n - 1] - arr[0];
    
    for (int i = 1; i < n; i++) {
        if (arr[i] - k < 0) continue;
        int curr_max = max(arr[i - 1] + k, arr[n - 1] - k);
        int curr_min = min(arr[0] + k, arr[i] - k);
        ans = min(ans, curr_max - curr_min);
    }
    return ans;
}`,
      javacode: `public int getMinDiff(int[] arr, int n, int k) {
    Arrays.sort(arr);
    int ans = arr[n - 1] - arr[0];
    
    for (int i = 1; i < n; i++) {
        if (arr[i] - k < 0) continue;
        int currMax = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        int currMin = Math.min(arr[0] + k, arr[i] - k);
        ans = Math.min(ans, currMax - currMin);
    }
    return ans;
}`,
      pythoncode: `def getMinDiff(arr, n, k):
    arr.sort()
    ans = arr[-1] - arr[0]
    
    for i in range(1, n):
        if arr[i] - k < 0:
            continue
        curr_max = max(arr[i-1] + k, arr[-1] - k)
        curr_min = min(arr[0] + k, arr[i] - k)
        ans = min(ans, curr_max - curr_min)
    return ans`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n log n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/", // Similar concept
    },
    {
      title: "Kadane's Algorithm",
      description: "Find maximum sum contiguous subarray.",
      approach: [
        "1. Track maximum sum ending at current position",
        "2. Track overall maximum sum",
        "3. Reset current sum if it becomes negative",
        "4. Return overall maximum",
      ],
      algorithmCharacteristics: [
        "Dynamic Programming: Optimal substructure",
        "Single Pass: O(n) time complexity",
        "Handles Negatives: Properly manages all-negative arrays",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Single iteration through the array",
      },
      cppcode: `int maxSubArray(vector<int>& nums) {
    int max_sum = INT_MIN, current_sum = 0;
    for (int num : nums) {
        current_sum += num;
        if (current_sum > max_sum) max_sum = current_sum;
        if (current_sum < 0) current_sum = 0;
    }
    return max_sum;
}`,
      javacode: `public int maxSubArray(int[] nums) {
    int maxSum = Integer.MIN_VALUE, currentSum = 0;
    for (int num : nums) {
        currentSum += num;
        if (currentSum > maxSum) maxSum = currentSum;
        if (currentSum < 0) currentSum = 0;
    }
    return maxSum;
}`,
      pythoncode: `def maxSubArray(nums):
    max_sum = current_sum = float('-inf')
    for num in nums:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/maximum-subarray/",
    },
    {
      title: "Maximum Product Subarray",
      description: "Find contiguous subarray with maximum product.",
      approach: [
        "1. Track both maximum and minimum product at each step",
        "2. Swap max and min when encountering negative number",
        "3. Update global maximum product",
        "4. Handle zero values appropriately",
      ],
      algorithmCharacteristics: [
        "Dynamic Programming: Tracks both max and min",
        "Negative Handling: Accounts for sign changes",
        "Single Pass: O(n) time complexity",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Single iteration tracking multiple variables",
      },
      cppcode: `int maxProduct(vector<int>& nums) {
    int max_prod = nums[0], min_prod = nums[0], result = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] < 0) swap(max_prod, min_prod);
        max_prod = max(nums[i], max_prod * nums[i]);
        min_prod = min(nums[i], min_prod * nums[i]);
        result = max(result, max_prod);
    }
    return result;
}`,
      javacode: `public int maxProduct(int[] nums) {
    int maxProd = nums[0], minProd = nums[0], result = nums[0];
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            int temp = maxProd;
            maxProd = minProd;
            minProd = temp;
        }
        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);
        result = Math.max(result, maxProd);
    }
    return result;
}`,
      pythoncode: `def maxProduct(nums):
    max_prod = min_prod = result = nums[0]
    for num in nums[1:]:
        if num < 0:
            max_prod, min_prod = min_prod, max_prod
        max_prod = max(num, max_prod * num)
        min_prod = min(num, min_prod * num)
        result = max(result, max_prod)
    return result`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/maximum-product-subarray/",
    },
    {
      title: "Maximum Sum Circular Subarray",
      description: "Find maximum sum subarray (allowing wrap-around).",
      approach: [
        "1. Compute standard Kadane's maximum",
        "2. Compute minimum subarray sum",
        "3. Calculate circular maximum as total sum - minimum sum",
        "4. Return maximum of standard and circular maximums",
      ],
      algorithmCharacteristics: [
        "Kadane's Variant: Extended for circular case",
        "Total Sum: Uses array sum for circular calculation",
        "Edge Cases: Handles all-negative arrays",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Two passes through the array",
      },
      cppcode: `int maxSubarraySumCircular(vector<int>& nums) {
    int total = 0, max_sum = INT_MIN, min_sum = INT_MAX;
    int current_max = 0, current_min = 0;
    
    for (int num : nums) {
        total += num;
        current_max = max(num, current_max + num);
        max_sum = max(max_sum, current_max);
        current_min = min(num, current_min + num);
        min_sum = min(min_sum, current_min);
    }
    return max_sum > 0 ? max(max_sum, total - min_sum) : max_sum;
}`,
      javacode: `public int maxSubarraySumCircular(int[] nums) {
    int total = 0, maxSum = Integer.MIN_VALUE, minSum = Integer.MAX_VALUE;
    int currentMax = 0, currentMin = 0;
    
    for (int num : nums) {
        total += num;
        currentMax = Math.max(num, currentMax + num);
        maxSum = Math.max(maxSum, currentMax);
        currentMin = Math.min(num, currentMin + num);
        minSum = Math.min(minSum, currentMin);
    }
    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}`,
      pythoncode: `def maxSubarraySumCircular(nums):
    total = 0
    max_sum = min_sum = current_max = current_min = nums[0]
    
    for num in nums[1:]:
        total += num
        current_max = max(num, current_max + num)
        max_sum = max(max_sum, current_max)
        current_min = min(num, current_min + num)
        min_sum = min(min_sum, current_min)
    
    return max(max_sum, total - min_sum) if max_sum > 0 else max_sum`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
    },
    {
      title: "First Missing Positive",
      description:
        "Find the smallest missing positive integer in unsorted array.",
      approach: [
        "1. Segregate positive numbers",
        "2. Use array indices to mark presence of numbers",
        "3. First positive index indicates missing number",
        "4. Handle edge cases (all present, empty array)",
      ],
      algorithmCharacteristics: [
        "Index Marking: Uses array itself for storage",
        "In-place: Constant extra space",
        "Cyclic Sort: Similar approach to sorting in place",
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Three passes through the array",
      },
      cppcode: `int firstMissingPositive(vector<int>& nums) {
    int n = nums.size();
    
    // Mark non-positive as irrelevant
    for (int i = 0; i < n; i++) {
        if (nums[i] <= 0) nums[i] = n + 1;
    }
    
    // Mark indices for present numbers
    for (int i = 0; i < n; i++) {
        int num = abs(nums[i]);
        if (num <= n) nums[num - 1] = -abs(nums[num - 1]);
    }
    
    // Find first positive index
    for (int i = 0; i < n; i++) {
        if (nums[i] > 0) return i + 1;
    }
    return n + 1;
}`,
      javacode: `public int firstMissingPositive(int[] nums) {
    int n = nums.length;
    
    // Mark non-positive as irrelevant
    for (int i = 0; i < n; i++) {
        if (nums[i] <= 0) nums[i] = n + 1;
    }
    
    // Mark indices for present numbers
    for (int i = 0; i < n; i++) {
        int num = Math.abs(nums[i]);
        if (num <= n) nums[num - 1] = -Math.abs(nums[num - 1]);
    }
    
    // Find first positive index
    for (int i = 0; i < n; i++) {
        if (nums[i] > 0) return i + 1;
    }
    return n + 1;
}`,
      pythoncode: `def firstMissingPositive(nums):
    n = len(nums)
    
    # Mark non-positive as irrelevant
    for i in range(n):
        if nums[i] <= 0:
            nums[i] = n + 1
    
    # Mark indices for present numbers
    for i in range(n):
        num = abs(nums[i])
        if num <= n:
            nums[num - 1] = -abs(nums[num - 1])
    
    # Find first positive index
    for i in range(n):
        if nums[i] > 0:
            return i + 1
    return n + 1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/first-missing-positive/",
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
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text mb-8 sm:mb-12 ${
          darkMode
            ? "bg-gradient-to-r from-indigo-300 to-purple-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-700"
        }`}
      >
        Array Problems with Solutions
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

export default Narray1;
