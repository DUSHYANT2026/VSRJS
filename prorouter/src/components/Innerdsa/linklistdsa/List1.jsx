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

function list1() {
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
      title: "Reverse a Linked List",
      description: "Reverse a singly linked list using both iterative and recursive approaches.",
      approach: [
        "Iterative Approach:",
        "- Use three pointers: previous, current, and next",
        "- Traverse the list and reverse links between nodes",
        "- Update pointers in each iteration until end of list",
        "",
        "Recursive Approach:",
        "- Recursively reverse the rest of the list",
        "- Link current node to the previous node",
        "- Base case: when head is null or last node"
      ],
      algorithmCharacteristics: [
        "In-place operation: O(1) space for iterative approach",
        "Stack space: O(n) for recursive approach",
        "Time complexity: O(n) for both approaches"
      ],
      complexityDetails: {
        time: "O(n) - single traversal of the list",
        space: "O(1) for iterative, O(n) for recursive (stack space)",
        explanation: "Both approaches visit each node exactly once to reverse the pointers."
      },
      cppcode: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Iterative approach
Node* reverseIterative(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    Node* next = nullptr;
    
    while (curr != nullptr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Recursive approach
Node* reverseRecursive(Node* head) {
    if (head == nullptr || head->next == nullptr) {
        return head;
    }
    Node* rest = reverseRecursive(head->next);
    head->next->next = head;
    head->next = nullptr;
    return rest;
}

void printList(Node* head) {
    while (head != nullptr) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    
    cout << "Original list: ";
    printList(head);
    
    head = reverseIterative(head);
    cout << "Reversed iteratively: ";
    printList(head);
    
    head = reverseRecursive(head);
    cout << "Reversed recursively: ";
    printList(head);
    
    return 0;
}`,
      javacode: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

public class ReverseLinkedList {
    // Iterative approach
    public static Node reverseIterative(Node head) {
        Node prev = null;
        Node curr = head;
        Node next = null;
        
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    
    // Recursive approach
    public static Node reverseRecursive(Node head) {
        if (head == null || head.next == null) {
            return head;
        }
        Node rest = reverseRecursive(head.next);
        head.next.next = head;
        head.next = null;
        return rest;
    }
    
    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        
        System.out.print("Original list: ");
        printList(head);
        
        head = reverseIterative(head);
        System.out.print("Reversed iteratively: ");
        printList(head);
        
        head = reverseRecursive(head);
        System.out.print("Reversed recursively: ");
        printList(head);
    }
}`,
      pythoncode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Iterative approach
def reverse_iterative(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev

# Recursive approach
def reverse_recursive(head):
    if not head or not head.next:
        return head
    rest = reverse_recursive(head.next)
    head.next.next = head
    head.next = None
    return rest

def print_list(head):
    while head:
        print(head.data, end=" ")
        head = head.next
    print()

if __name__ == "__main__":
    head = Node(1)
    head.next = Node(2)
    head.next.next = Node(3)
    head.next.next.next = Node(4)
    
    print("Original list:", end=" ")
    print_list(head)
    
    head = reverse_iterative(head)
    print("Reversed iteratively:", end=" ")
    print_list(head)
    
    head = reverse_recursive(head)
    print("Reversed recursively:", end=" ")
    print_list(head)`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1) iterative / O(n) recursive",
      link: "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
      title: "Rotate a Linked List",
      description: "Rotate a linked list to the right by k places.",
      approach: [
        "1. Find the length of the linked list",
        "2. Adjust k to be within list length (k = k % length)",
        "3. Find the new tail (length - k - 1)th node",
        "4. Break the list at new tail and connect end to original head",
        "5. New head will be new tail's next node"
      ],
      algorithmCharacteristics: [
        "Single traversal to find length",
        "Second partial traversal to find new tail",
        "In-place operation with O(1) space"
      ],
      complexityDetails: {
        time: "O(n) - two traversals (one full, one partial)",
        space: "O(1) - constant space used",
        explanation: "We traverse the list once to find length, then partially again to find rotation point."
      },
      cppcode: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* rotateRight(Node* head, int k) {
    if (!head || !head->next || k == 0) return head;
    
    // Compute length
    Node* curr = head;
    int length = 1;
    while (curr->next) {
        curr = curr->next;
        length++;
    }
    
    // Connect tail to head to make circular
    curr->next = head;
    
    // Adjust k
    k = k % length;
    int steps = length - k;
    
    // Find new tail
    while (steps-- > 0) {
        curr = curr->next;
    }
    
    // Break the circle
    head = curr->next;
    curr->next = nullptr;
    
    return head;
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);
    
    cout << "Original list: ";
    printList(head);
    
    head = rotateRight(head, 2);
    cout << "After rotating by 2: ";
    printList(head);
    
    return 0;
}`,
      javacode: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

public class RotateLinkedList {
    public static Node rotateRight(Node head, int k) {
        if (head == null || head.next == null || k == 0) return head;
        
        // Compute length
        Node curr = head;
        int length = 1;
        while (curr.next != null) {
            curr = curr.next;
            length++;
        }
        
        // Connect tail to head to make circular
        curr.next = head;
        
        // Adjust k
        k = k % length;
        int steps = length - k;
        
        // Find new tail
        while (steps-- > 0) {
            curr = curr.next;
        }
        
        // Break the circle
        head = curr.next;
        curr.next = null;
        
        return head;
    }
    
    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);
        
        System.out.print("Original list: ");
        printList(head);
        
        head = rotateRight(head, 2);
        System.out.print("After rotating by 2: ");
        printList(head);
    }
}`,
      pythoncode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def rotate_right(head, k):
    if not head or not head.next or k == 0:
        return head
    
    # Compute length
    curr = head
    length = 1
    while curr.next:
        curr = curr.next
        length += 1
    
    # Connect tail to head to make circular
    curr.next = head
    
    # Adjust k
    k = k % length
    steps = length - k
    
    # Find new tail
    while steps > 0:
        curr = curr.next
        steps -= 1
    
    # Break the circle
    head = curr.next
    curr.next = None
    
    return head

def print_list(head):
    while head:
        print(head.data, end=" ")
        head = head.next
    print()

if __name__ == "__main__":
    head = Node(1)
    head.next = Node(2)
    head.next.next = Node(3)
    head.next.next.next = Node(4)
    head.next.next.next.next = Node(5)
    
    print("Original list:", end=" ")
    print_list(head)
    
    head = rotate_right(head, 2)
    print("After rotating by 2:", end=" ")
    print_list(head)`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/rotate-list/"
    },
    {
      title: "Merge Two Sorted Linked Lists",
      description: "Merge two sorted linked lists into one sorted linked list.",
      approach: [
        "1. Create a dummy node to serve as starting point",
        "2. Use a pointer to build the new list",
        "3. Compare nodes from both lists and attach smaller one",
        "4. Move pointer of the list from which node was taken",
        "5. When one list is exhausted, attach remaining nodes from other list"
      ],
      algorithmCharacteristics: [
        "In-place merging without extra space (except dummy node)",
        "Single pass through both lists",
        "Stable merge (preserves original order of equal elements)"
      ],
      complexityDetails: {
        time: "O(n + m) where n and m are lengths of the two lists",
        space: "O(1) - only a few pointers used",
        explanation: "We traverse both lists simultaneously, performing constant work at each step."
      },
      cppcode: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* mergeTwoLists(Node* l1, Node* l2) {
    Node dummy(0);
    Node* tail = &dummy;
    
    while (l1 && l2) {
        if (l1->data <= l2->data) {
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
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    Node* l1 = new Node(1);
    l1->next = new Node(3);
    l1->next->next = new Node(5);
    
    Node* l2 = new Node(2);
    l2->next = new Node(4);
    l2->next->next = new Node(6);
    
    cout << "List 1: ";
    printList(l1);
    cout << "List 2: ";
    printList(l2);
    
    Node* merged = mergeTwoLists(l1, l2);
    cout << "Merged list: ";
    printList(merged);
    
    return 0;
}`,
      javacode: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

public class MergeSortedLists {
    public static Node mergeTwoLists(Node l1, Node l2) {
        Node dummy = new Node(0);
        Node tail = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.data <= l2.data) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        
        tail.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
    
    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Node l1 = new Node(1);
        l1.next = new Node(3);
        l1.next.next = new Node(5);
        
        Node l2 = new Node(2);
        l2.next = new Node(4);
        l2.next.next = new Node(6);
        
        System.out.print("List 1: ");
        printList(l1);
        System.out.print("List 2: ");
        printList(l2);
        
        Node merged = mergeTwoLists(l1, l2);
        System.out.print("Merged list: ");
        printList(merged);
    }
}`,
      pythoncode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def merge_two_lists(l1, l2):
    dummy = Node(0)
    tail = dummy
    
    while l1 and l2:
        if l1.data <= l2.data:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    
    tail.next = l1 if l1 else l2
    return dummy.next

def print_list(head):
    while head:
        print(head.data, end=" ")
        head = head.next
    print()

if __name__ == "__main__":
    l1 = Node(1)
    l1.next = Node(3)
    l1.next.next = Node(5)
    
    l2 = Node(2)
    l2.next = Node(4)
    l2.next.next = Node(6)
    
    print("List 1:", end=" ")
    print_list(l1)
    print("List 2:", end=" ")
    print_list(l2)
    
    merged = merge_two_lists(l1, l2)
    print("Merged list:", end=" ")
    print_list(merged)`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n + m), Space Complexity: O(1)",
      link: "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
      title: "Linked List Group Reverse",
      description: "Reverse nodes of a linked list k at a time. If the number of nodes is not a multiple of k then left-out nodes should remain as is.",
      approach: [
        "1. Count the number of nodes in the list",
        "2. Process groups of k nodes:",
        "   - Reverse each group",
        "   - Connect the reversed group to the previous group",
        "3. If remaining nodes < k, leave them as is",
        "4. Use dummy node to handle edge cases"
      ],
      algorithmCharacteristics: [
        "In-place reversal of node groups",
        "Single pass through the list",
        "Recursive or iterative approaches possible"
      ],
      complexityDetails: {
        time: "O(n) - each node is processed exactly twice (once forward, once during reversal)",
        space: "O(1) for iterative, O(n/k) for recursive (stack space)",
        explanation: "We traverse the list once to count nodes, then process each group with constant work per node."
      },
      cppcode: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* reverseKGroup(Node* head, int k) {
    Node* curr = head;
    int count = 0;
    
    // Count k nodes
    while (curr && count < k) {
        curr = curr->next;
        count++;
    }
    
    // If we have k nodes, reverse them
    if (count == k) {
        curr = reverseKGroup(curr, k); // Reverse remaining list
        
        // Reverse current group
        while (count-- > 0) {
            Node* temp = head->next;
            head->next = curr;
            curr = head;
            head = temp;
        }
        head = curr;
    }
    return head;
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);
    
    cout << "Original list: ";
    printList(head);
    
    head = reverseKGroup(head, 2);
    cout << "After reversing in groups of 2: ";
    printList(head);
    
    return 0;
}`,
      javacode: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

public class GroupReverse {
    public static Node reverseKGroup(Node head, int k) {
        Node curr = head;
        int count = 0;
        
        // Count k nodes
        while (curr != null && count < k) {
            curr = curr.next;
            count++;
        }
        
        // If we have k nodes, reverse them
        if (count == k) {
            curr = reverseKGroup(curr, k); // Reverse remaining list
            
            // Reverse current group
            while (count-- > 0) {
                Node temp = head.next;
                head.next = curr;
                curr = head;
                head = temp;
            }
            head = curr;
        }
        return head;
    }
    
    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);
        
        System.out.print("Original list: ");
        printList(head);
        
        head = reverseKGroup(head, 2);
        System.out.print("After reversing in groups of 2: ");
        printList(head);
    }
}`,
      pythoncode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverse_k_group(head, k):
    curr = head
    count = 0
    
    # Count k nodes
    while curr and count < k:
        curr = curr.next
        count += 1
    
    # If we have k nodes, reverse them
    if count == k:
        curr = reverse_k_group(curr, k)  # Reverse remaining list
        
        # Reverse current group
        while count > 0:
            temp = head.next
            head.next = curr
            curr = head
            head = temp
            count -= 1
        head = curr
    return head

def print_list(head):
    while head:
        print(head.data, end=" ")
        head = head.next
    print()

if __name__ == "__main__":
    head = Node(1)
    head.next = Node(2)
    head.next.next = Node(3)
    head.next.next.next = Node(4)
    head.next.next.next.next = Node(5)
    
    print("Original list:", end=" ")
    print_list(head)
    
    head = reverse_k_group(head, 2)
    print("After reversing in groups of 2:", end=" ")
    print_list(head)`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(n/k)",
      link: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
    },
    {
      title: "Add Two Numbers Represented as Linked Lists",
      description: "Given two numbers represented by linked lists (each digit is a node), add them and return the sum as a linked list.",
      approach: [
        "1. Initialize dummy node and carry as 0",
        "2. Traverse both lists simultaneously",
        "3. Add corresponding digits along with carry",
        "4. Create new node with sum % 10",
        "5. Update carry to sum / 10",
        "6. After traversal, if carry remains, add new node",
        "7. Return dummy.next as head of result list"
      ],
      algorithmCharacteristics: [
        "Digit-by-digit addition similar to manual addition",
        "Handles varying lengths of input lists",
        "Processes digits in reverse order (least significant digit first)"
      ],
      complexityDetails: {
        time: "O(max(n, m)) where n and m are lengths of the two lists",
        space: "O(max(n, m)) for the result list",
        explanation: "We traverse both lists once, performing constant work at each step."
      },
      cppcode: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* addTwoNumbers(Node* l1, Node* l2) {
    Node dummy(0);
    Node* curr = &dummy;
    int carry = 0;
    
    while (l1 || l2 || carry) {
        int sum = carry;
        if (l1) {
            sum += l1->data;
            l1 = l1->next;
        }
        if (l2) {
            sum += l2->data;
            l2 = l2->next;
        }
        
        carry = sum / 10;
        curr->next = new Node(sum % 10);
        curr = curr->next;
    }
    
    return dummy.next;
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    Node* l1 = new Node(2);
    l1->next = new Node(4);
    l1->next->next = new Node(3);
    
    Node* l2 = new Node(5);
    l2->next = new Node(6);
    l2->next->next = new Node(4);
    
    cout << "Number 1: ";
    printList(l1);
    cout << "Number 2: ";
    printList(l2);
    
    Node* sum = addTwoNumbers(l1, l2);
    cout << "Sum: ";
    printList(sum);
    
    return 0;
}`,
      javacode: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

public class AddNumbers {
    public static Node addTwoNumbers(Node l1, Node l2) {
        Node dummy = new Node(0);
        Node curr = dummy;
        int carry = 0;
        
        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry;
            if (l1 != null) {
                sum += l1.data;
                l1 = l1.next;
            }
            if (l2 != null) {
                sum += l2.data;
                l2 = l2.next;
            }
            
            carry = sum / 10;
            curr.next = new Node(sum % 10);
            curr = curr.next;
        }
        
        return dummy.next;
    }
    
    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Node l1 = new Node(2);
        l1.next = new Node(4);
        l1.next.next = new Node(3);
        
        Node l2 = new Node(5);
        l2.next = new Node(6);
        l2.next.next = new Node(4);
        
        System.out.print("Number 1: ");
        printList(l1);
        System.out.print("Number 2: ");
        printList(l2);
        
        Node sum = addTwoNumbers(l1, l2);
        System.out.print("Sum: ");
        printList(sum);
    }
}`,
      pythoncode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def add_two_numbers(l1, l2):
    dummy = Node(0)
    curr = dummy
    carry = 0
    
    while l1 or l2 or carry:
        sum_val = carry
        if l1:
            sum_val += l1.data
            l1 = l1.next
        if l2:
            sum_val += l2.data
            l2 = l2.next
        
        carry = sum_val // 10
        curr.next = Node(sum_val % 10)
        curr = curr.next
    
    return dummy.next

def print_list(head):
    while head:
        print(head.data, end=" ")
        head = head.next
    print()

if __name__ == "__main__":
    l1 = Node(2)
    l1.next = Node(4)
    l1.next.next = Node(3)
    
    l2 = Node(5)
    l2.next = Node(6)
    l2.next.next = Node(4)
    
    print("Number 1:", end=" ")
    print_list(l1)
    print("Number 2:", end=" ")
    print_list(l2)
    
    sum_list = add_two_numbers(l1, l2)
    print("Sum:", end=" ")
    print_list(sum_list)`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(max(n, m)), Space Complexity: O(max(n, m))",
      link: "https://leetcode.com/problems/add-two-numbers/"
    },
    {
      title: "Clone Linked List with Next and Random Pointer",
      description: "Creates a deep copy of a linked list where each node contains both next and random pointers, using a hash map to maintain the mapping between original and copied nodes.",
      approach: [
        "1. Hash Map Approach:",
        "- First pass: Create a copy of each node and store original->copy mapping in a hash map",
        "- Second pass: Set next and random pointers for copied nodes using the hash map",
        "",
        "2. Optimized O(1) Space Approach:",
        "- First pass: Create copied nodes and insert them alternately between original nodes",
        "- Second pass: Set random pointers for copied nodes",
        "- Third pass: Separate the original and copied lists"
      ],
      algorithmCharacteristics: [
        "Linear Time Complexity: O(n) for all approaches",
        "Space Complexity: O(n) for hash map approach, O(1) for optimized approach",
        "Maintains original list structure while creating deep copy",
        "Handles both next and random pointers correctly"
      ],
      complexityDetails: {
        time: "O(n) for all approaches (three passes for optimized approach)",
        space: {
          hashMap: "O(n) for storing node mappings",
          optimized: "O(1) (in-place modification)"
        },
        explanation: "The hash map approach is straightforward but uses extra space. The optimized approach modifies the list in-place to achieve O(1) space."
      },
      cppcode: `#include <unordered_map>
  
  using namespace std;
  
  struct Node {
      int data;
      Node* next;
      Node* random;
      Node(int x) : data(x), next(nullptr), random(nullptr) {}
  };
  
  class Solution {
  public:
      // Hash map approach
      Node* copyRandomListHashMap(Node* head) {
          if (!head) return nullptr;
          
          unordered_map<Node*, Node*> oldToNew;
          Node* curr = head;
          
          // First pass: create copies and store mapping
          while (curr) {
              oldToNew[curr] = new Node(curr->data);
              curr = curr->next;
          }
          
          // Second pass: assign next and random pointers
          curr = head;
          while (curr) {
              oldToNew[curr]->next = oldToNew[curr->next];
              oldToNew[curr]->random = oldToNew[curr->random];
              curr = curr->next;
          }
          
          return oldToNew[head];
      }
      
      // Optimized O(1) space approach
      Node* copyRandomListOptimized(Node* head) {
          if (!head) return nullptr;
          
          Node* curr = head;
          
          // First pass: create copies and insert between original nodes
          while (curr) {
              Node* copy = new Node(curr->data);
              copy->next = curr->next;
              curr->next = copy;
              curr = copy->next;
          }
          
          // Second pass: assign random pointers
          curr = head;
          while (curr) {
              if (curr->random) {
                  curr->next->random = curr->random->next;
              }
              curr = curr->next->next;
          }
          
          // Third pass: separate original and copied lists
          curr = head;
          Node* newHead = head->next;
          Node* copyCurr = newHead;
          
          while (curr) {
              curr->next = curr->next->next;
              if (copyCurr->next) {
                  copyCurr->next = copyCurr->next->next;
              }
              curr = curr->next;
              copyCurr = copyCurr->next;
          }
          
          return newHead;
      }
  };`,
      javacode: `import java.util.HashMap;
  
  class Node {
      int val;
      Node next;
      Node random;
      
      public Node(int val) {
          this.val = val;
          this.next = null;
          this.random = null;
      }
  }
  
  public class CloneLinkedList {
      // Hash map approach
      public Node copyRandomListHashMap(Node head) {
          if (head == null) return null;
          
          HashMap<Node, Node> oldToNew = new HashMap<>();
          Node curr = head;
          
          // First pass: create copies and store mapping
          while (curr != null) {
              oldToNew.put(curr, new Node(curr.val));
              curr = curr.next;
          }
          
          // Second pass: assign next and random pointers
          curr = head;
          while (curr != null) {
              oldToNew.get(curr).next = oldToNew.get(curr.next);
              oldToNew.get(curr).random = oldToNew.get(curr.random);
              curr = curr.next;
          }
          
          return oldToNew.get(head);
      }
      
      // Optimized O(1) space approach
      public Node copyRandomListOptimized(Node head) {
          if (head == null) return null;
          
          Node curr = head;
          
          // First pass: create copies and insert between original nodes
          while (curr != null) {
              Node copy = new Node(curr.val);
              copy.next = curr.next;
              curr.next = copy;
              curr = copy.next;
          }
          
          // Second pass: assign random pointers
          curr = head;
          while (curr != null) {
              if (curr.random != null) {
                  curr.next.random = curr.random.next;
              }
              curr = curr.next.next;
          }
          
          // Third pass: separate original and copied lists
          curr = head;
          Node newHead = head.next;
          Node copyCurr = newHead;
          
          while (curr != null) {
              curr.next = curr.next.next;
              if (copyCurr.next != null) {
                  copyCurr.next = copyCurr.next.next;
              }
              curr = curr.next;
              copyCurr = copyCurr.next;
          }
          
          return newHead;
      }
  }`,
      pythoncode: `class Node:
      def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
          self.val = int(x)
          self.next = next
          self.random = random
  
  class Solution:
      # Hash map approach
      def copyRandomListHashMap(self, head: 'Node') -> 'Node':
          if not head:
              return None
          
          old_to_new = {}
          curr = head
          
          # First pass: create copies and store mapping
          while curr:
              old_to_new[curr] = Node(curr.val)
              curr = curr.next
          
          # Second pass: assign next and random pointers
          curr = head
          while curr:
              old_to_new[curr].next = old_to_new.get(curr.next)
              old_to_new[curr].random = old_to_new.get(curr.random)
              curr = curr.next
          
          return old_to_new[head]
      
      # Optimized O(1) space approach
      def copyRandomListOptimized(self, head: 'Node') -> 'Node':
          if not head:
              return None
          
          # First pass: create copies and insert between original nodes
          curr = head
          while curr:
              copy = Node(curr.val)
              copy.next = curr.next
              curr.next = copy
              curr = copy.next
          
          # Second pass: assign random pointers
          curr = head
          while curr:
              if curr.random:
                  curr.next.random = curr.random.next
              curr = curr.next.next
          
          # Third pass: separate original and copied lists
          curr = head
          new_head = head.next
          copy_curr = new_head
          
          while curr:
              curr.next = curr.next.next
              if copy_curr.next:
                  copy_curr.next = copy_curr.next.next
              curr = curr.next
              copy_curr = copy_curr.next
          
          return new_head`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(n) for hash map, O(1) for optimized",
      link: "https://leetcode.com/problems/copy-list-with-random-pointer/"
    },
    {
      title: "Check for Loop in Linked List",
      description: "Detects whether a linked list contains a cycle using Floyd's Tortoise and Hare algorithm (two-pointer approach).",
      approach: [
        "Floyd's Cycle Detection Algorithm:",
        "- Use two pointers: slow (moves 1 step) and fast (moves 2 steps)",
        "- If pointers meet, cycle exists",
        "- If fast reaches end, no cycle exists",
        "",
        "Hash Set Approach:",
        "- Traverse list while storing visited nodes in a hash set",
        "- If node is already in set, cycle exists",
        "- If end is reached, no cycle exists"
      ],
      algorithmCharacteristics: [
        "Linear Time Complexity: O(n) for both approaches",
        "Constant Space for Floyd's algorithm",
        "Detects cycle without modifying original list",
        "Floyd's algorithm is more space efficient"
      ],
      complexityDetails: {
        time: "O(n) for both approaches",
        space: {
          floyd: "O(1) (two pointers only)",
          hashSet: "O(n) (stores all nodes)"
        },
        explanation: "Floyd's algorithm is preferred for its O(1) space complexity, while hash set approach is straightforward but uses more memory."
      },
      cppcode: `struct ListNode {
      int val;
      ListNode *next;
      ListNode(int x) : val(x), next(nullptr) {}
  };
  
  class Solution {
  public:
      // Floyd's Tortoise and Hare algorithm
      bool hasCycleFloyd(ListNode *head) {
          if (!head || !head->next) return false;
          
          ListNode* slow = head;
          ListNode* fast = head;
          
          while (fast && fast->next) {
              slow = slow->next;
              fast = fast->next->next;
              
              if (slow == fast) return true;
          }
          
          return false;
      }
      
      // Hash set approach
      bool hasCycleHash(ListNode *head) {
          unordered_set<ListNode*> visited;
          ListNode* curr = head;
          
          while (curr) {
              if (visited.count(curr)) return true;
              visited.insert(curr);
              curr = curr->next;
          }
          
          return false;
      }
  };`,
      javacode: `class ListNode {
      int val;
      ListNode next;
      ListNode(int x) {
          val = x;
          next = null;
      }
  }
  
  public class CycleDetection {
      // Floyd's Tortoise and Hare algorithm
      public boolean hasCycleFloyd(ListNode head) {
          if (head == null || head.next == null) return false;
          
          ListNode slow = head;
          ListNode fast = head;
          
          while (fast != null && fast.next != null) {
              slow = slow.next;
              fast = fast.next.next;
              
              if (slow == fast) return true;
          }
          
          return false;
      }
      
      // Hash set approach
      public boolean hasCycleHash(ListNode head) {
          Set<ListNode> visited = new HashSet<>();
          ListNode curr = head;
          
          while (curr != null) {
              if (visited.contains(curr)) return true;
              visited.add(curr);
              curr = curr.next;
          }
          
          return false;
      }
  }`,
      pythoncode: `class ListNode:
      def __init__(self, x):
          self.val = x
          self.next = None
  
  class Solution:
      # Floyd's Tortoise and Hare algorithm
      def hasCycleFloyd(self, head: ListNode) -> bool:
          if not head or not head.next:
              return False
          
          slow = head
          fast = head
          
          while fast and fast.next:
              slow = slow.next
              fast = fast.next.next
              
              if slow == fast:
                  return True
          
          return False
      
      # Hash set approach
      def hasCycleHash(self, head: ListNode) -> bool:
          visited = set()
          curr = head
          
          while curr:
              if curr in visited:
                  return True
              visited.add(curr)
              curr = curr.next
          
          return False`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1) for Floyd's, O(n) for hash set",
      link: "https://leetcode.com/problems/linked-list-cycle/"
    },
    {
      title: "Find the Starting Node of Linked List Loop",
      description: "Detects and returns the starting node of a cycle in a linked list using Floyd's algorithm.",
      approach: [
        "Floyd's Algorithm Extension:",
        "1. Detect if cycle exists using slow and fast pointers",
        "2. When they meet, reset one pointer to head",
        "3. Move both pointers at same speed (1 step) until they meet again",
        "4. Meeting point is the cycle start node",
        "",
        "Hash Set Approach:",
        "- Traverse list while storing visited nodes in a hash set",
        "- First node that's already in set is the cycle start"
      ],
      algorithmCharacteristics: [
        "Linear Time Complexity: O(n) for both approaches",
        "Constant Space for Floyd's algorithm",
        "Mathematically proven to find exact cycle start",
        "Doesn't modify original list"
      ],
      complexityDetails: {
        time: "O(n) for both approaches",
        space: {
          floyd: "O(1) (two pointers only)",
          hashSet: "O(n) (stores all nodes)"
        },
        explanation: "Floyd's algorithm is preferred for its O(1) space complexity. The mathematical proof ensures it correctly finds the cycle start."
      },
      cppcode: `struct ListNode {
      int val;
      ListNode *next;
      ListNode(int x) : val(x), next(nullptr) {}
  };
  
  class Solution {
  public:
      // Floyd's algorithm to find cycle start
      ListNode *detectCycleFloyd(ListNode *head) {
          if (!head || !head->next) return nullptr;
          
          ListNode* slow = head;
          ListNode* fast = head;
          bool hasCycle = false;
          
          // Detect cycle
          while (fast && fast->next) {
              slow = slow->next;
              fast = fast->next->next;
              
              if (slow == fast) {
                  hasCycle = true;
                  break;
              }
          }
          
          if (!hasCycle) return nullptr;
          
          // Find cycle start
          slow = head;
          while (slow != fast) {
              slow = slow->next;
              fast = fast->next;
          }
          
          return slow;
      }
      
      // Hash set approach
      ListNode *detectCycleHash(ListNode *head) {
          unordered_set<ListNode*> visited;
          ListNode* curr = head;
          
          while (curr) {
              if (visited.count(curr)) return curr;
              visited.insert(curr);
              curr = curr->next;
          }
          
          return nullptr;
      }
  };`,
      javacode: `class ListNode {
      int val;
      ListNode next;
      ListNode(int x) {
          val = x;
          next = null;
      }
  }
  
  public class CycleStart {
      // Floyd's algorithm to find cycle start
      public ListNode detectCycleFloyd(ListNode head) {
          if (head == null || head.next == null) return null;
          
          ListNode slow = head;
          ListNode fast = head;
          boolean hasCycle = false;
          
          // Detect cycle
          while (fast != null && fast.next != null) {
              slow = slow.next;
              fast = fast.next.next;
              
              if (slow == fast) {
                  hasCycle = true;
                  break;
              }
          }
          
          if (!hasCycle) return null;
          
          // Find cycle start
          slow = head;
          while (slow != fast) {
              slow = slow.next;
              fast = fast.next;
          }
          
          return slow;
      }
      
      // Hash set approach
      public ListNode detectCycleHash(ListNode head) {
          Set<ListNode> visited = new HashSet<>();
          ListNode curr = head;
          
          while (curr != null) {
              if (visited.contains(curr)) return curr;
              visited.add(curr);
              curr = curr.next;
          }
          
          return null;
      }
  }`,
      pythoncode: `class ListNode:
      def __init__(self, x):
          self.val = x
          self.next = None
  
  class Solution:
      # Floyd's algorithm to find cycle start
      def detectCycleFloyd(self, head: ListNode) -> ListNode:
          if not head or not head.next:
              return None
          
          slow = fast = head
          has_cycle = False
          
          # Detect cycle
          while fast and fast.next:
              slow = slow.next
              fast = fast.next.next
              
              if slow == fast:
                  has_cycle = True
                  break
          
          if not has_cycle:
              return None
          
          # Find cycle start
          slow = head
          while slow != fast:
              slow = slow.next
              fast = fast.next
          
          return slow
      
      # Hash set approach
      def detectCycleHash(self, head: ListNode) -> ListNode:
          visited = set()
          curr = head
          
          while curr:
              if curr in visited:
                  return curr
              visited.add(curr)
              curr = curr.next
          
          return None`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1) for Floyd's, O(n) for hash set",
      link: "https://leetcode.com/problems/linked-list-cycle-ii/"
    },
    {
      title: "Remove Loop from Linked List",
      description: "Detects and removes a cycle in a linked list while maintaining the original node structure.",
      approach: [
        "Floyd's Algorithm with Removal:",
        "1. Detect cycle using slow and fast pointers",
        "2. Find cycle start node using Floyd's method",
        "3. Traverse from cycle start to find last node in cycle",
        "4. Set last node's next to null to break cycle",
        "",
        "Hash Set Approach:",
        "- Traverse list while storing visited nodes in hash set",
        "- When duplicate node found, set previous node's next to null"
      ],
      algorithmCharacteristics: [
        "Linear Time Complexity: O(n) for both approaches",
        "Constant Space for Floyd's algorithm",
        "Maintains original list structure after removal",
        "Handles edge cases (no cycle, single node cycle)"
      ],
      complexityDetails: {
        time: "O(n) for both approaches",
        space: {
          floyd: "O(1) (two pointers only)",
          hashSet: "O(n) (stores all nodes)"
        },
        explanation: "Floyd's algorithm is preferred for its O(1) space complexity. The removal step ensures the list structure is preserved."
      },
      cppcode: `struct ListNode {
      int val;
      ListNode *next;
      ListNode(int x) : val(x), next(nullptr) {}
  };
  
  class Solution {
  public:
      // Floyd's algorithm with removal
      void removeCycleFloyd(ListNode *head) {
          if (!head || !head->next) return;
          
          ListNode* slow = head;
          ListNode* fast = head;
          bool hasCycle = false;
          
          // Detect cycle
          while (fast && fast->next) {
              slow = slow->next;
              fast = fast->next->next;
              
              if (slow == fast) {
                  hasCycle = true;
                  break;
              }
          }
          
          if (!hasCycle) return;
          
          // Find cycle start
          slow = head;
          while (slow != fast) {
              slow = slow->next;
              fast = fast->next;
          }
          
          // Find last node in cycle
          ListNode* last = fast;
          while (last->next != fast) {
              last = last->next;
          }
          
          // Break the cycle
          last->next = nullptr;
      }
      
      // Hash set approach
      void removeCycleHash(ListNode *head) {
          unordered_set<ListNode*> visited;
          ListNode* curr = head;
          ListNode* prev = nullptr;
          
          while (curr) {
              if (visited.count(curr)) {
                  prev->next = nullptr;
                  return;
              }
              visited.insert(curr);
              prev = curr;
              curr = curr->next;
          }
      }
  };`,
      javacode: `class ListNode {
      int val;
      ListNode next;
      ListNode(int x) {
          val = x;
          next = null;
      }
  }
  
  public class RemoveCycle {
      // Floyd's algorithm with removal
      public void removeCycleFloyd(ListNode head) {
          if (head == null || head.next == null) return;
          
          ListNode slow = head;
          ListNode fast = head;
          boolean hasCycle = false;
          
          // Detect cycle
          while (fast != null && fast.next != null) {
              slow = slow.next;
              fast = fast.next.next;
              
              if (slow == fast) {
                  hasCycle = true;
                  break;
              }
          }
          
          if (!hasCycle) return;
          
          // Find cycle start
          slow = head;
          while (slow != fast) {
              slow = slow.next;
              fast = fast.next;
          }
          
          // Find last node in cycle
          ListNode last = fast;
          while (last.next != fast) {
              last = last.next;
          }
          
          // Break the cycle
          last.next = null;
      }
      
      // Hash set approach
      public void removeCycleHash(ListNode head) {
          Set<ListNode> visited = new HashSet<>();
          ListNode curr = head;
          ListNode prev = null;
          
          while (curr != null) {
              if (visited.contains(curr)) {
                  prev.next = null;
                  return;
              }
              visited.add(curr);
              prev = curr;
              curr = curr.next;
          }
      }
  }`,
      pythoncode: `class ListNode:
      def __init__(self, x):
          self.val = x
          self.next = None
  
  class Solution:
      # Floyd's algorithm with removal
      def removeCycleFloyd(self, head: ListNode) -> None:
          if not head or not head.next:
              return
          
          slow = fast = head
          has_cycle = False
          
          # Detect cycle
          while fast and fast.next:
              slow = slow.next
              fast = fast.next.next
              
              if slow == fast:
                  has_cycle = True
                  break
          
          if not has_cycle:
              return
          
          # Find cycle start
          slow = head
          while slow != fast:
              slow = slow.next
              fast = fast.next
          
          # Find last node in cycle
          last = fast
          while last.next != fast:
              last = last.next
          
          # Break the cycle
          last.next = None
      
      # Hash set approach
      def removeCycleHash(self, head: ListNode) -> None:
          visited = set()
          curr = head
          prev = None
          
          while curr:
              if curr in visited:
                  prev.next = None
                  return
              visited.add(curr)
              prev = curr
              curr = curr.next`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(1) for Floyd's, O(n) for hash set",
      link: "https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/"
    }
  ]

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
        Linked List 
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

export default list1;