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

function Narray2() {
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
      title: "Implement Atoi",
      description: "Convert a string to a 32-bit signed integer (mimics C/C++'s atoi function).",
      approach: [
        "1. Discard leading whitespace",
        "2. Check for optional '+' or '-' sign",
        "3. Read in digits until non-digit or end of string",
        "4. Handle overflow by clamping to INT_MAX/MIN",
        "5. Return converted integer or 0 if no valid conversion"
      ],
      algorithmCharacteristics: [
        "Linear Scan: Processes string in one pass",
        "Overflow Handling: Checks for 32-bit integer limits",
        "Sign Awareness: Properly handles positive/negative numbers",
        "Whitespace Ignoring: Skips leading spaces"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Single iteration through the string with constant space usage"
      },
      cppcode: `#include <climits>
#include <string>
using namespace std;

int myAtoi(string s) {
    int i = 0, sign = 1, result = 0;
    while (s[i] == ' ') i++;
    
    if (s[i] == '-' || s[i] == '+') {
        sign = (s[i++] == '-') ? -1 : 1;
    }
    
    while (isdigit(s[i])) {
        int digit = s[i++] - '0';
        if (result > INT_MAX/10 || (result == INT_MAX/10 && digit > 7)) {
            return (sign == 1) ? INT_MAX : INT_MIN;
        }
        result = result * 10 + digit;
    }
    return result * sign;
}`,
      javacode: `public class Solution {
    public int myAtoi(String s) {
        int i = 0, sign = 1, result = 0;
        while (i < s.length() && s.charAt(i) == ' ') i++;
        
        if (i < s.length() && (s.charAt(i) == '-' || s.charAt(i) == '+')) {
            sign = (s.charAt(i++) == '-') ? -1 : 1;
        }
        
        while (i < s.length() && Character.isDigit(s.charAt(i))) {
            int digit = s.charAt(i++) - '0';
            if (result > Integer.MAX_VALUE/10 || 
                (result == Integer.MAX_VALUE/10 && digit > 7)) {
                return (sign == 1) ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            result = result * 10 + digit;
        }
        return result * sign;
    }
}`,
      pythoncode: `def myAtoi(s: str) -> int:
    s = s.lstrip()
    if not s:
        return 0
    
    sign = 1
    if s[0] in '+-':
        sign = -1 if s[0] == '-' else 1
        s = s[1:]
    
    result = 0
    for c in s:
        if not c.isdigit():
            break
        digit = int(c)
        if result > (2**31 - 1) // 10 or (result == (2**31 - 1) // 10 and digit > 7):
            return 2**31 - 1 if sign == 1 else -2**31
        result = result * 10 + digit
    
    return sign * result`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/string-to-integer-atoi/"
    },
    {
      title: "Add Binary Strings",
      description: "Given two binary strings, return their sum as a binary string.",
      approach: [
        "1. Start from end of both strings",
        "2. Perform bit-by-bit addition with carry",
        "3. Handle different length strings",
        "4. Reverse final result"
      ],
      algorithmCharacteristics: [
        "Bit Manipulation: Simulates binary addition",
        "Carry Propagation: Handles carry between bits",
        "String Reversal: Builds result in reverse order",
        "Equal Length Handling: Works with different length inputs"
      ],
      complexityDetails: {
        time: "O(max(m,n))",
        space: "O(max(m,n))",
        explanation: "Processes each bit once and stores result of similar length"
      },
      cppcode: `#include <algorithm>
#include <string>
using namespace std;

string addBinary(string a, string b) {
    string result;
    int i = a.size() - 1, j = b.size() - 1;
    int carry = 0;
    
    while (i >= 0 || j >= 0 || carry) {
        int sum = carry;
        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';
        result.push_back(sum % 2 + '0');
        carry = sum / 2;
    }
    
    reverse(result.begin(), result.end());
    return result;
}`,
      javacode: `public class Solution {
    public String addBinary(String a, String b) {
        StringBuilder sb = new StringBuilder();
        int i = a.length() - 1, j = b.length() - 1;
        int carry = 0;
        
        while (i >= 0 || j >= 0 || carry > 0) {
            int sum = carry;
            if (i >= 0) sum += a.charAt(i--) - '0';
            if (j >= 0) sum += b.charAt(j--) - '0';
            sb.append(sum % 2);
            carry = sum / 2;
        }
        
        return sb.reverse().toString();
    }
}`,
      pythoncode: `def addBinary(a: str, b: str) -> str:
    result = []
    carry = 0
    i, j = len(a)-1, len(b)-1
    
    while i >= 0 or j >= 0 or carry:
        sum_val = carry
        if i >= 0:
            sum_val += int(a[i])
            i -= 1
        if j >= 0:
            sum_val += int(b[j])
            j -= 1
        result.append(str(sum_val % 2))
        carry = sum_val // 2
    
    return ''.join(reversed(result))`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(max(m,n)), Space Complexity: O(max(m,n))",
      link: "https://leetcode.com/problems/add-binary/"
    },
    {
      title: "Anagram Check",
      description: "Check if two strings are anagrams of each other.",
      approach: [
        "1. Compare lengths of both strings",
        "2. Use frequency count array for one string",
        "3. Decrement counts for characters in second string",
        "4. All counts should be zero for anagrams"
      ],
      algorithmCharacteristics: [
        "Frequency Counting: Uses fixed-size array for counts",
        "Early Termination: Returns false if lengths differ",
        "Case Handling: Works with lowercase letters (can be extended)",
        "Efficient Comparison: Single pass after count setup"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Uses fixed-size count array regardless of input size"
      },
      cppcode: `#include <string>
#include <array>
using namespace std;

bool isAnagram(string s, string t) {
    if (s.size() != t.size()) return false;
    
    array<int, 26> count{};
    for (char c : s) count[c - 'a']++;
    for (char c : t) {
        if (--count[c - 'a'] < 0) return false;
    }
    return true;
}`,
      javacode: `public class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'a']++;
        for (char c : t.toCharArray()) {
            if (--count[c - 'a'] < 0) return false;
        }
        return true;
    }
}`,
      pythoncode: `def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    
    count = [0] * 26
    for c in s:
        count[ord(c) - ord('a')] += 1
    for c in t:
        count[ord(c) - ord('a')] -= 1
        if count[ord(c) - ord('a')] < 0:
            return False
    return True`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/valid-anagram/"
    },
    {
      title: "First Non-Repeating Character",
      description: "Find the first non-repeating character in a string and return its index.",
      approach: [
        "1. Build frequency count of characters",
        "2. Traverse string to find first character with count 1",
        "3. Return index or -1 if none found"
      ],
      algorithmCharacteristics: [
        "Two-Pass Approach: First pass counts, second pass finds",
        "Constant Space: Uses fixed-size count array",
        "Early Exit: Returns immediately when found",
        "Case Handling: Works with lowercase letters (can be extended)"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Two linear passes through the string with fixed 26-element array"
      },
      cppcode: `#include <string>
#include <array>
using namespace std;

int firstUniqChar(string s) {
    array<int, 26> count{};
    for (char c : s) count[c - 'a']++;
    for (int i = 0; i < s.size(); i++) {
        if (count[s[i] - 'a'] == 1) return i;
    }
    return -1;
}`,
      javacode: `public class Solution {
    public int firstUniqChar(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'a']++;
        for (int i = 0; i < s.length(); i++) {
            if (count[s.charAt(i) - 'a'] == 1) return i;
        }
        return -1;
    }
}`,
      pythoncode: `def firstUniqChar(s: str) -> int:
    count = [0] * 26
    for c in s:
        count[ord(c) - ord('a')] += 1
    for i, c in enumerate(s):
        if count[ord(c) - ord('a')] == 1:
            return i
    return -1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/first-unique-character-in-a-string/"
    },
    {
      title: "Search Pattern (KMP Algorithm)",
      description: "Implement strStr() - find first occurrence of needle in haystack using KMP algorithm.",
      approach: [
        "1. Preprocess pattern to create longest prefix suffix (LPS) array",
        "2. Use LPS array to skip unnecessary comparisons",
        "3. Perform pattern matching with optimized shifts"
      ],
      algorithmCharacteristics: [
        "Efficient Matching: O(m+n) time complexity",
        "LPS Array: Enables skipping already matched portions",
        "No Backtracking: Text pointer never moves backward",
        "Handles Repeats: Optimized for patterns with repeating substrings"
      ],
      complexityDetails: {
        time: "O(m+n)",
        space: "O(m)",
        explanation: "Preprocessing pattern takes O(m), searching takes O(n)"
      },
      cppcode: `#include <vector>
#include <string>
using namespace std;

vector<int> computeLPS(string pattern) {
    vector<int> lps(pattern.size(), 0);
    int len = 0, i = 1;
    while (i < pattern.size()) {
        if (pattern[i] == pattern[len]) {
            lps[i++] = ++len;
        } else {
            if (len != 0) len = lps[len - 1];
            else lps[i++] = 0;
        }
    }
    return lps;
}

int strStr(string haystack, string needle) {
    if (needle.empty()) return 0;
    vector<int> lps = computeLPS(needle);
    int i = 0, j = 0;
    while (i < haystack.size()) {
        if (haystack[i] == needle[j]) {
            i++; j++;
            if (j == needle.size()) return i - j;
        } else {
            if (j != 0) j = lps[j - 1];
            else i++;
        }
    }
    return -1;
}`,
      javacode: `public class Solution {
    private int[] computeLPS(String pattern) {
        int[] lps = new int[pattern.length()];
        int len = 0, i = 1;
        while (i < pattern.length()) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                lps[i++] = ++len;
            } else {
                if (len != 0) len = lps[len - 1];
                else lps[i++] = 0;
            }
        }
        return lps;
    }
    
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;
        int[] lps = computeLPS(needle);
        int i = 0, j = 0;
        while (i < haystack.length()) {
            if (haystack.charAt(i) == needle.charAt(j)) {
                i++; j++;
                if (j == needle.length()) return i - j;
            } else {
                if (j != 0) j = lps[j - 1];
                else i++;
            }
        }
        return -1;
    }
}`,
      pythoncode: `def strStr(haystack: str, needle: str) -> int:
    if not needle:
        return 0
    
    # Compute LPS array
    lps = [0] * len(needle)
    length = 0
    i = 1
    while i < len(needle):
        if needle[i] == needle[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    
    # KMP search
    i = j = 0
    while i < len(haystack):
        if haystack[i] == needle[j]:
            i += 1
            j += 1
            if j == len(needle):
                return i - j
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    return -1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(m+n), Space Complexity: O(m)",
      link: "https://leetcode.com/problems/implement-strstr/"
    },
    {
      title: "Minimum Characters to Add for Palindrome",
      description: "Find minimum characters to add to make a string palindrome.",
      approach: [
        "1. Use modified KMP algorithm with LPS array",
        "2. Create a new string: original + '$' + reverse",
        "3. Compute LPS array for this combined string",
        "4. Minimum insertions = length - LPS last value"
      ],
      algorithmCharacteristics: [
        "KMP Adaptation: Uses LPS array creatively",
        "Efficient: Solves in linear time",
        "Symmetry Detection: Finds longest palindromic prefix",
        "Single Pass: After LPS computation"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "LPS computation dominates time, requires O(n) space for combined string"
      },
      cppcode: `#include <string>
#include <algorithm>
#include <vector>
using namespace std;

int minInsertions(string s) {
    string rev = s;
    reverse(rev.begin(), rev.end());
    string combined = s + "#" + rev;
    vector<int> lps(combined.size(), 0);
    
    for (int i = 1; i < combined.size(); i++) {
        int len = lps[i-1];
        while (len > 0 && combined[i] != combined[len]) {
            len = lps[len-1];
        }
        if (combined[i] == combined[len]) {
            len++;
        }
        lps[i] = len;
    }
    
    return s.size() - lps.back();
}`,
      javacode: `public class Solution {
    public int minInsertions(String s) {
        String rev = new StringBuilder(s).reverse().toString();
        String combined = s + "#" + rev;
        int[] lps = new int[combined.length()];
        
        for (int i = 1; i < combined.length(); i++) {
            int len = lps[i-1];
            while (len > 0 && combined.charAt(i) != combined.charAt(len)) {
                len = lps[len-1];
            }
            if (combined.charAt(i) == combined.charAt(len)) {
                len++;
            }
            lps[i] = len;
        }
        
        return s.length() - lps[lps.length - 1];
    }
}`,
      pythoncode: `def minInsertions(s: str) -> int:
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
    
    return len(s) - lps[-1]`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/"
    },
    {
      title: "String Rotation of Each Other",
      description: "Check if one string is a rotation of another.",
      approach: [
        "1. Check if lengths are equal",
        "2. Concatenate first string with itself",
        "3. Check if second string is substring of concatenated string"
      ],
      algorithmCharacteristics: [
        "Simple Check: Elegant one-line solution",
        "Efficient: Uses built-in string search",
        "Length Awareness: Early exit if lengths differ",
        "Substring Search: Leverages standard library functions"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "String concatenation takes O(n) space, substring search is typically O(n)"
      },
      cppcode: `#include <string>
using namespace std;

bool isRotation(string s1, string s2) {
    if (s1.size() != s2.size()) return false;
    string combined = s1 + s1;
    return combined.find(s2) != string::npos;
}`,
      javacode: `public class Solution {
    public boolean isRotation(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        String combined = s1 + s1;
        return combined.contains(s2);
    }
}`,
      pythoncode: `def isRotation(s1: str, s2: str) -> bool:
    if len(s1) != len(s2):
        return False
    return s2 in (s1 + s1)`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/"
    },
    {
      title: "Fizz Buzz",
      description: "For numbers 1 to n, return 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both.",
      approach: [
        "1. Iterate from 1 to n",
        "2. Check divisibility by 3 and 5 first",
        "3. Then check individual divisibility",
        "4. Default to string representation of number"
      ],
      algorithmCharacteristics: [
        "Simple Logic: Straightforward conditional checks",
        "Order Matters: Checks 15 before 3 and 5",
        "String Conversion: Handles number to string conversion",
        "No Extra Space: Generates output directly"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "Linear pass through numbers with output proportional to input size"
      },
      cppcode: `#include <vector>
#include <string>
using namespace std;

vector<string> fizzBuzz(int n) {
    vector<string> result;
    for (int i = 1; i <= n; i++) {
        if (i % 15 == 0) result.push_back("FizzBuzz");
        else if (i % 3 == 0) result.push_back("Fizz");
        else if (i % 5 == 0) result.push_back("Buzz");
        else result.push_back(to_string(i));
    }
    return result;
}`,
      javacode: `import java.util.*;

public class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> result = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (i % 15 == 0) result.add("FizzBuzz");
            else if (i % 3 == 0) result.add("Fizz");
            else if (i % 5 == 0) result.add("Buzz");
            else result.add(String.valueOf(i));
        }
        return result;
    }
}`,
      pythoncode: `def fizzBuzz(n: int) -> List[str]:
    result = []
    for i in range(1, n+1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://leetcode.com/problems/fizz-buzz/"
    },
    {
      title: "CamelCase Pattern Matching",
      description: "Find all dictionary words that match a given CamelCase pattern.",
      approach: [
        "1. Extract uppercase characters from pattern",
        "2. For each word, extract its uppercase characters",
        "3. Compare with pattern's uppercase sequence",
        "4. Return matching words"
      ],
      algorithmCharacteristics: [
        "Pattern Matching: Compares uppercase sequences",
        "Early Termination: Skips non-matching words quickly",
        "Case Sensitivity: Strict uppercase matching",
        "Linear Scan: Processes each word once"
      ],
      complexityDetails: {
        time: "O(n*k)",
        space: "O(m)",
        explanation: "Where n is number of words, k is average length, m is pattern length"
      },
      cppcode: `#include <vector>
#include <string>
using namespace std;

vector<string> camelMatch(vector<string>& queries, string pattern) {
    vector<string> result;
    for (string word : queries) {
        int i = 0;
        bool match = true;
        for (char c : word) {
            if (i < pattern.size() && c == pattern[i]) {
                i++;
            } else if (isupper(c)) {
                match = false;
                break;
            }
        }
        result.push_back(match && i == pattern.size() ? "true" : "false");
    }
    return result;
}`,
      javacode: `import java.util.*;

public class Solution {
    public List<Boolean> camelMatch(String[] queries, String pattern) {
        List<Boolean> result = new ArrayList<>();
        for (String word : queries) {
            int i = 0;
            boolean match = true;
            for (char c : word.toCharArray()) {
                if (i < pattern.length() && c == pattern.charAt(i)) {
                    i++;
                } else if (Character.isUpperCase(c)) {
                    match = false;
                    break;
                }
            }
            result.add(match && i == pattern.length());
        }
        return result;
    }
}`,
      pythoncode: `def camelMatch(queries: List[str], pattern: str) -> List[bool]:
    result = []
    for word in queries:
        i = 0
        match = True
        for c in word:
            if i < len(pattern) and c == pattern[i]:
                i += 1
            elif c.isupper():
                match = False
                break
        result.append(match and i == len(pattern))
    return result`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n*k), Space Complexity: O(m)",
      link: "https://leetcode.com/problems/camelcase-matching/"
    },
    {
      title: "Minimum Repeat to Make Substring",
      description: "Find minimum repeats of string A needed so that string B is a substring.",
      approach: [
        "1. Check if all characters of B exist in A",
        "2. Try possible repeats (max 2 needed if B is substring of A+A)",
        "3. Use string find operation"
      ],
      algorithmCharacteristics: [
        "Efficient Check: Limits to max 3 concatenations",
        "Character Validation: Early exit if B contains chars not in A",
        "Substring Search: Uses built-in string search",
        "Optimal: Never needs more than 3 repeats check"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "Where n is length of B, due to string concatenation and search"
      },
      cppcode: `#include <string>
using namespace std;

int minRepeats(string A, string B) {
    string temp = A;
    int repeats = 1;
    while (temp.size() < B.size()) {
        temp += A;
        repeats++;
    }
    if (temp.find(B) != string::npos) return repeats;
    temp += A;
    repeats++;
    return (temp.find(B) != string::npos) ? repeats : -1;
}`,
      javacode: `public class Solution {
    public int minRepeats(String A, String B) {
        String temp = A;
        int repeats = 1;
        while (temp.length() < B.length()) {
            temp += A;
            repeats++;
        }
        if (temp.contains(B)) return repeats;
        temp += A;
        repeats++;
        return temp.contains(B) ? repeats : -1;
    }
}`,
      pythoncode: `def minRepeats(A: str, B: str) -> int:
    temp = A
    repeats = 1
    while len(temp) < len(B):
        temp += A
        repeats += 1
    if B in temp:
        return repeats
    temp += A
    repeats += 1
    return repeats if B in temp else -1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://www.geeksforgeeks.org/minimum-number-of-times-a-has-to-be-repeated-to-make-b-a-substring/"
    },
    {
      title: "Longest Prefix Suffix (KMP LPS)",
      description: "Find the length of the longest proper prefix which is also a suffix for each prefix of the string.",
      approach: [
        "1. Initialize LPS array with 0",
        "2. Use two pointers to compare prefix and suffix",
        "3. Build LPS array incrementally"
      ],
      algorithmCharacteristics: [
        "KMP Preprocessing: Core of KMP algorithm",
        "Efficient Construction: Builds array in linear time",
        "Prefix Comparison: Smart comparison using previous values",
        "No Extra Space: Modifies array in-place"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "Single pass through string with O(n) space for LPS array"
      },
      cppcode: `#include <vector>
#include <string>
using namespace std;

vector<int> computeLPS(string s) {
    vector<int> lps(s.size(), 0);
    int len = 0, i = 1;
    while (i < s.size()) {
        if (s[i] == s[len]) {
            lps[i++] = ++len;
        } else {
            if (len != 0) len = lps[len-1];
            else lps[i++] = 0;
        }
    }
    return lps;
}`,
      javacode: `public class Solution {
    public int[] computeLPS(String s) {
        int[] lps = new int[s.length()];
        int len = 0, i = 1;
        while (i < s.length()) {
            if (s.charAt(i) == s.charAt(len)) {
                lps[i++] = ++len;
            } else {
                if (len != 0) len = lps[len-1];
                else lps[i++] = 0;
            }
        }
        return lps;
    }
}`,
      pythoncode: `def computeLPS(s: str) -> List[int]:
    lps = [0] * len(s)
    length = 0
    i = 1
    while i < len(s):
        if s[i] == s[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length-1]
            else:
                lps[i] = 0
                i += 1
    return lps`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
      link: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/"
    },
    {
      title: "Integer to English Words",
      description: "Convert a non-negative integer to its English words representation.",
      approach: [
        "1. Break number into chunks of 3 digits (thousands, millions, etc.)",
        "2. Convert each 3-digit chunk to words",
        "3. Combine with appropriate scale words",
        "4. Handle edge cases (zero, teens, tens)"
      ],
      algorithmCharacteristics: [
        "Recursive Breakdown: Handles chunks recursively",
        "Scale Awareness: Properly adds thousand, million, etc.",
        "Edge Case Handling: Special cases for 0, teens (10-19)",
        "Modular Design: Separate helpers for different scales"
      ],
      complexityDetails: {
        time: "O(1)",
        space: "O(1)",
        explanation: "Fixed number of operations regardless of input (max 32-bit integer)"
      },
      cppcode: `#include <string>
#include <vector>
using namespace std;

vector<string> ones = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
vector<string> teens = {"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
vector<string> tens = {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};

string helper(int num) {
    if (num == 0) return "";
    if (num < 10) return ones[num] + " ";
    if (num < 20) return teens[num - 10] + " ";
    if (num < 100) return tens[num / 10] + " " + helper(num % 10);
    return ones[num / 100] + " Hundred " + helper(num % 100);
}

string numberToWords(int num) {
    if (num == 0) return "Zero";
    vector<string> scales = {"", "Thousand", "Million", "Billion"};
    string result;
    int scale = 0;
    while (num > 0) {
        int chunk = num % 1000;
        if (chunk != 0) {
            result = helper(chunk) + scales[scale] + " " + result;
        }
        num /= 1000;
        scale++;
    }
    while (result.back() == ' ') result.pop_back();
    return result;
}`,
      javacode: `class Solution {
    private final String[] ones = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
    private final String[] teens = {"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    private final String[] tens = {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    
    private String helper(int num) {
        if (num == 0) return "";
        if (num < 10) return ones[num] + " ";
        if (num < 20) return teens[num - 10] + " ";
        if (num < 100) return tens[num / 10] + " " + helper(num % 10);
        return ones[num / 100] + " Hundred " + helper(num % 100);
    }
    
    public String numberToWords(int num) {
        if (num == 0) return "Zero";
        String[] scales = {"", "Thousand", "Million", "Billion"};
        StringBuilder result = new StringBuilder();
        int scale = 0;
        while (num > 0) {
            int chunk = num % 1000;
            if (chunk != 0) {
                result.insert(0, helper(chunk) + scales[scale] + " ");
            }
            num /= 1000;
            scale++;
        }
        return result.toString().trim();
    }
}`,
      pythoncode: `def numberToWords(num: int) -> str:
    if num == 0:
        return "Zero"
    
    ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
             "Seventeen", "Eighteen", "Nineteen"]
    tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", 
            "Eighty", "Ninety"]
    scales = ["", "Thousand", "Million", "Billion"]
    
    def helper(n):
        if n == 0:
            return ""
        if n < 10:
            return ones[n] + " "
        if n < 20:
            return teens[n - 10] + " "
        if n < 100:
            return tens[n // 10] + " " + helper(n % 10)
        return ones[n // 100] + " Hundred " + helper(n % 100)
    
    res = ""
    scale = 0
    while num > 0:
        chunk = num % 1000
        if chunk != 0:
            res = helper(chunk) + scales[scale] + " " + res
        num //= 1000
        scale += 1
    
    return res.strip()`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(1), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/integer-to-english-words/"
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
        String Problems with Solutions
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

export default Narray2;
