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

function Bit1() {
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

  const codeExamples =  [
      {
        title: "Check if a Number is Odd",
        description: "Determine whether a given number is odd without using the modulus operator.",
        approach: [
          "1. Use bitwise AND operator with 1",
          "2. If result is 1, number is odd",
          "3. If result is 0, number is even",
          "4. Works because odd numbers have LSB (least significant bit) set to 1"
        ],
        algorithmCharacteristics: [
          "Time complexity: O(1)",
          "Space complexity: O(1)",
          "More efficient than modulus operation",
          "Works for both positive and negative integers",
          "Doesn't use division or modulus operators"
        ],
        complexityDetails: {
          time: "O(1)",
          space: "O(1)",
          explanation: "Single bitwise operation with constant time"
        },
        cppcode: `#include <iostream>
  using namespace std;
  
  bool isOdd(int num) {
      return num & 1;
  }
  
  int main() {
      int num;
      cout << "Enter a number: ";
      cin >> num;
      
      if (isOdd(num)) {
          cout << num << " is odd" << endl;
      } else {
          cout << num << " is even" << endl;
      }
      return 0;
  }`,
        javacode: `import java.util.Scanner;
  
  public class OddEven {
      public static boolean isOdd(int num) {
          return (num & 1) != 0;
      }
      
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          System.out.print("Enter a number: ");
          int num = sc.nextInt();
          
          if (isOdd(num)) {
              System.out.println(num + " is odd");
          } else {
              System.out.println(num + " is even");
          }
      }
  }`,
        pythoncode: `def is_odd(num):
      return num & 1
  
  num = int(input("Enter a number: "))
  if is_odd(num):
      print(f"{num} is odd")
  else:
      print(f"{num} is even")`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(1), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/check-if-a-number-is-odd-or-even-using-bitwise-operators/"
      },
      {
        title: "Count the Number of Set Bits",
        description: "Count the number of 1s in the binary representation of a number (Hamming weight).",
        approach: [
          "1. Initialize count to 0",
          "2. While number is greater than 0:",
          "   a. Perform bitwise AND with 1",
          "   b. Add result to count",
          "   c. Right shift number by 1",
          "3. Return count"
        ],
        algorithmCharacteristics: [
          "Time complexity: O(log n) - runs in number of bits",
          "Space complexity: O(1)",
          "Works for both positive and negative numbers",
          "More efficient methods exist (Brian Kernighan's algorithm)",
          "Fundamental operation in many bit manipulation problems"
        ],
        complexityDetails: {
          time: "O(log n)",
          space: "O(1)",
          explanation: "Iterates through each bit of the number"
        },
        cppcode: `#include <iostream>
  using namespace std;
  
  int countSetBits(int num) {
      int count = 0;
      while (num) {
          count += num & 1;
          num >>= 1;
      }
      return count;
  }
  
  int main() {
      int num;
      cout << "Enter a number: ";
      cin >> num;
      cout << "Number of set bits: " << countSetBits(num) << endl;
      return 0;
  }`,
        javacode: `import java.util.Scanner;
  
  public class CountSetBits {
      public static int countSetBits(int num) {
          int count = 0;
          while (num != 0) {
              count += num & 1;
              num >>>= 1;  // Use unsigned right shift
          }
          return count;
      }
      
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          System.out.print("Enter a number: ");
          int num = sc.nextInt();
          System.out.println("Number of set bits: " + countSetBits(num));
      }
  }`,
        pythoncode: `def count_set_bits(num):
      count = 0
      while num:
          count += num & 1
          num >>= 1
      return count
  
  num = int(input("Enter a number: "))
  print(f"Number of set bits: {count_set_bits(num)}")`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/"
      },
      {
        title: "Swap Two Numbers Without Temporary Variable",
        description: "Swap two numbers without using a temporary variable using bitwise XOR.",
        approach: [
          "1. Using arithmetic operations (addition and subtraction):",
          "   a = a + b",
          "   b = a - b",
          "   a = a - b",
          "2. Using bitwise XOR operation:",
          "   a = a ^ b",
          "   b = a ^ b",
          "   a = a ^ b"
        ],
        algorithmCharacteristics: [
          "Time complexity: O(1)",
          "Space complexity: O(1)",
          "Avoids using temporary variable",
          "Arithmetic method may overflow with large numbers",
          "XOR method works for any primitive data type"
        ],
        complexityDetails: {
          time: "O(1)",
          space: "O(1)",
          explanation: "Three XOR operations with constant time"
        },
        cppcode: `#include <iostream>
  using namespace std;
  
  void swapNumbers(int &a, int &b) {
      // Using arithmetic operations
      a = a + b;
      b = a - b;
      a = a - b;
      
      // Alternative using XOR (uncomment to use)
      // a = a ^ b;
      // b = a ^ b;
      // a = a ^ b;
  }
  
  int main() {
      int x = 5, y = 10;
      cout << "Before swap: x = " << x << ", y = " << y << endl;
      swapNumbers(x, y);
      cout << "After swap: x = " << x << ", y = " << y << endl;
      return 0;
  }`,
        javacode: `public class SwapNumbers {
      public static void swapNumbers(int[] nums) {
          // Using arithmetic operations
          nums[0] = nums[0] + nums[1];
          nums[1] = nums[0] - nums[1];
          nums[0] = nums[0] - nums[1];
          
          // Alternative using XOR (uncomment to use)
          // nums[0] = nums[0] ^ nums[1];
          // nums[1] = nums[0] ^ nums[1];
          // nums[0] = nums[0] ^ nums[1];
      }
      
      public static void main(String[] args) {
          int[] nums = {5, 10};
          System.out.println("Before swap: x = " + nums[0] + ", y = " + nums[1]);
          swapNumbers(nums);
          System.out.println("After swap: x = " + nums[0] + ", y = " + nums[1]);
      }
  }`,
        pythoncode: `def swap_numbers(a, b):
      # Using arithmetic operations
      a = a + b
      b = a - b
      a = a - b
      return a, b
      
      # Alternative using XOR (uncomment to use)
      # a = a ^ b
      # b = a ^ b
      # a = a ^ b
      # return a, b
  
  x, y = 5, 10
  print(f"Before swap: x = {x}, y = {y}")
  x, y = swap_numbers(x, y)
  print(f"After swap: x = {x}, y = {y}")`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(1), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/"
      },
      {
        title: "Find the Number That Appears Odd Number of Times",
        description: "Given an array where all numbers occur even number of times except one, find the odd occurring number.",
        approach: [
          "1. Initialize result to 0",
          "2. XOR all elements in the array with result",
          "3. Even occurrences will cancel out (XOR with same number = 0)",
          "4. Final result will be the number with odd count"
        ],
        algorithmCharacteristics: [
          "Time complexity: O(n)",
          "Space complexity: O(1)",
          "Efficient one-pass solution",
          "Works for both positive and negative numbers",
          "Uses XOR properties:",
          "  - a ^ a = 0",
          "  - a ^ 0 = a",
          "  - XOR is commutative and associative"
        ],
        complexityDetails: {
          time: "O(n)",
          space: "O(1)",
          explanation: "Single pass through the array with constant operations"
        },
        cppcode: `#include <iostream>
  #include <vector>
  using namespace std;
  
  int findOddOccurrence(const vector<int>& nums) {
      int res = 0;
      for (int num : nums) {
          res ^= num;
      }
      return res;
  }
  
  int main() {
      vector<int> nums = {1, 2, 3, 2, 3, 1, 3};
      cout << "The number appearing odd times is: " 
           << findOddOccurrence(nums) << endl;
      return 0;
  }`,
        javacode: `public class OddOccurrence {
      public static int findOddOccurrence(int[] nums) {
          int res = 0;
          for (int num : nums) {
              res ^= num;
          }
          return res;
      }
      
      public static void main(String[] args) {
          int[] nums = {1, 2, 3, 2, 3, 1, 3};
          System.out.println("The number appearing odd times is: " 
                            + findOddOccurrence(nums));
      }
  }`,
        pythoncode: `def find_odd_occurrence(nums):
      res = 0
      for num in nums:
          res ^= num
      return res
  
  nums = [1, 2, 3, 2, 3, 1, 3]
  print(f"The number appearing odd times is: {find_odd_occurrence(nums)}")`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(n), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/"
      },
      {
        title: "Divide Two Integers Without Using Division Operator",
        description: "Divide two integers without using multiplication, division or mod operator, handling overflow cases.",
        approach: [
          "1. Handle special cases (division by zero, INT_MIN / -1)",
          "2. Determine sign of result",
          "3. Work with absolute values",
          "4. Use bit shifting to find largest multiple",
          "5. Subtract multiples from dividend",
          "6. Apply sign to result"
        ],
        algorithmCharacteristics: [
          "Time complexity: O(log n)",
          "Space complexity: O(1)",
          "Handles 32-bit integer range",
          "Efficient using bit manipulation",
          "Works for both positive and negative numbers"
        ],
        complexityDetails: {
          time: "O(log n)",
          space: "O(1)",
          explanation: "Uses bit shifting to perform logarithmic division"
        },
        cppcode: `#include <iostream>
  #include <climits>
  using namespace std;
  
  int divide(int dividend, int divisor) {
      if (dividend == INT_MIN && divisor == -1) {
          return INT_MAX;  // Handle overflow
      }
      
      long dvd = labs(dividend), dvs = labs(divisor);
      int sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
      long res = 0;
      
      while (dvd >= dvs) {
          long temp = dvs, multiple = 1;
          while (dvd >= (temp << 1)) {
              temp <<= 1;
              multiple <<= 1;
          }
          dvd -= temp;
          res += multiple;
      }
      
      return sign * res;
  }
  
  int main() {
      int dividend, divisor;
      cout << "Enter dividend: ";
      cin >> dividend;
      cout << "Enter divisor: ";
      cin >> divisor;
      cout << "Result: " << divide(dividend, divisor) << endl;
      return 0;
  }`,
        javacode: `public class IntegerDivision {
      public static int divide(int dividend, int divisor) {
          if (dividend == Integer.MIN_VALUE && divisor == -1) {
              return Integer.MAX_VALUE;  // Handle overflow
          }
          
          long dvd = Math.abs((long)dividend), dvs = Math.abs((long)divisor);
          int sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
          long res = 0;
          
          while (dvd >= dvs) {
              long temp = dvs, multiple = 1;
              while (dvd >= (temp << 1)) {
                  temp <<= 1;
                  multiple <<= 1;
              }
              dvd -= temp;
              res += multiple;
          }
          
          return (int)(sign * res);
      }
      
      public static void main(String[] args) {
          int dividend = 10, divisor = 3;
          System.out.println("Result: " + divide(dividend, divisor));
      }
  }`,
        pythoncode: `def divide(dividend, divisor):
      if dividend == -2**31 and divisor == -1:
          return 2**31 - 1  # Handle overflow
      
      dvd, dvs = abs(dividend), abs(divisor)
      sign = -1 if (dividend < 0) ^ (divisor < 0) else 1
      res = 0
      
      while dvd >= dvs:
          temp, multiple = dvs, 1
          while dvd >= (temp << 1):
              temp <<= 1
              multiple <<= 1
          dvd -= temp
          res += multiple
      
      return sign * res
  
  dividend = int(input("Enter dividend: "))
  divisor = int(input("Enter divisor: "))
  print(f"Result: {divide(dividend, divisor)}")`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/"
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
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text mb-8 sm:mb-12 ${
          darkMode
            ? "bg-gradient-to-r from-indigo-300 to-purple-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-700"
        }`}
      >
        Bit Manipulation with Solutions
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

export default Bit1;
