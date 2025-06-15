import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChevronDown } from "react-feather";
import { useTheme } from "../../../ThemeContext.jsx";

const formatDescription = (desc, darkMode) => {
  if (Array.isArray(desc)) {
    return (
      <ul className={`list-disc pl-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {desc.map((item, i) => (
          <li key={i} className="mb-2">{item}</li>
        ))}
      </ul>
    );
  }
  return desc.split("\n").map((paragraph, i) => (
    <p key={i} className="mb-4 whitespace-pre-line">
      {paragraph}
    </p>
  ));
};

const CodeExample = React.memo(
  ({ example, isVisible, language, code, darkMode }) => (
    <div
      className={`rounded-lg overflow-hidden border-2 ${getBorderColor(
        language,
        darkMode
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

const getBorderColor = (language, darkMode) => {
  const base = darkMode ? "border-gray-700" : "border-gray-100";
  switch (language) {
    case "cpp":
      return darkMode ? "border-blue-900" : "border-blue-100";
    case "java":
      return darkMode ? "border-red-900" : "border-red-100";
    case "python":
      return darkMode ? "border-yellow-900" : "border-yellow-100";
    default:
      return base;
  }
};

const LanguageLogo = ({ language, size = 24, darkMode }) => {
  const baseClasses = "rounded-md p-1 flex items-center justify-center";
  
  const getGradient = (language) => {
    switch (language) {
      case "cpp":
        return darkMode 
          ? "bg-gradient-to-br from-blue-600 to-red-600" 
          : "bg-gradient-to-br from-blue-500 to-red-500";
      case "java":
        return darkMode 
          ? "bg-gradient-to-br from-red-600 to-teal-600" 
          : "bg-gradient-to-br from-red-500 to-teal-500";
      case "python":
        return darkMode 
          ? "bg-gradient-to-br from-yellow-600 to-orange-600" 
          : "bg-gradient-to-br from-yellow-500 to-orange-500";
      default:
        return darkMode 
          ? "bg-gradient-to-br from-gray-600 to-blue-600" 
          : "bg-gradient-to-br from-gray-500 to-blue-500";
    }
  };

  const getLogo = (language) => {
    switch (language) {
      case "cpp":
        return (
          <svg viewBox="0 0 128 128" width={size} height={size}>
            <path fill="#00599C" d="M115.17 30.91l-50.15-29.61c-2.17-1.3-4.81-1.3-7.02 0l-50.15 29.61c-2.17 1.28-3.48 3.58-3.48 6.03v59.18c0 2.45 1.31 4.75 3.48 6.03l50.15 29.61c2.21 1.3 4.85 1.3 7.02 0l50.15-29.61c2.17-1.28 3.48-3.58 3.48-6.03v-59.18c0-2.45-1.31-4.75-3.48-6.03zM70.77 103.47c-15.64 0-27.89-11.84-27.89-27.47 0-15.64 12.25-27.47 27.89-27.47 6.62 0 11.75 1.61 16.3 4.41l-3.32 5.82c-3.42-2.01-7.58-3.22-12.38-3.22-10.98 0-19.09 7.49-19.09 18.46 0 10.98 8.11 18.46 19.09 18.46 5.22 0 9.56-1.41 13.38-3.82l3.32 5.62c-4.81 3.22-10.58 5.21-17.2 5.21zm37.91-1.61h-5.62v-25.5h5.62v25.5zm0-31.51h-5.62v-6.62h5.62v6.62z"></path>
          </svg>
        );
      case "java":
        return (
          <svg viewBox="0 0 128 128" width={size} height={size}>
            <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path>
            <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.134-1.58 13.134s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.223z"></path>
            <path fill="#0074BD" d="M102.123 108.229s3.781 2.439-3.901 5.795c-13.199 5.591-49.921 5.775-65.14.132-4.461 0 0 3.188 4.667 18.519 6.338 15.104 1.643 39.252-.603 50.522-7.704zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.556 3.238-54.731-2.958 0 0 5.163-2.053 19.644-4.643z"></path>
            <path fill="#EA2D2E" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.542-12.834 27.998-39.667 26.998-39.667z"></path>
          </svg>
        );
      case "python":
        return (
          <svg viewBox="0 0 128 128" width={size} height={size}>
            <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path>
            <path fill="#FFDC41" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.283 16.221 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.678-8.084 2.491-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${baseClasses} ${getGradient(language)}`}>
      {getLogo(language)}
    </div>
  );
};

const getButtonColor = (language, darkMode) => {
  switch (language) {
    case "cpp":
      return darkMode
        ? "from-blue-300 to-blue-500 hover:from-blue-400 hover:to-blue-700"
        : "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700";
    case "java":
      return darkMode
        ? "from-red-700 to-red-900 hover:from-red-800 hover:to-red-950"
        : "from-red-500 to-red-700 hover:from-red-600 hover:to-red-800";
    case "python":
      return darkMode
        ? "from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
        : "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600";
    default:
      return darkMode
        ? "from-gray-600 to-blue-600 hover:from-gray-700 hover:to-blue-700"
        : "from-gray-500 to-blue-500 hover:from-gray-600 hover:to-blue-600";
  }
};

const CollapsibleSection = ({ 
  title, 
  content, 
  isExpanded, 
  onToggle, 
  darkMode, 
  colorScheme 
}) => (
  <div className="group">
    <button
      onClick={onToggle}
      className={`w-full flex justify-between items-center focus:outline-none p-3 rounded-lg transition-all ${
        isExpanded 
          ? `${colorScheme.bg} ${colorScheme.border} border`
          : 'hover:bg-opacity-10 hover:bg-gray-500'
      }`}
      aria-expanded={isExpanded}
    >
      <div className="flex items-center">
        <span className={`mr-3 text-lg ${colorScheme.icon}`}>
          {isExpanded ? '▼' : '►'}
        </span>
        <h3 className={`font-bold text-lg ${colorScheme.text}`}>
          {title}
        </h3>
      </div>
      <span className={`transition-transform duration-200 ${colorScheme.icon}`}>
        <ChevronDown size={20} className={isExpanded ? 'rotate-180' : ''} />
      </span>
    </button>

    {isExpanded && (
      <div
        className={`p-4 sm:p-6 rounded-lg border mt-1 transition-all duration-200 ${colorScheme.bg} ${colorScheme.border} animate-fadeIn`}
      >
        <div className={`${colorScheme.text} font-medium leading-relaxed space-y-3`}>
          {typeof content === 'string' ? (
            <div className="prose prose-sm max-w-none">
              {content.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : Array.isArray(content) ? (
            <ul className="space-y-2 list-disc pl-5 marker:text-opacity-60">
              {content.map((item, i) => (
                <li key={i} className="pl-2">
                  {item.includes(':') ? (
                    <>
                      <span className="font-semibold">{item.split(':')[0]}:</span>
                      {item.split(':').slice(1).join(':')}
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      </div>
    )}
  </div>
);

const ToggleCodeButton = ({ language, isVisible, onClick, darkMode }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center bg-gradient-to-r ${getButtonColor(
      language,
      darkMode
    )} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      language === "cpp"
        ? "focus:ring-pink-500 dark:focus:ring-blue-600"
        : language === "java"
        ? "focus:ring-green-500 dark:focus:ring-red-600"
        : "focus:ring-yellow-500 dark:focus:ring-yellow-600"
    }`}
    aria-expanded={isVisible}
    aria-controls={`${language}-code`}
  >
    <LanguageLogo language={language} size={18} darkMode={darkMode} className="mr-2" />
    {language === "cpp" ? "C++" : language === "java" ? "Java" : "Python"}
  </button>
);

function list3() {
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

  const toggleDetails = (index, section) => {
    setExpandedSections(prev => ({
      ...prev,
      [`${index}-${section}`]: !prev[`${index}-${section}`]
    }));
  };

  const codeExamples = [
    {
      title: "Design Circular Queue ",
      description: "Design your implementation of the circular queue with fixed size.",
      approach: [
        "1. Use fixed-size array and two pointers (head and tail)",
        "2. Enqueue: Check if queue is full before adding at tail",
        "3. Dequeue: Check if queue is empty before removing from head",
        "4. Handle wrap-around cases for both pointers"
      ],
      algorithmCharacteristics: [
        "Fixed Size: Efficient memory usage",
        "O(1) Operations: Constant time enqueue/dequeue",
        "Circular Buffer: Reuses empty spaces"
      ],
      complexityDetails: {
        time: "O(1) for all operations",
        space: "O(n) where n is capacity",
        explanation: "Array access and pointer updates are constant time"
      },
      cppcode: `class MyCircularQueue {
  private:
      vector<int> data;
      int head, tail, size, capacity;
  public:
      MyCircularQueue(int k) : data(k), head(-1), tail(-1), size(0), capacity(k) {}
      
      bool enQueue(int value) {
          if (isFull()) return false;
          if (isEmpty()) head = 0;
          tail = (tail + 1) % capacity;
          data[tail] = value;
          size++;
          return true;
      }
      
      bool deQueue() {
          if (isEmpty()) return false;
          if (head == tail) head = tail = -1;
          else head = (head + 1) % capacity;
          size--;
          return true;
      }
      
      int Front() {
          return isEmpty() ? -1 : data[head];
      }
      
      int Rear() {
          return isEmpty() ? -1 : data[tail];
      }
      
      bool isEmpty() {
          return size == 0;
      }
      
      bool isFull() {
          return size == capacity;
      }
  };`,
      javacode: `class MyCircularQueue {
      private int[] data;
      private int head, tail, size, capacity;
      
      public MyCircularQueue(int k) {
          data = new int[k];
          head = -1;
          tail = -1;
          size = 0;
          capacity = k;
      }
      
      public boolean enQueue(int value) {
          if (isFull()) return false;
          if (isEmpty()) head = 0;
          tail = (tail + 1) % capacity;
          data[tail] = value;
          size++;
          return true;
      }
      
      public boolean deQueue() {
          if (isEmpty()) return false;
          if (head == tail) head = tail = -1;
          else head = (head + 1) % capacity;
          size--;
          return true;
      }
      
      public int Front() {
          return isEmpty() ? -1 : data[head];
      }
      
      public int Rear() {
          return isEmpty() ? -1 : data[tail];
      }
      
      public boolean isEmpty() {
          return size == 0;
      }
      
      public boolean isFull() {
          return size == capacity;
      }
  }`,
      pythoncode: `class MyCircularQueue:
      def __init__(self, k: int):
          self.data = [0] * k
          self.head = -1
          self.tail = -1
          self.size = 0
          self.capacity = k
  
      def enQueue(self, value: int) -> bool:
          if self.isFull(): return False
          if self.isEmpty(): self.head = 0
          self.tail = (self.tail + 1) % self.capacity
          self.data[self.tail] = value
          self.size += 1
          return True
  
      def deQueue(self) -> bool:
          if self.isEmpty(): return False
          if self.head == self.tail:
              self.head = self.tail = -1
          else:
              self.head = (self.head + 1) % self.capacity
          self.size -= 1
          return True
  
      def Front(self) -> int:
          return -1 if self.isEmpty() else self.data[self.head]
  
      def Rear(self) -> int:
          return -1 if self.isEmpty() else self.data[self.tail]
  
      def isEmpty(self) -> bool:
          return self.size == 0
  
      def isFull(self) -> bool:
          return self.size == self.capacity`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(1); Space: O(n)",
      link: "https://leetcode.com/problems/design-circular-queue/"
    },
    {
      title: "Insert into a Sorted Circular Linked List",
      description: "Given a node from a circular linked list sorted in ascending order, insert a value while maintaining order.",
      approach: [
        "1. Handle empty list case",
        "2. Find insertion point between nodes where prev ≤ val ≤ next",
        "3. Handle cases where val is min/max in list",
        "4. Insert node and maintain circular property"
      ],
      algorithmCharacteristics: [
        "Single Pass: O(n) time complexity",
        "Edge Cases: Handles min/max insertion",
        "In-place: Modifies list without extra space"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Worst case requires full traversal of circular list"
      },
      cppcode: `class Node {
  public:
      int val;
      Node* next;
      Node(int _val) : val(_val), next(nullptr) {}
  };
  
  class Solution {
  public:
      Node* insert(Node* head, int insertVal) {
          Node* newNode = new Node(insertVal);
          if (!head) {
              newNode->next = newNode;
              return newNode;
          }
          
          Node* prev = head;
          Node* curr = head->next;
          bool inserted = false;
          
          do {
              if (prev->val <= insertVal && insertVal <= curr->val) {
                  prev->next = newNode;
                  newNode->next = curr;
                  inserted = true;
                  break;
              }
              else if (prev->val > curr->val) {
                  if (insertVal >= prev->val || insertVal <= curr->val) {
                      prev->next = newNode;
                      newNode->next = curr;
                      inserted = true;
                      break;
                  }
              }
              prev = curr;
              curr = curr->next;
          } while (prev != head);
          
          if (!inserted) {
              prev->next = newNode;
              newNode->next = curr;
          }
          
          return head;
      }
  };`,
      javacode: `class Node {
      public int val;
      public Node next;
      public Node(int _val) {
          val = _val;
      }
  }
  
  class Solution {
      public Node insert(Node head, int insertVal) {
          Node newNode = new Node(insertVal);
          if (head == null) {
              newNode.next = newNode;
              return newNode;
          }
          
          Node prev = head;
          Node curr = head.next;
          boolean inserted = false;
          
          do {
              if (prev.val <= insertVal && insertVal <= curr.val) {
                  prev.next = newNode;
                  newNode.next = curr;
                  inserted = true;
                  break;
              }
              else if (prev.val > curr.val) {
                  if (insertVal >= prev.val || insertVal <= curr.val) {
                      prev.next = newNode;
                      newNode.next = curr;
                      inserted = true;
                      break;
                  }
              }
              prev = curr;
              curr = curr.next;
          } while (prev != head);
          
          if (!inserted) {
              prev.next = newNode;
              newNode.next = curr;
          }
          
          return head;
      }
  }`,
      pythoncode: `class Node:
      def __init__(self, val=None, next=None):
          self.val = val
          self.next = next
  
  class Solution:
      def insert(self, head: 'Node', insertVal: int) -> 'Node':
          new_node = Node(insertVal)
          if not head:
              new_node.next = new_node
              return new_node
          
          prev, curr = head, head.next
          inserted = False
          
          while True:
              if prev.val <= insertVal <= curr.val:
                  prev.next = new_node
                  new_node.next = curr
                  inserted = True
                  break
              elif prev.val > curr.val:
                  if insertVal >= prev.val or insertVal <= curr.val:
                      prev.next = new_node
                      new_node.next = curr
                      inserted = True
                      break
              prev, curr = curr, curr.next
              if prev == head:
                  break
          
          if not inserted:
              prev.next = new_node
              new_node.next = curr
          
          return head`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/"
    },
    {
      title: "Linked List Cycle II",
      description: "Given a linked list, return the node where the cycle begins (if exists).",
      approach: [
        "1. Use Floyd's Tortoise and Hare algorithm",
        "2. Detect if cycle exists (slow == fast)",
        "3. Reset slow to head, move both at same speed until meet",
        "4. Meeting point is cycle start"
      ],
      algorithmCharacteristics: [
        "Two Pointers: Fast and slow pointers",
        "Mathematical Proof: Guarantees cycle detection",
        "No Extra Space: Uses constant space"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Linear time with two pointers traversing the list"
      },
      cppcode: `struct ListNode {
      int val;
      ListNode *next;
      ListNode(int x) : val(x), next(nullptr) {}
  };
  
  class Solution {
  public:
      ListNode *detectCycle(ListNode *head) {
          ListNode *slow = head, *fast = head;
          while (fast && fast->next) {
              slow = slow->next;
              fast = fast->next->next;
              if (slow == fast) break;
          }
          
          if (!fast || !fast->next) return nullptr;
          
          slow = head;
          while (slow != fast) {
              slow = slow->next;
              fast = fast->next;
          }
          return slow;
      }
  };`,
      javacode: `public class Solution {
      class ListNode {
          int val;
          ListNode next;
          ListNode(int x) { val = x; }
      }
      
      public ListNode detectCycle(ListNode head) {
          ListNode slow = head, fast = head;
          while (fast != null && fast.next != null) {
              slow = slow.next;
              fast = fast.next.next;
              if (slow == fast) break;
          }
          
          if (fast == null || fast.next == null) return null;
          
          slow = head;
          while (slow != fast) {
              slow = slow.next;
              fast = fast.next;
          }
          return slow;
      }
  }`,
      pythoncode: `class Solution:
      def detectCycle(self, head: ListNode) -> ListNode:
          slow = fast = head
          while fast and fast.next:
              slow = slow.next
              fast = fast.next.next
              if slow == fast:
                  break
          
          if not fast or not fast.next:
              return None
          
          slow = head
          while slow != fast:
              slow = slow.next
              fast = fast.next
          return slow`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/linked-list-cycle-ii/"
    },
    {
      title: "Circular Array Loop ",
      description: "Check if there is a cycle in circular array where movement is determined by array values.",
      approach: [
        "1. Use slow/fast pointer approach adapted for array indices",
        "2. Track visited indices to avoid reprocessing",
        "3. Check cycle direction (all forward/backward)",
        "4. Validate cycle length > 1"
      ],
      algorithmCharacteristics: [
        "Graph Traversal: Treats array as graph",
        "Cycle Detection: Adapted Floyd's algorithm",
        "Direction Check: Maintains consistent movement"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Each index processed at most twice"
      },
      cppcode: `class Solution {
  public:
      bool circularArrayLoop(vector<int>& nums) {
          int n = nums.size();
          for (int i = 0; i < n; i++) {
              if (nums[i] == 0) continue;
              
              int slow = i, fast = getNext(nums, i);
              while (nums[fast] * nums[i] > 0 && nums[getNext(nums, fast)] * nums[i] > 0) {
                  if (slow == fast) {
                      if (slow == getNext(nums, slow)) break;
                      return true;
                  }
                  slow = getNext(nums, slow);
                  fast = getNext(nums, getNext(nums, fast));
              }
              
              // Mark visited
              slow = i;
              int val = nums[i];
              while (nums[slow] * val > 0) {
                  int next = getNext(nums, slow);
                  nums[slow] = 0;
                  slow = next;
              }
          }
          return false;
      }
      
      int getNext(vector<int>& nums, int i) {
          int n = nums.size();
          return ((i + nums[i]) % n + n) % n;
      }
  };`,
      javacode: `class Solution {
      public boolean circularArrayLoop(int[] nums) {
          int n = nums.length;
          for (int i = 0; i < n; i++) {
              if (nums[i] == 0) continue;
              
              int slow = i, fast = getNext(nums, i);
              while (nums[fast] * nums[i] > 0 && nums[getNext(nums, fast)] * nums[i] > 0) {
                  if (slow == fast) {
                      if (slow == getNext(nums, slow)) break;
                      return true;
                  }
                  slow = getNext(nums, slow);
                  fast = getNext(nums, getNext(nums, fast));
              }
              
              // Mark visited
              slow = i;
              int val = nums[i];
              while (nums[slow] * val > 0) {
                  int next = getNext(nums, slow);
                  nums[slow] = 0;
                  slow = next;
              }
          }
          return false;
      }
      
      private int getNext(int[] nums, int i) {
          int n = nums.length;
          return ((i + nums[i]) % n + n) % n;
      }
  }`,
      pythoncode: `class Solution:
      def circularArrayLoop(self, nums: List[int]) -> bool:
          n = len(nums)
          for i in range(n):
              if nums[i] == 0:
                  continue
              
              slow, fast = i, self._get_next(nums, i)
              while nums[fast] * nums[i] > 0 and nums[self._get_next(nums, fast)] * nums[i] > 0:
                  if slow == fast:
                      if slow == self._get_next(nums, slow):
                          break
                      return True
                  slow = self._get_next(nums, slow)
                  fast = self._get_next(nums, self._get_next(nums, fast))
              
              # Mark visited
              slow = i
              val = nums[i]
              while nums[slow] * val > 0:
                  next_idx = self._get_next(nums, slow)
                  nums[slow] = 0
                  slow = next_idx
          
          return False
      
      def _get_next(self, nums, i):
          n = len(nums)
          return ((i + nums[i]) % n + n) % n`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/circular-array-loop/"
    },
    {
      title: "Split a Circular Linked List ",
      description: "Split a circular linked list into two equal circular linked lists.",
      approach: [
        "1. Find middle using slow/fast pointers",
        "2. Break list at middle into two halves",
        "3. Make both halves circular",
        "4. Return head pointers of both lists"
      ],
      algorithmCharacteristics: [
        "Two Pointers: Efficient middle finding",
        "In-place: Modifies original list",
        "Equal Split: Handles odd/even lengths"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Single pass to find middle and split"
      },
      cppcode: `void splitList(Node *head, Node **head1, Node **head2) {
      if (head == nullptr) return;
      
      Node *slow = head;
      Node *fast = head->next;
      
      while (fast != head && fast->next != head) {
          slow = slow->next;
          fast = fast->next->next;
      }
      
      *head1 = head;
      *head2 = slow->next;
      
      slow->next = *head1;
      
      Node *curr = *head2;
      while (curr->next != head) {
          curr = curr->next;
      }
      curr->next = *head2;
  }`,
      javacode: `class Node {
      int data;
      Node next;
      Node(int d) { data = d; }
  }
  
  class Solution {
      void splitList(Node head, Node[] head1, Node[] head2) {
          if (head == null) return;
          
          Node slow = head;
          Node fast = head.next;
          
          while (fast != head && fast.next != head) {
              slow = slow.next;
              fast = fast.next.next;
          }
          
          head1[0] = head;
          head2[0] = slow.next;
          
          slow.next = head1[0];
          
          Node curr = head2[0];
          while (curr.next != head) {
              curr = curr.next;
          }
          curr.next = head2[0];
      }
  }`,
      pythoncode: `def splitList(head):
      if not head:
          return None, None
      
      slow = head
      fast = head.next
      
      while fast != head and fast.next != head:
          slow = slow.next
          fast = fast.next.next
      
      head1 = head
      head2 = slow.next
      
      slow.next = head1
      
      curr = head2
      while curr.next != head:
          curr = curr.next
      curr.next = head2
      
      return head1, head2`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://www.geeksforgeeks.org/split-a-circular-linked-list-into-two-halves/"
    },
    {
      title: "Find the Duplicate Number ",
      description: "Given an array containing n+1 integers between 1 and n, find the duplicate number (circular linked list approach).",
      approach: [
        "1. Treat array as linked list where value is next index",
        "2. Use Floyd's Tortoise and Hare to detect cycle",
        "3. Find cycle entrance which is the duplicate number",
        "4. Works because duplicate creates a cycle"
      ],
      algorithmCharacteristics: [
        "Cycle Detection: Adapted Floyd's algorithm",
        "No Modification: Doesn't change input array",
        "Constant Space: Uses only two pointers"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Two passes through the array (detect cycle + find entrance)"
      },
      cppcode: `class Solution {
  public:
      int findDuplicate(vector<int>& nums) {
          int slow = nums[0];
          int fast = nums[0];
          
          do {
              slow = nums[slow];
              fast = nums[nums[fast]];
          } while (slow != fast);
          
          slow = nums[0];
          while (slow != fast) {
              slow = nums[slow];
              fast = nums[fast];
          }
          
          return slow;
      }
  };`,
      javacode: `class Solution {
      public int findDuplicate(int[] nums) {
          int slow = nums[0];
          int fast = nums[0];
          
          do {
              slow = nums[slow];
              fast = nums[nums[fast]];
          } while (slow != fast);
          
          slow = nums[0];
          while (slow != fast) {
              slow = nums[slow];
              fast = nums[fast];
          }
          
          return slow;
      }
  }`,
      pythoncode: `class Solution:
      def findDuplicate(self, nums: List[int]) -> int:
          slow = fast = nums[0]
          
          while True:
              slow = nums[slow]
              fast = nums[nums[fast]]
              if slow == fast:
                  break
          
          slow = nums[0]
          while slow != fast:
              slow = nums[slow]
              fast = nums[fast]
          
          return slow`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/find-the-duplicate-number/"
    },
    {
      title: "Design Circular Deque ",
      description: "Design a circular double-ended queue (deque) with efficient operations.",
      approach: [
        "1. Use fixed-size array and two pointers (front and rear)",
        "2. Handle wrap-around for both enqueue and dequeue",
        "3. Support operations at both ends",
        "4. Maintain size counter for full/empty checks"
      ],
      algorithmCharacteristics: [
        "Bidirectional: Supports front/rear operations",
        "Circular Buffer: Efficient space utilization",
        "O(1) Operations: Constant time complexity"
      ],
      complexityDetails: {
        time: "O(1) for all operations",
        space: "O(n) where n is capacity",
        explanation: "Array access and pointer updates are constant time"
      },
      cppcode: `class MyCircularDeque {
  private:
      vector<int> data;
      int front, rear, size, capacity;
  public:
      MyCircularDeque(int k) : data(k), front(0), rear(k-1), size(0), capacity(k) {}
      
      bool insertFront(int value) {
          if (isFull()) return false;
          front = (front - 1 + capacity) % capacity;
          data[front] = value;
          size++;
          return true;
      }
      
      bool insertLast(int value) {
          if (isFull()) return false;
          rear = (rear + 1) % capacity;
          data[rear] = value;
          size++;
          return true;
      }
      
      bool deleteFront() {
          if (isEmpty()) return false;
          front = (front + 1) % capacity;
          size--;
          return true;
      }
      
      bool deleteLast() {
          if (isEmpty()) return false;
          rear = (rear - 1 + capacity) % capacity;
          size--;
          return true;
      }
      
      int getFront() {
          return isEmpty() ? -1 : data[front];
      }
      
      int getRear() {
          return isEmpty() ? -1 : data[rear];
      }
      
      bool isEmpty() {
          return size == 0;
      }
      
      bool isFull() {
          return size == capacity;
      }
  };`,
      javacode: `class MyCircularDeque {
      private int[] data;
      private int front, rear, size, capacity;
      
      public MyCircularDeque(int k) {
          data = new int[k];
          front = 0;
          rear = k - 1;
          size = 0;
          capacity = k;
      }
      
      public boolean insertFront(int value) {
          if (isFull()) return false;
          front = (front - 1 + capacity) % capacity;
          data[front] = value;
          size++;
          return true;
      }
      
      public boolean insertLast(int value) {
          if (isFull()) return false;
          rear = (rear + 1) % capacity;
          data[rear] = value;
          size++;
          return true;
      }
      
      public boolean deleteFront() {
          if (isEmpty()) return false;
          front = (front + 1) % capacity;
          size--;
          return true;
      }
      
      public boolean deleteLast() {
          if (isEmpty()) return false;
          rear = (rear - 1 + capacity) % capacity;
          size--;
          return true;
      }
      
      public int getFront() {
          return isEmpty() ? -1 : data[front];
      }
      
      public int getRear() {
          return isEmpty() ? -1 : data[rear];
      }
      
      public boolean isEmpty() {
          return size == 0;
      }
      
      public boolean isFull() {
          return size == capacity;
      }
  }`,
      pythoncode: `class MyCircularDeque:
      def __init__(self, k: int):
          self.data = [0] * k
          self.front = 0
          self.rear = k - 1
          self.size = 0
          self.capacity = k
  
      def insertFront(self, value: int) -> bool:
          if self.isFull(): return False
          self.front = (self.front - 1) % self.capacity
          self.data[self.front] = value
          self.size += 1
          return True
  
      def insertLast(self, value: int) -> bool:
          if self.isFull(): return False
          self.rear = (self.rear + 1) % self.capacity
          self.data[self.rear] = value
          self.size += 1
          return True
  
      def deleteFront(self) -> bool:
          if self.isEmpty(): return False
          self.front = (self.front + 1) % self.capacity
          self.size -= 1
          return True
  
      def deleteLast(self) -> bool:
          if self.isEmpty(): return False
          self.rear = (self.rear - 1) % self.capacity
          self.size -= 1
          return True
  
      def getFront(self) -> int:
          return -1 if self.isEmpty() else self.data[self.front]
  
      def getRear(self) -> int:
          return -1 if self.isEmpty() else self.data[self.rear]
  
      def isEmpty(self) -> bool:
          return self.size == 0
  
      def isFull(self) -> bool:
          return self.size == self.capacity`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(1); Space: O(n)",
      link: "https://leetcode.com/problems/design-circular-deque/"
    },
    {
      title: "Rotate List ",
      description: "Rotate a linked list to the right by k places (circular list approach).",
      approach: [
        "1. Make list circular by connecting tail to head",
        "2. Find new tail at position (n - k % n - 1)",
        "3. Break circular list at new tail",
        "4. Return new head (new tail->next)"
      ],
      algorithmCharacteristics: [
        "Circular Transformation: Efficient rotation",
        "Single Pass: Finds length and new tail in one traversal",
        "In-place: Modifies list without extra space"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Two passes (find length + find new tail)"
      },
      cppcode: `class Solution {
  public:
      ListNode* rotateRight(ListNode* head, int k) {
          if (!head || !head->next || k == 0) return head;
          
          ListNode* tail = head;
          int n = 1;
          while (tail->next) {
              tail = tail->next;
              n++;
          }
          
          tail->next = head; // Make circular
          k %= n;
          
          ListNode* newTail = head;
          for (int i = 0; i < n - k - 1; i++) {
              newTail = newTail->next;
          }
          
          ListNode* newHead = newTail->next;
          newTail->next = nullptr;
          
          return newHead;
      }
  };`,
      javacode: `class Solution {
      public ListNode rotateRight(ListNode head, int k) {
          if (head == null || head.next == null || k == 0) return head;
          
          ListNode tail = head;
          int n = 1;
          while (tail.next != null) {
              tail = tail.next;
              n++;
          }
          
          tail.next = head; // Make circular
          k %= n;
          
          ListNode newTail = head;
          for (int i = 0; i < n - k - 1; i++) {
              newTail = newTail.next;
          }
          
          ListNode newHead = newTail.next;
          newTail.next = null;
          
          return newHead;
      }
  }`,
      pythoncode: `class Solution:
      def rotateRight(self, head: ListNode, k: int) -> ListNode:
          if not head or not head.next or k == 0:
              return head
          
          tail = head
          n = 1
          while tail.next:
              tail = tail.next
              n += 1
          
          tail.next = head  # Make circular
          k %= n
          
          new_tail = head
          for _ in range(n - k - 1):
              new_tail = new_tail.next
          
          new_head = new_tail.next
          new_tail.next = None
          
          return new_head`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/rotate-list/"
    },
    {
      title: "Happy Number ",
      description: "Determine if a number is happy (cycle detection using Floyd's algorithm).",
      approach: [
        "1. Treat digit square sequence as linked list",
        "2. Use Floyd's cycle detection",
        "3. If cycle reaches 1, number is happy",
        "4. Otherwise, enters repeating cycle"
      ],
      algorithmCharacteristics: [
        "Cycle Detection: Adapted Floyd's algorithm",
        "Mathematical: Based on digit squares",
        "Constant Space: Uses only two pointers"
      ],
      complexityDetails: {
        time: "O(log n)",
        space: "O(1)",
        explanation: "Time complexity is tricky but grows with number of digits"
      },
      cppcode: `class Solution {
  public:
      bool isHappy(int n) {
          int slow = n, fast = getNext(n);
          while (fast != 1 && slow != fast) {
              slow = getNext(slow);
              fast = getNext(getNext(fast));
          }
          return fast == 1;
      }
      
      int getNext(int n) {
          int sum = 0;
          while (n > 0) {
              int d = n % 10;
              sum += d * d;
              n /= 10;
          }
          return sum;
      }
  };`,
      javacode: `class Solution {
      public boolean isHappy(int n) {
          int slow = n, fast = getNext(n);
          while (fast != 1 && slow != fast) {
              slow = getNext(slow);
              fast = getNext(getNext(fast));
          }
          return fast == 1;
      }
      
      private int getNext(int n) {
          int sum = 0;
          while (n > 0) {
              int d = n % 10;
              sum += d * d;
              n /= 10;
          }
          return sum;
      }
  }`,
      pythoncode: `class Solution:
      def isHappy(self, n: int) -> bool:
          def get_next(num):
              total = 0
              while num > 0:
                  num, digit = divmod(num, 10)
                  total += digit ** 2
              return total
          
          slow = n
          fast = get_next(n)
          while fast != 1 and slow != fast:
              slow = get_next(slow)
              fast = get_next(get_next(fast))
          return fast == 1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(log n); Space: O(1)",
      link: "https://leetcode.com/problems/happy-number/"
    },
    {
      title: "Next Greater Node In Linked List ",
      description: "Find next greater node for each node in linked list (circular approach).",
      approach: [
        "1. Convert linked list to array for easier indexing",
        "2. Use monotonic stack to find next greater elements",
        "3. Handle circular nature by doubling array",
        "4. Map results back to original list nodes"
      ],
      algorithmCharacteristics: [
        "Monotonic Stack: Efficient next greater element finding",
        "Circular Handling: Doubled array approach",
        "Linear Time: Processes list in O(n) time"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "Single pass with stack operations"
      },
      cppcode: `class Solution {
  public:
      vector<int> nextLargerNodes(ListNode* head) {
          vector<int> nums;
          while (head) {
              nums.push_back(head->val);
              head = head->next;
          }
          
          stack<int> st;
          vector<int> res(nums.size());
          for (int i = 0; i < nums.size(); i++) {
              while (!st.empty() && nums[st.top()] < nums[i]) {
                  res[st.top()] = nums[i];
                  st.pop();
              }
              st.push(i);
          }
          
          while (!st.empty()) {
              res[st.top()] = 0;
              st.pop();
          }
          
          return res;
      }
  };`,
      javacode: `class Solution {
      public int[] nextLargerNodes(ListNode head) {
          List<Integer> nums = new ArrayList<>();
          while (head != null) {
              nums.add(head.val);
              head = head.next;
          }
          
          Stack<Integer> st = new Stack<>();
          int[] res = new int[nums.size()];
          for (int i = 0; i < nums.size(); i++) {
              while (!st.isEmpty() && nums.get(st.peek()) < nums.get(i)) {
                  res[st.pop()] = nums.get(i);
              }
              st.push(i);
          }
          
          while (!st.isEmpty()) {
              res[st.pop()] = 0;
          }
          
          return res;
      }
  }`,
      pythoncode: `class Solution:
      def nextLargerNodes(self, head: ListNode) -> List[int]:
          nums = []
          while head:
              nums.append(head.val)
              head = head.next
          
          stack = []
          res = [0] * len(nums)
          for i, num in enumerate(nums):
              while stack and nums[stack[-1]] < num:
                  res[stack.pop()] = num
              stack.append(i)
          
          return res`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(n)",
      link: "https://leetcode.com/problems/next-greater-node-in-linked-list/"
    }
  ];
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 py-12 rounded-2xl shadow-xl max-w-7xl transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50"
      }`}
    >
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text mb-8 sm:mb-12 ${
          darkMode
            ? "bg-gradient-to-r from-indigo-300 to-purple-400"
            : "bg-gradient-to-r from-indigo-600 to-purple-700"
        }`}
      >
        Circular Linked List 
      </h1>
  
      <div className="space-y-8">
        {codeExamples.map((example, index) => (
          <article
            key={index}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800/90 border-gray-700 hover:border-gray-600"
                : "bg-white/90 border-indigo-100 hover:border-indigo-200"
            }`}
          >
            <header className="mb-6">
              <h2
                className={`text-2xl sm:text-3xl font-bold text-left mb-4 ${
                  darkMode ? "text-indigo-300" : "text-indigo-800"
                }`}
              >
                {example.title}
              </h2>
  
              <div
                className={`p-4 sm:p-6 rounded-lg border transition-colors ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600"
                    : "bg-gray-50 border-gray-200"
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
                    darkMode ? "text-gray-300" : "text-gray-900"
                  } font-medium leading-relaxed space-y-2`}
                >
                  {formatDescription(example.description, darkMode)}
                </div>
              </div>
  
              <div className="space-y-4 mt-6">
                <CollapsibleSection
                  title="Approach"
                  content={example.approach}
                  isExpanded={expandedSections[`${index}-approach`]}
                  onToggle={() => toggleDetails(index, 'approach')}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-blue-900/30" : "bg-blue-50",
                    border: darkMode ? "border-blue-700" : "border-blue-200",
                    text: darkMode ? "text-blue-200" : "text-blue-800",
                    icon: darkMode ? "text-blue-300" : "text-blue-500",
                    hover: darkMode ? "hover:bg-blue-900/20" : "hover:bg-blue-50/70"
                  }}
                />
  
                <CollapsibleSection
                  title="Algorithm Characteristics"
                  content={example.algorithmCharacteristics}
                  isExpanded={expandedSections[`${index}-characteristics`]}
                  onToggle={() => toggleDetails(index, 'characteristics')}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-purple-900/30" : "bg-purple-50",
                    border: darkMode ? "border-purple-700" : "border-purple-200",
                    text: darkMode ? "text-purple-200" : "text-purple-800",
                    icon: darkMode ? "text-purple-300" : "text-purple-500",
                    hover: darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-50/70"
                  }}
                />
  
                <CollapsibleSection
                  title="Complexity Analysis"
                  content={
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-4">
                        <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-blue-900/30 border border-blue-800' : 'bg-blue-100'}`}>
                          <div className={`text-xs font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>TIME COMPLEXITY</div>
                          <div className={`font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>
                            {example.complexityDetails.time}
                          </div>
                        </div>
                        <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-100'}`}>
                          <div className={`text-xs font-semibold ${darkMode ? 'text-green-300' : 'text-green-600'}`}>SPACE COMPLEXITY</div>
                          <div className={`font-bold ${darkMode ? 'text-green-100' : 'text-green-800'}`}>
                            {typeof example.complexityDetails.space === 'string' 
                              ? example.complexityDetails.space 
                              : `Top-Down: ${example.complexityDetails.space.topDown}, Bottom-Up: ${example.complexityDetails.space.bottomUp}, Optimized: ${example.complexityDetails.space.optimized}`}
                          </div>
                        </div>
                      </div>
                      <div className={`prose prose-sm max-w-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p className="font-semibold">Explanation:</p>
                        <p>{example.complexityDetails.explanation}</p>
                      </div>
                    </div>
                  }
                  isExpanded={expandedSections[`${index}-complexity`]}
                  onToggle={() => toggleDetails(index, 'complexity')}
                  darkMode={darkMode}
                  colorScheme={{
                    bg: darkMode ? "bg-green-900/30" : "bg-green-50",
                    border: darkMode ? "border-green-700" : "border-green-200",
                    text: darkMode ? "text-green-200" : "text-green-800",
                    icon: darkMode ? "text-green-300" : "text-green-500",
                    hover: darkMode ? "hover:bg-green-900/20" : "hover:bg-green-50/70"
                  }}
                />
              </div>
            </header>
  
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={example.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center bg-gradient-to-r ${
                  darkMode
                    ? "from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600"
                    : "from-gray-600 to-gray-800 hover:from-gray-600 hover:to-gray-900"
                } text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
                  darkMode ? "focus:ring-offset-gray-900" : "focus:ring-offset-white"
                }`}
              >
                <img 
                  src={darkMode 
                    ? "https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg" 
                    : "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"}
                  alt="LeetCode Logo" 
                  className="w-6 h-6 mr-2"
                />
                View Problem
              </a>
  
              <ToggleCodeButton
                language="cpp"
                isVisible={visibleCodes.cpp === index}
                onClick={() => toggleCodeVisibility("cpp", index)}
                darkMode={darkMode}
              />
  
              <ToggleCodeButton
                language="java"
                isVisible={visibleCodes.java === index}
                onClick={() => toggleCodeVisibility("java", index)}
                darkMode={darkMode}
              />
  
              <ToggleCodeButton
                language="python"
                isVisible={visibleCodes.python === index}
                onClick={() => toggleCodeVisibility("python", index)}
                darkMode={darkMode}
              />
            </div>
  
            <div className="space-y-4">
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default list3;