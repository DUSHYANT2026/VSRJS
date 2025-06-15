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

function Algo6() {
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

  const maangProblems = [
    {
      company: "Meta (Facebook)",
      problems: [
        {
          title: "Minimum Window Substring",
          description: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string.

Key Points:
- Sliding window technique with hash map
- Need to track character frequencies
- Optimal O(n) solution expected`,
          approach: `
1. Create frequency map of characters in t
2. Initialize pointers left = 0, right = 0 and count of required characters
3. Expand window by moving right pointer:
   a. Decrement count when a required character is found
4. When all characters are found (count == 0):
   a. Try to contract window from left to find smaller valid windows
   b. Update minimum window found
5. Return the minimum window substring`,
          algorithm: `
• Time Complexity: O(m + n) where m is length of s, n is length of t
• Space Complexity: O(1) - fixed size character set
• Frequently asked in Meta onsite interviews
• Tests understanding of sliding window optimization`,
          cppcode: `#include <string>
#include <unordered_map>
#include <climits>
using namespace std;

string minWindow(string s, string t) {
    unordered_map<char, int> freq;
    for (char c : t) freq[c]++;
    
    int left = 0, min_left = 0, min_len = INT_MAX;
    int count = t.size();
    
    for (int right = 0; right < s.size(); right++) {
        if (freq[s[right]]-- > 0) count--;
        
        while (count == 0) {
            if (right - left + 1 < min_len) {
                min_len = right - left + 1;
                min_left = left;
            }
            if (++freq[s[left++]] > 0) count++;
        }
    }
    
    return min_len == INT_MAX ? "" : s.substr(min_left, min_len);
}`,
          javacode: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public String minWindow(String s, String t) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : t.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        int left = 0, minLeft = 0, minLen = Integer.MAX_VALUE;
        int count = t.length();
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (freq.containsKey(c)) {
                freq.put(c, freq.get(c) - 1);
                if (freq.get(c) >= 0) count--;
            }
            
            while (count == 0) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minLeft = left;
                }
                char leftChar = s.charAt(left);
                if (freq.containsKey(leftChar)) {
                    freq.put(leftChar, freq.get(leftChar) + 1);
                    if (freq.get(leftChar) > 0) count++;
                }
                left++;
            }
        }
        
        return minLen == Integer.MAX_VALUE ? "" : s.substring(minLeft, minLeft + minLen);
    }
}`,
          pythoncode: `from collections import defaultdict

def minWindow(s: str, t: str) -> str:
    freq = defaultdict(int)
    for c in t:
        freq[c] += 1
    
    left, min_left, min_len = 0, 0, float('inf')
    count = len(t)
    
    for right in range(len(s)):
        if s[right] in freq:
            freq[s[right]] -= 1
            if freq[s[right]] >= 0:
                count -= 1
        
        while count == 0:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_left = left
            
            if s[left] in freq:
                freq[s[left]] += 1
                if freq[s[left]] > 0:
                    count += 1
            left += 1
    
    return "" if min_len == float('inf') else s[min_left:min_left + min_len]`,
          complexity: "Time Complexity: O(m + n), Space Complexity: O(1)",
          link: "https://leetcode.com/problems/minimum-window-substring/"
        },
        {
          title: "Serialize and Deserialize Binary Tree",
          description: `Design an algorithm to serialize and deserialize a binary tree. Ensure the serialized string can be deserialized into the original tree structure.

Key Points:
- Handle arbitrary binary tree structures
- Serialization format must be compact
- Need to handle null nodes properly
- Common in system design rounds at Meta`,
          approach: `
1. Serialization (Pre-order traversal):
   a. Use '#' to represent null nodes
   b. Separate values with commas
2. Deserialization:
   a. Split serialized string by commas
   b. Reconstruct tree using pre-order traversal
   c. Handle '#' as null nodes`,
          algorithm: `
• Time Complexity: O(n) for both operations
• Space Complexity: O(n) for recursion stack
• Tests tree manipulation and serialization skills
• Important for distributed systems and data storage`,
          cppcode: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        if (!root) return "#";
        return to_string(root->val) + "," + serialize(root->left) + "," + serialize(root->right);
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        queue<string> q;
        stringstream ss(data);
        string item;
        while (getline(ss, item, ',')) {
            q.push(item);
        }
        return helper(q);
    }
    
    TreeNode* helper(queue<string>& q) {
        string val = q.front();
        q.pop();
        if (val == "#") return nullptr;
        TreeNode* root = new TreeNode(stoi(val));
        root->left = helper(q);
        root->right = helper(q);
        return root;
    }
};`,
          javacode: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if (root == null) return "#";
        return root.val + "," + serialize(root.left) + "," + serialize(root.right);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(",")));
        return helper(q);
    }
    
    private TreeNode helper(Queue<String> q) {
        String val = q.poll();
        if (val.equals("#")) return null;
        TreeNode root = new TreeNode(Integer.parseInt(val));
        root.left = helper(q);
        root.right = helper(q);
        return root;
    }
}`,
          pythoncode: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:
    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return '#'
        return f"{root.val},{self.serialize(root.left)},{self.serialize(root.right)}"
    
    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        def helper(q):
            val = q.popleft()
            if val == '#':
                return None
            root = TreeNode(int(val))
            root.left = helper(q)
            root.right = helper(q)
            return root
        
        q = deque(data.split(','))
        return helper(q)`,
          complexity: "Time Complexity: O(n), Space Complexity: O(n)",
          link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
        }
      ]
    },
    {
      company: "Amazon",
      problems: [
        {
          title: "LRU Cache",
          description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Key Points:
- Fixed capacity
- O(1) time complexity for get and put operations
- When capacity is reached, evict least recently used item
- Frequently asked in Amazon system design interviews`,
          approach: `
1. Use a hash map for O(1) access to cache items
2. Use a doubly linked list to maintain access order
3. For get operation:
   a. If key exists, move to front of list (most recently used)
   b. Return value or -1
4. For put operation:
   a. If key exists, update value and move to front
   b. If capacity reached, remove tail node (LRU)
   c. Add new node to front`,
          algorithm: `
• Time Complexity: O(1) for both get and put
• Space Complexity: O(capacity)
• Combines hash table and linked list
• Important for caching systems and database design`,
          cppcode: `#include <unordered_map>
#include <list>
using namespace std;

class LRUCache {
    int capacity;
    list<pair<int, int>> cache;
    unordered_map<int, list<pair<int, int>>::iterator> map;
    
public:
    LRUCache(int capacity) : capacity(capacity) {}
    
    int get(int key) {
        if (map.find(key) == map.end()) return -1;
        cache.splice(cache.begin(), cache, map[key]);
        return map[key]->second;
    }
    
    void put(int key, int value) {
        if (map.find(key) != map.end()) {
            cache.splice(cache.begin(), cache, map[key]);
            map[key]->second = value;
            return;
        }
        
        if (cache.size() == capacity) {
            int key_to_del = cache.back().first;
            cache.pop_back();
            map.erase(key_to_del);
        }
        
        cache.emplace_front(key, value);
        map[key] = cache.begin();
    }
};`,
          javacode: `import java.util.HashMap;
import java.util.Map;

class LRUCache {
    class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private void addToHead(Node node) {
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }
    
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    private Node removeTail() {
        Node res = tail.prev;
        removeNode(res);
        return res;
    }
    
    private Map<Integer, Node> cache = new HashMap<>();
    private int size, capacity;
    private Node head, tail;
    
    public LRUCache(int capacity) {
        this.size = 0;
        this.capacity = capacity;
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        Node node = cache.get(key);
        if (node == null) return -1;
        removeNode(node);
        addToHead(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        Node node = cache.get(key);
        if (node != null) {
            node.value = value;
            removeNode(node);
            addToHead(node);
        } else {
            Node newNode = new Node(key, value);
            cache.put(key, newNode);
            addToHead(newNode);
            size++;
            if (size > capacity) {
                Node tail = removeTail();
                cache.remove(tail.key);
                size--;
            }
        }
    }
}`,
          pythoncode: `class ListNode:
    def __init__(self, key=0, val=0, prev=None, next=None):
        self.key = key
        self.val = val
        self.prev = prev
        self.next = next

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.head = ListNode()
        self.tail = ListNode()
        self.head.next = self.tail
        self.tail.prev = self.head
    
    def _add_node(self, node):
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node
    
    def _remove_node(self, node):
        prev = node.prev
        new = node.next
        prev.next = new
        new.prev = prev
    
    def _move_to_head(self, node):
        self._remove_node(node)
        self._add_node(node)
    
    def _pop_tail(self):
        res = self.tail.prev
        self._remove_node(res)
        return res

    def get(self, key: int) -> int:
        node = self.cache.get(key, None)
        if not node:
            return -1
        self._move_to_head(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        node = self.cache.get(key, None)
        if not node:
            newNode = ListNode(key, value)
            self.cache[key] = newNode
            self._add_node(newNode)
            if len(self.cache) > self.capacity:
                tail = self._pop_tail()
                del self.cache[tail.key]
        else:
            node.val = value
            self._move_to_head(node)`,
          complexity: "Time Complexity: O(1), Space Complexity: O(capacity)",
          link: "https://leetcode.com/problems/lru-cache/"
        },
        {
          title: "Word Ladder II",
          description: `Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequences from beginWord to endWord.

Key Points:
- Each transformed word must exist in word list
- Only one letter can be changed at a time
- Return all possible shortest paths
- Common in Amazon onsite interviews`,
          approach: `
1. Use BFS to find shortest paths while building adjacency graph
2. Use DFS to reconstruct all paths from the graph
3. Optimizations:
   a. Bidirectional BFS
   b. Early termination when endWord is found
   c. Level-by-level processing`,
          algorithm: `
• Time Complexity: O(N*K^2 + α) where N is number of words, K is word length
• Space Complexity: O(N*K)
• Tests graph traversal and path reconstruction
• Important for word processing and NLP applications`,
          cppcode: `#include <vector>
#include <string>
#include <unordered_set>
#include <unordered_map>
#include <queue>
using namespace std;

class Solution {
public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> dict(wordList.begin(), wordList.end());
        if (!dict.count(endWord)) return {};
        
        unordered_map<string, vector<string>> graph;
        unordered_set<string> current, next;
        current.insert(beginWord);
        dict.erase(beginWord);
        
        bool found = false;
        
        while (!current.empty() && !found) {
            for (const string& word : current) {
                dict.erase(word);
            }
            
            for (const string& word : current) {
                string neighbor = word;
                for (int i = 0; i < neighbor.size(); i++) {
                    char original = neighbor[i];
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        neighbor[i] = c;
                        if (dict.count(neighbor)) {
                            if (neighbor == endWord) found = true;
                            next.insert(neighbor);
                            graph[word].push_back(neighbor);
                        }
                    }
                    neighbor[i] = original;
                }
            }
            
            if (found) break;
            current = next;
            next.clear();
        }
        
        vector<vector<string>> result;
        if (found) {
            vector<string> path{beginWord};
            dfs(beginWord, endWord, graph, path, result);
        }
        return result;
    }
    
    void dfs(const string& current, const string& endWord, 
             unordered_map<string, vector<string>>& graph, 
             vector<string>& path, vector<vector<string>>& result) {
        if (current == endWord) {
            result.push_back(path);
            return;
        }
        
        for (const string& neighbor : graph[current]) {
            path.push_back(neighbor);
            dfs(neighbor, endWord, graph, path, result);
            path.pop_back();
        }
    }
};`,
          javacode: `class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        Set<String> dict = new HashSet<>(wordList);
        if (!dict.contains(endWord)) return new ArrayList<>();
        
        Map<String, List<String>> graph = new HashMap<>();
        Set<String> current = new HashSet<>();
        current.add(beginWord);
        dict.remove(beginWord);
        
        boolean found = false;
        
        while (!current.isEmpty() && !found) {
            Set<String> next = new HashSet<>();
            for (String word : current) {
                dict.remove(word);
            }
            
            for (String word : current) {
                char[] chars = word.toCharArray();
                for (int i = 0; i < chars.length; i++) {
                    char original = chars[i];
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        chars[i] = c;
                        String neighbor = new String(chars);
                        if (dict.contains(neighbor)) {
                            if (neighbor.equals(endWord)) found = true;
                            next.add(neighbor);
                            graph.computeIfAbsent(word, k -> new ArrayList<>()).add(neighbor);
                        }
                    }
                    chars[i] = original;
                }
            }
            
            if (found) break;
            current = next;
        }
        
        List<List<String>> result = new ArrayList<>();
        if (found) {
            List<String> path = new ArrayList<>();
            path.add(beginWord);
            dfs(beginWord, endWord, graph, path, result);
        }
        return result;
    }
    
    private void dfs(String current, String endWord, Map<String, List<String>> graph,
                    List<String> path, List<List<String>> result) {
        if (current.equals(endWord)) {
            result.add(new ArrayList<>(path));
            return;
        }
        
        if (!graph.containsKey(current)) return;
        
        for (String neighbor : graph.get(current)) {
            path.add(neighbor);
            dfs(neighbor, endWord, graph, path, result);
            path.remove(path.size() - 1);
        }
    }
}`,
          pythoncode: `from collections import defaultdict, deque

class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        word_set = set(wordList)
        if endWord not in word_set:
            return []
        
        graph = defaultdict(list)
        current = {beginWord}
        word_set.discard(beginWord)
        found = False
        
        while current and not found:
            next_level = set()
            for word in current:
                word_set.discard(word)
            
            for word in current:
                for i in range(len(word)):
                    for c in 'abcdefghijklmnopqrstuvwxyz':
                        if c == word[i]:
                            continue
                        neighbor = word[:i] + c + word[i+1:]
                        if neighbor in word_set:
                            if neighbor == endWord:
                                found = True
                            next_level.add(neighbor)
                            graph[word].append(neighbor)
            if found:
                break
            current = next_level
        
        result = []
        if found:
            path = [beginWord]
            self.dfs(beginWord, endWord, graph, path, result)
        return result
    
    def dfs(self, current, endWord, graph, path, result):
        if current == endWord:
            result.append(list(path))
            return
        
        for neighbor in graph.get(current, []):
            path.append(neighbor)
            self.dfs(neighbor, endWord, graph, path, result)
            path.pop()`,
          complexity: "Time Complexity: O(N*K^2 + α), Space Complexity: O(N*K)",
          link: "https://leetcode.com/problems/word-ladder-ii/"
        }
      ]
    },
    {
      company: "Apple",
      problems: [
        {
          title: "Median of Two Sorted Arrays",
          description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Key Points:
- Must run in O(log(min(m,n))) time
- Handle all edge cases (empty arrays, single element arrays)
- Common in Apple onsite interviews`,
          approach: `
1. Ensure nums1 is the smaller array
2. Perform binary search on nums1:
   a. Partition both arrays such that elements on left <= elements on right
   b. Calculate maxLeftX, minRightX, maxLeftY, minRightY
   c. If correct partition found, calculate median
   d. Else adjust partition boundaries
3. Handle edge cases for even/odd total length`,
          algorithm: `
• Time Complexity: O(log(min(m,n)))
• Space Complexity: O(1)
• Tests binary search and array manipulation
• Important for statistical analysis and data processing`,
          cppcode: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.size(), n = nums2.size();
        int left = 0, right = m;
        int total = m + n;
        
        while (left <= right) {
            int partitionX = (left + right) / 2;
            int partitionY = (total + 1) / 2 - partitionX;
            
            int maxLeftX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? INT_MAX : nums1[partitionX];
            
            int maxLeftY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? INT_MAX : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if (total % 2 == 0) {
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0;
                } else {
                    return max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) {
                right = partitionX - 1;
            } else {
                left = partitionX + 1;
            }
        }
        
        return 0.0;
    }
};`,
          javacode: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.length, n = nums2.length;
        int left = 0, right = m;
        int total = m + n;
        
        while (left <= right) {
            int partitionX = (left + right) / 2;
            int partitionY = (total + 1) / 2 - partitionX;
            
            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];
            
            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if (total % 2 == 0) {
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
                } else {
                    return Math.max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) {
                right = partitionX - 1;
            } else {
                left = partitionX + 1;
            }
        }
        
        throw new IllegalArgumentException();
    }
}`,
          pythoncode: `class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        
        m, n = len(nums1), len(nums2)
        left, right = 0, m
        total = m + n
        
        while left <= right:
            partitionX = (left + right) // 2
            partitionY = (total + 1) // 2 - partitionX
            
            maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
            minRightX = float('inf') if partitionX == m else nums1[partitionX]
            
            maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
            minRightY = float('inf') if partitionY == n else nums2[partitionY]
            
            if maxLeftX <= minRightY and maxLeftY <= minRightX:
                if total % 2 == 0:
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
                else:
                    return max(maxLeftX, maxLeftY)
            elif maxLeftX > minRightY:
                right = partitionX - 1
            else:
                left = partitionX + 1
        
        raise ValueError("Input arrays are not sorted or invalid")`,
          complexity: "Time Complexity: O(log(min(m,n))), Space Complexity: O(1)",
          link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
        },
        {
          title: "Trapping Rain Water",
          description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Key Points:
- Must solve in O(n) time with O(1) space
- Handle edge cases (empty array, all zeros)
- Common in Apple onsite interviews`,
          approach: `
1. Initialize two pointers (left = 0, right = n-1)
2. Track maxLeft and maxRight heights
3. While left < right:
   a. If height[left] < height[right]:
      i. Update maxLeft if current height is higher
      ii. Add maxLeft - height[left] to result
      iii. Move left pointer right
   b. Else:
      i. Update maxRight if current height is higher
      ii. Add maxRight - height[right] to result
      iii. Move right pointer left
4. Return total trapped water`,
          algorithm: `
• Time Complexity: O(n) - single pass through array
• Space Complexity: O(1) - constant space for pointers
• Tests understanding of two-pointer technique
• Important for graphics and physics simulations`,
          cppcode: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int maxLeft = 0, maxRight = 0;
        int result = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= maxLeft) {
                    maxLeft = height[left];
                } else {
                    result += maxLeft - height[left];
                }
                left++;
            } else {
                if (height[right] >= maxRight) {
                    maxRight = height[right];
                } else {
                    result += maxRight - height[right];
                }
                right--;
            }
        }
        
        return result;
    }
};`,
          javacode: `class Solution {
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int maxLeft = 0, maxRight = 0;
        int result = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= maxLeft) {
                    maxLeft = height[left];
                } else {
                    result += maxLeft - height[left];
                }
                left++;
            } else {
                if (height[right] >= maxRight) {
                    maxRight = height[right];
                } else {
                    result += maxRight - height[right];
                }
                right--;
            }
        }
        
        return result;
    }
}`,
          pythoncode: `class Solution:
    def trap(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_left, max_right = 0, 0
        result = 0
        
        while left < right:
            if height[left] < height[right]:
                if height[left] >= max_left:
                    max_left = height[left]
                else:
                    result += max_left - height[left]
                left += 1
            else:
                if height[right] >= max_right:
                    max_right = height[right]
                else:
                    result += max_right - height[right]
                right -= 1
        
        return result`,
          complexity: "Time Complexity: O(n), Space Complexity: O(1)",
          link: "https://leetcode.com/problems/trapping-rain-water/"
        }
      ]
    },
    {
      company: "Netflix",
      problems: [
        {
          title: "Regular Expression Matching",
          description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.

Key Points:
- '.' matches any single character
- '*' matches zero or more of the preceding element
- Must cover the entire input string
- Common in Netflix system design interviews`,
          approach: `
1. Use dynamic programming with 2D table dp[i][j]
2. Base cases:
   a. Empty pattern matches empty string
   b. Non-empty pattern doesn't match empty string
3. Recurrence:
   a. If p[j-1] == s[i-1] or p[j-1] == '.': dp[i][j] = dp[i-1][j-1]
   b. If p[j-1] == '*':
      i. Zero occurrences: dp[i][j] = dp[i][j-2]
      ii. One or more: if p[j-2] matches s[i-1], dp[i][j] = dp[i-1][j]
4. Return dp[m][n] where m,n are lengths of s,p`,
          algorithm: `
• Time Complexity: O(m*n) where m is length of s, n is length of p
• Space Complexity: O(m*n) for DP table
• Tests dynamic programming and string manipulation
• Important for text processing and pattern matching`,
          cppcode: `#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.size(), n = p.size();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true;
        
        for (int j = 1; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (p[j - 1] == '*') {
                    dp[i][j] = dp[i][j - 2];
                    if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                }
            }
        }
        
        return dp[m][n];
    }
};`,
          javacode: `class Solution {
    public boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;
        
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (p.charAt(j - 1) == '*') {
                    dp[i][j] = dp[i][j - 2];
                    if (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                }
            }
        }
        
        return dp[m][n];
    }
}`,
          pythoncode: `class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        dp[0][0] = True
        
        for j in range(1, n + 1):
            if p[j - 1] == '*':
                dp[0][j] = dp[0][j - 2]
        
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                elif p[j - 1] == '*':
                    dp[i][j] = dp[i][j - 2]
                    if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                        dp[i][j] = dp[i][j] or dp[i - 1][j]
        
        return dp[m][n]`,
          complexity: "Time Complexity: O(m*n), Space Complexity: O(m*n)",
          link: "https://leetcode.com/problems/regular-expression-matching/"
        },
        {
          title: "Design Search Autocomplete System",
          description: `Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#'). For each character they type except '#', return the top 3 historical hot sentences that have the same prefix as the part of sentence already typed.

Key Points:
- Handle large input sizes efficiently
- Return results in real-time as user types
- Common in Netflix system design interviews`,
          approach: `
1. Use Trie data structure to store sentences and their frequencies
2. Each Trie node maintains a map of hot sentences starting with current prefix
3. For input:
   a. If '#', add current sentence to Trie with updated frequency
   b. Else, search Trie for current prefix and return top 3 hot sentences
4. Optimizations:
   a. Limit hot sentences stored at each node
   b. Use priority queue for efficient top-k retrieval`,
          algorithm: `
• Time Complexity: O(l) for insertion, O(1) for retrieval (after optimization)
• Space Complexity: O(n*l) where n is number of sentences, l is average length
• Tests Trie implementation and system design
• Important for search engines and recommendation systems`,
          cppcode: `#include <vector>
#include <string>
#include <unordered_map>
#include <queue>
using namespace std;

class AutocompleteSystem {
    struct TrieNode {
        unordered_map<string, int> freq;
        unordered_map<char, TrieNode*> children;
    };
    
    struct Compare {
        bool operator()(pair<string, int>& a, pair<string, int>& b) {
            return a.second == b.second ? a.first < b.first : a.second > b.second;
        }
    };
    
    TrieNode* root;
    TrieNode* current;
    string current_query;
    
    void addSentence(string sentence, int freq) {
        TrieNode* node = root;
        for (char c : sentence) {
            if (!node->children.count(c)) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
            node->freq[sentence] += freq;
        }
    }
    
public:
    AutocompleteSystem(vector<string>& sentences, vector<int>& times) {
        root = new TrieNode();
        current = root;
        current_query = "";
        
        for (int i = 0; i < sentences.size(); i++) {
            addSentence(sentences[i], times[i]);
        }
    }
    
    vector<string> input(char c) {
        if (c == '#') {
            addSentence(current_query, 1);
            current_query = "";
            current = root;
            return {};
        }
        
        current_query += c;
        if (!current->children.count(c)) {
            current->children[c] = new TrieNode();
            current = current->children[c];
            return {};
        }
        
        current = current->children[c];
        priority_queue<pair<string, int>, vector<pair<string, int>>, Compare> pq;
        
        for (auto& entry : current->freq) {
            pq.push(entry);
            if (pq.size() > 3) {
                pq.pop();
            }
        }
        
        vector<string> result;
        while (!pq.empty()) {
            result.insert(result.begin(), pq.top().first);
            pq.pop();
        }
        
        return result;
    }
};`,
          javacode: `class AutocompleteSystem {
    class TrieNode {
        Map<String, Integer> freq = new HashMap<>();
        Map<Character, TrieNode> children = new HashMap<>();
    }
    
    private TrieNode root;
    private TrieNode current;
    private StringBuilder currentQuery;
    
    public AutocompleteSystem(String[] sentences, int[] times) {
        root = new TrieNode();
        current = root;
        currentQuery = new StringBuilder();
        
        for (int i = 0; i < sentences.length; i++) {
            addSentence(sentences[i], times[i]);
        }
    }
    
    private void addSentence(String sentence, int freq) {
        TrieNode node = root;
        for (char c : sentence.toCharArray()) {
            node.children.putIfAbsent(c, new TrieNode());
            node = node.children.get(c);
            node.freq.put(sentence, node.freq.getOrDefault(sentence, 0) + freq);
        }
    }
    
    public List<String> input(char c) {
        if (c == '#') {
            addSentence(currentQuery.toString(), 1);
            currentQuery = new StringBuilder();
            current = root;
            return new ArrayList<>();
        }
        
        currentQuery.append(c);
        if (!current.children.containsKey(c)) {
            current.children.put(c, new TrieNode());
            current = current.children.get(c);
            return new ArrayList<>();
        }
        
        current = current.children.get(c);
        PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>(
            (a, b) -> a.getValue() == b.getValue() ? 
                b.getKey().compareTo(a.getKey()) : a.getValue() - b.getValue()
        );
        
        for (Map.Entry<String, Integer> entry : current.freq.entrySet()) {
            pq.offer(entry);
            if (pq.size() > 3) {
                pq.poll();
            }
        }
        
        List<String> result = new ArrayList<>();
        while (!pq.isEmpty()) {
            result.add(0, pq.poll().getKey());
        }
        
        return result;
    }
}`,
          pythoncode: `from collections import defaultdict

class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.freq = defaultdict(int)

class AutocompleteSystem:
    def __init__(self, sentences: List[str], times: List[int]):
        self.root = TrieNode()
        self.current = self.root
        self.current_query = ""
        
        for sentence, time in zip(sentences, times):
            self.add_sentence(sentence, time)
    
    def add_sentence(self, sentence, freq):
        node = self.root
        for c in sentence:
            node = node.children[c]
            node.freq[sentence] += freq
    
    def input(self, c: str) -> List[str]:
        if c == '#':
            self.add_sentence(self.current_query, 1)
            self.current_query = ""
            self.current = self.root
            return []
        
        self.current_query += c
        if c not in self.current.children:
            self.current.children[c] = TrieNode()
            self.current = self.current.children[c]
            return []
        
        self.current = self.current.children[c]
        heap = []
        for sentence, freq in self.current.freq.items():
            heapq.heappush(heap, (-freq, sentence))
        
        result = []
        while heap and len(result) < 3:
            result.append(heapq.heappop(heap)[1])
        
        return result`,
          complexity: "Time Complexity: O(l) per insertion, O(1) per retrieval, Space Complexity: O(n*l)",
          link: "https://leetcode.com/problems/design-search-autocomplete-system/"
        }
      ]
    },
    {
      company: "Google",
      problems: [
        {
          title: "Find the Kth Largest Element in an Array",
          description: `Given an integer array nums and an integer k, return the kth largest element in the array.

Key Points:
- Must run faster than O(n log n) time
- Handle duplicates and edge cases
- Common in Google phone screens`,
          approach: `
1. Use Quickselect algorithm (optimized quicksort variant)
2. Choose random pivot element
3. Partition array into elements greater than, equal to, and less than pivot
4. Recursively search in appropriate partition
5. Base case when pivot is at k-1 index`,
          algorithm: `
• Time Complexity: O(n) average case, O(n^2) worst case
• Space Complexity: O(1) with tail recursion optimization
• Tests understanding of selection algorithms
• Important for order statistics and data analysis`,
          cppcode: `#include <vector>
#include <algorithm>
#include <cstdlib>
using namespace std;

class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        int left = 0, right = nums.size() - 1;
        while (true) {
            int pivot_index = left + rand() % (right - left + 1);
            int new_pivot_index = partition(nums, left, right, pivot_index);
            if (new_pivot_index == k - 1) {
                return nums[new_pivot_index];
            } else if (new_pivot_index > k - 1) {
                right = new_pivot_index - 1;
            } else {
                left = new_pivot_index + 1;
            }
        }
    }
    
private:
    int partition(vector<int>& nums, int left, int right, int pivot_index) {
        int pivot_value = nums[pivot_index];
        swap(nums[pivot_index], nums[right]);
        int store_index = left;
        
        for (int i = left; i < right; i++) {
            if (nums[i] > pivot_value) {
                swap(nums[i], nums[store_index++]);
            }
        }
        
        swap(nums[store_index], nums[right]);
        return store_index;
    }
};`,
          javacode: `class Solution {
    public int findKthLargest(int[] nums, int k) {
        int left = 0, right = nums.length - 1;
        Random rand = new Random();
        
        while (true) {
            int pivotIndex = left + rand.nextInt(right - left + 1);
            int newPivotIndex = partition(nums, left, right, pivotIndex);
            if (newPivotIndex == k - 1) {
                return nums[newPivotIndex];
            } else if (newPivotIndex > k - 1) {
                right = newPivotIndex - 1;
            } else {
                left = newPivotIndex + 1;
            }
        }
    }
    
    private int partition(int[] nums, int left, int right, int pivotIndex) {
        int pivotValue = nums[pivotIndex];
        swap(nums, pivotIndex, right);
        int storeIndex = left;
        
        for (int i = left; i < right; i++) {
            if (nums[i] > pivotValue) {
                swap(nums, i, storeIndex++);
            }
        }
        
        swap(nums, storeIndex, right);
        return storeIndex;
    }
    
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}`,
          pythoncode: `import random

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        def partition(left, right, pivot_index):
            pivot = nums[pivot_index]
            nums[pivot_index], nums[right] = nums[right], nums[pivot_index]
            store_index = left
            
            for i in range(left, right):
                if nums[i] > pivot:
                    nums[i], nums[store_index] = nums[store_index], nums[i]
                    store_index += 1
            
            nums[store_index], nums[right] = nums[right], nums[store_index]
            return store_index
        
        left, right = 0, len(nums) - 1
        while True:
            pivot_index = random.randint(left, right)
            new_pivot_index = partition(left, right, pivot_index)
            if new_pivot_index == k - 1:
                return nums[new_pivot_index]
            elif new_pivot_index > k - 1:
                right = new_pivot_index - 1
            else:
                left = new_pivot_index + 1`,
          complexity: "Time Complexity: O(n) average, O(n^2) worst, Space Complexity: O(1)",
          link: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
        },
        {
          title: "Alien Dictionary",
          description: `Given a sorted dictionary (array of words) of an alien language, find the order of characters in the language.

Key Points:
- Handle all edge cases (empty input, single word, cycles)
- Return any valid order if multiple solutions exist
- Common in Google onsite interviews`,
          approach: `
1. Build graph of characters from adjacent word comparisons
2. Perform topological sort:
   a. Calculate in-degree for each node
   b. Use queue to process nodes with zero in-degree
   c. Reduce in-degree of neighbors as nodes are processed
3. Check for cycles (remaining nodes with in-degree > 0)
4. Return topological order if valid`,
          algorithm: `
• Time Complexity: O(C) where C is total characters across all words
• Space Complexity: O(1) or O(U) where U is unique characters
• Tests graph algorithms and topological sorting
• Important for language processing and compiler design`,
          cppcode: `#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <queue>
using namespace std;

class Solution {
public:
    string alienOrder(vector<string>& words) {
        unordered_map<char, unordered_set<char>> graph;
        unordered_map<char, int> in_degree;
        
        // Initialize in_degree for all unique characters
        for (const string& word : words) {
            for (char c : word) {
                in_degree[c] = 0;
            }
        }
        
        // Build graph and in_degree
        for (int i = 0; i < words.size() - 1; i++) {
            const string& word1 = words[i];
            const string& word2 = words[i + 1];
            
            // Check for invalid input (prefix comes after word)
            if (word1.size() > word2.size() && word1.substr(0, word2.size()) == word2) {
                return "";
            }
            
            for (int j = 0; j < min(word1.size(), word2.size()); j++) {
                char c1 = word1[j], c2 = word2[j];
                if (c1 != c2) {
                    if (graph[c1].find(c2) == graph[c1].end()) {
                        graph[c1].insert(c2);
                        in_degree[c2]++;
                    }
                    break;
                }
            }
        }
        
        // Topological sort
        queue<char> q;
        for (const auto& pair : in_degree) {
            if (pair.second == 0) {
                q.push(pair.first);
            }
        }
        
        string result;
        while (!q.empty()) {
            char c = q.front();
            q.pop();
            result += c;
            
            for (char neighbor : graph[c]) {
                in_degree[neighbor]--;
                if (in_degree[neighbor] == 0) {
                    q.push(neighbor);
                }
            }
        }
        
        // Check for cycle
        if (result.size() != in_degree.size()) {
            return "";
        }
        
        return result;
    }
};`,
          javacode: `class Solution {
    public String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> inDegree = new HashMap<>();
        
        // Initialize inDegree for all unique characters
        for (String word : words) {
            for (char c : word.toCharArray()) {
                inDegree.put(c, 0);
            }
        }
        
        // Build graph and inDegree
        for (int i = 0; i < words.length - 1; i++) {
            String word1 = words[i];
            String word2 = words[i + 1];
            
            // Check for invalid input (prefix comes after word)
            if (word1.length() > word2.length() && word1.startsWith(word2)) {
                return "";
            }
            
            for (int j = 0; j < Math.min(word1.length(), word2.length()); j++) {
                char c1 = word1.charAt(j), c2 = word2.charAt(j);
                if (c1 != c2) {
                    if (!graph.containsKey(c1)) {
                        graph.put(c1, new HashSet<>());
                    }
                    if (!graph.get(c1).contains(c2)) {
                        graph.get(c1).add(c2);
                        inDegree.put(c2, inDegree.get(c2) + 1);
                    }
                    break;
                }
            }
        }
        
        // Topological sort
        Queue<Character> q = new LinkedList<>();
        for (Map.Entry<Character, Integer> entry : inDegree.entrySet()) {
            if (entry.getValue() == 0) {
                q.offer(entry.getKey());
            }
        }
        
        StringBuilder result = new StringBuilder();
        while (!q.isEmpty()) {
            char c = q.poll();
            result.append(c);
            
            if (graph.containsKey(c)) {
                for (char neighbor : graph.get(c)) {
                    inDegree.put(neighbor, inDegree.get(neighbor) - 1);
                    if (inDegree.get(neighbor) == 0) {
                        q.offer(neighbor);
                    }
                }
            }
        }
        
        // Check for cycle
        if (result.length() != inDegree.size()) {
            return "";
        }
        
        return result.toString();
    }
}`,
          pythoncode: `from collections import defaultdict, deque

class Solution:
    def alienOrder(self, words: List[str]) -> str:
        graph = defaultdict(set)
        in_degree = {c: 0 for word in words for c in word}
        
        # Build graph and in_degree
        for i in range(len(words) - 1):
            word1, word2 = words[i], words[i + 1]
            
            # Check for invalid input (prefix comes after word)
            if len(word1) > len(word2) and word1.startswith(word2):
                return ""
            
            for c1, c2 in zip(word1, word2):
                if c1 != c2:
                    if c2 not in graph[c1]:
                        graph[c1].add(c2)
                        in_degree[c2] += 1
                    break
        
        # Topological sort
        q = deque([c for c in in_degree if in_degree[c] == 0])
        result = []
        
        while q:
            c = q.popleft()
            result.append(c)
            
            for neighbor in graph[c]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    q.append(neighbor)
        
        # Check for cycle
        if len(result) != len(in_degree):
            return ""
        
        return ''.join(result)`,
          complexity: "Time Complexity: O(C), Space Complexity: O(1) or O(U)",
          link: "https://leetcode.com/problems/alien-dictionary/"
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
        Hard Questions Asked in MAANG Companies
      </h1>

      <div className="space-y-12">
        {maangProblems.map((companyData, companyIndex) => (
          <section key={companyIndex} className="space-y-6">
            <h2
              className={`text-3xl sm:text-4xl font-bold ${
                darkMode ? "text-indigo-300" : "text-indigo-700"
              }`}
            >
              {companyData.company}
            </h2>
            
            <div className="space-y-8">
              {companyData.problems.map((example, problemIndex) => (
                <article
                  key={problemIndex}
                  className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-indigo-100"
                  }`}
                  aria-labelledby={`problem-${companyIndex}-${problemIndex}-title`}
                >
                  <header className="mb-6">
                    <button
                      onClick={() => toggleDetails(`${companyIndex}-${problemIndex}`)}
                      className="w-full flex justify-between items-center focus:outline-none"
                    >
                      <h2
                        id={`problem-${companyIndex}-${problemIndex}-title`}
                        className={`text-xl sm:text-2xl font-bold text-left ${
                          darkMode ? "text-indigo-300" : "text-indigo-800"
                        }`}
                      >
                        {example.title}
                      </h2>
                      <span
                        className={darkMode ? "text-indigo-400" : "text-indigo-600"}
                      >
                        {expandedSections[`${companyIndex}-${problemIndex}`] ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </span>
                    </button>

                    {expandedSections[`${companyIndex}-${problemIndex}`] && (
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
                      isVisible={visibleCodes.cpp === `${companyIndex}-${problemIndex}`}
                      onClick={() => toggleCodeVisibility("cpp", `${companyIndex}-${problemIndex}`)}
                    />

                    <ToggleCodeButton
                      language="java"
                      isVisible={visibleCodes.java === `${companyIndex}-${problemIndex}`}
                      onClick={() => toggleCodeVisibility("java", `${companyIndex}-${problemIndex}`)}
                    />

                    <ToggleCodeButton
                      language="python"
                      isVisible={visibleCodes.python === `${companyIndex}-${problemIndex}`}
                      onClick={() => toggleCodeVisibility("python", `${companyIndex}-${problemIndex}`)}
                    />
                  </div>

                  <CodeExample
                    example={example}
                    isVisible={visibleCodes.cpp === `${companyIndex}-${problemIndex}`}
                    language="cpp"
                    code={example.cppcode}
                    darkMode={darkMode}
                  />

                  <CodeExample
                    example={example}
                    isVisible={visibleCodes.java === `${companyIndex}-${problemIndex}`}
                    language="java"
                    code={example.javacode}
                    darkMode={darkMode}
                  />

                  <CodeExample
                    example={example}
                    isVisible={visibleCodes.python === `${companyIndex}-${problemIndex}`}
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

export default Algo6;