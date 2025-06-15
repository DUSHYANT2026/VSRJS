import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
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
          language === "cpp" 
            ? "C++" 
            : language === "java" 
            ? "Java" 
            : "Python"
        } Code`
      : `Show ${
          language === "cpp" 
            ? "C++" 
            : language === "java" 
            ? "Java" 
            : "Python"
        } Code`}
  </button>
);

function Algo5() {
  const { darkMode } = useTheme();
  const [visibleCodes, setVisibleCodes] = useState({
    cpp: null,
    java: null,
    python: null,
  });
  const [expandedSections, setExpandedSections] = useState({});

  const toggleCodeVisibility = (language, index) => {
    setVisibleCodes(prev => ({
      ...prev,
      [language]: prev[language] === index ? null : index
    }));
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

  const leetCodeProblems = [
    {
      category: "Arrays & Hashing",
      problems: [
        {
          title: "Two Sum",
          description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Key Points:
- Exactly one solution exists
- Cannot use the same element twice
- Return indices in any order`,
          approach: `
1. Create a hash map to store value-index pairs
2. Iterate through the array:
   a. Calculate complement = target - current number
   b. If complement exists in map, return current index and complement's index
   c. Store current number and its index in map
3. Since solution exists, loop will always return a result`,
          algorithm: `
• Time Complexity: O(n) - single pass through array
• Space Complexity: O(n) - store values in hash map
• Trade space for time efficiency
• Works for both sorted and unsorted arrays`,
          cppcode: `#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numMap;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (numMap.count(complement)) {
            return {numMap[complement], i};
        }
        numMap[nums[i]] = i;
    }
    return {}; // should never reach here
}`,
          javacode: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }
        return new int[0]; // should never reach here
    }
}`,
          pythoncode: `def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []  # should never reach here`,
          complexity: "Time Complexity: O(n), Space Complexity: O(n)",
          link: "https://leetcode.com/problems/two-sum/"
        },
        {
          title: "Contains Duplicate",
          description: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.`,
          approach: `
1. Use a hash set to track seen numbers
2. Iterate through the array:
   a. If number exists in set, return true
   b. Add number to set
3. If loop completes, return false`,
          algorithm: `
• Time Complexity: O(n) - single pass through array
• Space Complexity: O(n) - store elements in set
• Alternative: Sort array and check adjacent elements (O(n log n) time, O(1) space)`,
          cppcode: `#include <vector>
#include <unordered_set>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    for (int num : nums) {
        if (seen.count(num)) return true;
        seen.insert(num);
    }
    return false;
}`,
          javacode: `import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (seen.contains(num)) return true;
            seen.add(num);
        }
        return false;
    }
}`,
          pythoncode: `def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`,
          complexity: "Time Complexity: O(n), Space Complexity: O(n)",
          link: "https://leetcode.com/problems/contains-duplicate/"
        }
      ]
    },
    {
      category: "Linked Lists",
      problems: [
        {
          title: "Reverse Linked List",
          description: `Given the head of a singly linked list, reverse the list and return the new head.`,
          approach: `
1. Initialize three pointers: prev = null, current = head, next = null
2. Iterate through the list:
   a. Store next node (next = current.next)
   b. Reverse current node's pointer (current.next = prev)
   c. Move pointers one step forward (prev = current, current = next)
3. Return prev (new head)`,
          algorithm: `
