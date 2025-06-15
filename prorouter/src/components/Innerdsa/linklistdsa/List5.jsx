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

function list5() {
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
      title: "Reverse Linked List",
      description: "Reverse a singly linked list both iteratively and recursively.",
      approach: [
        "1. Iterative: Use three pointers (prev, curr, next) to reverse links",
        "2. Recursive: Reverse rest of list and link current node to reversed list"
      ],
      algorithmCharacteristics: [
        "In-place: Modifies list without extra space",
        "Linear Time: Processes list in one pass",
        "Two Approaches: Demonstrates both iterative and recursive solutions"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1) iterative, O(n) recursive (stack space)",
        explanation: "Each node processed exactly once"
      },
      cppcode: `// Iterative
  ListNode* reverseList(ListNode* head) {
      ListNode *prev = nullptr, *curr = head, *next = nullptr;
      while (curr) {
          next = curr->next;
          curr->next = prev;
          prev = curr;
          curr = next;
      }
      return prev;
  }
  
  // Recursive
  ListNode* reverseListRecursive(ListNode* head) {
      if (!head || !head->next) return head;
      ListNode* newHead = reverseListRecursive(head->next);
      head->next->next = head;
      head->next = nullptr;
      return newHead;
  }`,
      javacode: `// Iterative
  public ListNode reverseList(ListNode head) {
      ListNode prev = null, curr = head, next = null;
      while (curr != null) {
          next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
      }
      return prev;
  }
  
  // Recursive
  public ListNode reverseListRecursive(ListNode head) {
      if (head == null || head.next == null) return head;
      ListNode newHead = reverseListRecursive(head.next);
      head.next.next = head;
      head.next = null;
      return newHead;
  }`,
      pythoncode: `# Iterative
  def reverseList(head):
      prev, curr = None, head
      while curr:
          next_node = curr.next
          curr.next = prev
          prev = curr
          curr = next_node
      return prev
  
  # Recursive
  def reverseListRecursive(head):
      if not head or not head.next:
          return head
      new_head = reverseListRecursive(head.next)
      head.next.next = head
      head.next = None
      return new_head`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n), Space: O(1) iterative / O(n) recursive",
      link: "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
      title: "Merge Two Sorted Lists",
      description: "Merge two sorted linked lists into one sorted list.",
      approach: [
        "1. Use dummy node to simplify edge cases",
        "2. Compare nodes from both lists and link the smaller one",
        "3. Continue until one list is exhausted",
        "4. Attach remaining nodes"
      ],
      algorithmCharacteristics: [
        "Two Pointer: Efficiently merges by comparing nodes",
        "Dummy Node: Handles empty list cases elegantly",
        "In-place: Reuses existing nodes"
      ],
      complexityDetails: {
        time: "O(n+m)",
        space: "O(1)",
        explanation: "Processes each node exactly once"
      },
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
      javacode: `public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
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
  }`,
      pythoncode: `def mergeTwoLists(l1, l2):
      dummy = ListNode(0)
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
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n+m), Space: O(1)",
      link: "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
      title: "Add Two Numbers",
      description: "Add two numbers represented as linked lists (digits in reverse order).",
      approach: [
        "1. Initialize dummy node and carry variable",
        "2. Traverse both lists, summing digits with carry",
        "3. Create new nodes for each digit of result",
        "4. Handle remaining digits and final carry"
      ],
      algorithmCharacteristics: [
        "Digit Processing: Handles numbers of arbitrary length",
        "Carry Management: Properly propagates carry between digits",
        "In-place: Can modify one of input lists"
      ],
      complexityDetails: {
        time: "O(max(n,m))",
        space: "O(max(n,m))",
        explanation: "Processes each digit exactly once"
      },
      cppcode: `ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
      ListNode dummy(0);
      ListNode* curr = &dummy;
      int carry = 0;
      
      while (l1 || l2 || carry) {
          int sum = carry;
          if (l1) { sum += l1->val; l1 = l1->next; }
          if (l2) { sum += l2->val; l2 = l2->next; }
          carry = sum / 10;
          curr->next = new ListNode(sum % 10);
          curr = curr->next;
      }
      return dummy.next;
  }`,
      javacode: `public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
      ListNode dummy = new ListNode(0);
      ListNode curr = dummy;
      int carry = 0;
      
      while (l1 != null || l2 != null || carry != 0) {
          int sum = carry;
          if (l1 != null) { sum += l1.val; l1 = l1.next; }
          if (l2 != null) { sum += l2.val; l2 = l2.next; }
          carry = sum / 10;
          curr.next = new ListNode(sum % 10);
          curr = curr.next;
      }
      return dummy.next;
  }`,
      pythoncode: `def addTwoNumbers(l1, l2):
      dummy = ListNode(0)
      curr = dummy
      carry = 0
      
      while l1 or l2 or carry:
          sum_val = carry
          if l1:
              sum_val += l1.val
              l1 = l1.next
          if l2:
              sum_val += l2.val
              l2 = l2.next
          carry = sum_val // 10
          curr.next = ListNode(sum_val % 10)
          curr = curr.next
      
      return dummy.next`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(max(n,m)), Space: O(max(n,m))",
      link: "https://leetcode.com/problems/add-two-numbers/"
    },
    {
      title: "Linked List Cycle",
      description: "Detect if a linked list has a cycle using Floyd's algorithm.",
      approach: [
        "1. Initialize slow and fast pointers at head",
        "2. Move slow by 1 step, fast by 2 steps",
        "3. If they meet, cycle exists",
        "4. If fast reaches end, no cycle"
      ],
      algorithmCharacteristics: [
        "Two Pointer: Efficient cycle detection",
        "Constant Space: Uses only two pointers",
        "Mathematical Proof: Guaranteed to detect cycle"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Fast pointer catches slow in linear time"
      },
      cppcode: `bool hasCycle(ListNode *head) {
      if (!head) return false;
      
      ListNode *slow = head, *fast = head;
      while (fast && fast->next) {
          slow = slow->next;
          fast = fast->next->next;
          if (slow == fast) return true;
      }
      return false;
  }`,
      javacode: `public boolean hasCycle(ListNode head) {
      if (head == null) return false;
      
      ListNode slow = head, fast = head;
      while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
          if (slow == fast) return true;
      }
      return false;
  }`,
      pythoncode: `def hasCycle(head):
      if not head:
          return False
      
      slow = fast = head
      while fast and fast.next:
          slow = slow.next
          fast = fast.next.next
          if slow == fast:
              return True
      return False`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n), Space: O(1)",
      link: "https://leetcode.com/problems/linked-list-cycle/"
    },
    {
      title: "Intersection of Two Linked Lists",
      description: "Find the node where two linked lists intersect.",
      approach: [
        "1. Calculate lengths of both lists",
        "2. Advance pointer of longer list by length difference",
        "3. Traverse both lists in parallel until intersection",
        "4. Return first common node"
      ],
      algorithmCharacteristics: [
        "Length Equalization: Handles different list lengths",
        "Two Pointer: Efficient intersection detection",
        "No Extra Space: Uses only pointers"
      ],
      complexityDetails: {
        time: "O(n+m)",
        space: "O(1)",
        explanation: "Two passes through longer list, one through shorter"
      },
      cppcode: `ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
      int lenA = 0, lenB = 0;
      ListNode *a = headA, *b = headB;
      
      while (a) { lenA++; a = a->next; }
      while (b) { lenB++; b = b->next; }
      
      a = headA; b = headB;
      if (lenA > lenB) {
          for (int i = 0; i < lenA - lenB; i++) a = a->next;
      } else {
          for (int i = 0; i < lenB - lenA; i++) b = b->next;
      }
      
      while (a && b) {
          if (a == b) return a;
          a = a->next;
          b = b->next;
      }
      return nullptr;
  }`,
      javacode: `public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
      int lenA = 0, lenB = 0;
      ListNode a = headA, b = headB;
      
      while (a != null) { lenA++; a = a.next; }
      while (b != null) { lenB++; b = b.next; }
      
      a = headA; b = headB;
      if (lenA > lenB) {
          for (int i = 0; i < lenA - lenB; i++) a = a.next;
      } else {
          for (int i = 0; i < lenB - lenA; i++) b = b.next;
      }
      
      while (a != null && b != null) {
          if (a == b) return a;
          a = a.next;
          b = b.next;
      }
      return null;
  }`,
      pythoncode: `def getIntersectionNode(headA, headB):
      lenA = lenB = 0
      a, b = headA, headB
      
      while a:
          lenA += 1
          a = a.next
      while b:
          lenB += 1
          b = b.next
      
      a, b = headA, headB
      if lenA > lenB:
          for _ in range(lenA - lenB):
              a = a.next
      else:
          for _ in range(lenB - lenA):
              b = b.next
      
      while a and b:
          if a == b:
              return a
          a = a.next
          b = b.next
      return None`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n+m), Space: O(1)",
      link: "https://leetcode.com/problems/intersection-of-two-linked-lists/"
    },
    {
      title: "Remove Nth Node From End of List",
      description: "Remove the nth node from the end of a linked list.",
      approach: [
        "1. Use two pointers with n nodes apart",
        "2. Advance first pointer n steps ahead",
        "3. Move both pointers until first reaches end",
        "4. Remove node at second pointer"
      ],
      algorithmCharacteristics: [
        "Two Pointer: Efficient single pass solution",
        "Dummy Node: Handles edge case of removing head",
        "One Pass: Processes list in single traversal"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Single traversal with two pointers"
      },
      cppcode: `ListNode* removeNthFromEnd(ListNode* head, int n) {
      ListNode dummy(0);
      dummy.next = head;
      ListNode *fast = &dummy, *slow = &dummy;
      
      for (int i = 0; i <= n; i++) fast = fast->next;
      
      while (fast) {
          fast = fast->next;
          slow = slow->next;
      }
      ListNode* toDelete = slow->next;
      slow->next = slow->next->next;
      delete toDelete;
      return dummy.next;
  }`,
      javacode: `public ListNode removeNthFromEnd(ListNode head, int n) {
      ListNode dummy = new ListNode(0);
      dummy.next = head;
      ListNode fast = dummy, slow = dummy;
      
      for (int i = 0; i <= n; i++) fast = fast.next;
      
      while (fast != null) {
          fast = fast.next;
          slow = slow.next;
      }
      slow.next = slow.next.next;
      return dummy.next;
  }`,
      pythoncode: `def removeNthFromEnd(head, n):
      dummy = ListNode(0, head)
      fast = slow = dummy
      
      for _ in range(n + 1):
          fast = fast.next
      
      while fast:
          fast = fast.next
          slow = slow.next
      
      slow.next = slow.next.next
      return dummy.next`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n), Space: O(1)",
      link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
    },
    {
      title: "Copy List with Random Pointer",
      description: "Create a deep copy of a linked list with random pointers.",
      approach: [
        "1. Create copy nodes interleaved with original nodes",
        "2. Set random pointers for copies using original's random",
        "3. Separate the interleaved lists"
      ],
      algorithmCharacteristics: [
        "Interleaving: Efficiently copies random pointers",
        "Three Pass: Processes list in three phases",
        "No Hash Map: Avoids extra space for mapping"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Three passes through the list"
      },
      cppcode: `Node* copyRandomList(Node* head) {
      if (!head) return nullptr;
      
      // Step 1: Create interleaved list
      Node* curr = head;
      while (curr) {
          Node* copy = new Node(curr->val);
          copy->next = curr->next;
          curr->next = copy;
          curr = copy->next;
      }
      
      // Step 2: Set random pointers
      curr = head;
      while (curr) {
          if (curr->random) {
              curr->next->random = curr->random->next;
          }
          curr = curr->next->next;
      }
      
      // Step 3: Separate lists
      Node* newHead = head->next;
      curr = head;
      while (curr) {
          Node* copy = curr->next;
          curr->next = copy->next;
          if (copy->next) {
              copy->next = copy->next->next;
          }
          curr = curr->next;
      }
      return newHead;
  }`,
      javacode: `public Node copyRandomList(Node head) {
      if (head == null) return null;
      
      // Step 1: Create interleaved list
      Node curr = head;
      while (curr != null) {
          Node copy = new Node(curr.val);
          copy.next = curr.next;
          curr.next = copy;
          curr = copy.next;
      }
      
      // Step 2: Set random pointers
      curr = head;
      while (curr != null) {
          if (curr.random != null) {
              curr.next.random = curr.random.next;
          }
          curr = curr.next.next;
      }
      
      // Step 3: Separate lists
      Node newHead = head.next;
      curr = head;
      while (curr != null) {
          Node copy = curr.next;
          curr.next = copy.next;
          if (copy.next != null) {
              copy.next = copy.next.next;
          }
          curr = curr.next;
      }
      return newHead;
  }`,
      pythoncode: `def copyRandomList(head):
      if not head:
          return None
      
      # Step 1: Create interleaved list
      curr = head
      while curr:
          copy = Node(curr.val)
          copy.next = curr.next
          curr.next = copy
          curr = copy.next
      
      # Step 2: Set random pointers
      curr = head
      while curr:
          if curr.random:
              curr.next.random = curr.random.next
          curr = curr.next.next
      
      # Step 3: Separate lists
      new_head = head.next
      curr = head
      while curr:
          copy = curr.next
          curr.next = copy.next
          if copy.next:
              copy.next = copy.next.next
          curr = curr.next
      
      return new_head`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n), Space: O(1)",
      link: "https://leetcode.com/problems/copy-list-with-random-pointer/"
    },
    {
      title: "Reorder List",
      description: "Reorder linked list in L0→Ln→L1→Ln-1→L2→Ln-2→... order.",
      approach: [
        "1. Find middle of list using slow/fast pointers",
        "2. Reverse second half of list",
        "3. Merge two halves by alternating nodes"
      ],
      algorithmCharacteristics: [
        "Three Phase: Split, reverse, merge",
        "In-place: Modifies list without extra space",
        "Pointer Manipulation: Efficient reordering"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Three passes through the list"
      },
      cppcode: `void reorderList(ListNode* head) {
      if (!head || !head->next) return;
      
      // Step 1: Find middle
      ListNode *slow = head, *fast = head;
      while (fast && fast->next) {
          slow = slow->next;
          fast = fast->next->next;
      }
      
      // Step 2: Reverse second half
      ListNode *prev = nullptr, *curr = slow, *next = nullptr;
      while (curr) {
          next = curr->next;
          curr->next = prev;
          prev = curr;
          curr = next;
      }
      
      // Step 3: Merge two halves
      ListNode *first = head, *second = prev;
      while (second->next) {
          next = first->next;
          first->next = second;
          first = next;
          
          next = second->next;
          second->next = first;
          second = next;
      }
  }`,
      javacode: `public void reorderList(ListNode head) {
      if (head == null || head.next == null) return;
      
      // Step 1: Find middle
      ListNode slow = head, fast = head;
      while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
      }
      
      // Step 2: Reverse second half
      ListNode prev = null, curr = slow, next = null;
      while (curr != null) {
          next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
      }
      
      // Step 3: Merge two halves
      ListNode first = head, second = prev;
      while (second.next != null) {
          next = first.next;
          first.next = second;
          first = next;
          
          next = second.next;
          second.next = first;
          second = next;
      }
  }`,
      pythoncode: `def reorderList(head):
      if not head or not head.next:
          return
      
      # Step 1: Find middle
      slow = fast = head
      while fast and fast.next:
          slow = slow.next
          fast = fast.next.next
      
      # Step 2: Reverse second half
      prev, curr = None, slow
      while curr:
          next_node = curr.next
          curr.next = prev
          prev = curr
          curr = next_node
      
      # Step 3: Merge two halves
      first, second = head, prev
      while second.next:
          next_node = first.next
          first.next = second
          first = next_node
          
          next_node = second.next
          second.next = first
          second = next_node`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n), Space: O(1)",
      link: "https://leetcode.com/problems/reorder-list/"
    },
    {
      title: "Sort List",
      description: "Sort a linked list in O(n log n) time using merge sort.",
      approach: [
        "1. Split list into two halves using slow/fast pointers",
        "2. Recursively sort each half",
        "3. Merge the two sorted halves"
      ],
      algorithmCharacteristics: [
        "Merge Sort: Efficient O(n log n) sorting",
        "Top-Down: Recursive implementation",
        "In-place: Modifies list without extra space"
      ],
      complexityDetails: {
        time: "O(n log n)",
        space: "O(log n) recursion stack",
        explanation: "Divide and conquer with merge sort"
      },
      cppcode: `ListNode* sortList(ListNode* head) {
      if (!head || !head->next) return head;
      
      // Split list into two halves
      ListNode *slow = head, *fast = head->next;
      while (fast && fast->next) {
          slow = slow->next;
          fast = fast->next->next;
      }
      ListNode *second = slow->next;
      slow->next = nullptr;
      
      // Recursively sort each half
      ListNode *l1 = sortList(head);
      ListNode *l2 = sortList(second);
      
      // Merge two sorted lists
      return merge(l1, l2);
  }
  
  ListNode* merge(ListNode* l1, ListNode* l2) {
      ListNode dummy(0);
      ListNode *tail = &dummy;
      
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
      javacode: `public ListNode sortList(ListNode head) {
      if (head == null || head.next == null) return head;
      
      // Split list into two halves
      ListNode slow = head, fast = head.next;
      while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
      }
      ListNode second = slow.next;
      slow.next = null;
      
      // Recursively sort each half
      ListNode l1 = sortList(head);
      ListNode l2 = sortList(second);
      
      // Merge two sorted lists
      return merge(l1, l2);
  }
  
  private ListNode merge(ListNode l1, ListNode l2) {
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
  }`,
      pythoncode: `def sortList(head):
      if not head or not head.next:
          return head
      
      # Split list into two halves
      slow, fast = head, head.next
      while fast and fast.next:
          slow = slow.next
          fast = fast.next.next
      second = slow.next
      slow.next = None
      
      # Recursively sort each half
      l1 = sortList(head)
      l2 = sortList(second)
      
      # Merge two sorted lists
      return merge(l1, l2)
  
  def merge(l1, l2):
      dummy = ListNode(0)
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
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n log n), Space: O(log n)",
      link: "https://leetcode.com/problems/sort-list/"
    },
    {
      title: "LRU Cache",
      description: "Design a Least Recently Used (LRU) cache with O(1) get and put operations.",
      approach: [
        "1. Use hash map for O(1) key access",
        "2. Use doubly linked list to maintain access order",
        "3. Move accessed items to front (most recently used)",
        "4. Evict from tail (least recently used) when capacity exceeded"
      ],
      algorithmCharacteristics: [
        "Constant Time: O(1) for both operations",
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
    }];
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
        Most MAANG AskedLinked List Questions
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

export default list5;