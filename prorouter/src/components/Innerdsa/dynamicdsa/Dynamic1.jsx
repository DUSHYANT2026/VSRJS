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

function Dynamic1() {
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
      title: "Fibonacci Sequence with Dynamic Programming",
      description: "Calculates the nth Fibonacci number using both top-down (memoization) and bottom-up (tabulation) dynamic programming approaches. The result is returned modulo 1000000007 to handle large numbers.",
      approach: [
        "Top-Down (Memoization):",
        "- Uses recursion with memoization to store computed Fibonacci numbers",
        "- Starts from the target number and breaks down into subproblems",
        "- Stores results to avoid redundant calculations",
        "",
        "Bottom-Up (Tabulation):",
        "- Builds the solution iteratively from the base cases",
        "- Computes Fibonacci numbers in sequence up to the target number",
        "- More space-efficient than naive recursion"
      ],
      algorithmCharacteristics: [
        "Optimal Substructure: Yes (problem can be broken into smaller subproblems)",
        "Overlapping Subproblems: Yes (same subproblems are solved multiple times)",
        "Memoization: Used in top-down approach",
        "Tabulation: Used in bottom-up approach"
      ],
      complexityDetails: {
        time: "O(n) for both approaches (each number computed once)",
        space: "O(n) for both approaches (for DP table), can be optimized to O(1) for bottom-up",
        explanation: "Both approaches avoid exponential time by storing intermediate results. The space complexity comes from storing the DP table."
      },
      cppcode: `#include <bits/stdc++.h>
using namespace std;

class Solution {
private:
    long long int mode = 1000000007;
    long long int dpsolve1(int n, vector<long long int> &dp) {
        if(n == 0) return 0;
        if(n == 1) return 1;
        
        if(dp[n] != -1) return dp[n];
        return dp[n] = (dpsolve1(n-1,dp) + dpsolve1(n-2,dp))%mode;
    }
public:
    long long int topDown(int n) {
        vector<long long int> dp(n+1,-1);
        return dpsolve1(n,dp);
    }
    long long int bottomUp(int n) {
        vector<long long int> dp(n+1);
        dp[0] = 0; dp[1] = 1;
        for(int i=2; i<=n; i++) {
            dp[i] = (dp[i-1] + dp[i-2])%mode;
        }
        return dp[n];
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        Solution obj;
        long long int topDownans = obj.topDown(n);
        long long int bottomUpans = obj.bottomUp(n);
        if (topDownans != bottomUpans) cout << -1 << "\\n";
        cout << topDownans << "\\n";
        cout << "~" << "\\n";
    } 
}`,
      javacode: `import java.util.*;

public class FibonacciDP {
    private static final long MODE = 1000000007;
    
    private long dpsolve1(int n, long[] dp) {
        if(n == 0) return 0;
        if(n == 1) return 1;
        
        if(dp[n] != -1) return dp[n];
        return dp[n] = (dpsolve1(n-1, dp) + dpsolve1(n-2, dp)) % MODE;
    }
    
    public long topDown(int n) {
        long[] dp = new long[n+1];
        Arrays.fill(dp, -1);
        return dpsolve1(n, dp);
    }
    
    public long bottomUp(int n) {
        if(n == 0) return 0;
        long[] dp = new long[n+1];
        dp[0] = 0;
        dp[1] = 1;
        for(int i = 2; i <= n; i++) {
            dp[i] = (dp[i-1] + dp[i-2]) % MODE;
        }
        return dp[n];
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        FibonacciDP obj = new FibonacciDP();
        while(t-- > 0) {
            int n = sc.nextInt();
            long topDownAns = obj.topDown(n);
            long bottomUpAns = obj.bottomUp(n);
            if(topDownAns != bottomUpAns) System.out.println(-1);
            System.out.println(topDownAns);
            System.out.println("~");
        }
    }
}`,
      pythoncode: `class Solution:
    def __init__(self):
        self.mode = 1000000007
        
    def dpsolve1(self, n, dp):
        if n == 0:
            return 0
        if n == 1:
            return 1
        if dp[n] != -1:
            return dp[n]
        dp[n] = (self.dpsolve1(n-1, dp) + self.dpsolve1(n-2, dp)) % self.mode
        return dp[n]
    
    def topDown(self, n):
        dp = [-1] * (n + 1)
        return self.dpsolve1(n, dp)
    
    def bottomUp(self, n):
        if n == 0:
            return 0
        dp = [0] * (n + 1)
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = (dp[i-1] + dp[i-2]) % self.mode
        return dp[n]

if __name__ == "__main__":
    t = int(input())
    obj = Solution()
    for _ in range(t):
        n = int(input())
        top_down_ans = obj.topDown(n)
        bottom_up_ans = obj.bottomUp(n)
        if top_down_ans != bottom_up_ans:
            print(-1)
        print(top_down_ans)
        print("~")`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      complexity: "Time Complexity: O(n), Space Complexity: O(n) (optimizable to O(1) for bottom-up)",
      link: "https://www.geeksforgeeks.org/problems/introduction-to-dp/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=introduction-to-dp",
    },
    {
      title: "Climbing Stairs with Dynamic Programming",
      description: "Calculates the number of distinct ways to climb a staircase with n steps where you can take either 1 or 2 steps at a time. Uses memoization to store computed results for efficiency.",
      approach: [
        "Top-Down (Memoization) Approach:",
        "- Uses recursion with memoization to store computed results",
        "- Base case: 1 way for 0 or 1 step (n <= 1 returns 1)",
        "- Recursive case: Sum of ways for (n-1) steps and (n-2) steps",
        "- Stores results in a DP array to avoid redundant calculations"
      ],
      algorithmCharacteristics: [
        "Optimal Substructure: Yes (problem can be broken into smaller subproblems)",
        "Overlapping Subproblems: Yes (same subproblems are solved multiple times)",
        "Memoization: Used to store intermediate results",
        "Recursive Solution: Converted to efficient DP solution",
        "This problem is essentially the Fibonacci sequence shifted by 1 position",
        "The space complexity can be optimized to O(1) by using variables to track only the last two values",
        "The problem demonstrates a classic application of dynamic programming to avoid recomputation"
      ],
      complexityDetails: {
        time: "O(n) (each step computed only once)",
        space: "O(n) (for DP array), can be optimized to O(1)",
        explanation: "The DP approach avoids the exponential time complexity of naive recursion by storing intermediate results. The space complexity comes from storing the DP array."
      },
      cppcode: `#include<bits/stdc++.h>
using namespace std;

int climbStairs1(int n) {
    if(n <= 1) return 1;
    return climbStairs1(n-1) + climbStairs1(n-2);
}

int climbStairs2(int n) {
    vector<int> nums(n+1,-1); 
    if(n <= 1) return 1;
    if(nums[n] != -1) return nums[n];
    return nums[n] = climbStairs2(n-1) + climbStairs2(n-2);
}

int climbStairs3(int n) {
    vector<int> dp(n+1);
    dp[0] = 1; dp[1] = 1;
    for(int i=2; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

int climbStairs4(int n) {
    if(n <= 1) return 1;
    int first = 1, second = 1, ans;
    for(int i=2; i<=n; i++) {
        ans = first + second;
        second = first;
        first = ans;
    }
    return ans;
}

int main() {
    int n;
    cout << "Enter the number of stairs: ";
    cin >> n;
    cout << "Number of ways: " << climbStairs1(n);
    return 0;
}`,
      javacode: `import java.util.*;

public class ClimbingStairs {
    // Recursive approach (inefficient)
    public static int climbStairs1(int n) {
        if(n <= 1) return 1;
        return climbStairs1(n-1) + climbStairs1(n-2);
    }

    // Memoization approach
    public static int climbStairs2(int n) {
        int[] memo = new int[n+1];
        Arrays.fill(memo, -1);
        return helper(n, memo);
    }
    
    private static int helper(int n, int[] memo) {
        if(n <= 1) return 1;
        if(memo[n] != -1) return memo[n];
        memo[n] = helper(n-1, memo) + helper(n-2, memo);
        return memo[n];
    }

    // Tabulation approach
    public static int climbStairs3(int n) {
        if(n <= 1) return 1;
        int[] dp = new int[n+1];
        dp[0] = 1;
        dp[1] = 1;
        for(int i=2; i<=n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }

    // Space optimized approach
    public static int climbStairs4(int n) {
        if(n <= 1) return 1;
        int first = 1, second = 1, ans = 0;
        for(int i=2; i<=n; i++) {
            ans = first + second;
            second = first;
            first = ans;
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of stairs: ");
        int n = sc.nextInt();
        System.out.println("Number of ways: " + climbStairs1(n));
    }
}`,
      pythoncode: `def climb_stairs1(n):  # Recursive approach
    if n <= 1:
        return 1
    return climb_stairs1(n-1) + climb_stairs1(n-2)

def climb_stairs2(n, memo=None):  # Memoization approach
    if memo is None:
        memo = [-1] * (n + 1)
    if n <= 1:
        return 1
    if memo[n] != -1:
        return memo[n]
    memo[n] = climb_stairs2(n-1, memo) + climb_stairs2(n-2, memo)
    return memo[n]

def climb_stairs3(n):  # Tabulation approach
    if n <= 1:
        return 1
    dp = [0] * (n + 1)
    dp[0], dp[1] = 1, 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

def climb_stairs4(n):  # Space optimized approach
    if n <= 1:
        return 1
    first, second = 1, 1
    for _ in range(2, n + 1):
        ans = first + second
        second = first
        first = ans
    return first

if __name__ == "__main__":
    n = int(input("Enter the number of stairs: "))
    print("Number of ways:", climb_stairs1(n))`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
      link: "https://leetcode.com/problems/climbing-stairs/",
    },
    {
      title: "Frog Jump Problem with Dynamic Programming",
      description: "A frog needs to jump from stair 0 to stair N-1, where each stair has a height represented by array 'nums'. The frog can jump either 1 or 2 steps at a time, with energy cost equal to the absolute height difference between current and landing stairs. Find the minimum total energy required to reach the top.",
      approach: [
        "1. Top-Down (Memoization):",
        "- Uses recursion with memoization to store computed energy costs",
        "- Starts from the target stair and breaks down into subproblems",
        "- Stores results to avoid redundant calculations",
        "- Base case: 0 energy needed at starting position (stair 0)",
        "",
        "2. Bottom-Up (Tabulation):",
        "- Builds solution iteratively from base cases",
        "- Computes minimum energy for each stair sequentially",
        "- More space-efficient than naive recursion",
        "- Base cases:",
        "  - dp[0] = 0 (starting position)",
        "  - dp[1] = abs(nums[1] - nums[0])",
        "",
        "3. Space Optimized DP:",
        "- Tracks only the last two energy values",
        "- Eliminates need for full DP array",
        "- Maintains same time complexity with constant space"
      ],
      algorithmCharacteristics: [
        "Optimal Substructure: Minimum energy to reach stair i depends on stairs i-1 and i-2",
        "Overlapping Subproblems: Same subproblems are solved multiple times",
        "Memoization: Used in top-down approach to cache results",
        "Tabulation: Used in bottom-up approach to build solution iteratively",
        "Space Optimization: Possible by tracking only last two values"
      ],
      complexityDetails: {
        time: "O(n) for all approaches (each stair computed once)",
        space: {
          topDown: "O(n) for recursion stack + memoization table",
          bottomUp: "O(n) for DP table",
          optimized: "O(1) (constant space)"
        },
        explanation: "All approaches avoid exponential time by storing intermediate results. The space complexity varies based on implementation."
      },
      cppcode: `#include <bits/stdc++.h>
using namespace std;

class Solution {
private:
    int dpcheck(vector<int> &nums, int index, vector<int> &dp) {
        if(index == 0) return 0;
        if(dp[index] != -1) return dp[index];
        
        int left = dpcheck(nums, index-1, dp) + abs(nums[index] - nums[index-1]);
        int right = INT_MAX;
        if(index > 1) {
            right = dpcheck(nums, index-2, dp) + abs(nums[index] - nums[index-2]);
        }
        return dp[index] = min(left, right);
    }
public:
    int minimumEnergy(vector<int>& nums, int n) {
        vector<int> dp(n, -1);
        return dpcheck(nums, n-1, dp);
    }
};

class Solution1 {
public:
    int minimumEnergy(vector<int>& nums, int n) {
        vector<int> dp(n);
        dp[0] = 0;
        dp[1] = abs(nums[1] - nums[0]);
        
        for(int i=2; i<n; i++) {
            int left = dp[i-1] + abs(nums[i] - nums[i-1]);
            int right = dp[i-2] + abs(nums[i] - nums[i-2]);
            dp[i] = min(left, right);
        }
        return dp[n-1];
    }
};

class Solution3 {
public:
    int minimumEnergy(vector<int>& nums, int n) {
        int prev2 = 0, prev1 = abs(nums[1] - nums[0]);
        
        for(int i=2; i<n; i++) {
            int curr = min(
                prev1 + abs(nums[i] - nums[i-1]),
                prev2 + abs(nums[i] - nums[i-2])
            );
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
};

int main() {
    vector<int> heights = {10, 20, 30, 10};
    Solution obj;
    cout << "Minimum energy required: " << obj.minimumEnergy(heights, heights.size());
    return 0;
}`,
      javacode: `import java.util.*;

public class FrogJump {
    // Memoization approach
    static class Solution {
        private int dpcheck(int[] nums, int index, int[] dp) {
            if(index == 0) return 0;
            if(dp[index] != -1) return dp[index];
            
            int left = dpcheck(nums, index-1, dp) + Math.abs(nums[index] - nums[index-1]);
            int right = Integer.MAX_VALUE;
            if(index > 1) {
                right = dpcheck(nums, index-2, dp) + Math.abs(nums[index] - nums[index-2]);
            }
            return dp[index] = Math.min(left, right);
        }
        
        public int minimumEnergy(int[] nums, int n) {
            int[] dp = new int[n];
            Arrays.fill(dp, -1);
            return dpcheck(nums, n-1, dp);
        }
    }

    // Tabulation approach
    static class Solution1 {
        public int minimumEnergy(int[] nums, int n) {
            int[] dp = new int[n];
            dp[0] = 0;
            dp[1] = Math.abs(nums[1] - nums[0]);
            
            for(int i=2; i<n; i++) {
                int left = dp[i-1] + Math.abs(nums[i] - nums[i-1]);
                int right = dp[i-2] + Math.abs(nums[i] - nums[i-2]);
                dp[i] = Math.min(left, right);
            }
            return dp[n-1];
        }
    }

    // Space optimized approach
    static class Solution3 {
        public int minimumEnergy(int[] nums, int n) {
            int prev2 = 0, prev1 = Math.abs(nums[1] - nums[0]);
            
            for(int i=2; i<n; i++) {
                int curr = Math.min(
                    prev1 + Math.abs(nums[i] - nums[i-1]),
                    prev2 + Math.abs(nums[i] - nums[i-2])
                );
                prev2 = prev1;
                prev1 = curr;
            }
            return prev1;
        }
    }

    public static void main(String[] args) {
        int[] heights = {10, 20, 30, 10};
        Solution obj = new Solution();
        System.out.println("Minimum energy required: " + obj.minimumEnergy(heights, heights.length));
    }
}`,
      pythoncode: `def minimum_energy_memo(nums, n):
    dp = [-1] * n
    
    def dpcheck(index):
        if index == 0:
            return 0
        if dp[index] != -1:
            return dp[index]
        
        left = dpcheck(index-1) + abs(nums[index] - nums[index-1])
        right = float('inf')
        if index > 1:
            right = dpcheck(index-2) + abs(nums[index] - nums[index-2])
        dp[index] = min(left, right)
        return dp[index]
    
    return dpcheck(n-1)

def minimum_energy_tab(nums, n):
    dp = [0] * n
    dp[0] = 0
    dp[1] = abs(nums[1] - nums[0])
    
    for i in range(2, n):
        left = dp[i-1] + abs(nums[i] - nums[i-1])
        right = dp[i-2] + abs(nums[i] - nums[i-2])
        dp[i] = min(left, right)
    
    return dp[-1]

def minimum_energy_opt(nums, n):
    prev2 = 0
    prev1 = abs(nums[1] - nums[0])
    
    for i in range(2, n):
        curr = min(
            prev1 + abs(nums[i] - nums[i-1]),
            prev2 + abs(nums[i] - nums[i-2])
        )
        prev2, prev1 = prev1, curr
    
    return prev1

if __name__ == "__main__":
    heights = [10, 20, 30, 10]
    print("Minimum energy required:", minimum_energy_memo(heights, len(heights)))`,
      language: "cpp",
      javaLanguage: "java",
      pythonlanguage: "python",
  
      link: "https://www.geeksforgeeks.org/problems/geek-jump/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=geek-jump",
    },



    {
      "title": "Minimize Cost Problem with Dynamic Programming",
      "description": "Calculates the minimum cost to reach the end of an array where from each position you can jump up to k steps forward, using both top-down (memoization) and bottom-up (tabulation) dynamic programming approaches.",
      "approach": [
        "Top-Down (Memoization):",
        "- Uses recursion with memoization to store computed minimum costs",
        "- For each position, considers all possible k previous positions",
        "- Stores results to avoid redundant calculations",
        "",
        "Bottom-Up (Tabulation):",
        "- Builds the solution iteratively from the base case",
        "- Computes minimum cost for each position by looking back k positions",
        "- More space-efficient than recursion"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Yes (problem can be broken into smaller subproblems)",
        "Overlapping Subproblems: Yes (same subproblems are solved multiple times)",
        "Memoization: Used in top-down approach (commented out in code)",
        "Tabulation: Used in bottom-up approach"
      ],
      "complexityDetails": {
        "time": "O(n*k) for both approaches (each position checks up to k previous positions)",
        "space": "O(n) for both approaches (for DP table)",
        "explanation": "Both approaches avoid exponential time by storing intermediate results. The time complexity comes from the nested loop checking k previous positions for each of n positions."
      },
      "cppcode": `#include <bits/stdc++.h>
    using namespace std;
    
    class Solution {
    private:
        int dpcheck(int k, vector<int> &nums, vector<int>& dp, int index) {
            if(index == 0) return 0;
            
            if(dp[index] != -1) return dp[index];
            
            int ans = INT_MAX;
            for(int i = 1; i <= k; i++) {
                if(index - i >= 0) {
                    int step = dpcheck(k, nums, dp, index-i) + abs(nums[index] - nums[index-i]);
                    ans = min(step, ans);
                }
            }
            return dp[index] = ans;
        }
        
    public:
        int minimizeCost(int k, vector<int>& nums) {
            // Uncomment for memoization approach
            // int n = nums.size();
            // vector<int> dp(n, -1);
            // return dpcheck(k, nums, dp, n-1);
            
            // Tabulation approach
            int n = nums.size();
            vector<int> dp(n, -1);
            dp[0] = 0;
            
            for(int i = 1; i < n; i++) {
                int ans = INT_MAX;
                for(int j = 1; j <= k; j++) {
                    if(i - j >= 0) {
                        int step = dp[i-j] + abs(nums[i] - nums[i-j]);
                        ans = min(ans, step);
                    }
                }
                dp[i] = ans;
            }
            return dp[n-1];
        }
    };
    
    int main() {
        string ts;
        getline(cin, ts);
        int t = stoi(ts);
        while (t--) {
            string ks;
            getline(cin, ks);
            int k = stoi(ks);
            
            vector<int> arr;
            string input;
            getline(cin, input);
            stringstream ss(input);
            int number;
            while (ss >> number) {
                arr.push_back(number);
            }
            
            Solution obj;
            int res = obj.minimizeCost(k, arr);
            cout << res << endl;
        }
        return 0;
    }`,
      "javacode": `import java.util.*;
    
    public class MinimizeCost {
        private int dpcheck(int k, int[] nums, int[] dp, int index) {
            if(index == 0) return 0;
            
            if(dp[index] != -1) return dp[index];
            
            int ans = Integer.MAX_VALUE;
            for(int i = 1; i <= k; i++) {
                if(index - i >= 0) {
                    int step = dpcheck(k, nums, dp, index-i) + Math.abs(nums[index] - nums[index-i]);
                    ans = Math.min(step, ans);
                }
            }
            return dp[index] = ans;
        }
        
        public int minimizeCostTopDown(int k, int[] nums) {
            int n = nums.length;
            int[] dp = new int[n];
            Arrays.fill(dp, -1);
            return dpcheck(k, nums, dp, n-1);
        }
        
        public int minimizeCostBottomUp(int k, int[] nums) {
            int n = nums.length;
            int[] dp = new int[n];
            dp[0] = 0;
            
            for(int i = 1; i < n; i++) {
                int ans = Integer.MAX_VALUE;
                for(int j = 1; j <= k; j++) {
                    if(i - j >= 0) {
                        int step = dp[i-j] + Math.abs(nums[i] - nums[i-j]);
                        ans = Math.min(ans, step);
                    }
                }
                dp[i] = ans;
            }
            return dp[n-1];
        }
        
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int t = Integer.parseInt(sc.nextLine());
            while (t-- > 0) {
                int k = Integer.parseInt(sc.nextLine());
                String[] input = sc.nextLine().split(" ");
                int[] nums = new int[input.length];
                for(int i = 0; i < input.length; i++) {
                    nums[i] = Integer.parseInt(input[i]);
                }
                
                MinimizeCost obj = new MinimizeCost();
                int res = obj.minimizeCostBottomUp(k, nums);
                System.out.println(res);
            }
        }
    }`,
      "pythoncode": `class Solution:
        def dpcheck(self, k, nums, dp, index):
            if index == 0:
                return 0
            if dp[index] != -1:
                return dp[index]
            
            ans = float('inf')
            for i in range(1, k+1):
                if index - i >= 0:
                    step = self.dpcheck(k, nums, dp, index-i) + abs(nums[index] - nums[index-i])
                    ans = min(step, ans)
            dp[index] = ans
            return dp[index]
        
        def minimize_cost_top_down(self, k, nums):
            n = len(nums)
            dp = [-1] * n
            return self.dpcheck(k, nums, dp, n-1)
        
        def minimize_cost_bottom_up(self, k, nums):
            n = len(nums)
            dp = [0] * n
            
            for i in range(1, n):
                ans = float('inf')
                for j in range(1, k+1):
                    if i - j >= 0:
                        step = dp[i-j] + abs(nums[i] - nums[i-j])
                        ans = min(ans, step)
                dp[i] = ans
            return dp[-1]
    
    if __name__ == "__main__":
        t = int(input())
        for _ in range(t):
            k = int(input())
            nums = list(map(int, input().split()))
            obj = Solution()
            print(obj.minimize_cost_bottom_up(k, nums))`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": "Time Complexity: O(n*k), Space Complexity: O(n)",
      "link": "https://www.geeksforgeeks.org/minimize-cost-to-reach-end-of-an-array-by-jumping/",
      "notes": [
        "The problem is similar to the frog jump problem but with variable jump length (up to k steps)",
        "Both approaches give identical results but with different implementation styles",
        "For large k (k ≈ n), the time complexity approaches O(n²)"
      ]
    },

    
    {
      "title": "House Robber Problem with Dynamic Programming",
      "description": "Calculates the maximum amount of money a robber can steal without robbing adjacent houses, using both top-down (memoization) and bottom-up (tabulation) dynamic programming approaches.",
      "approach": [
        "Top-Down (Memoization):",
        "- Uses recursion with memoization to store computed results",
        "- Starts from the last house and breaks down into subproblems",
        "- Stores results to avoid redundant calculations",
        "",
        "Bottom-Up (Tabulation):",
        "- Builds the solution iteratively from the base cases",
        "- Computes the maximum amount for each house in sequence",
        "- More space-efficient than naive recursion"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Yes (problem can be broken into smaller subproblems)",
        "Overlapping Subproblems: Yes (same subproblems are solved multiple times)",
        "Memoization: Used in top-down approach",
        "Tabulation: Used in bottom-up approach"
      ],
      "complexityDetails": {
        "time": "O(n) for both approaches (each house is processed once)",
        "space": "O(n) for both approaches (for DP table), can be optimized to O(1) for bottom-up",
        "explanation": "Both approaches avoid exponential time by storing intermediate results. The space complexity comes from storing the DP table."
      },
      "cppcode": `#include <bits/stdc++.h>
    using namespace std;
    
    class Solution {
    private: 
        int dpcheck(vector<int> &nums, int index, vector<int> &dp) {
            if(index < 0) return 0;
            if(index == 0) return nums[index];
            if(dp[index] != -1) return dp[index];
    
            int pick = nums[index] + dpcheck(nums, index-2, dp);
            int notpick = dpcheck(nums, index-1, dp);
            return dp[index] = max(pick, notpick);
        }
    public:
        int rob(vector<int>& nums) {
            int n = nums.size();
            vector<int> dp(n, -1);
            return dpcheck(nums, n-1, dp);
        }
    };
    
    class Solution2 {
    public:
        int rob(vector<int>& nums) {
            int n = nums.size();
            if(n == 0) return 0;
            vector<int> dp(n, -1);
            dp[0] = nums[0];
    
            for(int i = 1; i < n; i++) {
                int take = nums[i];
                if(i > 1) {
                    take += dp[i-2];
                }
                int leave = dp[i-1];
                dp[i] = max(take, leave);
            }
            return dp[n-1];
        }
    };
    
    int main() {
        int n, x; 
        cout << "ENTER THE SIZE OF THE ARRAY" << endl;
        cin >> n;
    
        vector<int> nums;
        for(int i = 0; i < n; i++) {
            cin >> x;
            nums.push_back(x);
        } 
        Solution2 obj;
        cout << "MAXIMUM AMOUNT THE THIEF CAN STEAL FROM ALL THE HOUSES " << obj.rob(nums) << endl;
    }`,
      "javacode": `import java.util.*;
    
    public class HouseRobber {
        private int dpcheck(int[] nums, int index, int[] dp) {
            if(index < 0) return 0;
            if(index == 0) return nums[index];
            if(dp[index] != -1) return dp[index];
    
            int pick = nums[index] + dpcheck(nums, index-2, dp);
            int notpick = dpcheck(nums, index-1, dp);
            return dp[index] = Math.max(pick, notpick);
        }
    
        public int robTopDown(int[] nums) {
            int n = nums.length;
            int[] dp = new int[n];
            Arrays.fill(dp, -1);
            return dpcheck(nums, n-1, dp);
        }
    
        public int robBottomUp(int[] nums) {
            int n = nums.length;
            if(n == 0) return 0;
            int[] dp = new int[n];
            dp[0] = nums[0];
    
            for(int i = 1; i < n; i++) {
                int take = nums[i];
                if(i > 1) {
                    take += dp[i-2];
                }
                int leave = dp[i-1];
                dp[i] = Math.max(take, leave);
            }
            return dp[n-1];
        }
    
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.println("ENTER THE SIZE OF THE ARRAY");
            int n = sc.nextInt();
            int[] nums = new int[n];
            for(int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            HouseRobber obj = new HouseRobber();
            System.out.println("MAXIMUM AMOUNT THE THIEF CAN STEAL FROM ALL THE HOUSES " + obj.robBottomUp(nums));
        }
    }`,
      "pythoncode": `class Solution:
        def dpcheck(self, nums, index, dp):
            if index < 0:
                return 0
            if index == 0:
                return nums[index]
            if dp[index] != -1:
                return dp[index]
    
            pick = nums[index] + self.dpcheck(nums, index-2, dp)
            notpick = self.dpcheck(nums, index-1, dp)
            dp[index] = max(pick, notpick)
            return dp[index]
    
        def robTopDown(self, nums):
            n = len(nums)
            dp = [-1] * n
            return self.dpcheck(nums, n-1, dp)
    
        def robBottomUp(self, nums):
            n = len(nums)
            if n == 0:
                return 0
            dp = [0] * n
            dp[0] = nums[0]
    
            for i in range(1, n):
                take = nums[i]
                if i > 1:
                    take += dp[i-2]
                leave = dp[i-1]
                dp[i] = max(take, leave)
            return dp[n-1]
    
    if __name__ == "__main__":
        import sys
        print("ENTER THE SIZE OF THE ARRAY")
        n = int(sys.stdin.readline())
        nums = list(map(int, sys.stdin.readline().split()))
        obj = Solution()
        print("MAXIMUM AMOUNT THE THIEF CAN STEAL FROM ALL THE HOUSES", obj.robBottomUp(nums))`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": "Time Complexity: O(n), Space Complexity: O(n) (optimizable to O(1) for bottom-up)",
      "link": "https://leetcode.com/problems/house-robber/"
    },



    {
      "title": "House Robber Problem with Circular Arrangement",
      "description": "Calculates the maximum amount a robber can steal from houses arranged in a circle where the first and last houses are adjacent, using both top-down (memoization) and bottom-up (tabulation) dynamic programming approaches.",
      "approach": [
        "Problem Variant: Houses are arranged in a circle (first and last houses are adjacent)",
        "",
        "Top-Down (Memoization):",
        "- Solves two subproblems:",
        "  1. Exclude the first house",
        "  2. Exclude the last house",
        "- Uses recursion with memoization to store computed results",
        "- Combines results from both subproblems",
        "",
        "Bottom-Up (Tabulation):",
        "- Solves the same two subproblems iteratively",
        "- Builds DP table from base cases",
        "- More space-efficient than recursion"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Yes (problem can be broken into smaller subproblems)",
        "Overlapping Subproblems: Yes (same subproblems are solved multiple times)",
        "Circular Constraint Handling: Solves two linear subproblems and takes maximum",
        "Memoization: Used in top-down approach",
        "Tabulation: Used in bottom-up approach"
      ],
      "complexityDetails": {
        "time": "O(n) for both approaches (each house is processed twice)",
        "space": "O(n) for both approaches (for DP tables)",
        "explanation": "The circular constraint is handled by solving two linear subproblems (excluding first/last house) and taking the maximum. Both approaches avoid exponential time through DP."
      },
      "cppcode": `#include<bits/stdc++.h>
    using namespace std;
    
    class Solution {
    private:
        int dpcheck(vector<int> &dp, int index, vector<int> &nums) {
            int n = nums.size();
            if(index == 0) return nums[0];
            if(index < 0) return 0;
    
            if(dp[index] != -1) return dp[index];
            
            int take = nums[index] + dpcheck(dp, index-2, nums);
            int leave = dpcheck(dp, index-1, nums);
    
            return dp[index] = max(take, leave);
        }
    public:
        int rob(vector<int>& nums) {
            int n = nums.size();
            if(n == 1) return nums[0];
    
            vector<int> temp1, temp2;
            for(int i = 0; i < n; i++) {
                if(i != 0) temp1.push_back(nums[i]);
                if(i != n-1) temp2.push_back(nums[i]);
            }
            
            int n1 = temp1.size(), n2 = temp2.size();
            vector<int> dp1(n1, -1), dp2(n2, -1);
            return max(dpcheck(dp1, n1-1, temp1), dpcheck(dp2, n2-1, temp2));
        }
    };
    
    class Solution2 {
    private:
        int dpcheck(vector<int> &nums) {
            int n = nums.size();
            vector<int> dp(n, -1);
            dp[0] = nums[0];
    
            for(int i = 1; i < n; i++) {
                int take = nums[i];
                if(i > 1) take += dp[i-2];
                int leave = dp[i-1];
                dp[i] = max(take, leave);
            }
            return dp[n-1];
        }
    public:
        int rob(vector<int>& nums) {
            int n = nums.size();
            if(n == 1) return nums[0];
    
            vector<int> temp1, temp2;
            for(int i = 0; i < n; i++) {
                if(i != 0) temp1.push_back(nums[i]);
                if(i != n-1) temp2.push_back(nums[i]);
            }
            return max(dpcheck(temp1), dpcheck(temp2));
        }
    };
    
    int main() {
        int n, x; 
        cout << "ENTER THE SIZE OF THE ARRAY" << endl;
        cin >> n;
        vector<int> nums;
        for(int i = 0; i < n; i++) {
            cin >> x;
            nums.push_back(x);
        } 
        Solution2 obj;
        cout << "MAXIMUM AMOUNT THE THIEF CAN STEAL FROM ALL THE HOUSES " << obj.rob(nums) << endl;
    }`,
      "javacode": `import java.util.*;
    
    public class HouseRobberCircular {
        private int dpcheck(int[] dp, int index, int[] nums) {
            if(index == 0) return nums[0];
            if(index < 0) return 0;
            
            if(dp[index] != -1) return dp[index];
            
            int take = nums[index] + dpcheck(dp, index-2, nums);
            int leave = dpcheck(dp, index-1, nums);
            
            return dp[index] = Math.max(take, leave);
        }
        
        public int robTopDown(int[] nums) {
            int n = nums.length;
            if(n == 1) return nums[0];
            
            int[] temp1 = new int[n-1];
            int[] temp2 = new int[n-1];
            
            for(int i = 0; i < n; i++) {
                if(i != 0) temp1[i-1] = nums[i];
                if(i != n-1) temp2[i] = nums[i];
            }
            
            int[] dp1 = new int[temp1.length];
            int[] dp2 = new int[temp2.length];
            Arrays.fill(dp1, -1);
            Arrays.fill(dp2, -1);
            
            return Math.max(dpcheck(dp1, temp1.length-1, temp1), 
                           dpcheck(dp2, temp2.length-1, temp2));
        }
        
        private int dpcheckTab(int[] nums) {
            int n = nums.length;
            int[] dp = new int[n];
            dp[0] = nums[0];
            
            for(int i = 1; i < n; i++) {
                int take = nums[i];
                if(i > 1) take += dp[i-2];
                int leave = dp[i-1];
                dp[i] = Math.max(take, leave);
            }
            return dp[n-1];
        }
        
        public int robBottomUp(int[] nums) {
            int n = nums.length;
            if(n == 1) return nums[0];
            
            int[] temp1 = new int[n-1];
            int[] temp2 = new int[n-1];
            
            for(int i = 0; i < n; i++) {
                if(i != 0) temp1[i-1] = nums[i];
                if(i != n-1) temp2[i] = nums[i];
            }
            
            return Math.max(dpcheckTab(temp1), dpcheckTab(temp2));
        }
        
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.println("ENTER THE SIZE OF THE ARRAY");
            int n = sc.nextInt();
            int[] nums = new int[n];
            for(int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            
            HouseRobberCircular obj = new HouseRobberCircular();
            System.out.println("MAXIMUM AMOUNT THE THIEF CAN STEAL FROM ALL THE HOUSES " + 
                              obj.robBottomUp(nums));
        }
    }`,
      "pythoncode": `class Solution:
        def dpcheck(self, dp, index, nums):
            if index == 0:
                return nums[0]
            if index < 0:
                return 0
            if dp[index] != -1:
                return dp[index]
            
            take = nums[index] + self.dpcheck(dp, index-2, nums)
            leave = self.dpcheck(dp, index-1, nums)
            dp[index] = max(take, leave)
            return dp[index]
        
        def rob_top_down(self, nums):
            n = len(nums)
            if n == 1:
                return nums[0]
            
            temp1 = [nums[i] for i in range(1, n)]
            temp2 = [nums[i] for i in range(n-1)]
            
            dp1 = [-1] * len(temp1)
            dp2 = [-1] * len(temp2)
            
            return max(self.dpcheck(dp1, len(temp1)-1, temp1),
                    self.dpcheck(dp2, len(temp2)-1, temp2))
        
        def dpcheck_tab(self, nums):
            n = len(nums)
            dp = [-1] * n
            dp[0] = nums[0]
            
            for i in range(1, n):
                take = nums[i]
                if i > 1:
                    take += dp[i-2]
                leave = dp[i-1]
                dp[i] = max(take, leave)
            return dp[-1]
        
        def rob_bottom_up(self, nums):
            n = len(nums)
            if n == 1:
                return nums[0]
            
            temp1 = [nums[i] for i in range(1, n)]
            temp2 = [nums[i] for i in range(n-1)]
            
            return max(self.dpcheck_tab(temp1), self.dpcheck_tab(temp2))
    
    if __name__ == "__main__":
        print("ENTER THE SIZE OF THE ARRAY")
        n = int(input())
        nums = list(map(int, input().split()))
        obj = Solution()
        print("MAXIMUM AMOUNT THE THIEF CAN STEAL FROM ALL THE HOUSES", 
              obj.rob_bottom_up(nums))`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": "Time Complexity: O(n), Space Complexity: O(n)",
      "link": "https://leetcode.com/problems/house-robber-ii/",
      "notes": [
        "Circular constraint handled by solving two linear subproblems",
        "Edge case: Single house handled separately",
        "Both approaches give identical results but with different implementation styles"
      ]
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
        Dynamic Programming
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

export default Dynamic1;