• Time Complexity: O(n) - single pass through list
• Space Complexity: O(1) - constant space for pointers
• Classic pointer manipulation problem
• Can also be solved recursively`,
          cppcode: `struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode *prev = nullptr, *current = head, *next = nullptr;
    while (current) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    return prev;
}`,
          javacode: `public class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null, current = head, next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}`,
          pythoncode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev, current = None, head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev`,
          complexity: "Time Complexity: O(n), Space Complexity: O(1)",
          link: "https://leetcode.com/problems/reverse-linked-list/"
        },
        {
          title: "Merge Two Sorted Lists",
          description: `Merge two sorted linked lists and return the merged list. The list should be made by splicing together the nodes of the first two lists.`,
          approach: `
1. Create a dummy node to start the merged list
2. Initialize pointer to dummy node
3. While both lists have nodes:
   a. Compare current nodes of both lists
   b. Attach smaller node to merged list
   c. Move pointer of merged list and the list that contributed the node
4. Attach remaining nodes of non-empty list
5. Return dummy.next (head of merged list)`,
          algorithm: `
• Time Complexity: O(n + m) - where n and m are lengths of lists
• Space Complexity: O(1) - only rearranges existing nodes
• Classic merge operation from merge sort
• Can be solved recursively as well`,
          cppcode: `ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    
    while (l1 && l2) {
        if (l1->val < l2->val) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    
    tail->next = l1 ? l1 : l2;
    return dummy.next;
}`,
          javacode: `class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        
        tail.next = l1 != null ? l1 : l2;
        return dummy.next;
    }
}`,
          pythoncode: `def merge_two_lists(l1, l2):
    dummy = ListNode()
    tail = dummy
    
    while l1 and l2:
        if l1.val < l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    
    tail.next = l1 if l1 else l2
    return dummy.next`,
          complexity: "Time Complexity: O(n + m), Space Complexity: O(1)",
          link: "https://leetcode.com/problems/merge-two-sorted-lists/"
        }
      ]
    },
    {
      category: "Binary Trees",
      problems: [
        {
          title: "Invert Binary Tree",
          description: `Given the root of a binary tree, invert the tree and return its root.`,
          approach: `
1. Use recursive depth-first search (DFS)
2. Base case: if root is null, return null
3. Swap left and right subtrees
4. Recursively invert left and right subtrees
5. Return root`,
          algorithm: `
• Time Complexity: O(n) - visit each node once
• Space Complexity: O(h) - where h is tree height (recursion stack)
• Can also be solved iteratively using BFS or DFS
• Classic tree manipulation problem`,
          cppcode: `struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    
    TreeNode* temp = root->left;
    root->left = invertTree(root->right);
    root->right = invertTree(temp);
    
    return root;
}`,
          javacode: `public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        
        TreeNode temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
        
        return root;
    }
}`,
          pythoncode: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invert_tree(root):
    if not root:
        return None
    
    root.left, root.right = invert_tree(root.right), invert_tree(root.left)
    return root`,
          complexity: "Time Complexity: O(n), Space Complexity: O(h)",
          link: "https://leetcode.com/problems/invert-binary-tree/"
        },
        {
          title: "Maximum Depth of Binary Tree",
          description: `Given the root of a binary tree, return its maximum depth.`,
          approach: `
1. Use recursive depth-first search (DFS)
2. Base case: if root is null, return 0
3. Recursively calculate depth of left and right subtrees
4. Return 1 + maximum of left and right depths`,
          algorithm: `
• Time Complexity: O(n) - visit each node once
• Space Complexity: O(h) - where h is tree height (recursion stack)
• Can also be solved iteratively using BFS (level order traversal)
• Fundamental tree traversal problem`,
          cppcode: `int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`,
          javacode: `class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}`,
          pythoncode: `def max_depth(root):
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))`,
          complexity: "Time Complexity: O(n), Space Complexity: O(h)",
          link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
        }
      ]
    },
    {
      category: "Graphs",
      problems: [
        {
          title: "Number of Islands",
          description: `Given an m x n 2D binary grid representing a map of '1's (land) and '0's (water), return the number of islands.`,
          approach: `
1. Iterate through each cell in the grid
2. When encountering '1', increment count and perform DFS/BFS
3. During traversal, mark visited land as '0' (sink the island)
4. Continue until all cells are processed
5. Return the count`,
          algorithm: `
• Time Complexity: O(m*n) - visit each cell once
• Space Complexity: O(m*n) - recursion stack in worst case
• Classic connected components problem
• Can use either DFS or BFS for traversal`,
          cppcode: `#include <vector>
using namespace std;

void dfs(vector<vector<char>>& grid, int i, int j) {
    if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] == '0')
        return;
    
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}

int numIslands(vector<vector<char>>& grid) {
    if (grid.empty()) return 0;
    
    int count = 0;
    for (int i = 0; i < grid.size(); i++) {
        for (int j = 0; j < grid[0].size(); j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
}`,
          javacode: `class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    dfs(grid, i, j);
                }
            }
        }
        return count;
    }
    
    private void dfs(char[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0')
            return;
        
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
}`,
          pythoncode: `def num_islands(grid):
    if not grid:
        return 0
    
    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                count += 1
                dfs(grid, i, j)
    return count

def dfs(grid, i, j):
    if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] != '1':
        return
    
    grid[i][j] = '0'
    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)`,
          complexity: "Time Complexity: O(m*n), Space Complexity: O(m*n)",
          link: "https://leetcode.com/problems/number-of-islands/"
        },
        {
          title: "Clone Graph",
          description: `Given a reference of a node in a connected undirected graph, return a deep copy of the graph.`,
          approach: `
1. Use hash map to store original node -> cloned node mapping
2. Use BFS or DFS to traverse the graph
3. For each node, create a clone if not already created
4. For each neighbor, add cloned neighbor to cloned node's neighbors
5. Return cloned node of the input node`,
          algorithm: `
• Time Complexity: O(V + E) - visit each node and edge once
• Space Complexity: O(V) - for hash map and queue/stack
• Important graph traversal problem
• Demonstrates deep copying of complex structures`,
          cppcode: `#include <unordered_map>
#include <queue>
using namespace std;

