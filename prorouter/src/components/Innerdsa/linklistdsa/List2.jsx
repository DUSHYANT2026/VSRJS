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

function list2() {
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
      title: "Design Browser History ",
      description: "Implement the BrowserHistory class to support visiting URLs, going back and forward in history.",
      approach: [
        "1. Use a doubly linked list to maintain history",
        "2. Track current position in history",
        "3. For visit(url), clear all forward history and add new URL",
        "4. For back(steps) and forward(steps), move current pointer accordingly"
      ],
      algorithmCharacteristics: [
        "Efficient Navigation: O(1) for visit, O(steps) for back/forward",
        "History Preservation: Maintains complete browsing history",
        "Forward Clearing: Automatically clears forward history on new visit"
      ],
      complexityDetails: {
        time: {
          visit: "O(1)",
          back: "O(steps)",
          forward: "O(steps)"
        },
        space: "O(n) where n is number of visited URLs",
        explanation: "Each operation is bounded by the number of steps or constant time"
      },
      cppcode: `class BrowserHistory {
  private:
      struct Node {
          string url;
          Node* prev;
          Node* next;
          Node(string url) : url(url), prev(nullptr), next(nullptr) {}
      };
      
      Node* current;
      
  public:
      BrowserHistory(string homepage) {
          current = new Node(homepage);
      }
      
      void visit(string url) {
          Node* newNode = new Node(url);
          current->next = newNode;
          newNode->prev = current;
          current = newNode;
      }
      
      string back(int steps) {
          while (steps-- && current->prev) {
              current = current->prev;
          }
          return current->url;
      }
      
      string forward(int steps) {
          while (steps-- && current->next) {
              current = current->next;
          }
          return current->url;
      }
  };`,
      javacode: `class BrowserHistory {
      class Node {
          String url;
          Node prev, next;
          public Node(String url) {
              this.url = url;
          }
      }
      
      private Node current;
  
      public BrowserHistory(String homepage) {
          current = new Node(homepage);
      }
      
      public void visit(String url) {
          Node newNode = new Node(url);
          current.next = newNode;
          newNode.prev = current;
          current = newNode;
      }
      
      public String back(int steps) {
          while (steps-- > 0 && current.prev != null) {
              current = current.prev;
          }
          return current.url;
      }
      
      public String forward(int steps) {
          while (steps-- > 0 && current.next != null) {
              current = current.next;
          }
          return current.url;
      }
  }`,
      pythoncode: `class Node:
      def __init__(self, url):
          self.url = url
          self.prev = None
          self.next = None
  
  class BrowserHistory:
      def __init__(self, homepage: str):
          self.current = Node(homepage)
  
      def visit(self, url: str) -> None:
          new_node = Node(url)
          self.current.next = new_node
          new_node.prev = self.current
          self.current = new_node
  
      def back(self, steps: int) -> str:
          while steps > 0 and self.current.prev:
              self.current = self.current.prev
              steps -= 1
          return self.current.url
  
      def forward(self, steps: int) -> str:
          while steps > 0 and self.current.next:
              self.current = self.current.next
              steps -= 1
          return self.current.url`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(1) visit, O(steps) back/forward; Space: O(n)",
      link: "https://leetcode.com/problems/design-browser-history/"
    },
    {
      title: "Flatten a Multilevel Doubly Linked List ",
      description: "Flatten a multilevel doubly linked list into a single level, maintaining the order.",
      approach: [
        "1. Use DFS approach with stack to process child nodes",
        "2. When encountering a node with child, push next node to stack",
        "3. Connect child as next and process it",
        "4. After reaching end, pop from stack and connect"
      ],
      algorithmCharacteristics: [
        "Depth-First: Processes child nodes before siblings",
        "In-place: Modifies the original list structure",
        "Stack Usage: Manages pending nodes efficiently"
      ],
      complexityDetails: {
        time: "O(n) where n is total nodes in multilevel list",
        space: "O(k) where k is maximum depth of child levels",
        explanation: "Each node is processed exactly once"
      },
      cppcode: `class Solution {
  public:
      Node* flatten(Node* head) {
          if (!head) return nullptr;
          
          stack<Node*> stack;
          Node* curr = head;
          
          while (curr) {
              if (curr->child) {
                  if (curr->next) stack.push(curr->next);
                  curr->next = curr->child;
                  curr->child->prev = curr;
                  curr->child = nullptr;
              }
              
              if (!curr->next && !stack.empty()) {
                  Node* next = stack.top();
                  stack.pop();
                  curr->next = next;
                  next->prev = curr;
              }
              
              curr = curr->next;
          }
          
          return head;
      }
  };`,
      javacode: `class Solution {
      public Node flatten(Node head) {
          if (head == null) return null;
          
          Stack<Node> stack = new Stack<>();
          Node curr = head;
          
          while (curr != null) {
              if (curr.child != null) {
                  if (curr.next != null) stack.push(curr.next);
                  curr.next = curr.child;
                  curr.child.prev = curr;
                  curr.child = null;
              }
              
              if (curr.next == null && !stack.isEmpty()) {
                  Node next = stack.pop();
                  curr.next = next;
                  next.prev = curr;
              }
              
              curr = curr.next;
          }
          
          return head;
      }
  }`,
      pythoncode: `class Solution:
      def flatten(self, head: 'Node') -> 'Node':
          if not head:
              return None
          
          stack = []
          curr = head
          
          while curr:
              if curr.child:
                  if curr.next:
                      stack.append(curr.next)
                  curr.next = curr.child
                  curr.child.prev = curr
                  curr.child = None
              
              if not curr.next and stack:
                  next_node = stack.pop()
                  curr.next = next_node
                  next_node.prev = curr
              
              curr = curr.next
          
          return head`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(k)",
      link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"
    },
    {
      title: "LRU Cache ",
      description: "Design a Least Recently Used (LRU) cache with O(1) get and put operations.",
      approach: [
        "1. Use hash map for O(1) key access",
        "2. Use doubly linked list to maintain access order",
        "3. Move accessed items to front (most recently used)",
        "4. Evict from tail (least recently used) when capacity exceeded"
      ],
      algorithmCharacteristics: [
        "Constant Time: O(1) for both get and put",
        "Doubly Linked List: Efficient reordering of elements",
        "Hash Map: Quick key lookup"
      ],
      complexityDetails: {
        time: "O(1) for both get and put",
        space: "O(capacity) for storing cache elements",
        explanation: "Hash map provides O(1) access, DLL provides O(1) reordering"
      },
      cppcode: `class LRUCache {
  private:
      struct Node {
          int key, val;
          Node *prev, *next;
          Node(int k, int v) : key(k), val(v), prev(nullptr), next(nullptr) {}
      };
      
      int capacity;
      unordered_map<int, Node*> cache;
      Node *head, *tail;
      
      void addToFront(Node* node) {
          node->next = head->next;
          node->prev = head;
          head->next->prev = node;
          head->next = node;
      }
      
      void removeNode(Node* node) {
          node->prev->next = node->next;
          node->next->prev = node->prev;
      }
      
      void moveToFront(Node* node) {
          removeNode(node);
          addToFront(node);
      }
      
      Node* popTail() {
          Node* res = tail->prev;
          removeNode(res);
          return res;
      }
      
  public:
      LRUCache(int capacity) : capacity(capacity) {
          head = new Node(-1, -1);
          tail = new Node(-1, -1);
          head->next = tail;
          tail->prev = head;
      }
      
      int get(int key) {
          if (cache.find(key) == cache.end()) return -1;
          Node* node = cache[key];
          moveToFront(node);
          return node->val;
      }
      
      void put(int key, int value) {
          if (cache.find(key) != cache.end()) {
              Node* node = cache[key];
              node->val = value;
              moveToFront(node);
          } else {
              if (cache.size() == capacity) {
                  Node* removed = popTail();
                  cache.erase(removed->key);
                  delete removed;
              }
              Node* newNode = new Node(key, value);
              cache[key] = newNode;
              addToFront(newNode);
          }
      }
  };`,
      javacode: `class LRUCache {
      class Node {
          int key, val;
          Node prev, next;
          public Node(int k, int v) {
              key = k;
              val = v;
          }
      }
      
      private int capacity;
      private Map<Integer, Node> cache;
      private Node head, tail;
      
      public LRUCache(int capacity) {
          this.capacity = capacity;
          cache = new HashMap<>();
          head = new Node(-1, -1);
          tail = new Node(-1, -1);
          head.next = tail;
          tail.prev = head;
      }
      
      private void addToFront(Node node) {
          node.next = head.next;
          node.prev = head;
          head.next.prev = node;
          head.next = node;
      }
      
      private void removeNode(Node node) {
          node.prev.next = node.next;
          node.next.prev = node.prev;
      }
      
      private void moveToFront(Node node) {
          removeNode(node);
          addToFront(node);
      }
      
      private Node popTail() {
          Node res = tail.prev;
          removeNode(res);
          return res;
      }
      
      public int get(int key) {
          if (!cache.containsKey(key)) return -1;
          Node node = cache.get(key);
          moveToFront(node);
          return node.val;
      }
      
      public void put(int key, int value) {
          if (cache.containsKey(key)) {
              Node node = cache.get(key);
              node.val = value;
              moveToFront(node);
          } else {
              if (cache.size() == capacity) {
                  Node removed = popTail();
                  cache.remove(removed.key);
              }
              Node newNode = new Node(key, value);
              cache.put(key, newNode);
              addToFront(newNode);
          }
      }
  }`,
      pythoncode: `class Node:
      def __init__(self, key=0, value=0):
          self.key = key
          self.value = value
          self.prev = None
          self.next = None
  
  class LRUCache:
      def __init__(self, capacity: int):
          self.capacity = capacity
          self.cache = {}
          self.head = Node()
          self.tail = Node()
          self.head.next = self.tail
          self.tail.prev = self.head
  
      def _add_node(self, node):
          node.prev = self.head
          node.next = self.head.next
          self.head.next.prev = node
          self.head.next = node
  
      def _remove_node(self, node):
          prev = node.prev
          next = node.next
          prev.next = next
          next.prev = prev
  
      def _move_to_front(self, node):
          self._remove_node(node)
          self._add_node(node)
  
      def _pop_tail(self):
          res = self.tail.prev
          self._remove_node(res)
          return res
  
      def get(self, key: int) -> int:
          if key not in self.cache:
              return -1
          node = self.cache[key]
          self._move_to_front(node)
          return node.value
  
      def put(self, key: int, value: int) -> None:
          if key in self.cache:
              node = self.cache[key]
              node.value = value
              self._move_to_front(node)
          else:
              if len(self.cache) == self.capacity:
                  removed = self._pop_tail()
                  del self.cache[removed.key]
              new_node = Node(key, value)
              self.cache[key] = new_node
              self._add_node(new_node)`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(1); Space: O(capacity)",
      link: "https://leetcode.com/problems/lru-cache/"
    },
    {
      title: "All O(1) Data Structure - LeetCode 432",
      description: "Design a data structure that supports increment, decrement, getMaxKey, and getMinKey all in O(1) time.",
      approach: [
        "1. Use hash map to store key-frequency mappings",
        "2. Use doubly linked list of frequency buckets",
        "3. Each bucket contains keys with same frequency",
        "4. Maintain pointers to min and max frequency buckets"
      ],
      algorithmCharacteristics: [
        "Constant Time: All operations O(1)",
        "Frequency Buckets: Groups keys by frequency",
        "Order Maintenance: DLL maintains frequency order"
      ],
      complexityDetails: {
        time: "O(1) for all operations",
        space: "O(n) where n is number of keys",
        explanation: "Hash map provides O(1) access, DLL provides O(1) reordering"
      },
      cppcode: `class AllOne {
  private:
      struct Bucket {
          int count;
          unordered_set<string> keys;
          Bucket(int c) : count(c) {}
      };
      
      list<Bucket> buckets;
      unordered_map<string, list<Bucket>::iterator> keyMap;
      
  public:
      AllOne() {}
      
      void inc(string key) {
          if (!keyMap.count(key)) {
              if (buckets.empty() || buckets.front().count != 1) {
                  buckets.push_front(Bucket(1));
              }
              buckets.front().keys.insert(key);
              keyMap[key] = buckets.begin();
          } else {
              auto curr = keyMap[key];
              auto next = curr;
              ++next;
              
              if (next == buckets.end() || next->count != curr->count + 1) {
                  next = buckets.insert(next, Bucket(curr->count + 1));
              }
              
              next->keys.insert(key);
              keyMap[key] = next;
              
              curr->keys.erase(key);
              if (curr->keys.empty()) {
                  buckets.erase(curr);
              }
          }
      }
      
      void dec(string key) {
          if (!keyMap.count(key)) return;
          
          auto curr = keyMap[key];
          auto prev = curr;
          --prev;
          
          keyMap.erase(key);
          
          if (curr->count > 1) {
              if (curr == buckets.begin() || prev->count != curr->count - 1) {
                  prev = buckets.insert(curr, Bucket(curr->count - 1));
              }
              prev->keys.insert(key);
              keyMap[key] = prev;
          }
          
          curr->keys.erase(key);
          if (curr->keys.empty()) {
              buckets.erase(curr);
          }
      }
      
      string getMaxKey() {
          return buckets.empty() ? "" : *buckets.back().keys.begin();
      }
      
      string getMinKey() {
          return buckets.empty() ? "" : *buckets.front().keys.begin();
      }
  };`,
      javacode: `class AllOne {
      class Bucket {
          int count;
          Set<String> keys;
          Bucket prev, next;
          public Bucket(int c) {
              count = c;
              keys = new HashSet<>();
          }
      }
      
      private Map<String, Bucket> keyMap;
      private Bucket head, tail;
      
      public AllOne() {
          keyMap = new HashMap<>();
          head = new Bucket(Integer.MIN_VALUE);
          tail = new Bucket(Integer.MAX_VALUE);
          head.next = tail;
          tail.prev = head;
      }
      
      private void addAfter(Bucket prev, Bucket bucket) {
          bucket.prev = prev;
          bucket.next = prev.next;
          prev.next.prev = bucket;
          prev.next = bucket;
      }
      
      private void removeBucket(Bucket bucket) {
          bucket.prev.next = bucket.next;
          bucket.next.prev = bucket.prev;
      }
      
      public void inc(String key) {
          if (!keyMap.containsKey(key)) {
              if (head.next.count != 1) {
                  addAfter(head, new Bucket(1));
              }
              head.next.keys.add(key);
              keyMap.put(key, head.next);
          } else {
              Bucket curr = keyMap.get(key);
              Bucket next = curr.next;
              
              if (next.count != curr.count + 1) {
                  next = new Bucket(curr.count + 1);
                  addAfter(curr, next);
              }
              
              next.keys.add(key);
              keyMap.put(key, next);
              
              curr.keys.remove(key);
              if (curr.keys.isEmpty()) {
                  removeBucket(curr);
              }
          }
      }
      
      public void dec(String key) {
          if (!keyMap.containsKey(key)) return;
          
          Bucket curr = keyMap.get(key);
          keyMap.remove(key);
          
          if (curr.count > 1) {
              Bucket prev = curr.prev;
              if (prev.count != curr.count - 1) {
                  prev = new Bucket(curr.count - 1);
                  addAfter(curr.prev, prev);
              }
              prev.keys.add(key);
              keyMap.put(key, prev);
          }
          
          curr.keys.remove(key);
          if (curr.keys.isEmpty()) {
              removeBucket(curr);
          }
      }
      
      public String getMaxKey() {
          return tail.prev == head ? "" : tail.prev.keys.iterator().next();
      }
      
      public String getMinKey() {
          return head.next == tail ? "" : head.next.keys.iterator().next();
      }
  }`,
      pythoncode: `class Bucket:
      def __init__(self, count=0):
          self.count = count
          self.keys = set()
          self.prev = None
          self.next = None
  
  class AllOne:
      def __init__(self):
          self.key_map = {}
          self.head = Bucket()
          self.tail = Bucket()
          self.head.next = self.tail
          self.tail.prev = self.head
  
      def _add_after(self, prev_node, new_node):
          new_node.prev = prev_node
          new_node.next = prev_node.next
          prev_node.next.prev = new_node
          prev_node.next = new_node
  
      def _remove_bucket(self, node):
          node.prev.next = node.next
          node.next.prev = node.prev
  
      def inc(self, key: str) -> None:
          if key not in self.key_map:
              if self.head.next.count != 1:
                  new_bucket = Bucket(1)
                  self._add_after(self.head, new_bucket)
              self.head.next.keys.add(key)
              self.key_map[key] = self.head.next
          else:
              curr = self.key_map[key]
              next_node = curr.next
              
              if next_node.count != curr.count + 1:
                  new_bucket = Bucket(curr.count + 1)
                  self._add_after(curr, new_bucket)
                  next_node = new_bucket
              
              next_node.keys.add(key)
              self.key_map[key] = next_node
              
              curr.keys.remove(key)
              if not curr.keys:
                  self._remove_bucket(curr)
  
      def dec(self, key: str) -> None:
          if key not in self.key_map:
              return
          
          curr = self.key_map[key]
          del self.key_map[key]
          
          if curr.count > 1:
              prev_node = curr.prev
              if prev_node.count != curr.count - 1:
                  new_bucket = Bucket(curr.count - 1)
                  self._add_after(curr.prev, new_bucket)
                  prev_node = new_bucket
              prev_node.keys.add(key)
              self.key_map[key] = prev_node
          
          curr.keys.remove(key)
          if not curr.keys:
              self._remove_bucket(curr)
  
      def getMaxKey(self) -> str:
          return next(iter(self.tail.prev.keys)) if self.tail.prev != self.head else ""
  
      def getMinKey(self) -> str:
          return next(iter(self.head.next.keys)) if self.head.next != self.tail else ""`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(1); Space: O(n)",
      link: "https://leetcode.com/problems/all-oone-data-structure/"
    },
    {
      title: "Design Front Middle Back Queue ",
      description: "Design a queue that supports push and pop operations from front, middle, and back.",
      approach: [
        "1. Use a doubly linked list for efficient middle access",
        "2. Maintain pointer to middle node",
        "3. Adjust middle pointer based on queue size changes",
        "4. Handle even/odd size cases for middle operations"
      ],
      algorithmCharacteristics: [
        "Middle Access: O(1) time for middle operations",
        "Flexible Operations: Supports front/middle/back operations",
        "Dynamic Adjustment: Middle pointer updates based on size"
      ],
      complexityDetails: {
        time: "O(1) for all operations",
        space: "O(n) where n is number of elements",
        explanation: "DLL provides O(1) insert/delete at any position with proper pointers"
      },
      cppcode: `class FrontMiddleBackQueue {
  private:
      struct Node {
          int val;
          Node *prev, *next;
          Node(int v) : val(v), prev(nullptr), next(nullptr) {}
      };
      
      Node *head, *tail, *middle;
      int size;
      
      void updateMiddleAfterPush(bool pushedFront) {
          size++;
          if (size == 1) {
              middle = head;
          } else if (size % 2 == 1) {
              middle = pushedFront ? middle->prev : middle->next;
          }
      }
      
      void updateMiddleAfterPop(bool poppedFront) {
          size--;
          if (size == 0) {
              middle = nullptr;
          } else if (size % 2 == 0) {
              middle = poppedFront ? middle->next : middle->prev;
          }
      }
      
  public:
      FrontMiddleBackQueue() : head(nullptr), tail(nullptr), middle(nullptr), size(0) {}
      
      void pushFront(int val) {
          Node* newNode = new Node(val);
          if (!head) {
              head = tail = middle = newNode;
          } else {
              newNode->next = head;
              head->prev = newNode;
              head = newNode;
          }
          updateMiddleAfterPush(true);
      }
      
      void pushMiddle(int val) {
          if (!middle) {
              pushFront(val);
              return;
          }
          
          Node* newNode = new Node(val);
          if (size % 2 == 1) { // Insert before middle
              newNode->prev = middle->prev;
              newNode->next = middle;
              if (middle->prev) middle->prev->next = newNode;
              else head = newNode;
              middle->prev = newNode;
          } else { // Insert after middle
              newNode->next = middle->next;
              newNode->prev = middle;
              if (middle->next) middle->next->prev = newNode;
              else tail = newNode;
              middle->next = newNode;
          }
          updateMiddleAfterPush(size % 2 == 1);
      }
      
      void pushBack(int val) {
          Node* newNode = new Node(val);
          if (!tail) {
              head = tail = middle = newNode;
          } else {
              newNode->prev = tail;
              tail->next = newNode;
              tail = newNode;
          }
          updateMiddleAfterPush(false);
      }
      
      int popFront() {
          if (!head) return -1;
          int val = head->val;
          Node* temp = head;
          head = head->next;
          if (head) head->prev = nullptr;
          else tail = middle = nullptr;
          delete temp;
          updateMiddleAfterPop(true);
          return val;
      }
      
      int popMiddle() {
          if (!middle) return -1;
          int val = middle->val;
          Node* temp = middle;
          
          if (middle->prev) middle->prev->next = middle->next;
          else head = middle->next;
          
          if (middle->next) middle->next->prev = middle->prev;
          else tail = middle->prev;
          
          if (size % 2 == 1) {
              middle = middle->prev;
          } else {
              middle = middle->next;
          }
          
          size--;
          if (size == 0) head = tail = middle = nullptr;
          delete temp;
          return val;
      }
      
      int popBack() {
          if (!tail) return -1;
          int val = tail->val;
          Node* temp = tail;
          tail = tail->prev;
          if (tail) tail->next = nullptr;
          else head = middle = nullptr;
          delete temp;
          updateMiddleAfterPop(false);
          return val;
      }
  };`,
      javacode: `class FrontMiddleBackQueue {
      class Node {
          int val;
          Node prev, next;
          public Node(int v) {
              val = v;
          }
      }
      
      private Node head, tail, middle;
      private int size;
      
      public FrontMiddleBackQueue() {
          head = tail = middle = null;
          size = 0;
      }
      
      private void updateMiddleAfterPush(boolean pushedFront) {
          size++;
          if (size == 1) {
              middle = head;
          } else if (size % 2 == 1) {
              middle = pushedFront ? middle.prev : middle.next;
          }
      }
      
      private void updateMiddleAfterPop(boolean poppedFront) {
          size--;
          if (size == 0) {
              middle = null;
          } else if (size % 2 == 0) {
              middle = poppedFront ? middle.next : middle.prev;
          }
      }
      
      public void pushFront(int val) {
          Node newNode = new Node(val);
          if (head == null) {
              head = tail = middle = newNode;
          } else {
              newNode.next = head;
              head.prev = newNode;
              head = newNode;
          }
          updateMiddleAfterPush(true);
      }
      
      public void pushMiddle(int val) {
          if (middle == null) {
              pushFront(val);
              return;
          }
          
          Node newNode = new Node(val);
          if (size % 2 == 1) { // Insert before middle
              newNode.prev = middle.prev;
              newNode.next = middle;
              if (middle.prev != null) middle.prev.next = newNode;
              else head = newNode;
              middle.prev = newNode;
          } else { // Insert after middle
              newNode.next = middle.next;
              newNode.prev = middle;
              if (middle.next != null) middle.next.prev = newNode;
              else tail = newNode;
              middle.next = newNode;
          }
          updateMiddleAfterPush(size % 2 == 1);
      }
      
      public void pushBack(int val) {
          Node newNode = new Node(val);
          if (tail == null) {
              head = tail = middle = newNode;
          } else {
              newNode.prev = tail;
              tail.next = newNode;
              tail = newNode;
          }
          updateMiddleAfterPush(false);
      }
      
      public int popFront() {
          if (head == null) return -1;
          int val = head.val;
          Node temp = head;
          head = head.next;
          if (head != null) head.prev = null;
          else tail = middle = null;
          updateMiddleAfterPop(true);
          return val;
      }
      
      public int popMiddle() {
          if (middle == null) return -1;
          int val = middle.val;
          Node temp = middle;
          
          if (middle.prev != null) middle.prev.next = middle.next;
          else head = middle.next;
          
          if (middle.next != null) middle.next.prev = middle.prev;
          else tail = middle.prev;
          
          if (size % 2 == 1) {
              middle = middle.prev;
          } else {
              middle = middle.next;
          }
          
          size--;
          if (size == 0) head = tail = middle = null;
          return val;
      }
      
      public int popBack() {
          if (tail == null) return -1;
          int val = tail.val;
          Node temp = tail;
          tail = tail.prev;
          if (tail != null) tail.next = null;
          else head = middle = null;
          updateMiddleAfterPop(false);
          return val;
      }
  }`,
      pythoncode: `class Node:
      def __init__(self, val=0):
          self.val = val
          self.prev = None
          self.next = None
  
  class FrontMiddleBackQueue:
      def __init__(self):
          self.head = None
          self.tail = None
          self.middle = None
          self.size = 0
  
      def _update_middle_after_push(self, pushed_front):
          self.size += 1
          if self.size == 1:
              self.middle = self.head
          elif self.size % 2 == 1:
              self.middle = self.middle.prev if pushed_front else self.middle.next
  
      def _update_middle_after_pop(self, popped_front):
          self.size -= 1
          if self.size == 0:
              self.middle = None
          elif self.size % 2 == 0:
              self.middle = self.middle.next if popped_front else self.middle.prev
  
      def pushFront(self, val: int) -> None:
          new_node = Node(val)
          if not self.head:
              self.head = self.tail = self.middle = new_node
          else:
              new_node.next = self.head
              self.head.prev = new_node
              self.head = new_node
          self._update_middle_after_push(True)
  
      def pushMiddle(self, val: int) -> None:
          if not self.middle:
              self.pushFront(val)
              return
          
          new_node = Node(val)
          if self.size % 2 == 1:  # Insert before middle
              new_node.prev = self.middle.prev
              new_node.next = self.middle
              if self.middle.prev:
                  self.middle.prev.next = new_node
              else:
                  self.head = new_node
              self.middle.prev = new_node
          else:  # Insert after middle
              new_node.next = self.middle.next
              new_node.prev = self.middle
              if self.middle.next:
                  self.middle.next.prev = new_node
              else:
                  self.tail = new_node
              self.middle.next = new_node
          self._update_middle_after_push(self.size % 2 == 1)
  
      def pushBack(self, val: int) -> None:
          new_node = Node(val)
          if not self.tail:
              self.head = self.tail = self.middle = new_node
          else:
              new_node.prev = self.tail
              self.tail.next = new_node
              self.tail = new_node
          self._update_middle_after_push(False)
  
      def popFront(self) -> int:
          if not self.head:
              return -1
          val = self.head.val
          temp = self.head
          self.head = self.head.next
          if self.head:
              self.head.prev = None
          else:
              self.tail = self.middle = None
          self._update_middle_after_pop(True)
          return val
  
      def popMiddle(self) -> int:
          if not self.middle:
              return -1
          val = self.middle.val
          temp = self.middle
          
          if self.middle.prev:
              self.middle.prev.next = self.middle.next
          else:
              self.head = self.middle.next
          
          if self.middle.next:
              self.middle.next.prev = self.middle.prev
          else:
              self.tail = self.middle.prev
          
          if self.size % 2 == 1:
              self.middle = self.middle.prev
          else:
              self.middle = self.middle.next
          
          self.size -= 1
          if self.size == 0:
              self.head = self.tail = self.middle = None
          return val
  
      def popBack(self) -> int:
          if not self.tail:
              return -1
          val = self.tail.val
          temp = self.tail
          self.tail = self.tail.prev
          if self.tail:
              self.tail.next = None
          else:
              self.head = self.middle = None
          self._update_middle_after_pop(False)
          return val`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(1); Space: O(n)",
      link: "https://leetcode.com/problems/design-front-middle-back-queue/"
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
        Doubly Linked List 
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

export default list2;