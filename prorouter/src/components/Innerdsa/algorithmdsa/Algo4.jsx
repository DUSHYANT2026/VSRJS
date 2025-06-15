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

function Algo4() {
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

  const slidingWindowProblems = [
    {
      title: "Maximum Sum Subarray of Size K",
      description: `Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.

Key Points:
- Fixed window size problem
- Efficient O(n) solution possible
- Avoid recalculating sums by sliding the window`,
      approach: `
1. Calculate sum of first window of size k
2. Initialize max_sum with this sum
3. Slide the window by one element at a time:
   a. Subtract the outgoing element (left side)
   b. Add the incoming element (right side)
   c. Update max_sum if current window sum is greater
4. Return max_sum after processing all windows`,
      algorithm: `
• Time Complexity: O(n) - single pass through array
• Space Complexity: O(1) - constant space for variables
• Example applications: financial analysis, signal processing
• Optimal for fixed-size window problems`,
      cppcode: `#include <vector>
#include <algorithm>
using namespace std;

int maxSumSubarray(vector<int>& nums, int k) {
    if (nums.size() < k) return -1;
    
    int window_sum = 0;
    for (int i = 0; i < k; i++) {
        window_sum += nums[i];
    }
    
    int max_sum = window_sum;
    for (int i = k; i < nums.size(); i++) {
        window_sum += nums[i] - nums[i - k];
        max_sum = max(max_sum, window_sum);
    }
    
    return max_sum;
}`,
      javacode: `public class Solution {
    public int maxSumSubarray(int[] nums, int k) {
        if (nums.length < k) return -1;
        
        int windowSum = 0;
        for (int i = 0; i < k; i++) {
            windowSum += nums[i];
        }
        
        int maxSum = windowSum;
        for (int i = k; i < nums.length; i++) {
            windowSum += nums[i] - nums[i - k];
            maxSum = Math.max(maxSum, windowSum);
        }
        
        return maxSum;
    }
}`,
      pythoncode: `def max_sum_subarray(nums, k):
    if len(nums) < k:
        return -1
    
    window_sum = sum(nums[:k])
    max_sum = window_sum
    
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum`,
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/window-sliding-technique/",
    },
    {
      title: "Longest Substring Without Repeating Characters",
      description: `Given a string s, find the length of the longest substring without repeating characters.

Key Points:
- Variable window size problem
- Need to track characters in current window
- Hash set used to check for duplicates
- Window expands and contracts based on duplicates`,
      approach: `
1. Initialize pointers left = 0 and max_len = 0
2. Create a set to track characters in current window
3. Iterate through string with right pointer:
   a. If character not in set, add it and expand window
   b. If character in set, remove leftmost character and move left
   c. Update max_len when window expands
4. Return max_len after processing entire string`,
      algorithm: `
• Time Complexity: O(n) - each character processed exactly twice
• Space Complexity: O(min(m, n)) - where m is character set size
• Example applications: text processing, DNA sequence analysis
• Optimal for variable-size window problems with uniqueness constraint`,
      cppcode: `#include <unordered_set>
#include <algorithm>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_set<char> chars;
    int left = 0, max_len = 0;
    
    for (int right = 0; right < s.size(); right++) {
        while (chars.find(s[right]) != chars.end()) {
            chars.erase(s[left]);
            left++;
        }
        chars.insert(s[right]);
        max_len = max(max_len, right - left + 1);
    }
    
    return max_len;
}`,
      javacode: `import java.util.HashSet;
import java.util.Set;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<>();
        int left = 0, maxLen = 0;
        
        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
}`,
      pythoncode: `def length_of_longest_substring(s):
    char_set = set()
    left = max_len = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    
    return max_len`,
      complexity: "Time Complexity: O(n), Space Complexity: O(min(m, n))",
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    },
    {
      title: "Minimum Window Substring",
      description: `Given two strings s and t, return the minimum window in s which will contain all the characters in t. If no such window exists, return an empty string.

Key Points:
- Variable window size problem
- Need to track frequency of characters
- Window expands and contracts based on character requirements
- Uses hash map to track required characters`,
      approach: `
1. Create frequency map of characters in t
2. Initialize pointers left = 0 and count of required characters
3. Iterate through s with right pointer:
   a. If character in t, decrement its count in map
   b. When count reaches 0, all required characters are in window
   c. Try to move left pointer to minimize window
4. Track minimum valid window and return it`,
      algorithm: `
• Time Complexity: O(|s| + |t|) - process both strings
• Space Complexity: O(1) - fixed size character set
• Example applications: text search, bioinformatics
• Optimal for variable-size window with inclusion constraint`,
      cppcode: `#include <string>
#include <unordered_map>
#include <climits>
using namespace std;

string minWindow(string s, string t) {
    unordered_map<char, int> freq;
    for (char c : t) freq[c]++;
    
    int left = 0, min_left = 0, min_len = INT_MAX;
    int count = t.size();
    
    for (int right = 0; right < s.size(); right++) {
        if (freq[s[right]]-- > 0) count--;
        
        while (count == 0) {
            if (right - left + 1 < min_len) {
                min_len = right - left + 1;
                min_left = left;
            }
            if (++freq[s[left++]] > 0) count++;
        }
    }
    
    return min_len == INT_MAX ? "" : s.substr(min_left, min_len);
}`,
      javacode: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public String minWindow(String s, String t) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : t.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        int left = 0, minLeft = 0, minLen = Integer.MAX_VALUE;
        int count = t.length();
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (freq.containsKey(c)) {
                freq.put(c, freq.get(c) - 1);
                if (freq.get(c) >= 0) count--;
            }
            
            while (count == 0) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minLeft = left;
                }
                char leftChar = s.charAt(left);
                if (freq.containsKey(leftChar)) {
                    freq.put(leftChar, freq.get(leftChar) + 1);
                    if (freq.get(leftChar) > 0) count++;
                }
                left++;
            }
        }
        
        return minLen == Integer.MAX_VALUE ? "" : s.substring(minLeft, minLeft + minLen);
    }
}`,
      pythoncode: `from collections import defaultdict

