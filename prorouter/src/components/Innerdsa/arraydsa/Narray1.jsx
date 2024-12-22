import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Narray1() {
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
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md max-w-7xl">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Code Examples
      </h1>
      {codeExamples.map((example, index) => (
        <div
          key={index}
          className="mb-6 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            {example.title}
          </h2>
          <p className="text-gray-700 mb-4">{example.description}</p>
          <SyntaxHighlighter language={example.language} style={tomorrow}>
            {example.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
}

export default Narray1;
