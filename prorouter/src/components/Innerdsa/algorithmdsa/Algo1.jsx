import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function algo1() {
  const codeExamples = [
    {
      title: "Binary Search",
      description: "A fast search algorithm with O(log n) complexity.",
      code: `
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
      `,
      language: "javascript",
    },
    {
      title: "Bubble Sort",
      description: "A simple algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if needed.",
      code: `
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
      `,
      language: "javascript",
    },
    {
      title: "Factorial (Recursive)",
      description: "A recursive function to calculate the factorial of a number.",
      code: `
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
      `,
      language: "javascript",
    },
  ];

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-indigo-50 to-gray-50 rounded-lg shadow-lg max-w-7xl">
      <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-8 underline underline-offset-4">
        Code Examples
      </h1>
      {codeExamples.map((example, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            {example.title}
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            {example.description}
          </p>
          <div className="rounded-md overflow-hidden border-2 border-indigo-200">
            <SyntaxHighlighter
              language={example.language}
              style={tomorrow}
              customStyle={{
                padding: "1rem",
                fontSize: "1rem",
                background: "#f8f8f8",
              }}
            >
              {example.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
}

export default algo1;
