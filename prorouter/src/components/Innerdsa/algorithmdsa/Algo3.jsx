/* eslint-disable react/display-name */
import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTheme } from "../../../ThemeContext.jsx";


const CodeExample = React.memo(
  ({ example, isVisible, language, code, darkMode }) => (
    <div
      className={`rounded-lg overflow-hidden border-2 ${getBorderColor(
        language
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

const getBorderColor = (language) => {
  switch (language) {
    case "cpp":
      return "border-indigo-100 dark:border-indigo-900";
    case "java":
      return "border-green-100 dark:border-green-900";
    case "python":
      return "border-yellow-100 dark:border-yellow-900";
    default:
      return "border-gray-100 dark:border-gray-800";
  }
};

const getButtonColor = (language) => {
  switch (language) {
    case "cpp":
      return "from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 dark:from-pink-600 dark:to-red-600 dark:hover:from-pink-700 dark:hover:to-red-700";
    case "java":
      return "from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 dark:from-green-600 dark:to-teal-600 dark:hover:from-green-700 dark:hover:to-teal-700";
    case "python":
      return "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 dark:from-yellow-600 dark:to-orange-600 dark:hover:from-yellow-700 dark:hover:to-orange-700";
    default:
      return "from-gray-500 to-blue-500 hover:from-gray-600 hover:to-blue-600 dark:from-gray-600 dark:to-blue-600 dark:hover:from-gray-700 dark:hover:to-blue-700";
  }
};

const ToggleCodeButton = ({ language, isVisible, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-block bg-gradient-to-r ${getButtonColor(
      language
    )} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      language === "cpp"
        ? "focus:ring-pink-500 dark:focus:ring-pink-600"
        : language === "java"
        ? "focus:ring-green-500 dark:focus:ring-green-600"
        : "focus:ring-yellow-500 dark:focus:ring-yellow-600"
    }`}
    aria-expanded={isVisible}
    aria-controls={`${language}-code`}
  >
    {isVisible
      ? `Hide ${
          language === "cpp" 
            ? "C++" 
            : language === "java" 
            ? "Java" 
            : "Python"
        } Code`
      : `Show ${
          language === "cpp" 
            ? "C++" 
            : language === "java" 
            ? "Java" 
            : "Python"
        } Code`}
  </button>
);

function Algo3() {
  const { darkMode } = useTheme();
  const [visibleCodes, setVisibleCodes] = useState({
    cpp: null,
    java: null,
    python: null,
  });
  const [expandedSections, setExpandedSections] = useState({});

  const toggleCodeVisibility = (language, index) => {
    setVisibleCodes(prev => ({
      ...prev,
      [language]: prev[language] === index ? null : index
    }));
  };

  const toggleDetails = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const formatDescription = (desc) => {
    return desc.split("\n").map((paragraph, i) => (
      <p key={i} className="mb-4 whitespace-pre-line dark:text-gray-300">
        {paragraph}
      </p>
    ));
  };

  const twoPointerProblems = [
    {
      title: "Two Sum (Sorted Array)",
      description: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers added by one as an integer array.

Key Points:
- Array is sorted in ascending order
- Solution must use constant extra space
- Exactly one solution exists
- 1-based indexing required`,
      approach: `
1. Initialize two pointers: left at start (0) and right at end (n-1)
2. While left < right:
   a. Calculate current sum = numbers[left] + numbers[right]
   b. If sum == target, return [left+1, right+1] (1-based)
   c. If sum < target, move left pointer right (need larger sum)
   d. If sum > target, move right pointer left (need smaller sum)
3. Since solution exists, loop will terminate with correct indices`,
      algorithm: `
• Time Complexity: O(n) - single pass through array
• Space Complexity: O(1) - constant space for pointers
• Works only on sorted input arrays
• More efficient than hash table approach for sorted arrays
• Example applications: pair finding, complement searching`,
      cppcode: `#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0;
    int right = numbers.size() - 1;
    
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) {
            return {left + 1, right + 1}; // 1-based indexing
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return {}; // should never reach here per problem statement
}`,
      javacode: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;
        
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1}; // 1-based
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return new int[0]; // should never reach here
    }
}`,
      pythoncode: `def twoSum(numbers, target):
    left, right = 0, len(numbers) - 1
    
    while left < right:
        current_sum = numbers[left] + numbers[right]
        if current_sum == target:
            return [left + 1, right + 1]  # 1-based indexing
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return []  # should never reach here`,
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    },
    {
      title: "Remove Duplicates from Sorted Array",
      description: `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the number of unique elements.

Key Points:
- Must modify input array in-place
- Must use O(1) extra memory
- First k elements should contain unique elements
- Elements beyond k don't matter
- Return count of unique elements`,
      approach: `
1. Initialize two pointers: i (slow-runner) and j (fast-runner)
2. Start with i = 0, j = 1
3. While j < nums.length:
   a. If nums[j] != nums[i], increment i and copy nums[j] to nums[i]
   b. Increment j in each iteration
4. Return i + 1 (count of unique elements)`,
      algorithm: `
• Time Complexity: O(n) - single pass through array
• Space Complexity: O(1) - in-place modification
• Works only on sorted input arrays
• Efficient alternative to using hash sets
• Example applications: data deduplication, preprocessing`,
      cppcode: `#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    
    int i = 0;
    for (int j = 1; j < nums.size(); j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}`,
      javacode: `class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        
        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
}`,
      pythoncode: `def removeDuplicates(nums):
    if not nums:
        return 0
    
    i = 0
    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]
    
    return i + 1`,
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    },
    {
      title: "Container With Most Water",
      description: `Given n non-negative integers a1, a2, ..., an where each represents a point at coordinate (i, ai). Find two lines that together with the x-axis form a container that contains the most water.

Key Points:
- Must find two vertical lines forming container
- Container area = width * min(height1, height2)
- Cannot slant the container
- Need to maximize the area`,
      approach: `
1. Initialize two pointers: left at start (0) and right at end (n-1)
2. Initialize max_area = 0
3. While left < right:
   a. Calculate current area = min(height[left], height[right]) * (right - left)
   b. Update max_area if current area is larger
   c. Move the pointer pointing to the shorter line inward
4. Return max_area`,
      algorithm: `
• Time Complexity: O(n) - single pass through array
• Space Complexity: O(1) - constant space for pointers
• Greedy approach works because moving shorter pointer might find higher line
• Example applications: resource allocation, optimization problems`,
      cppcode: `#include <vector>
#include <algorithm>
using namespace std;

int maxArea(vector<int>& height) {
    int left = 0;
    int right = height.size() - 1;
    int max_area = 0;
    
    while (left < right) {
        int current_area = min(height[left], height[right]) * (right - left);
        max_area = max(max_area, current_area);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
}`,
      javacode: `class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxArea = 0;
        
        while (left < right) {
            int currentArea = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, currentArea);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}`,
      pythoncode: `def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0
    
    while left < right:
        current_area = min(height[left], height[right]) * (right - left)
        max_area = max(max_area, current_area)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_area`,
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/container-with-most-water/",
    },
    {
      title: "Trapping Rain Water",
      description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Key Points:
- Water trapped at any point depends on min(left_max, right_max)
- Need to calculate maximum heights on both sides
- Can be solved with two pointers approach`,
      approach: `
1. Initialize two pointers: left at start (0) and right at end (n-1)
2. Initialize left_max and right_max to track highest bars
3. Initialize result to store total water
4. While left < right:
   a. If height[left] < height[right]:
      i. Update left_max if current height is higher
      ii. Add left_max - height[left] to result
      iii. Move left pointer right
   b. Else:
      i. Update right_max if current height is higher
      ii. Add right_max - height[right] to result
      iii. Move right pointer left
5. Return total water stored`,
      algorithm: `
• Time Complexity: O(n) - single pass through array
• Space Complexity: O(1) - constant space for pointers
• More efficient than DP approach (O(1) vs O(n) space)
• Example applications: water resource management, terrain analysis`,
      cppcode: `#include <vector>
#include <algorithm>
using namespace std;

int trap(vector<int>& height) {
    int left = 0;
    int right = height.size() - 1;
    int left_max = 0, right_max = 0;
    int result = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                result += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                result += right_max - height[right];
            }
            right--;
        }
    }
    return result;
}`,
      javacode: `class Solution {
    public int trap(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int result = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    result += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    result += rightMax - height[right];
                }
                right--;
            }
        }
        return result;
    }
}`,
      pythoncode: `def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    result = 0
    
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                result += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                result += right_max - height[right]
            right -= 1
    
    return result`,
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/trapping-rain-water/",
    }
  ];

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-12 rounded-2xl shadow-xl max-w-7xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text ${
          darkMode
            ? "bg-gradient-to-r from-indigo-400 to-purple-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-600"
        } mb-8 sm:mb-12`}
      >
        Two-Pointers Technique
      </h1>

      <div className="space-y-8">
        {twoPointerProblems.map((example, index) => (
          <article
            key={index}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-indigo-100"
            }`}
            aria-labelledby={`algorithm-${index}-title`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleDetails(index)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  id={`algorithm-${index}-title`}
                  className={`text-2xl sm:text-3xl font-bold text-left ${
                    darkMode ? "text-indigo-300" : "text-indigo-800"
                  }`}
                >
                  {example.title}
                </h2>
                <span
                  className={darkMode ? "text-indigo-400" : "text-indigo-600"}
                >
                  {expandedSections[index] ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </span>
              </button>

              {expandedSections[index] && (
                <div className="space-y-4 mt-4">
                  <div
                    className={`p-4 sm:p-6 rounded-lg shadow-sm border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-100"
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
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } font-medium leading-relaxed`}
                    >
                      {formatDescription(example.description)}
                    </div>
                  </div>

                  <div
                    className={`p-4 sm:p-6 rounded-lg shadow-sm border ${
                      darkMode
                        ? "bg-blue-900 border-blue-800"
                        : "bg-blue-50 border-blue-100"
                    }`}
                  >
                    <h3
                      className={`font-bold mb-3 text-lg ${
                        darkMode ? "text-blue-300" : "text-blue-800"
                      }`}
                    >
                      Approach
                    </h3>
                    <div
                      className={`${
                        darkMode ? "text-blue-300" : "text-blue-800"
                      } font-semibold leading-relaxed whitespace-pre-line`}
                    >
                      {formatDescription(example.approach)}
                    </div>
                  </div>

                  <div
                    className={`p-4 sm:p-6 rounded-lg shadow-sm border ${
                      darkMode
                        ? "bg-green-900 border-green-800"
                        : "bg-green-50 border-green-100"
                    }`}
                  >
                    <h3
                      className={`font-bold mb-3 text-lg ${
                        darkMode ? "text-green-300" : "text-green-800"
                      }`}
                    >
                      Algorithm Characteristics
                    </h3>
                    <div
                      className={`${
                        darkMode ? "text-green-300" : "text-green-800"
                      } font-semibold leading-relaxed whitespace-pre-line`}
                    >
                      {formatDescription(example.algorithm)}
                    </div>
                  </div>
                </div>
              )}

              <p
                className={`font-semibold mt-4 ${
                  darkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                <span
                  className={`font-bold ${
                    darkMode ? "text-indigo-400" : "text-indigo-700"
                  }`}
                >
                  Complexity:
                </span>{" "}
                {example.complexity}
              </p>
            </header>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={example.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-gradient-to-r ${
                  darkMode
                    ? "from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                    : "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                } text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                View Problem
              </a>

              <ToggleCodeButton
                language="cpp"
                isVisible={visibleCodes.cpp === index}
                onClick={() => toggleCodeVisibility("cpp", index)}
              />

              <ToggleCodeButton
                language="java"
                isVisible={visibleCodes.java === index}
                onClick={() => toggleCodeVisibility("java", index)}
              />

              <ToggleCodeButton
                language="python"
                isVisible={visibleCodes.python === index}
                onClick={() => toggleCodeVisibility("python", index)}
              />
            </div>

            <CodeExample
              example={example}
              isVisible={visibleCodes.cpp === index}
              language="cpp"
              code={example.cppcode}
              darkMode={darkMode}
            />

            <CodeExample
              example={example}
              isVisible={visibleCodes.java === index}
              language="java"
              code={example.javacode}
              darkMode={darkMode}
            />

            <CodeExample
              example={example}
              isVisible={visibleCodes.python === index}
              language="python"
              code={example.pythoncode}
              darkMode={darkMode}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Algo3;