import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function algo1() {
  const codeExamples = [
    {
      title: "Binary Search (C++)",
      description: "A fast search algorithm implemented in C++ with O(log n) complexity. This algorithm works on a sorted array to find the target element by repeatedly dividing the search interval in half.",
      code: `
#include <iostream>
#include <vector>
using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2; 
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Target not found
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    int target = 7;
    int result = binarySearch(arr, target);
    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    } else {
        cout << "Element not found." << endl;
    }
    return 0;
}
      `,
      language: "cpp",
      complexity: "Time Complexity: O(log n), Space Complexity: O(1)",
    },
    {
      title: "Bubble Sort",
      description: "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.",
      code: `
#include <iostream>
#include <vector>

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    bool swapped;
    
    for (int i = 0; i < n - 1; ++i) {
        swapped = false;
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

void printArray(const vector<int>& arr) {
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    
    cout << "Original array: ";
    printArray(arr);
    bubbleSort(arr);
    cout << "Sorted array: ";
    printArray(arr);
    
    return 0;
}

      `,
      language: "cpp",
      complexity: "Time Complexity: O(n^2), Space Complexity: O(1)",
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
      complexity: "Time Complexity: O(n), Space Complexity: O(n)",
    },
  ];

  return (
    <div className="container mx-auto p-10 bg-gradient-to-br from-indigo-50 to-gray-100 rounded-lg shadow-xl max-w-8xl">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-10 underline underline-offset-8">
        Theory And Code
      </h1>
      {codeExamples.map((example, index) => (
        <div
          key={index}
          className="mb-10 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 border border-indigo-200"
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            {example.title}
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {example.description}
          </p>
          <p className="text-gray-700 font-semibold mb-4">
            <span className="text-indigo-700">Complexity:</span> {example.complexity}
          </p>
          <div className="rounded-lg overflow-hidden border-2 border-indigo-300">
            <SyntaxHighlighter
              language={example.language}
              style={tomorrow}
              customStyle={{
                padding: "1.5rem",
                fontSize: "1rem",
                background: "#f9f9f9",
                borderRadius: "0.5rem",
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
