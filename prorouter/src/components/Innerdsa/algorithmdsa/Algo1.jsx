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

function Algo1() {
  const { darkMode, toggleTheme } = useTheme();
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

  const codeExamples = useMemo(
    () => [
      {
        title: "Selection Sort",
        description:
          "Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted.",
        approach: `
  1. Divide the input list into sorted and unsorted parts
  2. Initially, the sorted sublist is empty
  3. Find the smallest element in the unsorted sublist
  4. Swap it with the leftmost unsorted element
  5. Move the sublist boundaries one element to the right
  6. Repeat until the entire list is sorted`,
        algorithm: `
  • In-place algorithm (doesn't require extra space)
  • Not stable (may change relative order of equal elements)
  • Time complexity: O(n²) in all cases
  • Space complexity: O(1)
  • Performs well on small lists`,
        cppcode: `#include <iostream>
  #include <vector>
  using namespace std;
  void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
      int minIndex = i;
      for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      swap(arr[i], arr[minIndex]);
    }
  }
  void printArray(const vector<int>& arr) {
    for (int num : arr) {
      cout << num << " ";
    }
    cout << endl;
  }
  int main() {
    vector<int> arr = {64, 25, 12, 22, 11};
    cout << "Original array: ";
    printArray(arr);
    selectionSort(arr);
    cout << "Sorted array: ";
    printArray(arr);
    return 0;
  }`,
        javacode: `public class SelectionSort {
    public static void selectionSort(int[] arr) {
      int n = arr.length;
      for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
    }
    public static void printArray(int[] arr) {
      for (int num : arr) {
        System.out.print(num + " ");
      }
      System.out.println();
    }
    public static void main(String[] args) {
      int[] arr = {64, 25, 12, 22, 11};
      System.out.print("Original array: ");
      printArray(arr);
      selectionSort(arr);
      System.out.print("Sorted array: ");
      printArray(arr);
    }
  }`,
        pythoncode: `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
  
  def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()
  
  arr = [64, 25, 12, 22, 11]
  print("Original array:", end=" ")
  print_array(arr)
  selection_sort(arr)
  print("Sorted array:", end=" ")
  print_array(arr)`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(n^2), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/selection-sort/",
      },
      {
        title: "Insertion Sort",
        description:
          "Insertion Sort builds the final sorted array one item at a time by iteratively inserting each element into its proper position within the sorted portion of the array.",
        approach: `
  1. Start with the second element (consider first element as sorted)
  2. Compare current element with its predecessor
  3. If current element is smaller, compare it to elements before
  4. Move greater elements one position up to make space
  5. Insert current element in its correct position
  6. Repeat until entire array is sorted`,
        algorithm: `
  • Efficient for small data sets or nearly sorted data
  • Stable sorting algorithm
  • In-place (only requires constant O(1) additional space)
  • Adaptive (performance improves with partially sorted input)
  • Time complexity: O(n²) worst case, O(n) best case`,
        cppcode: `#include <iostream>
  #include <vector>
  using namespace std;
  void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
      int key = arr[i];
      int j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  void printArray(const vector<int>& arr) {
    for (int num : arr) {
      cout << num << " ";
    }
    cout << endl;
  }
  int main() {
    vector<int> arr = {64, 25, 12, 22, 11};
    cout << "Original array: ";
    printArray(arr);
    insertionSort(arr);
    cout << "Sorted array: ";
    printArray(arr);
    return 0;
  }`,
        javacode: `public class InsertionSort {
    public static void insertionSort(int[] arr) {
      int n = arr.length;
      for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
      }
    }
    public static void printArray(int[] arr) {
      for (int num : arr) {
        System.out.print(num + " ");
      }
      System.out.println();
    }
    public static void main(String[] args) {
      int[] arr = {64, 25, 12, 22, 11};
      System.out.print("Original array: ");
      printArray(arr);
      insertionSort(arr);
      System.out.print("Sorted array: ");
      printArray(arr);
    }
  }`,
        pythoncode: `def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
  
  def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()
  
  arr = [64, 25, 12, 22, 11]
  print("Original array:", end=" ")
  print_array(arr)
  insertion_sort(arr)
  print("Sorted array:", end=" ")
  print_array(arr)`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(n^2), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/insertion-sort/",
      },
      {
        title: "Merge Sort",
        description:
          "Merge Sort is a divide-and-conquer algorithm that recursively divides the input array into smaller subarrays, sorts them, and then merges them back together to produce a sorted array.",
        approach: `
  1. Divide the unsorted list into n sublists (each containing 1 element)
  2. Repeatedly merge sublists to produce new sorted sublists
  3. Continue until there is only 1 sublist remaining (the sorted list)
  4. Merging is done by comparing elements of sublists and placing them in order`,
        algorithm: `
  • Stable sorting algorithm
  • Not in-place (requires O(n) additional space)
  • Excellent for linked lists (requires only O(1) extra space)
  • Well-suited for external sorting (handles massive datasets)
  • Time complexity: O(n log n) in all cases
  • Space complexity: O(n)`,
        cppcode: `#include <iostream>
  #include <vector>
  using namespace std;
  void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++)
      L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
      R[j] = arr[mid + 1 + j];
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
      int mid = left + (right - left) / 2;
      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);
      merge(arr, left, mid, right);
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
    mergeSort(arr, 0, arr.size() - 1);
    cout << "Sorted array: ";
    printArray(arr);
    return 0;
  }`,
        javacode: `public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
      if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
      }
    }
    public static void merge(int[] arr, int left, int mid, int right) {
      int n1 = mid - left + 1;
      int n2 = right - mid;
      int[] L = new int[n1];
      int[] R = new int[n2];
      for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
      for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
      int i = 0, j = 0, k = left;
      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        } else {
          arr[k] = R[j];
          j++;
        }
        k++;
      }
      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
      }
      while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
      }
    }
    public static void printArray(int[] arr) {
      for (int num : arr) {
        System.out.print(num + " ");
      }
      System.out.println();
    }
    public static void main(String[] args) {
      int[] arr = {64, 34, 25, 12, 22, 11, 90};
      System.out.print("Original array: ");
      printArray(arr);
      mergeSort(arr, 0, arr.length - 1);
      System.out.print("Sorted array: ");
      printArray(arr);
    }
  }`,
        pythoncode: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]
        merge_sort(left_half)
        merge_sort(right_half)
        i = j = k = 0
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1
        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1
        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
  
  def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()
  
  arr = [64, 34, 25, 12, 22, 11, 90]
  print("Original array:", end=" ")
  print_array(arr)
  merge_sort(arr)
  print("Sorted array:", end=" ")
  print_array(arr)`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(n log n), Space Complexity: O(n)",
        link: "https://www.geeksforgeeks.org/merge-sort/",
      },
      {
        title: "Quick Sort",
        description:
          "Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element and partitions the array around the pivot, placing smaller elements before it and larger elements after it.",
        approach: `
  1. Select a 'pivot' element from the array
  2. Partition the array around the pivot
  3. Place all elements smaller than pivot before it
  4. Place all elements greater than pivot after it
  5. Recursively apply the same steps to the sub-arrays
  6. Base case: subarrays of size 0 or 1 are already sorted`,
        algorithm: `
  • In-place algorithm (but requires O(log n) stack space)
  • Not stable (may change relative order of equal elements)
  • Average time complexity: O(n log n)
  • Worst case time complexity: O(n²) (rare with good pivot selection)
  • Cache-efficient due to sequential memory access
  • Often faster in practice than other O(n log n) algorithms`,
        cppcode: `#include <iostream>
  #include <vector>
  using namespace std;
  int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr[i], arr[j]);
      }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
  }
  void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
      int pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
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
    quickSort(arr, 0, arr.size() - 1);
    cout << "Sorted array: ";
    printArray(arr);
    return 0;
  }`,
        javacode: `public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
      if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
      }
    }
    public static int partition(int[] arr, int low, int high) {
      int pivot = arr[high];
      int i = (low - 1);
      for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      int temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      return i + 1;
    }
    public static void printArray(int[] arr) {
      for (int num : arr) {
        System.out.print(num + " ");
      }
      System.out.println();
    }
    public static void main(String[] args) {
      int[] arr = {64, 34, 25, 12, 22, 11, 90};
      System.out.print("Original array: ");
      printArray(arr);
      quickSort(arr, 0, arr.length - 1);
      System.out.print("Sorted array: ");
      printArray(arr);
    }
  }`,
        pythoncode: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
  
  def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
  
  def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()
  
  arr = [64, 34, 25, 12, 22, 11, 90]
  print("Original array:", end=" ")
  print_array(arr)
  quick_sort(arr, 0, len(arr) - 1)
  print("Sorted array:", end=" ")
  print_array(arr)`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(n log n), Space Complexity: O(log n)",
        link: "https://www.geeksforgeeks.org/quick-sort/",
      },
      {
        title: "Heap Sort using Min-Heap and Max-Heap",
        description:
          "Heap Sort visualizes the array as a complete binary tree and sorts elements by building either a min-heap or max-heap and repeatedly extracting the root element.",
        approach: `Approach (Max-Heap):
  1. Build a max heap from the input data
  2. Swap the root (maximum value) with the last item
  3. Reduce heap size by one
  4. Heapify the new root
  5. Repeat until heap size is 1
  
  Approach (Min-Heap):
  1. Build a min heap from the input data
  2. Swap the root (minimum value) with the last item
  3. Reduce heap size by one
  4. Heapify the new root
  5. Repeat until heap size is 1`,
        algorithm: `
  • In-place algorithm
  • Not stable
  • Time complexity: O(n log n) in all cases
  • Space complexity: O(1)
  • Often used when we need the smallest/largest k elements
  • Used to implement priority queues
  • Can be implemented with either min-heap or max-heap`,
        cppcode: `#include <iostream>
  #include <algorithm>
  using namespace std;
  void minHeapify(int n, int a[], int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left < n && a[left] < a[smallest])
      smallest = left;
    if (right < n && a[right] < a[smallest])
      smallest = right;
    if (smallest != i) {
      swap(a[smallest], a[i]);
      minHeapify(n, a, smallest);
    }
  }
  void maxHeapify(int n, int a[], int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left < n && a[left] > a[largest])
      largest = left;
    if (right < n && a[right] > a[largest])
      largest = right;
    if (largest != i) {
      swap(a[largest], a[i]);
      maxHeapify(n, a, largest);
    }
  }
  void heapSortMin(int n, int a[]) {
    for (int i = n / 2 - 1; i >= 0; i--)
      minHeapify(n, a, i);
    for (int i = n - 1; i > 0; i--) {
      swap(a[0], a[i]);
      minHeapify(i, a, 0);
    }
  }
  void heapSortMax(int n, int a[]) {
    for (int i = n / 2 - 1; i >= 0; i--)
      maxHeapify(n, a, i);
    for (int i = n - 1; i > 0; i--) {
      swap(a[0], a[i]);
      maxHeapify(i, a, 0);
    }
  }
  int main() {
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;
    int a[n];
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; i++)
      cin >> a[i];
    cout << "\nArray before sorting: ";
    for (int i = 0; i < n; i++)
      cout << a[i] << " ";
    cout << endl;
    int minHeapArray[n];
    copy(a, a + n, minHeapArray);
    heapSortMin(n, minHeapArray);
    cout << "\nArray after Min-Heap Sort: ";
    for (int i = 0; i < n; i++)
      cout << minHeapArray[i] << " ";
    cout << endl;
    int maxHeapArray[n];
    copy(a, a + n, maxHeapArray);
    heapSortMax(n, maxHeapArray);
    cout << "\nArray after Max-Heap Sort: ";
    for (int i = 0; i < n; i++)
      cout << maxHeapArray[i] << " ";
    cout << endl;
    return 0;
  }`,
        javacode: `public class HeapSort {
    public static void minHeapify(int[] arr, int n, int i) {
      int smallest = i;
      int left = 2 * i + 1;
      int right = 2 * i + 2;
      if (left < n && arr[left] < arr[smallest])
        smallest = left;
      if (right < n && arr[right] < arr[smallest])
        smallest = right;
      if (smallest != i) {
        int temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        minHeapify(arr, n, smallest);
      }
    }
    public static void maxHeapify(int[] arr, int n, int i) {
      int largest = i;
      int left = 2 * i + 1;
      int right = 2 * i + 2;
      if (left < n && arr[left] > arr[largest])
        largest = left;
      if (right < n && arr[right] > arr[largest])
        largest = right;
      if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        maxHeapify(arr, n, largest);
      }
    }
    public static void heapSortMin(int[] arr) {
      int n = arr.length;
      for (int i = n / 2 - 1; i >= 0; i--)
        minHeapify(arr, n, i);
      for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        minHeapify(arr, i, 0);
      }
    }
    public static void heapSortMax(int[] arr) {
      int n = arr.length;
      for (int i = n / 2 - 1; i >= 0; i--)
        maxHeapify(arr, n, i);
      for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        maxHeapify(arr, i, 0);
      }
    }
    public static void printArray(int[] arr) {
      for (int num : arr) {
        System.out.print(num + " ");
      }
      System.out.println();
    }
    public static void main(String[] args) {
      int[] arr = {64, 34, 25, 12, 22, 11, 90};
      System.out.print("Original array: ");
      printArray(arr);
      int[] minHeapArray = arr.clone();
      heapSortMin(minHeapArray);
      System.out.print("Array after Min-Heap Sort: ");
      printArray(minHeapArray);
      int[] maxHeapArray = arr.clone();
      heapSortMax(maxHeapArray);
      System.out.print("Array after Max-Heap Sort: ");
      printArray(maxHeapArray);
    }
  }`,
        pythoncode: `def min_heapify(arr, n, i):
    smallest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and arr[left] < arr[smallest]:
        smallest = left
    if right < n and arr[right] < arr[smallest]:
        smallest = right
    if smallest != i:
        arr[i], arr[smallest] = arr[smallest], arr[i]
        min_heapify(arr, n, smallest)
  
  def max_heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        max_heapify(arr, n, largest)
  
  def heap_sort_min(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        min_heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        min_heapify(arr, i, 0)
  
  def heap_sort_max(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        max_heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        max_heapify(arr, i, 0)
  
  def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()
  
  arr = [64, 34, 25, 12, 22, 11, 90]
  print("Original array:", end=" ")
  print_array(arr)
  min_heap_array = arr.copy()
  heap_sort_min(min_heap_array)
  print("Array after Min-Heap Sort:", end=" ")
  print_array(min_heap_array)
  max_heap_array = arr.copy()
  heap_sort_max(max_heap_array)
  print("Array after Max-Heap Sort:", end=" ")
  print_array(max_heap_array)`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(n log n), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/heap-sort/",
      },
      {
        title: "Convert Min Heap to Max Heap",
        description:
          "Converting a Min Heap to a Max Heap involves rearranging the elements of the heap to satisfy the max-heap property without changing the underlying complete binary tree structure.",
        approach: `
  1. Start from the last non-leaf node (at index n/2 - 1)
  2. Perform a max-heapify operation on each node
  3. Move up the tree level by level
  4. Ensure each subtree satisfies the max-heap property
  5. Continue until reaching the root node
  6. Max-heapify compares node with children and swaps if necessary`,
        algorithm: `
  • Time complexity: O(n) (not O(n log n) as might be expected)
  • Space complexity: O(1) if done in-place
  • Doesn't require additional memory for conversion
  • Works by rearranging elements within the same array
  • Maintains the complete binary tree property
  • Only the heap property changes from min to max`,
        cppcode: `#include<bits/stdc++.h>
  using namespace std;
  class Solution {
  private:
    void heapify(int n, vector<int>& arr, int i) {
      int largest = i;
      int left = 2 * i + 1;
      int right = 2 * i + 2;
      if (left < n && arr[left] > arr[largest])
        largest = left;
      if (right < n && arr[right] > arr[largest])
        largest = right;
      if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(n, arr, largest);
      }
    }
    void buildMaxHeap(vector<int>& arr, int n) {
      for (int i = n / 2 - 1; i >= 0; i--)
        heapify(n, arr, i);
    }
  public:
    void convertMinToMaxHeap(vector<int> &arr, int N) {
      buildMaxHeap(arr, N);
    }
  };
  int main() {
    int t = 1;
    cin >> t;
    while (t--) {
      int n; cin >> n;
      vector<int> vec(n);
      for (int i = 0; i < n; i++) cin >> vec[i];
      Solution obj;
      obj.convertMinToMaxHeap(vec, n);
      for (int i = 0; i < n; i++) cout << vec[i] << " ";
      cout << endl;
      cout << "~" << "\n";
    }
    return 0;
  }`,
        javacode: `public class ConvertMinToMaxHeap {
    private static void heapify(int[] arr, int n, int i) {
      int largest = i;
      int left = 2 * i + 1;
      int right = 2 * i + 2;
      if (left < n && arr[left] > arr[largest])
        largest = left;
      if (right < n && arr[right] > arr[largest])
        largest = right;
      if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
      }
    }
    private static void buildMaxHeap(int[] arr, int n) {
      for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    }
    public static void convertMinToMaxHeap(int[] arr, int n) {
      buildMaxHeap(arr, n);
    }
    public static void printArray(int[] arr) {
      for (int num : arr) {
        System.out.print(num + " ");
      }
      System.out.println();
    }
    public static void main(String[] args) {
      int[] arr = {3, 5, 9, 6, 8, 20, 10, 12, 18, 9};
      System.out.print("Original array: ");
      printArray(arr);
      convertMinToMaxHeap(arr, arr.length);
      System.out.print("Converted Max-Heap array: ");
      printArray(arr);
    }
  }`,
        pythoncode: `def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
  
  def build_max_heap(arr, n):
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
  
  def convert_min_to_max_heap(arr):
    n = len(arr)
    build_max_heap(arr, n)
  
  def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()
  
  arr = [3, 5, 9, 6, 8, 20, 10, 12, 18, 9]
  print("Original array:", end=" ")
  print_array(arr)
  convert_min_to_max_heap(arr)
  print("Converted Max-Heap array:", end=" ")
  print_array(arr)`,
        language: "cpp",
        javaLanguage: "java",
        pythonlanguage: "python",
        complexity: "Time Complexity: O(n), Space Complexity: O(1)",
        link: "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
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
        Sorting Algorithms
      </h1>

      <div className="space-y-8">
        {codeExamples.map((example, index) => (
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

export default Algo1;
