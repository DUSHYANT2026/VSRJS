import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodePage = () => {
  const codeExamples = [
    {
      title: "Binary Search",
      description: "Binary Search is a fast search algorithm with a time complexity of O(log n).",
      language: "javascript",
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
    },
    {
      title: "Bubble Sort",
      description: "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list.",
      language: "javascript",
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
    },
    {
      title: "Factorial (Recursive)",
      description: "A function to calculate the factorial of a number recursively.",
      language: "javascript",
      code: `
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
      `,
    },
  ];

  return (
    <div>
      <h1>Code Examples</h1>
      {codeExamples.map((example, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h2>{example.title}</h2>
          <p>{example.description}</p>
          <SyntaxHighlighter language={example.language} style={tomorrow}>
            {example.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
};

export default CodePage;
