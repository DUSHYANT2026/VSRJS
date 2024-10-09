import React from 'react';
import { useParams } from 'react-router-dom';

const questions = {
  1 : [
    { id: 1, name: 'Find the largest element in an array' },
    { id: 2, name: 'Reverse an array' },
    { id: 3, name: 'Find missing number in a sorted array' },
    { id: 4, name: 'Sort an array of 0s, 1s, and 2s' },
    { id: 5, name: 'Find the second largest element in an array' },
    { id: 6, name: 'Check if a string is a palindrome' },
    { id: 7, name: 'Find the first non-repeating character in a string' },
    { id: 8, name: 'Find the intersection of two arrays' },
    { id: 9, name: 'Rotate an array by k positions' },
    { id: 10, name: 'Find the majority element in an array' },
    { id: 11, name: 'Kadane’s Algorithm for Maximum Subarray Sum' },
    { id: 12, name: 'Merge two sorted arrays' },
    { id: 13, name: 'Move all zeros to the end of an array' },
    { id: 14, name: 'Find duplicates in an array' },
    { id: 15, name: 'Find the longest common prefix in an array of strings' },
    { id: 16, name: 'Find the kth largest element in an array' },
    { id: 17, name: 'Merge overlapping intervals' },
    { id: 18, name: 'Find the median of two sorted arrays' },
    { id: 19, name: 'Check if two strings are anagrams' },
    { id: 20, name: 'Find the missing number in an array from 1 to n' },
    { id: 21, name: 'Find the length of the longest substring without repeating characters' },
    { id: 22, name: 'Implement binary search' },
    { id: 23, name: 'Find the minimum number of jumps to reach the end of an array' },
    { id: 24, name: 'Check if an array is a subsequence of another' },
    { id: 25, name: 'Find the longest increasing subsequence' },
    { id: 26, name: 'Detect a cycle in a linked list' },
    { id: 27, name: 'Reverse a linked list' },
    { id: 28, name: 'Find the middle element of a linked list' },
    { id: 29, name: 'Merge two sorted linked lists' },
    { id: 30, name: 'Detect a cycle in a graph' },
    { id: 31, name: 'Find the shortest path in a graph (Dijkstra’s Algorithm)' },
    { id: 32, name: 'Perform depth-first search (DFS) in a graph' },
    { id: 33, name: 'Perform breadth-first search (BFS) in a graph' },
    { id: 34, name: 'Check if a binary tree is balanced' },
    { id: 35, name: 'Find the lowest common ancestor in a binary tree' },
    { id: 36, name: 'Check if a binary tree is a binary search tree (BST)' },
    { id: 37, name: 'Find the height of a binary tree' },
    { id: 38, name: 'Find the diameter of a binary tree' },
    { id: 39, name: 'Perform inorder traversal of a binary tree' },
    { id: 40, name: 'Perform preorder traversal of a binary tree' },
    { id: 41, name: 'Perform postorder traversal of a binary tree' },
    { id: 42, name: 'Find the maximum path sum in a binary tree' },
    { id: 43, name: 'Check if a number is prime' },
    { id: 44, name: 'Implement the Sieve of Eratosthenes' },
    { id: 45, name: 'Find the greatest common divisor (GCD) of two numbers' },
    { id: 46, name: 'Check if a number is a power of 2' },
    { id: 47, name: 'Find the nth Fibonacci number' },
    { id: 48, name: 'Solve the N-Queens problem' },
    { id: 49, name: 'Find all permutations of a given string' },
    { id: 50, name: 'Find the number of islands in a 2D grid' },
  ],
  2: [
    { id: 1, name: 'Reverse a string' },
    { id: 2, name: 'Check if two strings are anagrams' }
  ],
  3: [
    { id: 1, name: 'Reverse a linked list' },
    { id: 2, name: 'Detect a cycle in a linked list' },
    { id: 3, name: 'Find the middle element of a linked list' },
    { id: 4, name: 'Merge two sorted linked lists' },
    { id: 5, name: 'Remove nth node from the end of the linked list' },
    { id: 6, name: 'Check if a linked list is a palindrome' },
    { id: 7, name: 'Find the intersection point of two linked lists' },
    { id: 8, name: 'Detect and remove a cycle in a linked list' },
    { id: 9, name: 'Rotate a linked list by k nodes' },
    { id: 10, name: 'Flatten a multilevel linked list' },
    { id: 11, name: 'Remove duplicates from a sorted linked list' },
    { id: 12, name: 'Remove duplicates from an unsorted linked list' },
    { id: 13, name: 'Find the starting point of a cycle in a linked list' },
    { id: 14, name: 'Clone a linked list with random pointers' },
    { id: 15, name: 'Reverse a linked list in groups of size k' },
    { id: 16, name: 'Check if two linked lists are identical' },
    { id: 17, name: 'Partition a linked list around a value' },
    { id: 18, name: 'Add two numbers represented by linked lists' },
    { id: 19, name: 'Sort a linked list' },
    { id: 20, name: 'Convert a binary tree to a doubly linked list' },
    { id: 21, name: 'Delete a node from a singly linked list (given only the node)' },
    { id: 22, name: 'Delete the entire linked list' },
    { id: 23, name: 'Find the length of a linked list' },
    { id: 24, name: 'Swap nodes in pairs in a linked list' },
    { id: 25, name: 'Rearrange a linked list in the form of alternating high and low values' },
    { id: 26, name: 'Reorder a linked list (L0 → Ln → L1 → Ln-1 → L2 → Ln-2 …)' },
    { id: 27, name: 'Find the kth node from the end of a linked list' },
    { id: 28, name: 'Intersection of two linked lists (find the common nodes)' },
    { id: 29, name: 'Delete a linked list node with a given key' },
    { id: 30, name: 'Find the maximum sum path between two linked lists' },
    { id: 31, name: 'Convert a linked list to a balanced binary search tree (BST)' },
    { id: 32, name: 'Check if a linked list is circular' },
    { id: 33, name: 'Split a circular linked list into two halves' },
    { id: 34, name: 'Sort a linked list using merge sort' },
    { id: 35, name: 'Sort a linked list using quick sort' },
    { id: 36, name: 'Find pairs with a given sum in a doubly linked list' },
    { id: 37, name: 'Add one to a number represented by a linked list' },
    { id: 38, name: 'Delete the middle node of a linked list' },
    { id: 39, name: 'Flatten a linked list with next and child pointers' },
    { id: 40, name: 'Convert a sorted linked list to a binary search tree' },
    { id: 41, name: 'Find the triplet sum in a doubly linked list' },
    { id: 42, name: 'Insert a node into a sorted circular linked list' },
    { id: 43, name: 'Pairwise swap elements of a linked list' },
    { id: 44, name: 'Find the fractional (k/n) node in a linked list' },
    { id: 45, name: 'Move the last element of a linked list to the front' },
    { id: 46, name: 'Reverse a doubly linked list' },
    { id: 47, name: 'Delete nodes greater than a given value in a linked list' },
    { id: 48, name: 'Merge K sorted linked lists' },
    { id: 49, name: 'Split a linked list into alternating nodes' },
    { id: 50, name: 'Find the smallest and largest elements in a circular linked list' },
  ]
};

const Topic = () => {
  const { topicId } = useParams();
  const topicQuestions = questions[topicId] || [];

  return (
    <div>
      <h2>Questions for Topic {topicId}</h2>
      <ul>
        {topicQuestions.map(q => (
          <li key={q.id}>{q.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Topic;
