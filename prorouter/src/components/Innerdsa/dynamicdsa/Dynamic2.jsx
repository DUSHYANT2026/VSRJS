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

function Dynamic2() {
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
      "title": "Maximum Points Problem with Dynamic Programming",
      "description": "Calculates the maximum points that can be earned by selecting activities over n days with the constraint that the same activity cannot be selected on consecutive days, using both naive recursion and memoization approaches.",
      "approach": [
        "Problem Understanding:",
        "- Each day has 3 activities with different points",
        "- Cannot choose the same activity on consecutive days",
        "",
        "Naive Recursion:",
        "- Base case: On day 0, select maximum points from available activities",
        "- Recursive case: For each day, try all valid activities and recurse",
        "- Exponential time complexity due to repeated calculations",
        "",
        "Memoization:",
        "- Stores computed results in a DP table to avoid redundant calculations",
        "- DP table dimensions: [days][last_activity]",
        "- Significantly improves time complexity"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Yes (maximum points can be derived from subproblems)",
        "Overlapping Subproblems: Yes (same subproblems solved multiple times)",
        "Memoization: Used to store intermediate results",
        "State Representation: Current day and last activity chosen"
      ],
      "complexityDetails": {
        "time": {
          "recursion": "O(3^n) - Exponential due to recursion tree",
          "memoization": "O(n*4) - Linear as each state is computed once"
        },
        "space": {
          "recursion": "O(n) - Recursion stack depth",
          "memoization": "O(n*4) - DP table storage"
        },
        "explanation": "The memoization approach reduces time complexity from exponential to linear by storing results of subproblems."
      },
      "cppcode": `#include <bits/stdc++.h>
    using namespace std;
    
    class Solution1 {
    private:
        int dpcheck(vector<vector<int>>& nums, int day, int last) {
            if(day == 0) {
                int ans = INT_MIN;
                for(int i = 0; i < 3; i++) {
                    if(i != last) {
                        ans = max(ans, nums[0][i]);
                    }
                }
                return ans;
            }
            
            int ans = INT_MIN;
            for(int i = 0; i < 3; i++) {
                if(i != last) {
                    int newans = nums[day][i] + dpcheck(nums, day-1, i);
                    ans = max(ans, newans);
                }
            }
            return ans;
        }
    public:
        int maximumPoints(vector<vector<int>>& arr, int n) {
            return dpcheck(arr, n-1, 3);
        }
    };
    
    class Solution {
    private:
        int dpcheck(vector<vector<int>>& nums, int day, int last, vector<vector<int>>& dp) {
            if(day == 0) {
                int ans = INT_MIN;
                for(int i = 0; i < 3; i++) {
                    if(i != last) {
                        ans = max(ans, nums[0][i]);
                    }
                }
                return ans;
            }
            
            if(dp[day][last] != -1) return dp[day][last];
            
            int ans = INT_MIN;
            for(int i = 0; i < 3; i++) {
                if(i != last) {
                    int newans = nums[day][i] + dpcheck(nums, day-1, i, dp);
                    ans = max(ans, newans);
                }
            }
            return dp[day][last] = ans;
        }
    public:
        int maximumPoints(vector<vector<int>>& arr, int n) {
            vector<vector<int>> dp(n, vector<int>(4, -1));
            return dpcheck(arr, n-1, 3, dp);
        }
    };
    
    int main() {
        int t;
        cin >> t;
        while (t--) {
            int n;
            cin >> n;
            vector<vector<int>> arr;
            for (int i = 0; i < n; ++i) {
                vector<int> temp;
                for (int j = 0; j < 3; ++j) {
                    int x;
                    cin >> x;
                    temp.push_back(x);
                }
                arr.push_back(temp);
            }
            Solution obj;
            cout << obj.maximumPoints(arr, n) << endl;
        }
        return 0;
    }`,
      "javacode": `import java.util.*;
    
    public class MaximumPoints {
        private int dpcheck(int[][] nums, int day, int last, int[][] dp) {
            if(day == 0) {
                int ans = Integer.MIN_VALUE;
                for(int i = 0; i < 3; i++) {
                    if(i != last) {
                        ans = Math.max(ans, nums[0][i]);
                    }
                }
                return ans;
            }
            
            if(dp[day][last] != -1) return dp[day][last];
            
            int ans = Integer.MIN_VALUE;
            for(int i = 0; i < 3; i++) {
                if(i != last) {
                    int newans = nums[day][i] + dpcheck(nums, day-1, i, dp);
                    ans = Math.max(ans, newans);
                }
            }
            return dp[day][last] = ans;
        }
        
        public int maximumPoints(int[][] arr, int n) {
            int[][] dp = new int[n][4];
            for(int[] row : dp) {
                Arrays.fill(row, -1);
            }
            return dpcheck(arr, n-1, 3, dp);
        }
        
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-- > 0) {
                int n = sc.nextInt();
                int[][] arr = new int[n][3];
                for(int i = 0; i < n; i++) {
                    for(int j = 0; j < 3; j++) {
                        arr[i][j] = sc.nextInt();
                    }
                }
                MaximumPoints obj = new MaximumPoints();
                System.out.println(obj.maximumPoints(arr, n));
            }
        }
    }`,
      "pythoncode": `class Solution:
        def dpcheck(self, nums, day, last, dp):
            if day == 0:
                ans = float('-inf')
                for i in range(3):
                    if i != last:
                        ans = max(ans, nums[0][i])
                return ans
            
            if dp[day][last] != -1:
                return dp[day][last]
            
            ans = float('-inf')
            for i in range(3):
                if i != last:
                    newans = nums[day][i] + self.dpcheck(nums, day-1, i, dp)
                    ans = max(ans, newans)
            dp[day][last] = ans
            return dp[day][last]
        
        def maximumPoints(self, arr, n):
            dp = [[-1 for _ in range(4)] for _ in range(n)]
            return self.dpcheck(arr, n-1, 3, dp)
    
    if __name__ == "__main__":
        t = int(input())
        for _ in range(t):
            n = int(input())
            arr = []
            for _ in range(n):
                temp = list(map(int, input().split()))
                arr.append(temp)
            obj = Solution()
            print(obj.maximumPoints(arr, n))`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "recursion": "Time: O(3^n), Space: O(n)",
        "memoization": "Time: O(n), Space: O(n)"
      },
      "link": "https://www.geeksforgeeks.org/maximum-points-top-left-matrix-bottom-right-return-back/",
      "notes": [
        "The problem is a variation of the activity selection problem with constraints",
        "Initial last activity is set to 3 (invalid) to consider all activities on first day",
        "Memoization approach is significantly faster for larger n (n > 15)"
      ]
    },


    {
      "title": "Unique Paths Problem with Dynamic Programming",
      "description": "Calculates the number of unique paths from the top-left corner to the bottom-right corner of a grid (M x N) where movement is only allowed right or down, using three different dynamic programming approaches.",
      "approach": [
        "Problem Understanding:",
        "- Given a grid of size M x N",
        "- Movement allowed only right or down",
        "- Find number of unique paths from (0,0) to (M-1,N-1)",
        "",
        "Top-Down Memoization:",
        "- Recursive approach starting from destination",
        "- Base cases: Return 1 when at start, 0 when out of bounds",
        "- Memoize results to avoid recomputation",
        "",
        "Bottom-Up Memoization:",
        "- Recursive approach starting from origin",
        "- Base cases: Return 1 when at destination, 0 when out of bounds",
        "- Memoize results to avoid recomputation",
        "",
        "Tabulation:",
        "- Iterative approach building solution from base cases",
        "- Initialize DP table with base case (0,0) = 1",
        "- Fill table row by row, column by column"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Path count to (i,j) depends on (i-1,j) and (i,j-1)",
        "Overlapping Subproblems: Same subproblems solved multiple times",
        "Memoization: Used in top-down and bottom-up approaches",
        "Tabulation: Used in iterative approach",
        "State Representation: Current grid position (i,j)"
      ],
      "complexityDetails": {
        "time": {
          "recursion": "O(2^(m+n)) - Exponential due to recursion tree",
          "memoization": "O(m*n) - Each cell computed once",
          "tabulation": "O(m*n) - Each cell computed once"
        },
        "space": {
          "recursion": "O(m+n) - Recursion stack depth",
          "memoization": "O(m*n) - DP table storage",
          "tabulation": "O(m*n) - DP table storage (can be optimized to O(n))"
        },
        "explanation": "The DP approaches reduce time complexity from exponential to polynomial by storing intermediate results. Space can be further optimized by using a 1D array."
      },
      "cppcode": `#include <bits/stdc++.h>
    using namespace std;
    
    class Solution {
    private:
        int dpcheck(int i, int j, vector<vector<int>> &dp) {
            if(i == 0 && j == 0) return 1;
            if(i < 0 || j < 0) return 0;
            
            if(dp[i][j] != -1) return dp[i][j];
    
            int up = dpcheck(i-1,j,dp);
            int left = dpcheck(i,j-1,dp);
    
            return dp[i][j] = (up+left);
        }
    public:
        int uniquePaths(int m, int n) {
            vector<vector<int>> dp(n,vector<int>(m,-1));
            return dpcheck(n-1,m-1,dp);
        }
    };
    
    class Solution2 {
    private:
        int dpcheck(int i, int j, int n, int m, vector<vector<int>> &dp) {
            if(i == n-1 && j == m-1) return 1;
            if(i >= n || j >= m) return 0;
            
            if(dp[i][j] != -1) return dp[i][j];
    
            int down = dpcheck(i+1,j,n,m,dp);
            int right = dpcheck(i,j+1,n,m,dp);
    
            return dp[i][j] = (down+right);
        }
    public:
        int uniquePaths(int m, int n) {
            vector<vector<int>> dp(n,vector<int>(m,-1));
            return dpcheck(0,0,n,m,dp);
        }
    };
    
    class Solution3 {
    public:
        int uniquePaths(int m, int n) {
            vector<vector<int>> dp(n,vector<int>(m,0));
            
            dp[0][0] = 1;
    
            for(int i=0; i<n; i++) {
                for(int j=0; j<m; j++) {
                    if(i == 0 && j == 0) continue;
                    
                    int up = (i > 0) ? dp[i-1][j] : 0;
                    int left = (j > 0) ? dp[i][j-1] : 0;
                    dp[i][j] = up + left;
                }
            }
            return dp[n-1][m-1];
        }
    };
    
    int main()
    {
        int t;
        cin>>t;
        while(t--)
        {
            int N, M;
            cin>>M>>N;
            Solution2 ob;
            cout << ob.uniquePaths(M, N)<<endl;
        }
        return 0;
    }`,
      "javacode": `import java.util.*;
    
    public class UniquePaths {
        // Top-Down Memoization
        private int dpcheck(int i, int j, int[][] dp) {
            if(i == 0 && j == 0) return 1;
            if(i < 0 || j < 0) return 0;
            
            if(dp[i][j] != -1) return dp[i][j];
    
            int up = dpcheck(i-1, j, dp);
            int left = dpcheck(i, j-1, dp);
    
            return dp[i][j] = up + left;
        }
    
        public int uniquePathsTopDown(int m, int n) {
            int[][] dp = new int[n][m];
            for(int[] row : dp) Arrays.fill(row, -1);
            return dpcheck(n-1, m-1, dp);
        }
    
        // Bottom-Up Memoization
        private int dpcheck(int i, int j, int n, int m, int[][] dp) {
            if(i == n-1 && j == m-1) return 1;
            if(i >= n || j >= m) return 0;
            
            if(dp[i][j] != -1) return dp[i][j];
    
            int down = dpcheck(i+1, j, n, m, dp);
            int right = dpcheck(i, j+1, n, m, dp);
    
            return dp[i][j] = down + right;
        }
    
        public int uniquePathsBottomUp(int m, int n) {
            int[][] dp = new int[n][m];
            for(int[] row : dp) Arrays.fill(row, -1);
            return dpcheck(0, 0, n, m, dp);
        }
    
        // Tabulation
        public int uniquePathsTabulation(int m, int n) {
            int[][] dp = new int[n][m];
            dp[0][0] = 1;
    
            for(int i = 0; i < n; i++) {
                for(int j = 0; j < m; j++) {
                    if(i == 0 && j == 0) continue;
                    
                    int up = (i > 0) ? dp[i-1][j] : 0;
                    int left = (j > 0) ? dp[i][j-1] : 0;
                    dp[i][j] = up + left;
                }
            }
            return dp[n-1][m-1];
        }
    }`,
      "pythoncode": `class Solution:
        def uniquePathsTopDown(self, m: int, n: int) -> int:
            memo = [[-1 for _ in range(m)] for _ in range(n)]
            
            def dp(i, j):
                if i == 0 and j == 0:
                    return 1
                if i < 0 or j < 0:
                    return 0
                if memo[i][j] != -1:
                    return memo[i][j]
                
                memo[i][j] = dp(i-1, j) + dp(i, j-1)
                return memo[i][j]
            
            return dp(n-1, m-1)
    
        def uniquePathsBottomUp(self, m: int, n: int) -> int:
            memo = [[-1 for _ in range(m)] for _ in range(n)]
            
            def dp(i, j):
                if i == n-1 and j == m-1:
                    return 1
                if i >= n or j >= m:
                    return 0
                if memo[i][j] != -1:
                    return memo[i][j]
                
                memo[i][j] = dp(i+1, j) + dp(i, j+1)
                return memo[i][j]
            
            return dp(0, 0)
    
        def uniquePathsTabulation(self, m: int, n: int) -> int:
            dp = [[0 for _ in range(m)] for _ in range(n)]
            dp[0][0] = 1
            
            for i in range(n):
                for j in range(m):
                    if i == 0 and j == 0:
                        continue
                    up = dp[i-1][j] if i > 0 else 0
                    left = dp[i][j-1] if j > 0 else 0
                    dp[i][j] = up + left
                    
            return dp[-1][-1]`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "recursion": "Time: O(2^(m+n)), Space: O(m+n)",
        "memoization": "Time: O(m*n), Space: O(m*n)",
        "tabulation": "Time: O(m*n), Space: O(m*n)"
      },
      "link": "https://leetcode.com/problems/unique-paths/",
      "notes": [
        "This is a classic DP problem often used to introduce DP concepts",
        "Can be solved mathematically using combinatorics (m+n-2 choose m-1)",
        "Space can be optimized to O(min(m,n)) using 1D array",
        "Similar to the minimum path sum problem but simpler"
      ]
    },




    {
      "title": "Unique Paths with Obstacles Problem",
      "description": "Calculates the number of unique paths from the top-left corner to the bottom-right corner of a grid (M x N) with obstacles, where movement is only allowed right or down, using three different dynamic programming approaches.",
      "approach": [
        "Problem Understanding:",
        "- Given a grid of size M x N with obstacles (marked as 1)",
        "- Movement allowed only right or down",
        "- Cannot pass through obstacles",
        "- Find number of unique paths from (0,0) to (M-1,N-1)",
        "",
        "Top-Down Memoization:",
        "- Recursive approach starting from destination",
        "- Base cases: Return 0 if obstacle or out of bounds, 1 if at start",
        "- Memoize results to avoid recomputation",
        "",
        "Bottom-Up Memoization:",
        "- Recursive approach starting from origin",
        "- Base cases: Return 0 if obstacle or out of bounds, 1 if at destination",
        "- Memoize results to avoid recomputation",
        "",
        "Tabulation:",
        "- Iterative approach building solution from base cases",
        "- Initialize DP table with base case (0,0) = 1 if no obstacle",
        "- Fill table row by row, column by column",
        "- Set to 0 if cell contains obstacle"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Path count to (i,j) depends on (i-1,j) and (i,j-1) if no obstacle",
        "Overlapping Subproblems: Same subproblems solved multiple times",
        "Memoization: Used in top-down and bottom-up approaches",
        "Tabulation: Used in iterative approach",
        "State Representation: Current grid position (i,j) and obstacle grid",
        "Obstacle Handling: Path count becomes 0 at obstacle cells"
      ],
      "complexityDetails": {
        "time": {
          "recursion": "O(2^(m+n)) - Exponential due to recursion tree",
          "memoization": "O(m*n) - Each cell computed once",
          "tabulation": "O(m*n) - Each cell computed once"
        },
        "space": {
          "recursion": "O(m+n) - Recursion stack depth",
          "memoization": "O(m*n) - DP table storage",
          "tabulation": "O(m*n) - DP table storage (can be optimized to O(n))"
        },
        "explanation": "The DP approaches efficiently handle obstacles by setting path count to 0 at obstacle cells, reducing time complexity from exponential to polynomial by storing intermediate results."
      },
      "cppcode": `#include <bits/stdc++.h>
    using namespace std;
    
    class Solution {
    private:
        int dpcheck(int i, int j, vector<vector<int>>& nums, vector<vector<int>>& dp) {
            if(i >= 0 && j >= 0 && nums[i][j] == 1) return 0;
            if(i == 0 && j == 0) return 1;
            if(i < 0 || j < 0) return 0;
    
            if(dp[i][j] != -1) return dp[i][j];
            int up = dpcheck(i-1, j, nums, dp);
            int left = dpcheck(i, j-1, nums, dp);
    
            return dp[i][j] = (up + left);    
        }
    public:
        int uniquePathsWithObstacles(vector<vector<int>>& nums) {
            int n = nums.size(); 
            int m = nums[0].size();
            vector<vector<int>> dp(n, vector<int>(m, -1));
            return dpcheck(n-1, m-1, nums, dp);
        }
    };
    
    class Solution1 {
    private:
        int dpcheck(int i, int j, int n, int m, vector<vector<int>>& nums, vector<vector<int>>& dp) {
            if(i >= n || j >= m || nums[i][j] == 1) return 0;
            if(i == n-1 && j == m-1) return 1;
            
            if(dp[i][j] != -1) return dp[i][j];
            int down = dpcheck(i+1, j, n, m, nums, dp);
            int right = dpcheck(i, j+1, n, m, nums, dp);
    
            return dp[i][j] = (down + right);  
        }
    public:
        int uniquePathsWithObstacles(vector<vector<int>>& nums) {
            int n = nums.size(); 
            int m = nums[0].size();
            vector<vector<int>> dp(n, vector<int>(m, -1));
            return dpcheck(0, 0, n, m, nums, dp);
        }
    };
    
    class Solution2 {
    public:
        int uniquePathsWithObstacles(vector<vector<int>>& nums) {
            int n = nums.size(); 
            int m = nums[0].size();
            vector<vector<int>> dp(n, vector<int>(m, 0));
    
            dp[0][0] = nums[0][0] == 0 ? 1 : 0;
    
            for(int i = 0; i < n; i++) {
                for(int j = 0; j < m; j++) {
                    if(i == 0 && j == 0) continue;
                    if(nums[i][j] == 1) {
                        dp[i][j] = 0;
                    } else {
                        int up = (i > 0) ? dp[i-1][j] : 0;
                        int left = (j > 0) ? dp[i][j-1] : 0;
                        dp[i][j] = up + left;
                    }
                }
            }
            return dp[n-1][m-1];
        }
    };
    
    int main() {
        int n, m; 
        cin >> n >> m;
    
        vector<vector<int>> nums;
        for(int i = 0; i < n; i++) {
            vector<int> temp; 
            int x;
            for(int j = 0; j < m; j++) {
                cin >> x;
                temp.push_back(x);
            }
            nums.push_back(temp);
        }
        Solution2 obj;
        cout << obj.uniquePathsWithObstacles(nums);
        return 0;
    }`,
      "javacode": `import java.util.*;
    
    public class UniquePathsWithObstacles {
        // Top-Down Memoization
        private int dpcheck(int i, int j, int[][] grid, int[][] dp) {
            if(i >= 0 && j >= 0 && grid[i][j] == 1) return 0;
            if(i == 0 && j == 0) return 1;
            if(i < 0 || j < 0) return 0;
            
            if(dp[i][j] != -1) return dp[i][j];
            
            int up = dpcheck(i-1, j, grid, dp);
            int left = dpcheck(i, j-1, grid, dp);
            
            return dp[i][j] = up + left;
        }
        
        public int uniquePathsWithObstaclesTopDown(int[][] grid) {
            int n = grid.length;
            int m = grid[0].length;
            int[][] dp = new int[n][m];
            for(int[] row : dp) Arrays.fill(row, -1);
            return dpcheck(n-1, m-1, grid, dp);
        }
        
        // Bottom-Up Memoization
        private int dpcheck(int i, int j, int n, int m, int[][] grid, int[][] dp) {
            if(i >= n || j >= m || grid[i][j] == 1) return 0;
            if(i == n-1 && j == m-1) return 1;
            
            if(dp[i][j] != -1) return dp[i][j];
            
            int down = dpcheck(i+1, j, n, m, grid, dp);
            int right = dpcheck(i, j+1, n, m, grid, dp);
            
            return dp[i][j] = down + right;
        }
        
        public int uniquePathsWithObstaclesBottomUp(int[][] grid) {
            int n = grid.length;
            int m = grid[0].length;
            int[][] dp = new int[n][m];
            for(int[] row : dp) Arrays.fill(row, -1);
            return dpcheck(0, 0, n, m, grid, dp);
        }
        
        // Tabulation
        public int uniquePathsWithObstaclesTabulation(int[][] grid) {
            int n = grid.length;
            int m = grid[0].length;
            int[][] dp = new int[n][m];
            
            dp[0][0] = grid[0][0] == 0 ? 1 : 0;
            
            for(int i = 0; i < n; i++) {
                for(int j = 0; j < m; j++) {
                    if(i == 0 && j == 0) continue;
                    if(grid[i][j] == 1) {
                        dp[i][j] = 0;
                    } else {
                        int up = (i > 0) ? dp[i-1][j] : 0;
                        int left = (j > 0) ? dp[i][j-1] : 0;
                        dp[i][j] = up + left;
                    }
                }
            }
            return dp[n-1][m-1];
        }
    }`,
      "pythoncode": `class Solution:
        def uniquePathsWithObstaclesTopDown(self, grid: List[List[int]]) -> int:
            n, m = len(grid), len(grid[0])
            memo = [[-1 for _ in range(m)] for _ in range(n)]
            
            def dp(i, j):
                if i >= 0 and j >= 0 and grid[i][j] == 1:
                    return 0
                if i == 0 and j == 0:
                    return 1
                if i < 0 or j < 0:
                    return 0
                if memo[i][j] != -1:
                    return memo[i][j]
                
                memo[i][j] = dp(i-1, j) + dp(i, j-1)
                return memo[i][j]
                
            return dp(n-1, m-1)
        
        def uniquePathsWithObstaclesBottomUp(self, grid: List[List[int]]) -> int:
            n, m = len(grid), len(grid[0])
            memo = [[-1 for _ in range(m)] for _ in range(n)]
            
            def dp(i, j):
                if i >= n or j >= m or grid[i][j] == 1:
                    return 0
                if i == n-1 and j == m-1:
                    return 1
                if memo[i][j] != -1:
                    return memo[i][j]
                
                memo[i][j] = dp(i+1, j) + dp(i, j+1)
                return memo[i][j]
                
            return dp(0, 0)
        
        def uniquePathsWithObstaclesTabulation(self, grid: List[List[int]]) -> int:
            n, m = len(grid), len(grid[0])
            dp = [[0 for _ in range(m)] for _ in range(n)]
            
            dp[0][0] = 1 if grid[0][0] == 0 else 0
            
            for i in range(n):
                for j in range(m):
                    if i == 0 and j == 0:
                        continue
                    if grid[i][j] == 1:
                        dp[i][j] = 0
                    else:
                        up = dp[i-1][j] if i > 0 else 0
                        left = dp[i][j-1] if j > 0 else 0
                        dp[i][j] = up + left
                        
            return dp[-1][-1]`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "recursion": "Time: O(2^(m+n)), Space: O(m+n)",
        "memoization": "Time: O(m*n), Space: O(m*n)",
        "tabulation": "Time: O(m*n), Space: O(m*n)"
      },
      "link": "https://leetcode.com/problems/unique-paths-ii/",
      "notes": [
        "This is a variation of the classic unique paths problem with obstacles",
        "Obstacles are marked as 1 in the grid while empty spaces are 0",
        "The first cell (0,0) and last cell (m-1,n-1) can also contain obstacles",
        "Space can be optimized to O(n) using 1D array for tabulation approach",
        "Similar to the unique paths problem but with additional obstacle checks"
      ]
    },



    {
      "title": "Unique Paths III Problem",
      "description": "Counts the number of unique paths from start to end in a grid that walk over every non-obstacle square exactly once.",
      "approach": [
        "Problem Understanding:",
        "- Given a grid with start (1), end (2), obstacles (-1), and empty squares (0)",
        "- Must walk over every empty square exactly once",
        "- Can move in 4 directions (up, down, left, right)",
        "- Find all possible paths from start to end covering all non-obstacle squares",
        "",
        "Backtracking with DFS:",
        "- Use DFS to explore all possible paths",
        "- Keep track of visited squares to avoid revisiting",
        "- Count remaining squares to ensure full coverage",
        "- Backtrack when hitting obstacles or boundaries",
        "- Success when reaching end with all squares visited"
      ],
      "algorithmCharacteristics": [
        "Depth-First Search: Explores all possible paths recursively",
        "Backtracking: Unmarks visited squares when backtracking",
        "State Tracking: Maintains visited status and remaining count",
        "Complete Search: Guarantees finding all valid paths",
        "Constraint Satisfaction: Enforces visiting all non-obstacle squares"
      ],
      "complexityDetails": {
        "time": "O(3^(n*m)) - Worst case with 3 possible moves at each step (can't go back)",
        "space": "O(n*m) - For visited matrix and recursion stack",
        "explanation": "The complexity is exponential due to the nature of the complete search, though pruning occurs when hitting obstacles or revisiting squares."
      },
      "cppcode": `class Solution {
    private:
        int dpsolve(int i, int j, int x, int y, int n, int m, int count, 
                   vector<vector<int>>& grid, vector<vector<bool>>& visited) {
            // Base case: reached endpoint
            if (i == x && j == y) {
                return count == 0 ? 1 : 0;
            }
            
            // Boundary/obstacle/visited check
            if (i < 0 || i >= n || j < 0 || j >= m || 
                grid[i][j] == -1 || visited[i][j]) {
                return 0;
            }
            
            visited[i][j] = true;
            int paths = 0;
            
            // Explore all 4 directions
            paths += dpsolve(i + 1, j, x, y, n, m, count - 1, grid, visited);
            paths += dpsolve(i - 1, j, x, y, n, m, count - 1, grid, visited);
            paths += dpsolve(i, j + 1, x, y, n, m, count - 1, grid, visited);
            paths += dpsolve(i, j - 1, x, y, n, m, count - 1, grid, visited);
            
            visited[i][j] = false; // Backtrack
            return paths;
        }
    
    public:
        int uniquePathsIII(vector<vector<int>>& grid) {
            int n = grid.size();
            int m = grid[0].size();
            int start_i = 0, start_j = 0, end_i = 0, end_j = 0;
            int count = 0; // Total squares to visit
            
            // Find start, end and count non-obstacle squares
            for (int i = 0; i < n; ++i) {
                for (int j = 0; j < m; ++j) {
                    if (grid[i][j] == 1) {
                        start_i = i;
                        start_j = j;
                        count++;
                    } else if (grid[i][j] == 2) {
                        end_i = i;
                        end_j = j;
                        count++;
                    } else if (grid[i][j] == 0) {
                        count++;
                    }
                }
            }
            
            vector<vector<bool>> visited(n, vector<bool>(m, false));
            return dpsolve(start_i, start_j, end_i, end_j, n, m, count - 1, grid, visited);
        }
    };`,
      "optimizedApproach": {
        "description": "The solution is already optimized with backtracking. Further optimizations could include:",
        "improvements": [
          "Early termination if remaining squares are unreachable",
          "Memoization of intermediate states (though challenging due to path dependency)",
          "Bitmask representation of visited squares for space efficiency"
        ]
      },
      "javacode": `class Solution {
        private int dfs(int[][] grid, int i, int j, int zeros, boolean[][] visited) {
            if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || 
                grid[i][j] == -1 || visited[i][j]) {
                return 0;
            }
            
            if (grid[i][j] == 2) {
                return zeros == -1 ? 1 : 0;
            }
            
            visited[i][j] = true;
            zeros--;
            int paths = 0;
            
            paths += dfs(grid, i+1, j, zeros, visited);
            paths += dfs(grid, i-1, j, zeros, visited);
            paths += dfs(grid, i, j+1, zeros, visited);
            paths += dfs(grid, i, j-1, zeros, visited);
            
            visited[i][j] = false;
            return paths;
        }
        
        public int uniquePathsIII(int[][] grid) {
            int startX = 0, startY = 0, zeros = 0;
            
            for (int i = 0; i < grid.length; i++) {
                for (int j = 0; j < grid[0].length; j++) {
                    if (grid[i][j] == 1) {
                        startX = i;
                        startY = j;
                    } else if (grid[i][j] == 0) {
                        zeros++;
                    }
                }
            }
            
            boolean[][] visited = new boolean[grid.length][grid[0].length];
            return dfs(grid, startX, startY, zeros, visited);
        }
    }`,
      "pythoncode": `class Solution:
        def uniquePathsIII(self, grid: List[List[int]]) -> int:
            rows, cols = len(grid), len(grid[0])
            start, end = None, None
            empty = 0
            
            for r in range(rows):
                for c in range(cols):
                    if grid[r][c] == 1:
                        start = (r, c)
                    elif grid[r][c] == 2:
                        end = (r, c)
                    elif grid[r][c] == 0:
                        empty += 1
            
            def dfs(r, c, visited, steps):
                if (r, c) == end:
                    return 1 if steps == empty + 1 else 0
                
                count = 0
                for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] != -1 and (nr, nc) not in visited:
                        visited.add((nr, nc))
                        count += dfs(nr, nc, visited, steps + 1)
                        visited.remove((nr, nc))
                return count
            
            return dfs(start[0], start[1], {start}, 0)`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "time": "O(3^(n*m)) - Worst case with 3 possible moves at each step",
        "space": "O(n*m) - For visited matrix and recursion stack"
      },
      "link": "https://leetcode.com/problems/unique-paths-iii/",
      "notes": [
        "This is a Hamiltonian path problem on a grid",
        "The solution must cover all non-obstacle squares exactly once",
        "Backtracking is essential to explore all possibilities",
        "The count parameter ensures complete coverage",
        "For larger grids (n,m > 10), this approach may be too slow"
      ]
    },








    {
      "title": "Minimum Path Sum Problem",
      "description": "Finds the path from the top-left corner to the bottom-right corner of a grid (M x N) with non-negative numbers that minimizes the sum of all numbers along its path, where movement is only allowed right or down, using three different dynamic programming approaches.",
      "approach": [
        "Problem Understanding:",
        "- Given a grid of size M x N with non-negative numbers",
        "- Movement allowed only right or down",
        "- Find the path with minimum sum from (0,0) to (M-1,N-1)",
        "",
        "Top-Down Memoization:",
        "- Recursive approach starting from destination",
        "- Base case: Return grid value if at start (0,0)",
        "- Memoize results to avoid recomputation",
        "- For each cell, return the minimum of up and left paths plus current cell value",
        "",
        "Bottom-Up Memoization:",
        "- Recursive approach starting from origin",
        "- Base case: Return grid value if at destination (M-1,N-1)",
        "- Memoize results to avoid recomputation",
        "- For each cell, return the minimum of right and down paths plus current cell value",
        "",
        "Tabulation:",
        "- Iterative approach building solution from base cases",
        "- Initialize DP table with base case (0,0) = grid[0][0]",
        "- Fill table row by row, column by column",
        "- For each cell, compute minimum path sum from top or left cell plus current value"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Minimum path sum to (i,j) depends on (i-1,j) and (i,j-1)",
        "Overlapping Subproblems: Same subproblems solved multiple times",
        "Memoization: Used in top-down and bottom-up approaches",
        "Tabulation: Used in iterative approach",
        "State Representation: Current grid position (i,j) and grid values",
        "Movement Constraints: Only right or down moves allowed"
      ],
      "complexityDetails": {
        "time": {
          "recursion": "O(2^(m+n)) - Exponential due to recursion tree",
          "memoization": "O(m*n) - Each cell computed once",
          "tabulation": "O(m*n) - Each cell computed once"
        },
        "space": {
          "recursion": "O(m+n) - Recursion stack depth",
          "memoization": "O(m*n) - DP table storage",
          "tabulation": "O(m*n) - DP table storage (can be optimized to O(n))"
        },
        "explanation": "The DP approaches efficiently compute minimum path sums by storing intermediate results, reducing time complexity from exponential to polynomial."
      },
      "cppcode": `#include <bits/stdc++.h>
    using namespace std;
    
    class Solution {
    private:
        int dpcheck(int i, int j, vector<vector<int>> &nums, vector<vector<int>> &dp) {
            if(i == 0 && j == 0) return nums[i][j];
            if(dp[i][j] != -1) return dp[i][j];
            
            int up = INT_MAX, left = INT_MAX;
            if(i > 0) up = nums[i][j] + dpcheck(i-1, j, nums, dp);
            if(j > 0) left = nums[i][j] + dpcheck(i, j-1, nums, dp);
            
            return dp[i][j] = min(up, left);
        }
    public:
        int minPathSum(vector<vector<int>>& nums) {
            int n = nums.size(), m = nums[0].size();
            vector<vector<int>> dp(n, vector<int>(m, -1));
            return dpcheck(n-1, m-1, nums, dp);
        }
    };
    
    class Solution1 {
    private:
        int dpsolve(int i, int j, int n, int m, vector<vector<int>>& grid, vector<vector<int>>& dp) {
            if(i == n-1 && j == m-1) return grid[i][j];
            if(dp[i][j] != -1) return dp[i][j];
            
            int right = INT_MAX, down = INT_MAX;
            if(i < n-1) right = grid[i][j] + dpsolve(i+1, j, n, m, grid, dp);
            if(j < m-1) down = grid[i][j] + dpsolve(i, j+1, n, m, grid, dp);
            
            return dp[i][j] = min(right, down);
        }
    public:
        int minPathSum(vector<vector<int>>& grid) {
            int n = grid.size(), m = grid[0].size();
            vector<vector<int>> dp(n, vector<int>(m, -1));
            return dpsolve(0, 0, n, m, grid, dp);
        }
    };
    
    class Solution2 {
    public:
        int minPathSum(vector<vector<int>>& nums) {
            int n = nums.size(), m = nums[0].size();
            vector<vector<int>> dp(n, vector<int>(m, 0));
            
            dp[0][0] = nums[0][0];
            
            for(int i = 0; i < n; i++) {
                for(int j = 0; j < m; j++) {
                    if(i == 0 && j == 0) continue;
                    int up = INT_MAX, left = INT_MAX;
                    if(i > 0) up = nums[i][j] + dp[i-1][j];
                    if(j > 0) left = nums[i][j] + dp[i][j-1];
                    dp[i][j] = min(up, left);
                }
            }
            return dp[n-1][m-1];
        }
    };
    
    int main() {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> nums(n, vector<int>(m));
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                cin >> nums[i][j];
            }
        }
        
        Solution2 obj;
        cout << obj.minPathSum(nums);
        return 0;
    }`,
      "javacode": `import java.util.*;
    
    public class MinPathSum {
        // Top-Down Memoization
        private int dpcheck(int i, int j, int[][] grid, int[][] dp) {
            if(i == 0 && j == 0) return grid[i][j];
            if(dp[i][j] != -1) return dp[i][j];
            
            int up = Integer.MAX_VALUE, left = Integer.MAX_VALUE;
            if(i > 0) up = grid[i][j] + dpcheck(i-1, j, grid, dp);
            if(j > 0) left = grid[i][j] + dpcheck(i, j-1, grid, dp);
            
            return dp[i][j] = Math.min(up, left);
        }
        
        public int minPathSumTopDown(int[][] grid) {
            int n = grid.length, m = grid[0].length;
            int[][] dp = new int[n][m];
            for(int[] row : dp) Arrays.fill(row, -1);
            return dpcheck(n-1, m-1, grid, dp);
        }
        
        // Bottom-Up Memoization
        private int dpsolve(int i, int j, int n, int m, int[][] grid, int[][] dp) {
            if(i == n-1 && j == m-1) return grid[i][j];
            if(dp[i][j] != -1) return dp[i][j];
            
            int right = Integer.MAX_VALUE, down = Integer.MAX_VALUE;
            if(i < n-1) right = grid[i][j] + dpsolve(i+1, j, n, m, grid, dp);
            if(j < m-1) down = grid[i][j] + dpsolve(i, j+1, n, m, grid, dp);
            
            return dp[i][j] = Math.min(right, down);
        }
        
        public int minPathSumBottomUp(int[][] grid) {
            int n = grid.length, m = grid[0].length;
            int[][] dp = new int[n][m];
            for(int[] row : dp) Arrays.fill(row, -1);
            return dpsolve(0, 0, n, m, grid, dp);
        }
        
        // Tabulation
        public int minPathSumTabulation(int[][] grid) {
            int n = grid.length, m = grid[0].length;
            int[][] dp = new int[n][m];
            
            dp[0][0] = grid[0][0];
            
            for(int i = 0; i < n; i++) {
                for(int j = 0; j < m; j++) {
                    if(i == 0 && j == 0) continue;
                    int up = Integer.MAX_VALUE, left = Integer.MAX_VALUE;
                    if(i > 0) up = grid[i][j] + dp[i-1][j];
                    if(j > 0) left = grid[i][j] + dp[i][j-1];
                    dp[i][j] = Math.min(up, left);
                }
            }
            return dp[n-1][m-1];
        }
    }`,
      "pythoncode": `class Solution:
        def minPathSumTopDown(self, grid: List[List[int]]) -> int:
            n, m = len(grid), len(grid[0])
            memo = [[-1 for _ in range(m)] for _ in range(n)]
            
            def dp(i, j):
                if i == 0 and j == 0:
                    return grid[i][j]
                if memo[i][j] != -1:
                    return memo[i][j]
                
                up = float('inf')
                left = float('inf')
                if i > 0:
                    up = grid[i][j] + dp(i-1, j)
                if j > 0:
                    left = grid[i][j] + dp(i, j-1)
                
                memo[i][j] = min(up, left)
                return memo[i][j]
                
            return dp(n-1, m-1)
        
        def minPathSumBottomUp(self, grid: List[List[int]]) -> int:
            n, m = len(grid), len(grid[0])
            memo = [[-1 for _ in range(m)] for _ in range(n)]
            
            def dp(i, j):
                if i == n-1 and j == m-1:
                    return grid[i][j]
                if memo[i][j] != -1:
                    return memo[i][j]
                
                right = float('inf')
                down = float('inf')
                if i < n-1:
                    right = grid[i][j] + dp(i+1, j)
                if j < m-1:
                    down = grid[i][j] + dp(i, j+1)
                
                memo[i][j] = min(right, down)
                return memo[i][j]
                
            return dp(0, 0)
        
        def minPathSumTabulation(self, grid: List[List[int]]) -> int:
            n, m = len(grid), len(grid[0])
            dp = [[0 for _ in range(m)] for _ in range(n)]
            
            dp[0][0] = grid[0][0]
            
            for i in range(n):
                for j in range(m):
                    if i == 0 and j == 0:
                        continue
                    up = dp[i-1][j] if i > 0 else float('inf')
                    left = dp[i][j-1] if j > 0 else float('inf')
                    dp[i][j] = grid[i][j] + min(up, left)
                    
            return dp[-1][-1]`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "recursion": "Time: O(2^(m+n)), Space: O(m+n)",
        "memoization": "Time: O(m*n), Space: O(m*n)",
        "tabulation": "Time: O(m*n), Space: O(m*n)"
      },
      "link": "https://leetcode.com/problems/minimum-path-sum/",
      "notes": [
        "This is a classic dynamic programming problem with grid traversal",
        "All numbers in the grid are non-negative",
        "The first cell (0,0) and last cell (m-1,n-1) contain regular values",
        "Space can be optimized to O(n) using 1D array for tabulation approach",
        "Similar to the unique paths problem but with path sum minimization"
      ]
    },



    {
      "title": "Triangle Minimum Path Sum Problem",
      "description": "Finds the path from the top to the bottom of a triangle-shaped grid that minimizes the sum of numbers along its path, where movement is only allowed to adjacent numbers in the row below, using both memoization and tabulation approaches.",
      "approach": [
        "Problem Understanding:",
        "- Given a triangle-shaped grid (each row has one more element than the previous)",
        "- Movement allowed only to adjacent numbers in the row below (down or diagonal right)",
        "- Find the path with minimum sum from top (0,0) to bottom row",
        "",
        "Top-Down Memoization:",
        "- Recursive approach starting from top",
        "- Base case: Return value when reaching bottom row",
        "- Memoize results to avoid recomputation",
        "- For each cell, return the minimum of down and diagonal paths plus current cell value",
        "",
        "Bottom-Up Tabulation:",
        "- Iterative approach starting from bottom row",
        "- Initialize DP table with bottom row values",
        "- Fill table from bottom-up",
        "- For each cell, compute minimum path sum from adjacent cells in row below plus current value"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Minimum path sum to (i,j) depends on (i+1,j) and (i+1,j+1)",
        "Overlapping Subproblems: Same subproblems solved multiple times",
        "Memoization: Used in top-down approach",
        "Tabulation: Used in bottom-up approach",
        "State Representation: Current position (i,j) in triangle and triangle values",
        "Movement Constraints: Only down or diagonal right moves allowed"
      ],
      "complexityDetails": {
        "time": {
          "recursion": "O(2^n) - Exponential due to recursion tree",
          "memoization": "O(n^2) - Each cell computed once",
          "tabulation": "O(n^2) - Each cell computed once"
        },
        "space": {
          "recursion": "O(n) - Recursion stack depth",
          "memoization": "O(n^2) - DP table storage",
          "tabulation": "O(n^2) - DP table storage (can be optimized to O(n))"
        },
        "explanation": "The DP approaches efficiently compute minimum path sums by storing intermediate results, reducing time complexity from exponential to polynomial."
      },
      "cppcode": `#include <bits/stdc++.h>
    using namespace std;
    
    class Solution {
    private:
        int dpcheck(int i, int j, int n, vector<vector<int>> &nums, vector<vector<int>>& dp) {
            if(i == n-1) return nums[i][j];
            if(dp[i][j] != -1) return dp[i][j];
    
            int down = nums[i][j] + dpcheck(i+1, j, n, nums, dp);
            int diagonal = nums[i][j] + dpcheck(i+1, j+1, n, nums, dp);
    
            return dp[i][j] = min(down, diagonal);  
        }
    public:
        int minimumTotal(vector<vector<int>>& nums) {
            int n = nums.size(); 
            vector<vector<int>> dp(n, vector<int>(n, -1));
            return dpcheck(0, 0, n, nums, dp);
        }
    };
    
    class Solution1 {
    public:
        int minimumTotal(vector<vector<int>>& nums) {
            int n = nums.size(); 
            vector<vector<int>> dp(n, vector<int>(n, 0));
    
            // Initialize bottom row
            for(int j = 0; j < n; j++) {
                dp[n-1][j] = nums[n-1][j];
            }
    
            // Fill from bottom-up
            for(int i = n-2; i >= 0; i--) {
                for(int j = 0; j <= i; j++) {
                    int down = nums[i][j] + dp[i+1][j];
                    int diagonal = nums[i][j] + dp[i+1][j+1];
                    dp[i][j] = min(down, diagonal);
                }
            }
            return dp[0][0];
        }
    };
    
    int main() {
        int n;
        cin >> n;
        vector<vector<int>> nums(n);
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j <= i; j++) {
                int x;
                cin >> x;
                nums[i].push_back(x);
            }
        }
        
        Solution1 obj;
        cout << obj.minimumTotal(nums);
        return 0;
    }`,
      "javacode": `import java.util.*;
    
    public class TriangleMinPath {
        // Top-Down Memoization
        private int dpcheck(int i, int j, int n, int[][] triangle, int[][] dp) {
            if(i == n-1) return triangle[i][j];
            if(dp[i][j] != -1) return dp[i][j];
            
            int down = triangle[i][j] + dpcheck(i+1, j, n, triangle, dp);
            int diagonal = triangle[i][j] + dpcheck(i+1, j+1, n, triangle, dp);
            
            return dp[i][j] = Math.min(down, diagonal);
        }
        
        public int minimumTotalTopDown(List<List<Integer>> triangle) {
            int n = triangle.size();
            int[][] nums = new int[n][n];
            for(int i = 0; i < n; i++) {
                for(int j = 0; j <= i; j++) {
                    nums[i][j] = triangle.get(i).get(j);
                }
            }
            
            int[][] dp = new int[n][n];
            for(int[] row : dp) Arrays.fill(row, -1);
            return dpcheck(0, 0, n, nums, dp);
        }
        
        // Bottom-Up Tabulation
        public int minimumTotalBottomUp(List<List<Integer>> triangle) {
            int n = triangle.size();
            int[][] dp = new int[n][n];
            
            // Initialize bottom row
            for(int j = 0; j < n; j++) {
                dp[n-1][j] = triangle.get(n-1).get(j);
            }
            
            // Fill from bottom-up
            for(int i = n-2; i >= 0; i--) {
                for(int j = 0; j <= i; j++) {
                    int down = triangle.get(i).get(j) + dp[i+1][j];
                    int diagonal = triangle.get(i).get(j) + dp[i+1][j+1];
                    dp[i][j] = Math.min(down, diagonal);
                }
            }
            return dp[0][0];
        }
    }`,
      "pythoncode": `class Solution:
        def minimumTotalTopDown(self, triangle: List[List[int]]) -> int:
            n = len(triangle)
            memo = [[-1 for _ in range(n)] for _ in range(n)]
            
            def dp(i, j):
                if i == n-1:
                    return triangle[i][j]
                if memo[i][j] != -1:
                    return memo[i][j]
                
                down = triangle[i][j] + dp(i+1, j)
                diagonal = triangle[i][j] + dp(i+1, j+1)
                
                memo[i][j] = min(down, diagonal)
                return memo[i][j]
                
            return dp(0, 0)
        
        def minimumTotalBottomUp(self, triangle: List[List[int]]) -> int:
            n = len(triangle)
            dp = [[0 for _ in range(n)] for _ in range(n)]
            
            # Initialize bottom row
            for j in range(n):
                dp[n-1][j] = triangle[n-1][j]
            
            # Fill from bottom-up
            for i in range(n-2, -1, -1):
                for j in range(i+1):
                    down = triangle[i][j] + dp[i+1][j]
                    diagonal = triangle[i][j] + dp[i+1][j+1]
                    dp[i][j] = min(down, diagonal)
            
            return dp[0][0]`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "recursion": "Time: O(2^n), Space: O(n)",
        "memoization": "Time: O(n^2), Space: O(n^2)",
        "tabulation": "Time: O(n^2), Space: O(n^2)"
      },
      "link": "https://leetcode.com/problems/triangle/",
      "notes": [
        "This is a classic dynamic programming problem with triangle-shaped grid",
        "All numbers in the triangle are integers (positive, zero, or negative)",
        "The top cell (0,0) and bottom row contain regular values",
        "Space can be optimized to O(n) using 1D array for tabulation approach",
        "The bottom-up approach is often more intuitive for this problem",
        "Note that the triangle has n rows and the ith row has (i+1) elements"
      ]
    },


    {
      "title": "Maximum Moves in Grid Problem",
      "description": "Finds the maximum number of moves that can be made starting from any cell in the first column of a grid, moving to adjacent cells with higher values in the next column.",
      "approach": [
        "Problem Understanding:",
        "- Given a grid of size n x m with integer values",
        "- Movement allowed only to adjacent cells in the next column (right, diagonal up-right, or diagonal down-right)",
        "- Can only move to cells with higher values",
        "- Find maximum moves starting from any cell in first column",
        "",
        "Top-Down Memoization:",
        "- Recursive approach with memoization",
        "- Base case: Return 0 when reaching last column",
        "- For each cell, explore all valid moves to next column",
        "- Memoize results to avoid recomputation",
        "- Return maximum moves from current position"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Maximum moves from (i,j) depends on valid moves from adjacent cells in next column",
        "Overlapping Subproblems: Same subproblems solved multiple times",
        "Memoization: Used to store computed results",
        "State Representation: Current position (i,j) in grid and grid values",
        "Movement Constraints: Only rightward moves to higher values allowed"
      ],
      "complexityDetails": {
        "time": {
          "recursion": "O(3^(n*m)) - Exponential without memoization",
          "memoization": "O(n*m) - Each cell computed once"
        },
        "space": {
          "recursion": "O(m) - Recursion stack depth (column-wise)",
          "memoization": "O(n*m) - DP table storage"
        },
        "explanation": "The DP approach with memoization efficiently computes maximum moves by storing intermediate results, reducing time complexity from exponential to polynomial."
      },
      "cppcode": `#include<bits/stdc++.h>
    using namespace std;
    
    class Solution {
    private:
        int dpcheck(int i, int j, int n, int m, vector<vector<int>>& nums, vector<vector<int>>& dp) {                       
            if(j == m-1) return 0;
            if(dp[i][j] != -1) return dp[i][j];
            
            int right = 0, dgdown = 0, dgup = 0;
    
            // Check diagonal down-right move
            if(j+1 < m && i+1 < n && nums[i+1][j+1] > nums[i][j]) {
                right = 1 + dpcheck(i+1, j+1, n, m, nums, dp);
            }
            // Check diagonal up-right move
            if(i > 0 && j+1 < m && nums[i-1][j+1] > nums[i][j]) {
                dgup = 1 + dpcheck(i-1, j+1, n, m, nums, dp);
            }
            // Check right move
            if(j+1 < m && nums[i][j+1] > nums[i][j]) {
                dgdown = 1 + dpcheck(i, j+1, n, m, nums, dp);
            }
            
            return dp[i][j] = max({right, dgup, dgdown});
        }
        
    public:
        int maxMoves(vector<vector<int>>& nums) {
            int n = nums.size();
            int m = nums[0].size(); 
            vector<vector<int>> dp(n, vector<int>(m, -1));
            int ans = 0;
            
            for(int i = 0; i < n; i++) {
                ans = max(ans, dpcheck(i, 0, n, m, nums, dp));
            }
            return ans;
        }
    };
    
    int main() {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> nums(n, vector<int>(m));
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                cin >> nums[i][j];
            }
        }
        
        Solution obj;
        cout << obj.maxMoves(nums);
        return 0;
    }`,
      "javacode": `import java.util.*;
    
    public class MaxMovesInGrid {
        private int dpcheck(int i, int j, int n, int m, int[][] grid, int[][] dp) {
            if(j == m-1) return 0;
            if(dp[i][j] != -1) return dp[i][j];
            
            int right = 0, dgdown = 0, dgup = 0;
    
            // Check diagonal down-right move
            if(j+1 < m && i+1 < n && grid[i+1][j+1] > grid[i][j]) {
                right = 1 + dpcheck(i+1, j+1, n, m, grid, dp);
            }
            // Check diagonal up-right move
            if(i > 0 && j+1 < m && grid[i-1][j+1] > grid[i][j]) {
                dgup = 1 + dpcheck(i-1, j+1, n, m, grid, dp);
            }
            // Check right move
            if(j+1 < m && grid[i][j+1] > grid[i][j]) {
                dgdown = 1 + dpcheck(i, j+1, n, m, grid, dp);
            }
            
            return dp[i][j] = Math.max(right, Math.max(dgup, dgdown));
        }
        
        public int maxMoves(int[][] grid) {
            int n = grid.length;
            int m = grid[0].length;
            int[][] dp = new int[n][m];
            for(int[] row : dp) Arrays.fill(row, -1);
            int ans = 0;
            
            for(int i = 0; i < n; i++) {
                ans = Math.max(ans, dpcheck(i, 0, n, m, grid, dp));
            }
            return ans;
        }
    }`,
      "pythoncode": `class Solution:
        def maxMoves(self, grid: List[List[int]]) -> int:
            n = len(grid)
            m = len(grid[0])
            memo = [[-1 for _ in range(m)] for _ in range(n)]
            
            def dp(i, j):
                if j == m-1:
                    return 0
                if memo[i][j] != -1:
                    return memo[i][j]
                    
                right = dgdown = dgup = 0
                
                # Check diagonal down-right move
                if j+1 < m and i+1 < n and grid[i+1][j+1] > grid[i][j]:
                    right = 1 + dp(i+1, j+1)
                # Check diagonal up-right move
                if i > 0 and j+1 < m and grid[i-1][j+1] > grid[i][j]:
                    dgup = 1 + dp(i-1, j+1)
                # Check right move
                if j+1 < m and grid[i][j+1] > grid[i][j]:
                    dgdown = 1 + dp(i, j+1)
                    
                memo[i][j] = max(right, dgup, dgdown)
                return memo[i][j]
            
            max_moves = 0
            for i in range(n):
                max_moves = max(max_moves, dp(i, 0))
            return max_moves`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "recursion": "Time: O(3^(n*m)), Space: O(m)",
        "memoization": "Time: O(n*m), Space: O(n*m)"
      },
      "link": "https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/",
      "notes": [
        "This problem involves grid traversal with movement constraints",
        "All values in the grid are integers",
        "The solution must start from any cell in the first column",
        "The movement is strictly column-wise to the right",
        "Only moves to cells with higher values are allowed",
        "The solution uses dynamic programming with memoization for efficiency"
      ]
    },



    {
      "title": "Minimum Falling Path Sum with Non-Zero Shifts",
      "description": "Finds the minimum sum of a falling path through a grid where no two consecutive elements in the path are in the same column.",
      "approach": [
        "Problem Understanding:",
        "- Given an n x n grid of integers",
        "- A falling path must contain exactly one element from each row",
        "- No two consecutive elements can be in the same column (non-zero shifts)",
        "- Find the path with minimum sum from top to bottom",
        "",
        "Dynamic Programming Solution:",
        "- Use a DP table where dp[i][j] represents the minimum sum to reach cell (i,j)",
        "- Initialize first row with grid values",
        "- For each subsequent row, compute minimum sum from previous row's non-conflicting columns",
        "- Final answer is the minimum value in the last row"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Minimum path to (i,j) depends on previous row's minimum (excluding same column)",
        "State Representation: Current row and column position",
        "Non-adjacent Column Constraint: Cannot select same column in consecutive rows",
        "Tabulation: Bottom-up DP approach filling the table row by row"
      ],
      "complexityDetails": {
        "time": "O(n³) - Three nested loops (rows × columns × previous row columns)",
        "space": "O(n²) - DP table storage",
        "explanation": "The cubic time complexity comes from checking all possible valid transitions from previous row for each cell."
      },
      "cppcode": `#include<bits/stdc++.h>
    using namespace std;
    
    class Solution {
    public:
        int minFallingPathSum(vector<vector<int>>& grid) {
            int n = grid.size();
            vector<vector<int>> dp(n, vector<int>(n, -1));
            
            // Initialize first row
            for(int i = 0; i < n; i++) {
                dp[0][i] = grid[0][i];
            }
            
            // Fill DP table
            for(int i = 1; i < n; i++) {
                for(int j = 0; j < n; j++) {
                    int mn = INT_MAX;
                    // Check all columns in previous row except current column
                    for(int k = 0; k < n; k++) {
                        if(k != j) {
                            mn = min(mn, grid[i][j] + dp[i-1][k]);
                        }
                    }
                    dp[i][j] = mn;
                }
            }
            
            // Find minimum in last row
            int ans = INT_MAX;
            for(int i = 0; i < n; i++) {
                ans = min(ans, dp[n-1][i]);
            }
            return ans;
        }
    };
    
    int main() {
        int n;
        cin >> n;
        vector<vector<int>> grid(n, vector<int>(n));
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                cin >> grid[i][j];
            }
        }
        
        Solution obj;
        cout << obj.minFallingPathSum(grid);
        return 0;
    }`,
      "optimizedApproach": {
        "description": "An optimized O(n²) solution exists by tracking the two smallest values from the previous row to avoid the inner loop.",
        "implementation": `int minFallingPathSum(vector<vector<int>>& grid) {
            int n = grid.size();
            
            for(int i = 1; i < n; i++) {
                // Find two smallest values from previous row
                auto two_min = getTwoMins(grid[i-1]);
                for(int j = 0; j < n; j++) {
                    grid[i][j] += (grid[i-1][j] == two_min[0] ? two_min[1] : two_min[0]);
                }
            }
            return *min_element(grid[n-1].begin(), grid[n-1].end());
        }`
      },
      "javacode": `import java.util.*;
    
    public class Solution {
        public int minFallingPathSum(int[][] grid) {
            int n = grid.length;
            int[][] dp = new int[n][n];
            
            // Initialize first row
            for(int i = 0; i < n; i++) {
                dp[0][i] = grid[0][i];
            }
            
            // Fill DP table
            for(int i = 1; i < n; i++) {
                for(int j = 0; j < n; j++) {
                    int min = Integer.MAX_VALUE;
                    for(int k = 0; k < n; k++) {
                        if(k != j) {
                            min = Math.min(min, grid[i][j] + dp[i-1][k]);
                        }
                    }
                    dp[i][j] = min;
                }
            }
            
            // Find minimum in last row
            int ans = Integer.MAX_VALUE;
            for(int num : dp[n-1]) {
                ans = Math.min(ans, num);
            }
            return ans;
        }
    }`,
      "pythoncode": `class Solution:
        def minFallingPathSum(self, grid: List[List[int]]) -> int:
            n = len(grid)
            dp = [[0]*n for _ in range(n)]
            
            # Initialize first row
            for i in range(n):
                dp[0][i] = grid[0][i]
            
            # Fill DP table
            for i in range(1, n):
                for j in range(n):
                    min_val = float('inf')
                    # Check all columns in previous row except current column
                    for k in range(n):
                        if k != j:
                            min_val = min(min_val, grid[i][j] + dp[i-1][k])
                    dp[i][j] = min_val
            
            return min(dp[-1])`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "time": "O(n³) for basic solution, O(n²) for optimized",
        "space": "O(n²) for DP table, O(1) for optimized if modifying input"
      },
      "link": "https://leetcode.com/problems/minimum-falling-path-sum-ii/",
      "notes": [
        "The problem is a variation of the classic falling path sum problem",
        "The non-zero shift constraint adds complexity to the solution",
        "For large grids (n > 100), the O(n³) solution may be too slow",
        "The optimized solution using two minimum values is recommended for production use",
        "The grid is guaranteed to be square (n x n) according to problem constraints"
      ]
    },




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
        {/* Time Complexity */}
        <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-blue-900/30 border border-blue-800' : 'bg-blue-100'}`}>
          <div className={`text-xs font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>TIME COMPLEXITY</div>
          <div className="space-y-1">
            <div className={`font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>
              Recursion: {example.complexityDetails.time.recursion}
            </div>
            <div className={`font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>
              Memoization: {example.complexityDetails.time.memoization}
            </div>
          </div>
        </div>

        {/* Space Complexity */}
        <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-100'}`}>
          <div className={`text-xs font-semibold ${darkMode ? 'text-green-300' : 'text-green-600'}`}>SPACE COMPLEXITY</div>
          <div className="space-y-1">
            <div className={`font-bold ${darkMode ? 'text-green-100' : 'text-green-800'}`}>
              Recursion: {example.complexityDetails.space.recursion}
            </div>
            <div className={`font-bold ${darkMode ? 'text-green-100' : 'text-green-800'}`}>
              Memoization: {example.complexityDetails.space.memoization}
            </div>
          </div>
        </div>
      </div>
      
      {/* Explanation */}
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

export default Dynamic2;