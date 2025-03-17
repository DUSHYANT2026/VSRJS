import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function dynamic3() {
  const [visibleCodeIndex, setVisibleCodeIndex] = useState(null);
  const [visibleJavaCodeIndex, setVisibleJavaCodeIndex] = useState(null);
  const [visiblePythonCodeIndex, setVisiblePythonCodeIndex] = useState(null);

  const toggleCodeVisibility = (index) => {
    if (visibleCodeIndex === index) {
      setVisibleCodeIndex(null);
    } else {
      setVisibleCodeIndex(index);
    }
  };

  const toggleJavaCodeVisibility = (index) => {
    if (visibleJavaCodeIndex === index) {
      setVisibleJavaCodeIndex(null);
    } else {
      setVisibleJavaCodeIndex(index);
    }
  };

  const togglePythonCodeVisibility = (index) => {
    if (visiblePythonCodeIndex === index) {
      setVisiblePythonCodeIndex(null);
    } else {
      setVisiblePythonCodeIndex(index);
    }
  };

  const codeExamples = [
    {
      title: "Bubble Sort",
      description:
        "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.",
      cppcode: `
  #include <iostream>
  #include <vector>
  using namespace std;
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
      javacode: `
  public class BubbleSort {
    public static void bubbleSort(int[] arr) {
      int n = arr.length;
      boolean swapped;
      for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }
        if (!swapped) break;
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
      bubbleSort(arr);
      System.out.print("Sorted array: ");
      printArray(arr);
    }
  }
      `,
      pythoncode: `
  def bubble_sort(arr):
      n = len(arr)
      for i in range(n):
          swapped = False
          for j in range(0, n-i-1):
              if arr[j] > arr[j+1]:
                  arr[j], arr[j+1] = arr[j+1], arr[j]
                  swapped = True
          if not swapped:
              break
  
  def print_array(arr):
      for num in arr:
          print(num, end=" ")
      print()
  
  arr = [64, 34, 25, 12, 22, 11, 90]
  print("Original array:", end=" ")
  print_array(arr)
  bubble_sort(arr)
  print("Sorted array:", end=" ")
  print_array(arr)
      `,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n^2), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/bubble-sort/",
    },
    {
      title: "Selection Sort",
      description:
        "Selection Sort is an in-place comparison sorting algorithm. It divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. It repeatedly selects the smallest (or largest) element from the unsorted sublist and swaps it with the leftmost unsorted element.",
      cppcode: `
  #include <iostream>
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
  }
      `,
      javacode: `
  public class SelectionSort {
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
  }
      `,
      pythoncode: `
  def selection_sort(arr):
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
  print_array(arr)
      `,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n^2), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/selection-sort/",
    },
    {
      title: "Insertion Sort",
      description:
        "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
      cppcode: `
  #include <iostream>
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
  }
      `,
      javacode: `
  public class InsertionSort {
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
  }
      `,
      pythoncode: `
  def insertion_sort(arr):
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
  print_array(arr)
      `,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n^2), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/insertion-sort/",
    },
    {
      title: "Merge Sort",
      description:
        "Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.",
      cppcode: `
  #include <iostream>
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
  }
      `,
      javacode: `
  public class MergeSort {
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
  }
      `,
      pythoncode: `
  def merge_sort(arr):
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
  print_array(arr)
      `,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n log n), Space Complexity: O(n)",
      link: "https://www.geeksforgeeks.org/merge-sort/",
    },
    {
      title: "Quick Sort",
      description:
        "Quick Sort is a divide-and-conquer algorithm that picks an element as a pivot and partitions the array around the pivot.",
      cppcode: `
  #include <iostream>
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
  }
      `,
      javacode: `
  public class QuickSort {
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
  }
      `,
      pythoncode: `
  def quick_sort(arr, low, high):
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
  print_array(arr)
      `,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n log n), Space Complexity: O(n)",
      link: "https://www.geeksforgeeks.org/quick-sort/",
    },
    {
      title: "Heap Sort using Min-Heap and Max-Heap",
      description:
        "This program demonstrates sorting an array using both Min-Heap and Max-Heap algorithms. It includes separate heapify functions for each heap type and sorts the array in ascending or descending order accordingly.",
      cppcode: `
  #include <iostream>
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
  }
      `,
      javacode: `
  public class HeapSort {
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
  }
      `,
      pythoncode: `
  def min_heapify(arr, n, i):
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
  print_array(max_heap_array)
      `,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n log n), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/heap-sort/",
    },
    {
      title: "Convert Min Heap to Max Heap",
      description:
        "This program demonstrates sorting an array using both Min-Heap and Max-Heap algorithms. It includes separate heapify functions for each heap type and sorts the array in ascending or descending order accordingly.",
      cppcode: `
  #include<bits/stdc++.h>
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
  }
      `,
      javacode: `
  public class ConvertMinToMaxHeap {
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
  }
      `,
      pythoncode: `
  def heapify(arr, n, i):
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
  print_array(arr)
      `,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n log n), Space Complexity: O(1)",
      link: "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-2xl max-w-7xl">
      <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-12">
        Dynamic Programming (Sequences & LIS)
      </h1>
      {codeExamples.map((example, index) => (
        <div
          key={index}
          className="mb-12 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-102 duration-300 border border-indigo-100"
        >
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">{example.title}</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">{example.description}</p>
          <p className="text-gray-800 font-semibold mb-6">
            <span className="text-indigo-700 font-bold">Complexity:</span> {example.complexity}
          </p>
          <div className="flex gap-4 mb-6">
            <a
              href={example.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              View Problem
            </a>
            </div>
            <div className="flex gap-4 mb-6">
            <button
              onClick={() => toggleCodeVisibility(index)}
              className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              {visibleCodeIndex === index ? "Hide CPP Code" : "Show CPP Code"}
            </button>
            <button
              onClick={() => toggleJavaCodeVisibility(index)}
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105"
            >
              {visibleJavaCodeIndex === index ? "Hide Java Code" : "Show Java Code"}
            </button>
            <button
              onClick={() => togglePythonCodeVisibility(index)}
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105"
            >
              {visiblePythonCodeIndex === index ? "Hide Python Code" : "Show Python Code"}
            </button>
          </div>
          {visibleCodeIndex === index && (
            <div className="rounded-lg overflow-hidden border-2 border-indigo-100 mb-6">
              <SyntaxHighlighter
                language={example.language}
                style={tomorrow}
                customStyle={{
                  padding: "1.5rem",
                  fontSize: "0.95rem",
                  background: "#f9f9f9",
                  borderRadius: "0.5rem",
                }}
              >
                {example.cppcode}
              </SyntaxHighlighter>
            </div>
          )}
          {visibleJavaCodeIndex === index && (
            <div className="rounded-lg overflow-hidden border-2 border-green-100">
              <SyntaxHighlighter
                language={example.javaLanguage}
                style={tomorrow}
                customStyle={{
                  padding: "1.5rem",
                  fontSize: "0.95rem",
                  background: "#f9f9f9",
                  borderRadius: "0.5rem",
                }}
              >
                {example.javacode}
              </SyntaxHighlighter>
            </div>
          )}
          {visiblePythonCodeIndex === index && (
            <div className="rounded-lg overflow-hidden border-2 border-yellow-100">
              <SyntaxHighlighter
                language={example.pythonlanguage}
                style={tomorrow}
                customStyle={{
                  padding: "1.5rem",
                  fontSize: "0.95rem",
                  background: "#f9f9f9",
                  borderRadius: "0.5rem",
                }}
              >
                {example.pythoncode}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default dynamic3;