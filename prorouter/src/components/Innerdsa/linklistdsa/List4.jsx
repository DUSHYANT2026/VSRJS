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

function list4() {
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
      title: "Plus One Linked List ",
      description: "Given a non-negative integer represented as a linked list of digits, plus one to the integer.",
      approach: [
        "1. Find the rightmost digit not equal to 9",
        "2. If all digits are 9, create new head with 1 and set all nodes to 0",
        "3. Otherwise, increment the rightmost non-9 digit and set following digits to 0"
      ],
      algorithmCharacteristics: [
        "Single Pass: O(n) time complexity",
        "In-place: Modifies original list when possible",
        "Edge Cases: Handles all-9s case efficiently"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Two passes maximum (find sentinel + update digits)"
      },
      cppcode: `class Solution {
  public:
      ListNode* plusOne(ListNode* head) {
          ListNode* sentinel = new ListNode(0);
          sentinel->next = head;
          ListNode* notNine = sentinel;
          
          while (head) {
              if (head->val != 9) notNine = head;
              head = head->next;
          }
          
          notNine->val++;
          notNine = notNine->next;
          
          while (notNine) {
              notNine->val = 0;
              notNine = notNine->next;
          }
          
          return sentinel->val != 0 ? sentinel : sentinel->next;
      }
  };`,
      javacode: `class Solution {
      public ListNode plusOne(ListNode head) {
          ListNode sentinel = new ListNode(0);
          sentinel.next = head;
          ListNode notNine = sentinel;
          
          while (head != null) {
              if (head.val != 9) notNine = head;
              head = head.next;
          }
          
          notNine.val++;
          notNine = notNine.next;
          
          while (notNine != null) {
              notNine.val = 0;
              notNine = notNine.next;
          }
          
          return sentinel.val != 0 ? sentinel : sentinel.next;
      }
  }`,
      pythoncode: `class Solution:
      def plusOne(self, head: ListNode) -> ListNode:
          sentinel = ListNode(0)
          sentinel.next = head
          not_nine = sentinel
          
          while head:
              if head.val != 9:
                  not_nine = head
              head = head.next
          
          not_nine.val += 1
          not_nine = not_nine.next
          
          while not_nine:
              not_nine.val = 0
              not_nine = not_nine.next
          
          return sentinel if sentinel.val != 0 else sentinel.next`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/plus-one-linked-list/"
    },
    {
      title: "Remove Zero Sum Consecutive Nodes ",
      description: "Remove all sequences of nodes that sum to zero from linked list.",
      approach: [
        "1. Use prefix sum with hash map to track cumulative sums",
        "2. When duplicate sum found, remove nodes between occurrences",
        "3. Recalculate prefix sums after removal"
      ],
      algorithmCharacteristics: [
        "Prefix Sum: Efficient zero sum detection",
        "Hash Map: Stores first occurrence of sums",
        "Dummy Head: Handles edge cases elegantly"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(n)",
        explanation: "Single pass with hash map operations"
      },
      cppcode: `class Solution {
  public:
      ListNode* removeZeroSumSublists(ListNode* head) {
          ListNode* dummy = new ListNode(0);
          dummy->next = head;
          unordered_map<int, ListNode*> prefix;
          int sum = 0;
          prefix[0] = dummy;
          
          while (head) {
              sum += head->val;
              if (prefix.count(sum)) {
                  ListNode* prev = prefix[sum];
                  ListNode* temp = prev->next;
                  int tempSum = sum;
                  while (temp != head) {
                      tempSum += temp->val;
                      prefix.erase(tempSum);
                      temp = temp->next;
                  }
                  prev->next = head->next;
              } else {
                  prefix[sum] = head;
              }
              head = head->next;
          }
          return dummy->next;
      }
  };`,
      javacode: `class Solution {
      public ListNode removeZeroSumSublists(ListNode head) {
          ListNode dummy = new ListNode(0);
          dummy.next = head;
          Map<Integer, ListNode> prefix = new HashMap<>();
          int sum = 0;
          prefix.put(0, dummy);
          
          while (head != null) {
              sum += head.val;
              if (prefix.containsKey(sum)) {
                  ListNode prev = prefix.get(sum);
                  ListNode temp = prev.next;
                  int tempSum = sum;
                  while (temp != head) {
                      tempSum += temp.val;
                      prefix.remove(tempSum);
                      temp = temp.next;
                  }
                  prev.next = head.next;
              } else {
                  prefix.put(sum, head);
              }
              head = head.next;
          }
          return dummy.next;
      }
  }`,
      pythoncode: `class Solution:
      def removeZeroSumSublists(self, head: ListNode) -> ListNode:
          dummy = ListNode(0)
          dummy.next = head
          prefix = {0: dummy}
          sum_val = 0
          
          while head:
              sum_val += head.val
              if sum_val in prefix:
                  prev = prefix[sum_val]
                  temp = prev.next
                  temp_sum = sum_val
                  while temp != head:
                      temp_sum += temp.val
                      del prefix[temp_sum]
                      temp = temp.next
                  prev.next = head.next
              else:
                  prefix[sum_val] = head
              head = head.next
          
          return dummy.next`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(n)",
      link: "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/"
    },
    {
      title: "Next Greater Node In Linked List",
      description: "For each node, find the next node with a greater value.",
      approach: [
        "1. Convert linked list to array for easier indexing",
        "2. Use monotonic stack to track next greater elements",
        "3. Process array in reverse for efficient stack operations"
      ],
      algorithmCharacteristics: [
        "Monotonic Stack: Efficient next greater element finding",
        "Array Conversion: Simplifies index access",
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
          for (int i = nums.size() - 1; i >= 0; i--) {
              while (!st.empty() && st.top() <= nums[i]) {
                  st.pop();
              }
              res[i] = st.empty() ? 0 : st.top();
              st.push(nums[i]);
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
          for (int i = nums.size() - 1; i >= 0; i--) {
              while (!st.isEmpty() && st.peek() <= nums.get(i)) {
                  st.pop();
              }
              res[i] = st.isEmpty() ? 0 : st.peek();
              st.push(nums.get(i));
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
          for i in range(len(nums)-1, -1, -1):
              while stack and stack[-1] <= nums[i]:
                  stack.pop()
              res[i] = stack[-1] if stack else 0
              stack.append(nums[i])
          return res`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(n)",
      link: "https://leetcode.com/problems/next-greater-node-in-linked-list/"
    },
    {
      title: "Linked List Components",
      description: "Count the number of connected components in a linked list given a subset of values.",
      approach: [
        "1. Convert subset to hash set for O(1) lookups",
        "2. Traverse list while tracking connected components",
        "3. Increment count when transition from matched to unmatched occurs"
      ],
      algorithmCharacteristics: [
        "Hash Set: Efficient value lookup",
        "Single Pass: O(n) time complexity",
        "Component Tracking: Counts contiguous matched segments"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(m) where m is subset size",
        explanation: "One traversal with constant time set operations"
      },
      cppcode: `class Solution {
  public:
      int numComponents(ListNode* head, vector<int>& nums) {
          unordered_set<int> numSet(nums.begin(), nums.end());
          int components = 0;
          bool inComponent = false;
          
          while (head) {
              if (numSet.count(head->val)) {
                  if (!inComponent) {
                      components++;
                      inComponent = true;
                  }
              } else {
                  inComponent = false;
              }
              head = head->next;
          }
          return components;
      }
  };`,
      javacode: `class Solution {
      public int numComponents(ListNode head, int[] nums) {
          Set<Integer> numSet = new HashSet<>();
          for (int num : nums) numSet.add(num);
          
          int components = 0;
          boolean inComponent = false;
          
          while (head != null) {
              if (numSet.contains(head.val)) {
                  if (!inComponent) {
                      components++;
                      inComponent = true;
                  }
              } else {
                  inComponent = false;
              }
              head = head.next;
          }
          return components;
      }
  }`,
      pythoncode: `class Solution:
      def numComponents(self, head: ListNode, nums: List[int]) -> int:
          num_set = set(nums)
          components = 0
          in_component = False
          
          while head:
              if head.val in num_set:
                  if not in_component:
                      components += 1
                      in_component = True
              else:
                  in_component = False
              head = head.next
          
          return components`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(m)",
      link: "https://leetcode.com/problems/linked-list-components/"
    },
    {
      title: "Split Linked List in Parts ",
      description: "Split linked list into k consecutive parts with equal size where possible.",
      approach: [
        "1. Calculate length of linked list",
        "2. Determine base size and number of larger parts",
        "3. Iteratively split list into calculated sizes"
      ],
      algorithmCharacteristics: [
        "Equal Distribution: Balances part sizes",
        "Two Pass: Length calculation then splitting",
        "Precision: Handles remainder distribution correctly"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(k) for output",
        explanation: "One pass for length, one pass for splitting"
      },
      cppcode: `class Solution {
  public:
      vector<ListNode*> splitListToParts(ListNode* head, int k) {
          int length = 0;
          ListNode* curr = head;
          while (curr) {
              length++;
              curr = curr->next;
          }
          
          int base = length / k, extra = length % k;
          vector<ListNode*> result(k, nullptr);
          curr = head;
          
          for (int i = 0; i < k && curr; i++) {
              result[i] = curr;
              int partSize = base + (i < extra ? 1 : 0);
              for (int j = 1; j < partSize; j++) {
                  curr = curr->next;
              }
              ListNode* next = curr->next;
              curr->next = nullptr;
              curr = next;
          }
          
          return result;
      }
  };`,
      javacode: `class Solution {
      public ListNode[] splitListToParts(ListNode head, int k) {
          int length = 0;
          ListNode curr = head;
          while (curr != null) {
              length++;
              curr = curr.next;
          }
          
          int base = length / k, extra = length % k;
          ListNode[] result = new ListNode[k];
          curr = head;
          
          for (int i = 0; i < k && curr != null; i++) {
              result[i] = curr;
              int partSize = base + (i < extra ? 1 : 0);
              for (int j = 1; j < partSize; j++) {
                  curr = curr.next;
              }
              ListNode next = curr.next;
              curr.next = null;
              curr = next;
          }
          
          return result;
      }
  }`,
      pythoncode: `class Solution:
      def splitListToParts(self, head: ListNode, k: int) -> List[ListNode]:
          length = 0
          curr = head
          while curr:
              length += 1
              curr = curr.next
          
          base, extra = divmod(length, k)
          result = [None] * k
          curr = head
          
          for i in range(k):
              if not curr:
                  break
              result[i] = curr
              part_size = base + (1 if i < extra else 0)
              for _ in range(part_size - 1):
                  curr = curr.next
              next_node = curr.next
              curr.next = None
              curr = next_node
          
          return result`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(k)",
      link: "https://leetcode.com/problems/split-linked-list-in-parts/"
    },
    {
      title: "Odd Even Linked List",
      description: "Group all odd-indexed nodes followed by even-indexed nodes.",
      approach: [
        "1. Maintain two separate chains for odd and even nodes",
        "2. Traverse list while alternating between chains",
        "3. Connect odd chain to even chain at end"
      ],
      algorithmCharacteristics: [
        "In-place: Modifies list without extra space",
        "Two Pointers: Tracks odd and even chains",
        "Single Pass: O(n) time complexity"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Single traversal with pointer manipulation"
      },
      cppcode: `class Solution {
  public:
      ListNode* oddEvenList(ListNode* head) {
          if (!head) return nullptr;
          
          ListNode* odd = head;
          ListNode* even = head->next;
          ListNode* evenHead = even;
          
          while (even && even->next) {
              odd->next = even->next;
              odd = odd->next;
              even->next = odd->next;
              even = even->next;
          }
          
          odd->next = evenHead;
          return head;
      }
  };`,
      javacode: `class Solution {
      public ListNode oddEvenList(ListNode head) {
          if (head == null) return null;
          
          ListNode odd = head;
          ListNode even = head.next;
          ListNode evenHead = even;
          
          while (even != null && even.next != null) {
              odd.next = even.next;
              odd = odd.next;
              even.next = odd.next;
              even = even.next;
          }
          
          odd.next = evenHead;
          return head;
      }
  }`,
      pythoncode: `class Solution:
      def oddEvenList(self, head: ListNode) -> ListNode:
          if not head:
              return None
          
          odd = head
          even = head.next
          even_head = even
          
          while even and even.next:
              odd.next = even.next
              odd = odd.next
              even.next = odd.next
              even = even.next
          
          odd.next = even_head
          return head`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/odd-even-linked-list/"
    },
    {
      title: "Design Linked List",
      description: "Design a singly/doubly linked list with common operations.",
      approach: [
        "1. Implement Node class with value and next/prev pointers",
        "2. Maintain head and tail pointers for efficient operations",
        "3. Handle edge cases (empty list, single node, etc.)",
        "4. Implement get, addAtHead, addAtTail, addAtIndex, deleteAtIndex"
      ],
      algorithmCharacteristics: [
        "Comprehensive: Covers all basic operations",
        "Edge Cases: Handles invalid indices gracefully",
        "Efficiency: O(1) for head/tail operations, O(n) for arbitrary index"
      ],
      complexityDetails: {
        time: {
          get: "O(n)",
          addAtHead: "O(1)",
          addAtTail: "O(1)",
          addAtIndex: "O(n)",
          deleteAtIndex: "O(n)"
        },
        space: "O(n) where n is number of elements",
        explanation: "Standard linked list implementation with full operation set"
      },
      cppcode: `class MyLinkedList {
  private:
      struct Node {
          int val;
          Node* next;
          Node* prev;
          Node(int v) : val(v), next(nullptr), prev(nullptr) {}
      };
      
      Node* head;
      Node* tail;
      int size;
      
  public:
      MyLinkedList() : head(nullptr), tail(nullptr), size(0) {}
      
      int get(int index) {
          if (index < 0 || index >= size) return -1;
          Node* curr = head;
          while (index--) curr = curr->next;
          return curr->val;
      }
      
      void addAtHead(int val) {
          Node* newNode = new Node(val);
          if (!head) {
              head = tail = newNode;
          } else {
              newNode->next = head;
              head->prev = newNode;
              head = newNode;
          }
          size++;
      }
      
      void addAtTail(int val) {
          Node* newNode = new Node(val);
          if (!tail) {
              head = tail = newNode;
          } else {
              tail->next = newNode;
              newNode->prev = tail;
              tail = newNode;
          }
          size++;
      }
      
      void addAtIndex(int index, int val) {
          if (index < 0 || index > size) return;
          if (index == 0) return addAtHead(val);
          if (index == size) return addAtTail(val);
          
          Node* curr = head;
          while (index--) curr = curr->next;
          
          Node* newNode = new Node(val);
          newNode->next = curr;
          newNode->prev = curr->prev;
          curr->prev->next = newNode;
          curr->prev = newNode;
          size++;
      }
      
      void deleteAtIndex(int index) {
          if (index < 0 || index >= size) return;
          if (index == 0) {
              Node* temp = head;
              head = head->next;
              if (head) head->prev = nullptr;
              else tail = nullptr;
              delete temp;
          } else if (index == size - 1) {
              Node* temp = tail;
              tail = tail->prev;
              tail->next = nullptr;
              delete temp;
          } else {
              Node* curr = head;
              while (index--) curr = curr->next;
              curr->prev->next = curr->next;
              curr->next->prev = curr->prev;
              delete curr;
          }
          size--;
      }
  };`,
      javacode: `class MyLinkedList {
      class Node {
          int val;
          Node next;
          Node prev;
          public Node(int v) { val = v; }
      }
      
      private Node head;
      private Node tail;
      private int size;
      
      public MyLinkedList() {
          head = tail = null;
          size = 0;
      }
      
      public int get(int index) {
          if (index < 0 || index >= size) return -1;
          Node curr = head;
          while (index-- > 0) curr = curr.next;
          return curr.val;
      }
      
      public void addAtHead(int val) {
          Node newNode = new Node(val);
          if (head == null) {
              head = tail = newNode;
          } else {
              newNode.next = head;
              head.prev = newNode;
              head = newNode;
          }
          size++;
      }
      
      public void addAtTail(int val) {
          Node newNode = new Node(val);
          if (tail == null) {
              head = tail = newNode;
          } else {
              tail.next = newNode;
              newNode.prev = tail;
              tail = newNode;
          }
          size++;
      }
      
      public void addAtIndex(int index, int val) {
          if (index < 0 || index > size) return;
          if (index == 0) { addAtHead(val); return; }
          if (index == size) { addAtTail(val); return; }
          
          Node curr = head;
          while (index-- > 0) curr = curr.next;
          
          Node newNode = new Node(val);
          newNode.next = curr;
          newNode.prev = curr.prev;
          curr.prev.next = newNode;
          curr.prev = newNode;
          size++;
      }
      
      public void deleteAtIndex(int index) {
          if (index < 0 || index >= size) return;
          if (index == 0) {
              Node temp = head;
              head = head.next;
              if (head != null) head.prev = null;
              else tail = null;
          } else if (index == size - 1) {
              Node temp = tail;
              tail = tail.prev;
              tail.next = null;
          } else {
              Node curr = head;
              while (index-- > 0) curr = curr.next;
              curr.prev.next = curr.next;
              curr.next.prev = curr.prev;
          }
          size--;
      }
  }`,
      pythoncode: `class Node:
      def __init__(self, val):
          self.val = val
          self.next = None
          self.prev = None
  
  class MyLinkedList:
      def __init__(self):
          self.head = None
          self.tail = None
          self.size = 0
  
      def get(self, index: int) -> int:
          if index < 0 or index >= self.size:
              return -1
          curr = self.head
          for _ in range(index):
              curr = curr.next
          return curr.val
  
      def addAtHead(self, val: int) -> None:
          new_node = Node(val)
          if not self.head:
              self.head = self.tail = new_node
          else:
              new_node.next = self.head
              self.head.prev = new_node
              self.head = new_node
          self.size += 1
  
      def addAtTail(self, val: int) -> None:
          new_node = Node(val)
          if not self.tail:
              self.head = self.tail = new_node
          else:
              self.tail.next = new_node
              new_node.prev = self.tail
              self.tail = new_node
          self.size += 1
  
      def addAtIndex(self, index: int, val: int) -> None:
          if index < 0 or index > self.size:
              return
          if index == 0:
              self.addAtHead(val)
              return
          if index == self.size:
              self.addAtTail(val)
              return
          
          curr = self.head
          for _ in range(index):
              curr = curr.next
          
          new_node = Node(val)
          new_node.next = curr
          new_node.prev = curr.prev
          curr.prev.next = new_node
          curr.prev = new_node
          self.size += 1
  
      def deleteAtIndex(self, index: int) -> None:
          if index < 0 or index >= self.size:
              return
          if index == 0:
              temp = self.head
              self.head = self.head.next
              if self.head:
                  self.head.prev = None
              else:
                  self.tail = None
          elif index == self.size - 1:
              temp = self.tail
              self.tail = self.tail.prev
              self.tail.next = None
          else:
              curr = self.head
              for _ in range(index):
                  curr = curr.next
              curr.prev.next = curr.next
              curr.next.prev = curr.prev
          self.size -= 1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(1) for head/tail, O(n) for index; Space: O(n)",
      link: "https://leetcode.com/problems/design-linked-list/"
    },
    {
      title: "Swapping Nodes in a Linked List ",
      description: "Swap the kth node from beginning with kth node from end in a linked list.",
      approach: [
        "1. Find length of linked list",
        "2. Locate kth node from start and end",
        "3. Swap node values (or pointers for more complex cases)"
      ],
      algorithmCharacteristics: [
        "Two Pointers: Efficient node location",
        "Single Pass: Finds nodes in one traversal",
        "Value Swap: Simplifies pointer manipulation"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "One traversal to find length, another to locate nodes"
      },
      cppcode: `class Solution {
  public:
      ListNode* swapNodes(ListNode* head, int k) {
          ListNode *fast = head, *slow = head, *first = head;
          
          for (int i = 1; i < k; i++) {
              fast = fast->next;
              first = first->next;
          }
          
          while (fast->next) {
              slow = slow->next;
              fast = fast->next;
          }
          
          swap(first->val, slow->val);
          return head;
      }
  };`,
      javacode: `class Solution {
      public ListNode swapNodes(ListNode head, int k) {
          ListNode fast = head, slow = head, first = head;
          
          for (int i = 1; i < k; i++) {
              fast = fast.next;
              first = first.next;
          }
          
          while (fast.next != null) {
              slow = slow.next;
              fast = fast.next;
          }
          
          int temp = first.val;
          first.val = slow.val;
          slow.val = temp;
          
          return head;
      }
  }`,
      pythoncode: `class Solution:
      def swapNodes(self, head: ListNode, k: int) -> ListNode:
          fast = slow = first = head
          
          for _ in range(1, k):
              fast = fast.next
              first = first.next
          
          while fast.next:
              slow = slow.next
              fast = fast.next
          
          first.val, slow.val = slow.val, first.val
          return head`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/"
    },
    {
      title: "Reverse Nodes in Even Length Groups - LeetCode 2074",
      description: "Reverse nodes in each even-length group in the linked list.",
      approach: [
        "1. Track group start and calculate group length",
        "2. For even-length groups, reverse the nodes",
        "3. Connect reversed groups properly with adjacent nodes",
        "4. Handle edge cases (last group might be shorter)"
      ],
      algorithmCharacteristics: [
        "Group Processing: Handles variable group sizes",
        "In-place Reversal: Modifies list without extra space",
        "Complex Logic: Careful pointer manipulation required"
      ],
      complexityDetails: {
        time: "O(n)",
        space: "O(1)",
        explanation: "Single pass with group length calculation and reversal"
      },
      cppcode: `class Solution {
  public:
      ListNode* reverseEvenLengthGroups(ListNode* head) {
          int group = 1;
          ListNode* curr = head;
          
          while (curr) {
              int count = 0;
              ListNode* start = curr;
              ListNode* prev = nullptr;
              
              while (curr && count < group) {
                  prev = curr;
                  curr = curr->next;
                  count++;
              }
              
              if (count % 2 == 0) {
                  prev = reverseList(start, curr);
                  start->next = curr;
                  if (group == 1) head = prev;
                  else {
                      ListNode* before = head;
                      for (int i = 1; i < group - 1; i++) before = before->next;
                      before->next = prev;
                  }
              }
              
              group++;
          }
          return head;
      }
      
      ListNode* reverseList(ListNode* start, ListNode* end) {
          ListNode *prev = nullptr, *curr = start;
          while (curr != end) {
              ListNode* next = curr->next;
              curr->next = prev;
              prev = curr;
              curr = next;
          }
          return prev;
      }
  };`,
      javacode: `class Solution {
      public ListNode reverseEvenLengthGroups(ListNode head) {
          int group = 1;
          ListNode curr = head;
          
          while (curr != null) {
              int count = 0;
              ListNode start = curr;
              ListNode prev = null;
              
              while (curr != null && count < group) {
                  prev = curr;
                  curr = curr.next;
                  count++;
              }
              
              if (count % 2 == 0) {
                  prev = reverseList(start, curr);
                  start.next = curr;
                  if (group == 1) head = prev;
                  else {
                      ListNode before = head;
                      for (int i = 1; i < group - 1; i++) before = before.next;
                      before.next = prev;
                  }
              }
              
              group++;
          }
          return head;
      }
      
      private ListNode reverseList(ListNode start, ListNode end) {
          ListNode prev = null, curr = start;
          while (curr != end) {
              ListNode next = curr.next;
              curr.next = prev;
              prev = curr;
              curr = next;
          }
          return prev;
      }
  }`,
      pythoncode: `class Solution:
      def reverseEvenLengthGroups(self, head: Optional[ListNode]) -> Optional[ListNode]:
          group = 1
          curr = head
          
          while curr:
              count = 0
              start = curr
              prev = None
              
              while curr and count < group:
                  prev = curr
                  curr = curr.next
                  count += 1
              
              if count % 2 == 0:
                  prev = self._reverse_list(start, curr)
                  start.next = curr
                  if group == 1:
                      head = prev
                  else:
                      before = head
                      for _ in range(1, group - 1):
                          before = before.next
                      before.next = prev
              
              group += 1
          
          return head
      
      def _reverse_list(self, start, end):
          prev, curr = None, start
          while curr != end:
              next_node = curr.next
              curr.next = prev
              prev = curr
              curr = next_node
          return prev`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n); Space: O(1)",
      link: "https://leetcode.com/problems/reverse-nodes-in-even-length-groups/"
    },
    {
      title: "Merge In Between Linked Lists ",
      description: "Remove nodes between a and b in list1 and insert list2 in their place.",
      approach: [
        "1. Find the (a-1)th and (b+1)th nodes in list1",
        "2. Connect (a-1)th node to head of list2",
        "3. Find tail of list2 and connect to (b+1)th node",
        "4. Handle edge cases (a=0 or b=last node)"
      ],
      algorithmCharacteristics: [
        "Splicing: Efficient list merging",
        "Two Pointers: Finds connection points",
        "In-place: Modifies list without extra space"
      ],
      complexityDetails: {
        time: "O(n + m)",
        space: "O(1)",
        explanation: "Linear traversal of both lists to find connection points"
      },
      cppcode: `class Solution {
  public:
      ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) {
          ListNode *prevA = list1, *afterB = list1;
          
          for (int i = 0; i < a - 1; i++) prevA = prevA->next;
          for (int i = 0; i < b + 1; i++) afterB = afterB->next;
          
          prevA->next = list2;
          ListNode* tail2 = list2;
          while (tail2->next) tail2 = tail2->next;
          tail2->next = afterB;
          
          return list1;
      }
  };`,
      javacode: `class Solution {
      public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
          ListNode prevA = list1, afterB = list1;
          
          for (int i = 0; i < a - 1; i++) prevA = prevA.next;
          for (int i = 0; i < b + 1; i++) afterB = afterB.next;
          
          prevA.next = list2;
          ListNode tail2 = list2;
          while (tail2.next != null) tail2 = tail2.next;
          tail2.next = afterB;
          
          return list1;
      }
  }`,
      pythoncode: `class Solution:
      def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
          prev_a = list1
          for _ in range(a - 1):
              prev_a = prev_a.next
          
          after_b = list1
          for _ in range(b + 1):
              after_b = after_b.next
          
          prev_a.next = list2
          tail2 = list2
          while tail2.next:
              tail2 = tail2.next
          tail2.next = after_b
          
          return list1`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time: O(n + m); Space: O(1)",
      link: "https://leetcode.com/problems/merge-in-between-linked-lists/"
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
        Leetcode  Linked List Questions
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

export default list4;