def min_window(s: str, t: str) -> str:
    freq = defaultdict(int)
    for char in t:
        freq[char] += 1
    
    left, min_left, min_len = 0, 0, float('inf')
    count = len(t)
    
    for right in range(len(s)):
        if s[right] in freq:
            freq[s[right]] -= 1
            if freq[s[right]] >= 0:
                count -= 1
        
        while count == 0:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_left = left
            
            if s[left] in freq:
                freq[s[left]] += 1
                if freq[s[left]] > 0:
                    count += 1
            left += 1
    
    return "" if min_len == float('inf') else s[min_left:min_left + min_len]`,
      complexity: "Time Complexity: O(|s| + |t|), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/minimum-window-substring/",
    },
    {
      title: "Longest Repeating Character Replacement",
      description: `Given a string s and an integer k, return the length of the longest substring containing the same letter you can get after replacing at most k characters.

Key Points:
- Variable window size problem
- Track frequency of characters in current window
- Window can contain at most (max_freq + k) characters
- Window expands when condition is met, contracts otherwise`,
      approach: `
1. Initialize pointers left = 0 and max_len = 0
2. Create frequency map for current window
3. Track max_freq of any character in current window
4. Iterate through string with right pointer:
   a. Update frequency of current character
   b. Update max_freq if current character's count is higher
   c. If window size > max_freq + k, move left pointer
   d. Update max_len with current window size
5. Return max_len`,
      algorithm: `
• Time Complexity: O(n) - single pass through string
• Space Complexity: O(1) - fixed size character set
• Example applications: data compression, error correction
• Optimal for variable-size window with replacement constraint`,
      cppcode: `#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int characterReplacement(string s, int k) {
    vector<int> count(26, 0);
    int left = 0, max_len = 0, max_freq = 0;
    
    for (int right = 0; right < s.size(); right++) {
        count[s[right] - 'A']++;
        max_freq = max(max_freq, count[s[right] - 'A']);
        
        if (right - left + 1 - max_freq > k) {
            count[s[left] - 'A']--;
            left++;
        }
        
        max_len = max(max_len, right - left + 1);
    }
    
    return max_len;
}`,
      javacode: `class Solution {
    public int characterReplacement(String s, int k) {
        int[] count = new int[26];
        int left = 0, maxLen = 0, maxFreq = 0;
        
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'A']++;
            maxFreq = Math.max(maxFreq, count[s.charAt(right) - 'A']);
            
            if (right - left + 1 - maxFreq > k) {
                count[s.charAt(left) - 'A']--;
                left++;
            }
            
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
}`,
      pythoncode: `def character_replacement(s: str, k: int) -> int:
    count = [0] * 26
    left = max_len = max_freq = 0
    
    for right in range(len(s)):
        count[ord(s[right]) - ord('A')] += 1
        max_freq = max(max_freq, count[ord(s[right]) - ord('A')])
        
        if (right - left + 1 - max_freq) > k:
            count[ord(s[left]) - ord('A')] -= 1
            left += 1
        
        max_len = max(max_len, right - left + 1)
    
    return max_len`,
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
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
        Sliding Window Technique
      </h1>

      <div className="space-y-8">
        {slidingWindowProblems.map((example, index) => (
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

export default Algo4;