class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node(int _val) {
        val = _val;
    }
};

Node* cloneGraph(Node* node) {
    if (!node) return nullptr;
    
    unordered_map<Node*, Node*> visited;
    queue<Node*> q;
    q.push(node);
    visited[node] = new Node(node->val);
    
    while (!q.empty()) {
        Node* current = q.front();
        q.pop();
        
        for (Node* neighbor : current->neighbors) {
            if (visited.find(neighbor) == visited.end()) {
                visited[neighbor] = new Node(neighbor->val);
                q.push(neighbor);
            }
            visited[current]->neighbors.push_back(visited[neighbor]);
        }
    }
    
    return visited[node];
}`,
          javacode: `class Node {
    public int val;
    public List<Node> neighbors;
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
}

class Solution {
    public Node cloneGraph(Node node) {
        if (node == null) return null;
        
        Map<Node, Node> visited = new HashMap<>();
        Queue<Node> queue = new LinkedList<>();
        queue.add(node);
        visited.put(node, new Node(node.val));
        
        while (!queue.isEmpty()) {
            Node current = queue.remove();
            
            for (Node neighbor : current.neighbors) {
                if (!visited.containsKey(neighbor)) {
                    visited.put(neighbor, new Node(neighbor.val));
                    queue.add(neighbor);
                }
                visited.get(current).neighbors.add(visited.get(neighbor));
            }
        }
        
        return visited.get(node);
    }
}`,
          pythoncode: `from collections import deque

class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node):
    if not node:
        return None
    
    visited = {}
    queue = deque([node])
    visited[node] = Node(node.val)
    
    while queue:
        current = queue.popleft()
        
        for neighbor in current.neighbors:
            if neighbor not in visited:
                visited[neighbor] = Node(neighbor.val)
                queue.append(neighbor)
            visited[current].neighbors.append(visited[neighbor])
    
    return visited[node]`,
          complexity: "Time Complexity: O(V + E), Space Complexity: O(V)",
          link: "https://leetcode.com/problems/clone-graph/"
        }
      ]
    }
  ];

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
        Most Asked LeetCode Questions
      </h1>

      <div className="space-y-12">
        {leetCodeProblems.map((categoryData, categoryIndex) => (
          <section key={categoryIndex} className="space-y-6">
            <h2
              className={`text-2xl sm:text-3xl font-bold ${
                darkMode ? "text-indigo-300" : "text-indigo-700"
              }`}
            >
              {categoryData.category}
            </h2>
            
            <div className="space-y-8">
              {categoryData.problems.map((example, index) => (
                <article
                  key={index}
                  className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-indigo-100"
                  }`}
                  aria-labelledby={`problem-${categoryIndex}-${index}-title`}
                >
                  <header className="mb-6">
                    <button
                      onClick={() => toggleDetails(`${categoryIndex}-${index}`)}
                      className="w-full flex justify-between items-center focus:outline-none"
                    >
                      <h2
                        id={`problem-${categoryIndex}-${index}-title`}
                        className={`text-xl sm:text-2xl font-bold text-left ${
                          darkMode ? "text-indigo-300" : "text-indigo-800"
                        }`}
                      >
                        {example.title}
                      </h2>
                      <span
                        className={darkMode ? "text-indigo-400" : "text-indigo-600"}
                      >
                        {expandedSections[`${categoryIndex}-${index}`] ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </span>
                    </button>

                    {expandedSections[`${categoryIndex}-${index}`] && (
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
                      isVisible={visibleCodes.cpp === `${categoryIndex}-${index}`}
                      onClick={() => toggleCodeVisibility("cpp", `${categoryIndex}-${index}`)}
                    />

                    <ToggleCodeButton
                      language="java"
                      isVisible={visibleCodes.java === `${categoryIndex}-${index}`}
                      onClick={() => toggleCodeVisibility("java", `${categoryIndex}-${index}`)}
                    />

                    <ToggleCodeButton
                      language="python"
                      isVisible={visibleCodes.python === `${categoryIndex}-${index}`}
                      onClick={() => toggleCodeVisibility("python", `${categoryIndex}-${index}`)}
                    />
                  </div>

                  <CodeExample
                    example={example}
                    isVisible={visibleCodes.cpp === `${categoryIndex}-${index}`}
                    language="cpp"
                    code={example.cppcode}
                    darkMode={darkMode}
                  />

                  <CodeExample
                    example={example}
                    isVisible={visibleCodes.java === `${categoryIndex}-${index}`}
                    language="java"
                    code={example.javacode}
                    darkMode={darkMode}
                  />

                  <CodeExample
                    example={example}
                    isVisible={visibleCodes.python === `${categoryIndex}-${index}`}
                    language="python"
                    code={example.pythoncode}
                    darkMode={darkMode}
                  />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Algo5;