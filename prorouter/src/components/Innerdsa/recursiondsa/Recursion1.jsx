import React, { useState, useEffect, useMemo } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import PropTypes from "prop-types";
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

CodeExample.propTypes = {
  example: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

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
          language === "cpp" ? "C++" : language === "java" ? "Java" : "Python"
        } Code`
      : `Show ${
          language === "cpp" ? "C++" : language === "java" ? "Java" : "Python"
        } Code`}
  </button>
);

ToggleCodeButton.propTypes = {
  language: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Recursion1() {
  const { darkMode } = useTheme();
  const [visibleCodes, setVisibleCodes] = useState({
    cpp: null,
    java: null,
    python: null,
  });
  const [expandedSections, setExpandedSections] = useState({});

  const toggleCodeVisibility = (language, index) => {
    setVisibleCodes({
      cpp: language === "cpp" && visibleCodes.cpp !== index ? index : null,
      java: language === "java" && visibleCodes.java !== index ? index : null,
      python:
        language === "python" && visibleCodes.python !== index ? index : null,
    });
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

  const recursionExamples = useMemo(
    () => [
      {
        title: "Factorial Calculation",
        description:
          "Factorial is a fundamental example of recursion where n! = n × (n-1)! with base case 0! = 1.",
        approach: `
  1. Define base case: factorial(0) = 1
  2. Recursive case: factorial(n) = n * factorial(n-1)
  3. Each recursive call reduces the problem size
  4. Stack unwinds when base case is reached`,
        algorithm: `
  • Time complexity: O(n)
  • Space complexity: O(n) (due to call stack)
  • Stack overflow risk for large n
  • Can be optimized with tail recursion
  • Demonstrates basic recursion pattern`,
        cppcode: `#include <iostream>
using namespace std;

int factorial(int n) {
  if (n == 0) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

int main() {
  int num = 5;
  cout << "Factorial of " << num << " is " << factorial(num);
  return 0;
}`,
        javacode: `public class Factorial {
  public static int factorial(int n) {
    if (n == 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
  }
  
  public static void main(String[] args) {
    int num = 5;
    System.out.println("Factorial of " + num + " is " + factorial(num));
  }
}`,
        pythoncode: `def factorial(n):
    if n == 0:  # Base case
        return 1
    return n * factorial(n - 1)  # Recursive case

num = 5
print(f"Factorial of {num} is {factorial(num)}")`,
        complexity: "Time Complexity: O(n), Space Complexity: O(n)",
        link: "https://www.geeksforgeeks.org/recursion/",
      },
      {
        title: "Fibonacci Sequence",
        description:
          "Fibonacci sequence demonstrates multiple recursive calls where each number is the sum of the two preceding ones.",
        approach: `
  1. Base cases: fib(0) = 0, fib(1) = 1
  2. Recursive case: fib(n) = fib(n-1) + fib(n-2)
  3. Each call branches into two recursive calls
  4. Exponential time complexity in naive implementation`,
        algorithm: `
  • Time complexity: O(2^n) naive, O(n) with memoization
  • Space complexity: O(n) (call stack depth)
  • Classic example of tree recursion
  • Shows importance of memoization
  • Can be optimized iteratively`,
        cppcode: `#include <iostream>
using namespace std;

int fib(int n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}

int main() {
  int n = 6;
  cout << "Fibonacci(" << n << ") = " << fib(n);
  return 0;
}`,
        javacode: `public class Fibonacci {
  public static int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
  }
  
  public static void main(String[] args) {
    int n = 6;
    System.out.println("Fibonacci(" + n + ") = " + fib(n));
  }
}`,
        pythoncode: `def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

n = 6
print(f"Fibonacci({n}) = {fib(n)}")`,
        complexity: "Time Complexity: O(2^n), Space Complexity: O(n)",
        link: "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/",
      },
      {
        title: "Tower of Hanoi",
        description:
          "Tower of Hanoi is a mathematical puzzle that demonstrates recursive problem-solving by breaking down the problem into smaller subproblems.",
        approach: `
  1. Move n-1 disks from source to auxiliary peg
  2. Move nth disk from source to destination
  3. Move n-1 disks from auxiliary to destination
  4. Base case: when only 1 disk needs to be moved`,
        algorithm: `
  • Time complexity: O(2^n)
  • Space complexity: O(n)
  • Classic example of problem decomposition
  • Demonstrates divide-and-conquer strategy
  • Minimum moves required: 2^n - 1`,
        cppcode: `#include <iostream>
using namespace std;

void towerOfHanoi(int n, char from, char to, char aux) {
  if (n == 1) {
    cout << "Move disk 1 from " << from << " to " << to << endl;
    return;
  }
  towerOfHanoi(n-1, from, aux, to);
  cout << "Move disk " << n << " from " << from << " to " << to << endl;
  towerOfHanoi(n-1, aux, to, from);
}

int main() {
  int n = 3;
  towerOfHanoi(n, 'A', 'C', 'B');
  return 0;
}`,
        javacode: `public class TowerOfHanoi {
  public static void towerOfHanoi(int n, char from, char to, char aux) {
    if (n == 1) {
      System.out.println("Move disk 1 from " + from + " to " + to);
      return;
    }
    towerOfHanoi(n-1, from, aux, to);
    System.out.println("Move disk " + n + " from " + from + " to " + to);
    towerOfHanoi(n-1, aux, to, from);
  }
  
  public static void main(String[] args) {
    int n = 3;
    towerOfHanoi(n, 'A', 'C', 'B');
  }
}`,
        pythoncode: `def tower_of_hanoi(n, from_rod, to_rod, aux_rod):
    if n == 1:
        print(f"Move disk 1 from {from_rod} to {to_rod}")
        return
    tower_of_hanoi(n-1, from_rod, aux_rod, to_rod)
    print(f"Move disk {n} from {from_rod} to {to_rod}")
    tower_of_hanoi(n-1, aux_rod, to_rod, from_rod)

n = 3
tower_of_hanoi(n, 'A', 'C', 'B')`,
        complexity: "Time Complexity: O(2^n), Space Complexity: O(n)",
        link: "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/",
      },
    ],
    []
  );

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
        Recursion Concepts
      </h1>

      <div className="space-y-8">
        {recursionExamples.map((example, index) => (
          <article
            key={index}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-indigo-100"
            }`}
            aria-labelledby={`recursion-${index}-title`}
          >
            <header className="mb-6">
              <button
                onClick={() => toggleDetails(index)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <h2
                  id={`recursion-${index}-title`}
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

export default Recursion1;