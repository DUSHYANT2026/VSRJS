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

function Dynamic3() {
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
      "title": "Subset Sum Problem with Dynamic Programming",
      "description": "Determines whether a subset of the given numbers sums up to the target sum, using both memoization (top-down) and tabulation (bottom-up) approaches.",
      "approach": [
        "Problem Understanding:",
        "- Given an array of numbers and a target sum",
        "- Check if any subset of the numbers adds up to exactly the target sum",
        "",
        "Memoization (Top-Down):",
        "- Base case 1: If sum becomes 0, return true",
        "- Base case 2: If we're at first element, check if it equals remaining sum",
        "- Recursive case: For each element, try including or excluding it",
        "- Store results in DP table to avoid redundant calculations",
        "",
        "Tabulation (Bottom-Up):",
        "- Initialize DP table with base cases",
        "- Fill table iteratively considering inclusion/exclusion of each element",
        "- Final result found in last cell of DP table"
      ],
      "algorithmCharacteristics": [
        "Optimal Substructure: Yes (solution depends on subproblems)",
        "Overlapping Subproblems: Yes (same subproblems solved multiple times)",
        "Memoization: Used to store intermediate results in top-down approach",
        "Tabulation: Builds solution iteratively in bottom-up approach",
        "State Representation: Current index and remaining sum"
      ],
      "complexityDetails": {
        "time": {
          "memoization": "O(n*sum) - Each state computed once",
          "tabulation": "O(n*sum) - Filling n*sum table cells"
        },
        "space": {
          "memoization": "O(n*sum) - DP table storage",
          "tabulation": "O(n*sum) - DP table storage"
        },
        "explanation": "Both approaches have the same time and space complexity, but tabulation often has better constant factors due to iterative nature."
      },
      "cppcode": `#include <bits/stdc++.h>
using namespace std;

class Solution1 { 
private:
    bool dpcheck(int index, vector<int> &nums, int sum, vector<vector<int>> &dp) {                     //  using memoization top-down  
        if(sum == 0) return true;
        if(index == 0) return sum == nums[0];
        
        if(dp[index][sum] != -1) return dp[index][sum];
        
        bool notcount = dpcheck(index-1, nums, sum, dp);
        
        bool count = false;
        if(sum >= nums[index])
            count = dpcheck(index-1, nums, sum-nums[index], dp);
        
        return dp[index][sum] = count || notcount;
    }
public:
    bool isSubsetSum(vector<int> nums, int sum) {
        int n = nums.size();
        vector<vector<int>> dp(n, vector<int>(sum+1, -1));
        return dpcheck(n-1, nums, sum, dp);
    }
};

class Solution2 {                                                                 //  using tabulation bottom up
public:
    bool isSubsetSum(vector<int> nums, int sum) {
        int n = nums.size();
        vector<vector<bool>> dp(n, vector<bool>(sum+1, false));
        
        for(int i=0; i<n; i++) {
            dp[i][0] = true;
        }
        if(nums[0] <= sum) dp[0][nums[0]] = true;
        
        for(int i=1; i<n; i++) {
            for(int j=1; j<=sum; j++) {
                bool notcount = dp[i-1][j];
                bool count = false;
                
                if(nums[i] <= j) {
                    count = dp[i-1][j-nums[i]];
                }
                dp[i][j] = count || notcount;
            }
        }
        return dp[n-1][sum];
    }
};

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        int sum;
        cin >> sum;
        cin.ignore();

        Solution2 ob;
        if (ob.isSubsetSum(arr, sum))
            cout << "true" << endl;
        else
            cout << "false" << endl;
    }
    return 0;
}`,
      "javacode": `import java.util.*;
import java.io.*;

public class SubsetSum {
    // Memoization approach (Solution1)
    private boolean dpcheck(int index, int[] nums, int sum, int[][] dp) {
        if(sum == 0) return true;
        if(index == 0) return sum == nums[0];
        
        if(dp[index][sum] != -1) return dp[index][sum] == 1;
        
        boolean notcount = dpcheck(index-1, nums, sum, dp);
        boolean count = false;
        if(sum >= nums[index])
            count = dpcheck(index-1, nums, sum-nums[index], dp);
        
        dp[index][sum] = (count || notcount) ? 1 : 0;
        return dp[index][sum] == 1;
    }
    
    public boolean isSubsetSum1(int[] nums, int sum) {
        int n = nums.length;
        int[][] dp = new int[n][sum+1];
        for(int[] row : dp) Arrays.fill(row, -1);
        return dpcheck(n-1, nums, sum, dp);
    }
    
    // Tabulation approach (Solution2)
    public boolean isSubsetSum2(int[] nums, int sum) {
        int n = nums.length;
        boolean[][] dp = new boolean[n][sum+1];
        
        for(int i=0; i<n; i++) dp[i][0] = true;
        if(nums[0] <= sum) dp[0][nums[0]] = true;
        
        for(int i=1; i<n; i++) {
            for(int j=1; j<=sum; j++) {
                boolean notcount = dp[i-1][j];
                boolean count = false;
                if(nums[i] <= j) {
                    count = dp[i-1][j-nums[i]];
                }
                dp[i][j] = count || notcount;
            }
        }
        return dp[n-1][sum];
    }
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while(t-- > 0) {
            String[] input = br.readLine().split(" ");
            int[] nums = new int[input.length];
            for(int i=0; i<input.length; i++) {
                nums[i] = Integer.parseInt(input[i]);
            }
            int sum = Integer.parseInt(br.readLine());
            
            SubsetSum obj = new SubsetSum();
            System.out.println(obj.isSubsetSum2(nums, sum) ? "true" : "false");
        }
    }
}`,
      "pythoncode": `class Solution1:
    def dpcheck(self, index, nums, sum, dp):
        if sum == 0:
            return True
        if index == 0:
            return sum == nums[0]
        
        if dp[index][sum] != -1:
            return dp[index][sum] == 1
        
        notcount = self.dpcheck(index-1, nums, sum, dp)
        count = False
        if sum >= nums[index]:
            count = self.dpcheck(index-1, nums, sum - nums[index], dp)
        
        dp[index][sum] = 1 if (count or notcount) else 0
        return dp[index][sum] == 1
    
    def isSubsetSum(self, nums, sum):
        n = len(nums)
        dp = [[-1 for _ in range(sum+1)] for _ in range(n)]
        return self.dpcheck(n-1, nums, sum, dp)

class Solution2:
    def isSubsetSum(self, nums, sum):
        n = len(nums)
        dp = [[False for _ in range(sum+1)] for _ in range(n)]
        
        for i in range(n):
            dp[i][0] = True
        if nums[0] <= sum:
            dp[0][nums[0]] = True
        
        for i in range(1, n):
            for j in range(1, sum+1):
                notcount = dp[i-1][j]
                count = False
                if nums[i] <= j:
                    count = dp[i-1][j - nums[i]]
                dp[i][j] = count or notcount
        return dp[n-1][sum]

if __name__ == "__main__":
    import sys
    input = sys.stdin.read
    data = input().split()
    
    idx = 0
    t = int(data[idx])
    idx += 1
    
    for _ in range(t):
        nums = []
        while idx < len(data) and not data[idx].isdigit():
            idx += 1
        while idx < len(data) and data[idx].isdigit():
            nums.append(int(data[idx]))
            idx += 1
        sum = int(data[idx])
        idx += 1
        
        obj = Solution2()
        print("true" if obj.isSubsetSum(nums, sum) else "false")`,
      "language": "cpp",
      "javaLanguage": "java",
      "pythonlanguage": "python",
      "complexity": {
        "memoization": "Time: O(n*sum), Space: O(n*sum)",
        "tabulation": "Time: O(n*sum), Space: O(n*sum)"
      },
      "link": "https://www.geeksforgeeks.org/subset-sum-problem-dp-25/",
      "notes": [
        "The problem is a classic DP problem similar to the 0/1 knapsack",
        "Initial DP table is initialized with -1 for memoization approach",
        "Tabulation approach often preferred for better performance with large inputs",
        "Space optimization possible by using 1D array for DP table"
      ]
},




{
  "title": "Partition Equal Subset Sum Problem with Dynamic Programming",
  "description": "Determines whether an array can be partitioned into two subsets with equal sums using memoization approach.",
  "approach": [
      "Problem Understanding:",
      "- Given an array of numbers",
      "- Check if the array can be partitioned into two subsets with equal sums",
      "",
      "Memoization (Top-Down):",
      "- First check if total sum is even (odd sum cannot be partitioned equally)",
      "- Calculate target sum as half of total sum",
      "- Use subset sum approach to check if target sum can be achieved",
      "- Store results in DP table to avoid redundant calculations"
  ],
  "algorithmCharacteristics": [
      "Optimal Substructure: Yes (solution depends on subproblems)",
      "Overlapping Subproblems: Yes (same subproblems solved multiple times)",
      "Memoization: Used to store intermediate results",
      "State Representation: Current index and remaining sum"
  ],
  "complexityDetails": {
      "time": "O(n*sum) - Each state computed once where n is array size and sum is target sum",
      "space": "O(n*sum) - DP table storage",
      "explanation": "The approach efficiently checks partition possibility by leveraging subset sum problem solution with memoization."
  },
  "cppcode": `#include<bits/stdc++.h>
using namespace std;

class Solution {
private:
  bool dpcheck(vector<int>& nums, vector<vector<int>>& dp, int sum, int index) {                  //  Partition Equal Subset Sum
      if(sum == 0) return true; 
      if(index == 0) return sum == nums[index];

      if(dp[index][sum] != -1) return dp[index][sum];
      bool notcount = dpcheck(nums, dp, sum, index-1);
      bool count = false;
      if(nums[index] <= sum) {
          count = dpcheck(nums, dp, sum-nums[index], index-1);
      } 
      return dp[index][sum] = count || notcount;
  }
public:
  bool canPartition(vector<int>& nums) {
      int sum = 0;
      for(auto it : nums) sum += it;
      if(sum%2 != 0) return false;
      int newsum = sum/2;

      vector<vector<int>> dp(nums.size(), vector<int>(newsum+1, -1));
      return dpcheck(nums, dp, newsum, nums.size()-1);
  }
};

int main() {
  int n, x;
  cin >> n;
  vector<int> nums;
  for(int i = 0; i < n; i++) {
      cin >> x;
      nums.push_back(x);
  }    
  Solution s;
  cout << s.canPartition(nums);
  return 0;
}`,
  "javacode": `import java.util.*;

public class PartitionEqualSubsetSum {
  private boolean dpcheck(int[] nums, int[][] dp, int sum, int index) {
      if(sum == 0) return true;
      if(index == 0) return sum == nums[index];
      
      if(dp[index][sum] != -1) return dp[index][sum] == 1;
      
      boolean notcount = dpcheck(nums, dp, sum, index-1);
      boolean count = false;
      if(nums[index] <= sum) {
          count = dpcheck(nums, dp, sum-nums[index], index-1);
      }
      dp[index][sum] = (count || notcount) ? 1 : 0;
      return dp[index][sum] == 1;
  }
  
  public boolean canPartition(int[] nums) {
      int sum = 0;
      for(int num : nums) sum += num;
      if(sum % 2 != 0) return false;
      int newsum = sum / 2;
      
      int[][] dp = new int[nums.length][newsum+1];
      for(int[] row : dp) Arrays.fill(row, -1);
      return dpcheck(nums, dp, newsum, nums.length-1);
  }
  
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int[] nums = new int[n];
      for(int i = 0; i < n; i++) {
          nums[i] = sc.nextInt();
      }
      
      PartitionEqualSubsetSum obj = new PartitionEqualSubsetSum();
      System.out.println(obj.canPartition(nums));
  }
}`,
  "pythoncode": `class Solution:
  def dpcheck(self, nums, dp, sum, index):
      if sum == 0:
          return True
      if index == 0:
          return sum == nums[index]
      
      if dp[index][sum] != -1:
          return dp[index][sum] == 1
      
      notcount = self.dpcheck(nums, dp, sum, index-1)
      count = False
      if nums[index] <= sum:
          count = self.dpcheck(nums, dp, sum - nums[index], index-1)
      
      dp[index][sum] = 1 if (count or notcount) else 0
      return dp[index][sum] == 1
  
  def canPartition(self, nums):
      total_sum = sum(nums)
      if total_sum % 2 != 0:
          return False
      newsum = total_sum // 2
      
      dp = [[-1 for _ in range(newsum + 1)] for _ in range(len(nums))]
      return self.dpcheck(nums, dp, newsum, len(nums)-1)

if __name__ == "__main__":
  import sys
  n = int(sys.stdin.readline())
  nums = list(map(int, sys.stdin.readline().split()))
  s = Solution()
  print(s.canPartition(nums))`,
  "language": "cpp",
  "javaLanguage": "java",
  "pythonlanguage": "python",
  "complexity": {
      "time": "O(n*sum)",
      "space": "O(n*sum)"
  },
  "link": "https://leetcode.com/problems/partition-equal-subset-sum/",
  "notes": [
      "The problem reduces to finding a subset that sums to half of total sum",
      "Initial check for odd total sum immediately returns false",
      "Memoization approach efficiently handles medium-sized inputs",
      "For large sums, consider space-optimized version using 1D DP array"
  ]
},




{
  "title": "Minimum Subset Sum Difference Problem with Dynamic Programming",
  "description": "Finds the minimum absolute difference between sums of two subsets of an array using tabulation approach.",
  "approach": [
      "Problem Understanding:",
      "- Given an array of numbers",
      "- Partition the array into two subsets such that the absolute difference between their sums is minimized",
      "",
      "Tabulation (Bottom-Up):",
      "- Calculate total sum of all elements",
      "- Create DP table to track achievable sums up to half of total sum",
      "- Fill DP table using subset sum logic",
      "- Find the minimum difference by checking all possible sums up to half of total sum"
  ],
  "algorithmCharacteristics": [
      "Optimal Substructure: Yes (solution builds upon subset sum solutions)",
      "Overlapping Subproblems: Yes (same subproblems solved multiple times)",
      "Tabulation: Builds solution iteratively in bottom-up approach",
      "State Representation: Current index and achievable sum"
  ],
  "complexityDetails": {
      "time": "O(n*sum) - Filling n*sum table cells where n is array size and sum is total sum",
      "space": "O(n*sum) - DP table storage",
      "explanation": "The approach efficiently finds the minimum difference by leveraging subset sum problem solution with tabulation."
  },
  "cppcode": `#include<bits/stdc++.h>
using namespace std;

int minSubsetSumDifference(vector<int>& nums, int n) {
  int sum = 0;
  for(auto it : nums) sum += it;

  vector<vector<bool>> dp(n, vector<bool>(sum+1, false));

  for(int i=0; i<n; i++) dp[i][0] = true;

  if(nums[0] <= sum) dp[0][nums[0]] = true;
  
  for(int i=1; i<n; i++) {
      for(int j=1; j<=sum; j++) {
          bool notcount = dp[i-1][j];
          bool count = false;
          
          if(nums[i] <= j) {
              count = dp[i-1][j-nums[i]];
          }
          dp[i][j] = count || notcount;
      }
  }

  int ans = INT_MAX;
  for(int i=0; i<=sum/2; i++) {
      if(dp[n-1][i] == true) {
          ans = min(ans, abs((sum-i)-i));
      }
  }
  return ans;
}

int main() {
  int n, x;
  cin >> n;
  vector<int> nums;
  for(int i=0; i<n; i++) {
      cin >> x;
      nums.push_back(x);
  }    
  cout << minSubsetSumDifference(nums, n);
  return 0;
}`,
  "javacode": `import java.util.*;

public class MinimumSubsetSumDifference {
  public static int minSubsetSumDifference(int[] nums, int n) {
      int sum = 0;
      for(int num : nums) sum += num;

      boolean[][] dp = new boolean[n][sum+1];

      for(int i=0; i<n; i++) dp[i][0] = true;

      if(nums[0] <= sum) dp[0][nums[0]] = true;
      
      for(int i=1; i<n; i++) {
          for(int j=1; j<=sum; j++) {
              boolean notcount = dp[i-1][j];
              boolean count = false;
              
              if(nums[i] <= j) {
                  count = dp[i-1][j-nums[i]];
              }
              dp[i][j] = count || notcount;
          }
      }

      int ans = Integer.MAX_VALUE;
      for(int i=0; i<=sum/2; i++) {
          if(dp[n-1][i]) {
              ans = Math.min(ans, Math.abs((sum-i)-i));
          }
      }
      return ans;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int[] nums = new int[n];
      for(int i=0; i<n; i++) {
          nums[i] = sc.nextInt();
      }
      
      System.out.println(minSubsetSumDifference(nums, n));
  }
}`,
  "pythoncode": `def minSubsetSumDifference(nums, n):
  total_sum = sum(nums)
  
  dp = [[False for _ in range(total_sum + 1)] for _ in range(n)]
  
  for i in range(n):
      dp[i][0] = True
  
  if nums[0] <= total_sum:
      dp[0][nums[0]] = True
  
  for i in range(1, n):
      for j in range(1, total_sum + 1):
          notcount = dp[i-1][j]
          count = False
          if nums[i] <= j:
              count = dp[i-1][j - nums[i]]
          dp[i][j] = count or notcount
  
  min_diff = float('inf')
  for i in range(total_sum // 2 + 1):
      if dp[n-1][i]:
          min_diff = min(min_diff, abs((total_sum - i) - i))
  return min_diff

if __name__ == "__main__":
  import sys
  n = int(sys.stdin.readline())
  nums = list(map(int, sys.stdin.readline().split()))
  print(minSubsetSumDifference(nums, n))`,
  "language": "cpp",
  "javaLanguage": "java",
  "pythonlanguage": "python",
  "complexity": {
      "time": "O(n*sum)",
      "space": "O(n*sum)"
  },
  "link": "https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/",
  "notes": [
      "The problem is a variation of the subset sum problem",
      "The DP table tracks all possible sums up to half of total sum",
      "The minimum difference is found by checking the largest sum achievable up to half of total sum",
      "Space optimization possible by using 1D array for DP table"
  ]
},



{
  "title": "Distinct Sum Problem with Dynamic Programming",
  "description": "Finds all possible distinct sums that can be formed by subsets of a given array using memoization approach.",
  "approach": [
      "Problem Understanding:",
      "- Given an array of numbers",
      "- Find all possible distinct sums that can be formed by any subset of the array",
      "",
      "Memoization (Top-Down):",
      "- Calculate total sum of all elements",
      "- Create DP table to track achievable sums",
      "- For each possible sum from 0 to total sum, check if it can be formed",
      "- Collect all achievable sums in a result vector"
  ],
  "algorithmCharacteristics": [
      "Optimal Substructure: Yes (solution depends on subset sum subproblems)",
      "Overlapping Subproblems: Yes (same subproblems solved multiple times)",
      "Memoization: Used to store intermediate results",
      "State Representation: Current index and target sum"
  ],
  "complexityDetails": {
      "time": "O(n*sum) - Where n is array size and sum is total sum of elements",
      "space": "O(n*sum) - DP table storage",
      "explanation": "The approach efficiently finds all possible sums by leveraging subset sum problem solution with memoization."
  },
  "cppcode": `#include<bits/stdc++.h>
using namespace std;

class Solution {
private:
  bool dpcheck(int index, vector<int> &nums, int sum, vector<vector<int>> &dp) {
      if(sum == 0) return true;
      if(index == 0) return sum == nums[0];
      
      if(dp[index][sum] != -1) return dp[index][sum];
      
      bool notcount = dpcheck(index-1, nums, sum, dp);
      bool count = false;
      if(sum >= nums[index])
          count = dpcheck(index-1, nums, sum-nums[index], dp);
      
      return dp[index][sum] = count || notcount;
  }
public:
  vector<int> DistinctSum(vector<int> nums) {
      int n = nums.size(); 
      int sum = 0;
      for(auto it : nums) sum += it;
      vector<vector<int>> dp(n, vector<int>(sum+1, -1));
      vector<int> ans;
  
      for(int i=0; i<=sum; i++) {
          if(dpcheck(n-1, nums, i, dp) == true) {
              ans.push_back(i);
          }
      }
      return ans;
  }
};

int main() {
  int tc;
  cin >> tc;
  while(tc--) {
      int n;
      cin >> n;
      vector<int> nums(n);
      for(int i = 0; i < n; i++) cin >> nums[i];
      Solution obj;
      vector<int> ans = obj.DistinctSum(nums);
      for(auto i: ans) cout << i << " ";
      cout << "\n~\n";
  }
  return 0;
}`,
  "javacode": `import java.util.*;

public class DistinctSum {
  private boolean dpcheck(int index, int[] nums, int sum, int[][] dp) {
      if(sum == 0) return true;
      if(index == 0) return sum == nums[0];
      
      if(dp[index][sum] != -1) return dp[index][sum] == 1;
      
      boolean notcount = dpcheck(index-1, nums, sum, dp);
      boolean count = false;
      if(sum >= nums[index])
          count = dpcheck(index-1, nums, sum-nums[index], dp);
      
      dp[index][sum] = (count || notcount) ? 1 : 0;
      return dp[index][sum] == 1;
  }
  
  public List<Integer> distinctSum(int[] nums) {
      int n = nums.length;
      int sum = 0;
      for(int num : nums) sum += num;
      int[][] dp = new int[n][sum+1];
      for(int[] row : dp) Arrays.fill(row, -1);
      List<Integer> ans = new ArrayList<>();
  
      for(int i=0; i<=sum; i++) {
          if(dpcheck(n-1, nums, i, dp)) {
              ans.add(i);
          }
      }
      return ans;
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int tc = sc.nextInt();
      while(tc-- > 0) {
          int n = sc.nextInt();
          int[] nums = new int[n];
          for(int i=0; i<n; i++) nums[i] = sc.nextInt();
          DistinctSum obj = new DistinctSum();
          List<Integer> ans = obj.distinctSum(nums);
          for(int i : ans) System.out.print(i + " ");
          System.out.println("\n~");
      }
  }
}`,
  "pythoncode": `class Solution:
  def dpcheck(self, index, nums, sum, dp):
      if sum == 0:
          return True
      if index == 0:
          return sum == nums[0]
      
      if dp[index][sum] != -1:
          return dp[index][sum] == 1
      
      notcount = self.dpcheck(index-1, nums, sum, dp)
      count = False
      if sum >= nums[index]:
          count = self.dpcheck(index-1, nums, sum - nums[index], dp)
      
      dp[index][sum] = 1 if (count or notcount) else 0
      return dp[index][sum] == 1
  
  def distinctSum(self, nums):
      n = len(nums)
      total_sum = sum(nums)
      dp = [[-1 for _ in range(total_sum + 1)] for _ in range(n)]
      ans = []
      
      for i in range(total_sum + 1):
          if self.dpcheck(n-1, nums, i, dp):
              ans.append(i)
      return ans

if __name__ == "__main__":
  import sys
  input = sys.stdin.read
  data = input().split()
  idx = 0
  tc = int(data[idx])
  idx += 1
  for _ in range(tc):
      n = int(data[idx])
      idx += 1
      nums = list(map(int, data[idx:idx+n]))
      idx += n
      obj = Solution()
      ans = obj.distinctSum(nums)
      print(' '.join(map(str, ans)) + '\n~')`,
  "language": "cpp",
  "javaLanguage": "java",
  "pythonlanguage": "python",
  "complexity": {
      "time": "O(n*sum)",
      "space": "O(n*sum)"
  },
  "link": "https://www.geeksforgeeks.org/find-distinct-subset-subsequence-sums-array/",
  "notes": [
      "The problem is a variation of the subset sum problem",
      "The DP table tracks all possible sums from 0 to total sum",
      "The solution collects all achievable sums in a result vector",
      "Space optimization possible by using 1D array for DP table"
  ]
},



{
  "title": "Perfect Sum Problem with Dynamic Programming",
  "description": "Counts the number of subsets that sum to a given target value using memoization approach.",
  "approach": [
      "Problem Understanding:",
      "- Given an array of numbers and a target sum",
      "- Count all subsets whose elements sum exactly to the target value",
      "",
      "Memoization (Top-Down):",
      "- Base cases handle empty subsets and single-element subsets",
      "- For each element, consider both including and excluding it",
      "- Sum the counts of valid subsets from both choices",
      "- Store results in DP table to avoid redundant calculations"
  ],
  "algorithmCharacteristics": [
      "Optimal Substructure: Yes (solution builds upon subset count subproblems)",
      "Overlapping Subproblems: Yes (same subproblems solved multiple times)",
      "Memoization: Used to store intermediate results",
      "State Representation: Current index and remaining sum"
  ],
  "complexityDetails": {
      "time": "O(n*sum) - Where n is array size and sum is target sum",
      "space": "O(n*sum) - DP table storage",
      "explanation": "The approach efficiently counts subsets by leveraging memoization to avoid recomputation."
  },
  "cppcode": `#include <bits/stdc++.h>
using namespace std;

class Solution {
private:
  int mod = 1e9+7;
  int dpcheck(int index, int nums[], vector<vector<int>> &dp, int k) {
      if(index == 0) {
          if(k == 0 && nums[0] == 0) return 2;
          if(k == 0 || nums[0] == k) return 1;
          return 0;
      }

      if(dp[index][k] != -1) return dp[index][k];
      int notcount = dpcheck(index-1, nums, dp, k);
      int count = 0;
      if(nums[index] <= k) {
          count = dpcheck(index-1, nums, dp, k-nums[index]);
      }
      return dp[index][k] = (count + notcount) % mod;
  }
  
public:
  int perfectSum(int arr[], int n, int sum) {
      vector<vector<int>> dp(n, vector<int> (sum+1, -1));
      return dpcheck(n-1, arr, dp, sum);
  }
};

int main() {
  int t;
  cin >> t;
  while (t--) {
      int n, sum;
      cin >> n >> sum;

      int a[n];
      for(int i = 0; i < n; i++)
          cin >> a[i];

      Solution ob;
      cout << ob.perfectSum(a, n, sum) << "\n~\n";
  }
  return 0;
}`,
  "javacode": `import java.util.*;

public class PerfectSum {
  private int mod = 1000000007;
  
  private int dpcheck(int index, int[] nums, int[][] dp, int k) {
      if(index == 0) {
          if(k == 0 && nums[0] == 0) return 2;
          if(k == 0 || nums[0] == k) return 1;
          return 0;
      }

      if(dp[index][k] != -1) return dp[index][k];
      int notcount = dpcheck(index-1, nums, dp, k);
      int count = 0;
      if(nums[index] <= k) {
          count = dpcheck(index-1, nums, dp, k-nums[index]);
      }
      return dp[index][k] = (count + notcount) % mod;
  }
  
  public int perfectSum(int[] arr, int n, int sum) {
      int[][] dp = new int[n][sum+1];
      for(int[] row : dp) Arrays.fill(row, -1);
      return dpcheck(n-1, arr, dp, sum);
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int t = sc.nextInt();
      while(t-- > 0) {
          int n = sc.nextInt();
          int sum = sc.nextInt();
          int[] a = new int[n];
          for(int i=0; i<n; i++) a[i] = sc.nextInt();
          
          PerfectSum ob = new PerfectSum();
          System.out.println(ob.perfectSum(a, n, sum) + "\n~");
      }
  }
}`,
  "pythoncode": `class Solution:
  def __init__(self):
      self.mod = 10**9 + 7
  
  def dpcheck(self, index, nums, dp, k):
      if index == 0:
          if k == 0 and nums[0] == 0:
              return 2
          if k == 0 or nums[0] == k:
              return 1
          return 0

      if dp[index][k] != -1:
          return dp[index][k]
      
      notcount = self.dpcheck(index-1, nums, dp, k)
      count = 0
      if nums[index] <= k:
          count = self.dpcheck(index-1, nums, dp, k-nums[index])
      
      dp[index][k] = (count + notcount) % self.mod
      return dp[index][k]
  
  def perfectSum(self, arr, n, sum):
      dp = [[-1 for _ in range(sum+1)] for _ in range(n)]
      return self.dpcheck(n-1, arr, dp, sum)

if __name__ == "__main__":
  import sys
  input = sys.stdin.read
  data = input().split()
  idx = 0
  t = int(data[idx])
  idx += 1
  for _ in range(t):
      n = int(data[idx])
      sum_val = int(data[idx+1])
      idx += 2
      arr = list(map(int, data[idx:idx+n]))
      idx += n
      ob = Solution()
      print(ob.perfectSum(arr, n, sum_val), "~", sep="\n")`,
  "language": "cpp",
  "javaLanguage": "java",
  "pythonlanguage": "python",
  "complexity": {
      "time": "O(n*sum)",
      "space": "O(n*sum)"
  },
  "link": "https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/",
  "notes": [
      "Special case handling for zero elements in the array",
      "The solution counts all possible subsets including empty subset when sum is zero",
      "Modulo operation used to handle large numbers",
      "Space optimization possible by using 1D array for DP table"
  ]
},



{
  "title": "Count Partitions with Given Difference Problem",
  "description": "Counts the number of ways to partition an array into two subsets with a given difference using dynamic programming.",
  "approach": [
      "Problem Understanding:",
      "- Given an array of numbers and a target difference d",
      "- Find the number of ways to partition the array into two subsets S1 and S2 such that their difference is exactly d (S1 - S2 = d)",
      "",
      "Mathematical Insight:",
      "- Total sum of array is sum",
      "- We need S1 = (sum + d)/2 and S2 = (sum - d)/2",
      "- Problem reduces to counting subsets with sum (sum + d)/2",
      "",
      "Dynamic Programming Approach:",
      "- Check for valid partition conditions (sum + d must be even and non-negative)",
      "- Use memoization to count subsets that sum to (sum + d)/2",
      "- Special cases for handling zero elements"
  ],
  "algorithmCharacteristics": [
      "Optimal Substructure: Yes (solution builds upon subset sum subproblems)",
      "Overlapping Subproblems: Yes (same subproblems solved multiple times)",
      "Memoization: Used to store intermediate results",
      "State Representation: Current index and target sum"
  ],
  "complexityDetails": {
      "time": "O(n*sum) - Where n is array size and sum is (total_sum + d)/2",
      "space": "O(n*sum) - DP table storage",
      "explanation": "The approach efficiently counts valid partitions by transforming the problem into a subset sum count problem and using memoization."
  },
  "cppcode": `#include <bits/stdc++.h>
using namespace std;

class Solution {
  int mod = 1e9 + 7;
  
  int dpcheck(int index, vector<int> &nums, int sum, vector<vector<int>> &dp) {                    
      if (index == 0) {
          if (sum == 0 && nums[0] == 0) return 2; 
          if (sum == 0 || sum == nums[0]) return 1; 
          return 0;
      }
      
      if (dp[index][sum] != -1) return dp[index][sum];
      
      int notcount = dpcheck(index - 1, nums, sum, dp) % mod;
      int count = 0;
      if (sum >= nums[index])
          count = dpcheck(index - 1, nums, sum - nums[index], dp) % mod;
      
      return dp[index][sum] = (count + notcount) % mod;
  }

public:
  int countPartitions(int n, int d, vector<int>& arr) {
      int sum = accumulate(arr.begin(), arr.end(), 0);
      
      if((sum - d) % 2 != 0 || (sum - d) < 0) return 0;
      int newsum = (sum - d) / 2;
      
      vector<vector<int>> dp(n, vector<int>(newsum + 1, -1));
      return dpcheck(n - 1, arr, newsum, dp);
  } 
};

int main() {
  int t;
  cin >> t;
  while (t--) {
      int n, d;
      cin >> n >> d;
      vector<int> arr;

      for (int i = 0; i < n; ++i) {
          int x;
          cin >> x;
          arr.push_back(x);
      }

      Solution obj;
      cout << obj.countPartitions(n, d, arr) << "\n~\n";
  }
  return 0;
}`,
  "javacode": `import java.util.*;

public class CountPartitions {
  private int mod = 1000000007;
  
  private int dpcheck(int index, int[] nums, int sum, int[][] dp) {
      if (index == 0) {
          if (sum == 0 && nums[0] == 0) return 2;
          if (sum == 0 || sum == nums[0]) return 1;
          return 0;
      }
      
      if (dp[index][sum] != -1) return dp[index][sum];
      
      int notcount = dpcheck(index - 1, nums, sum, dp) % mod;
      int count = 0;
      if (sum >= nums[index])
          count = dpcheck(index - 1, nums, sum - nums[index], dp) % mod;
      
      return dp[index][sum] = (count + notcount) % mod;
  }

  public int countPartitions(int n, int d, int[] arr) {
      int sum = Arrays.stream(arr).sum();
      
      if((sum - d) % 2 != 0 || (sum - d) < 0) return 0;
      int newsum = (sum - d) / 2;
      
      int[][] dp = new int[n][newsum + 1];
      for(int[] row : dp) Arrays.fill(row, -1);
      return dpcheck(n - 1, arr, newsum, dp);
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int t = sc.nextInt();
      while (t-- > 0) {
          int n = sc.nextInt();
          int d = sc.nextInt();
          int[] arr = new int[n];
          for (int i = 0; i < n; ++i) {
              arr[i] = sc.nextInt();
          }

          CountPartitions obj = new CountPartitions();
          System.out.println(obj.countPartitions(n, d, arr) + "\n~");
      }
  }
}`,
  "pythoncode": `class Solution:
  def __init__(self):
      self.mod = 10**9 + 7
  
  def dpcheck(self, index, nums, sum, dp):
      if index == 0:
          if sum == 0 and nums[0] == 0:
              return 2
          if sum == 0 or sum == nums[0]:
              return 1
          return 0
      
      if dp[index][sum] != -1:
          return dp[index][sum]
      
      notcount = self.dpcheck(index - 1, nums, sum, dp) % self.mod
      count = 0
      if sum >= nums[index]:
          count = self.dpcheck(index - 1, nums, sum - nums[index], dp) % self.mod
      
      dp[index][sum] = (count + notcount) % self.mod
      return dp[index][sum]

  def countPartitions(self, n, d, arr):
      total_sum = sum(arr)
      
      if (total_sum - d) % 2 != 0 or (total_sum - d) < 0:
          return 0
      newsum = (total_sum - d) // 2
      
      dp = [[-1 for _ in range(newsum + 1)] for _ in range(n)]
      return self.dpcheck(n - 1, arr, newsum, dp)

if __name__ == "__main__":
  import sys
  input = sys.stdin.read
  data = input().split()
  idx = 0
  t = int(data[idx])
  idx += 1
  for _ in range(t):
      n = int(data[idx])
      d = int(data[idx+1])
      idx += 2
      arr = list(map(int, data[idx:idx+n]))
      idx += n
      obj = Solution()
      print(obj.countPartitions(n, d, arr), "~", sep="\n")`,
  "language": "cpp",
  "javaLanguage": "java",
  "pythonlanguage": "python",
  "complexity": {
      "time": "O(n*sum)",
      "space": "O(n*sum)"
  },
  "link": "https://www.geeksforgeeks.org/count-of-subsets-with-given-difference/",
  "notes": [
      "The problem is transformed into a subset sum count problem",
      "Special handling required when array contains zero elements",
      "Early return if (sum - d) is odd or negative",
      "Modulo operation used to handle large numbers",
      "Space optimization possible using 1D DP array"
  ]
},



{
  "title": "0/1 Knapsack Problem with Dynamic Programming",
  "description": "Solves the classic 0/1 Knapsack problem to maximize value without exceeding weight capacity using both memoization and tabulation approaches.",
  "approach": [
      "Problem Understanding:",
      "- Given items with weights and values, and a maximum weight capacity",
      "- Select items to maximize total value without exceeding weight limit",
      "- Each item can be either taken (1) or not taken (0)",
      "",
      "Dynamic Programming Approaches:",
      "1. Memoization (Top-Down):",
      "   - Recursive solution with memoization to store computed results",
      "   - For each item, consider both including and excluding it",
      "   - Return maximum value from both choices",
      "",
      "2. Tabulation (Bottom-Up):",
      "   - Build DP table iteratively from base cases",
      "   - Initialize first row based on first item's weight",
      "   - Fill table by considering item inclusion/exclusion at each step",
      "   - Final result in last cell of DP table"
  ],
  "algorithmCharacteristics": [
      "Optimal Substructure: Maximum value can be derived from subproblems",
      "Overlapping Subproblems: Same subproblems solved multiple times",
      "State Representation: Current item index and remaining capacity",
      "Two Implementations: Both memoization and tabulation provided"
  ],
  "complexityDetails": {
      "time": "O(n*maxWeight) - Where n is number of items",
      "space": "O(n*maxWeight) - DP table storage",
      "explanation": "Both approaches have same complexity but tabulation often has better constant factors due to iterative nature."
  },
  "cppcode": `#include <bits/stdc++.h> 
using namespace std;

// Memoization approach (commented out in original)
int dpcheck(int index, vector<int> weight, vector<int> value, int maxWeight, vector<vector<int>> &dp) {
  if(index == 0) return weight[0] <= maxWeight ? value[0] : 0;
  
  if(dp[index][maxWeight] != -1) return dp[index][maxWeight];
  int notcount = dpcheck(index-1, weight, value, maxWeight, dp);
  int count = INT_MIN;
  if(weight[index] <= maxWeight) {
      count = value[index] + dpcheck(index-1, weight, value, maxWeight-weight[index], dp);
  } 
  return dp[index][maxWeight] = max(count, notcount);
}

// Tabulation approach (used in original)
int knapsack(vector<int> weight, vector<int> value, int n, int maxWeight) {
  vector<vector<int>> dp(n, vector<int>(maxWeight+1, 0));
  
  // Initialize first row
  for(int j = weight[0]; j <= maxWeight; j++) {
      dp[0][j] = value[0];
  }
  
  // Fill DP table
  for(int i = 1; i < n; i++) {
      for(int j = 0; j <= maxWeight; j++) {
          int notcount = dp[i-1][j];
          int count = INT_MIN;
          if(weight[i] <= j) {
              count = value[i] + dp[i-1][j-weight[i]];
          }
          dp[i][j] = max(count, notcount);
      }
  }
  return dp[n-1][maxWeight];
}

int main() {
  int n;
  cin >> n;
  vector<int> weight, value;
  
  // Read weights
  for(int i = 0; i < n; i++) {
      int x;
      cin >> x;
      weight.push_back(x);
  }
  
  // Read values
  for(int i = 0; i < n; i++) {
      int y;
      cin >> y;
      value.push_back(y);
  }
  
  int maxWeight;
  cin >> maxWeight;

  cout << knapsack(weight, value, n, maxWeight);

  return 0;
}`,
  "javacode": `import java.util.*;

public class Knapsack {
  
  // Memoization approach
  private static int dpcheck(int index, int[] weight, int[] value, int maxWeight, int[][] dp) {
      if(index == 0) return weight[0] <= maxWeight ? value[0] : 0;
      
      if(dp[index][maxWeight] != -1) return dp[index][maxWeight];
      int notcount = dpcheck(index-1, weight, value, maxWeight, dp);
      int count = Integer.MIN_VALUE;
      if(weight[index] <= maxWeight) {
          count = value[index] + dpcheck(index-1, weight, value, maxWeight-weight[index], dp);
      }
      return dp[index][maxWeight] = Math.max(count, notcount);
  }
  
  // Tabulation approach
  public static int knapsack(int[] weight, int[] value, int n, int maxWeight) {
      int[][] dp = new int[n][maxWeight+1];
      
      // Initialize first row
      for(int j = weight[0]; j <= maxWeight; j++) {
          dp[0][j] = value[0];
      }
      
      // Fill DP table
      for(int i = 1; i < n; i++) {
          for(int j = 0; j <= maxWeight; j++) {
              int notcount = dp[i-1][j];
              int count = Integer.MIN_VALUE;
              if(weight[i] <= j) {
                  count = value[i] + dp[i-1][j-weight[i]];
              }
              dp[i][j] = Math.max(count, notcount);
          }
      }
      return dp[n-1][maxWeight];
  }

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int[] weight = new int[n];
      int[] value = new int[n];
      
      // Read weights
      for(int i = 0; i < n; i++) {
          weight[i] = sc.nextInt();
      }
      
      // Read values
      for(int i = 0; i < n; i++) {
          value[i] = sc.nextInt();
      }
      
      int maxWeight = sc.nextInt();
      System.out.println(knapsack(weight, value, n, maxWeight));
  }
}`,
  "pythoncode": `def knapsack(weight, value, n, maxWeight):
  dp = [[0 for _ in range(maxWeight + 1)] for _ in range(n)]
  
  # Initialize first row
  for j in range(weight[0], maxWeight + 1):
      dp[0][j] = value[0]
  
  # Fill DP table
  for i in range(1, n):
      for j in range(maxWeight + 1):
          notcount = dp[i-1][j]
          count = float('-inf')
          if weight[i] <= j:
              count = value[i] + dp[i-1][j - weight[i]]
          dp[i][j] = max(count, notcount)
  
  return dp[n-1][maxWeight]

if __name__ == "__main__":
  import sys
  input = sys.stdin.read
  data = input().split()
  
  idx = 0
  n = int(data[idx])
  idx += 1
  
  weight = list(map(int, data[idx:idx+n]))
  idx += n
  
  value = list(map(int, data[idx:idx+n]))
  idx += n
  
  maxWeight = int(data[idx])
  
  print(knapsack(weight, value, n, maxWeight))`,
  "language": "cpp",
  "javaLanguage": "java",
  "pythonlanguage": "python",
  "complexity": {
      "time": "O(n*maxWeight)",
      "space": "O(n*maxWeight)"
  },
  "link": "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
  "notes": [
      "Classic DP problem with many practical applications",
      "Tabulation approach shown is space-optimizable to O(maxWeight)",
      "Handles both integer weights and values",
      "Base case carefully handles first item selection"
  ]
},



{
  "title": "0/1 Knapsack Problem Solution",
  "description": "A dynamic programming solution to the classic 0/1 Knapsack problem that maximizes value without exceeding weight capacity.",
  "approach": [
      "Problem Analysis:",
      "- Given items with weights and values, and a knapsack capacity",
      "- Goal: Select items to maximize total value without exceeding capacity",
      "- Each item can be either included (1) or not included (0)",
      "",
      "Dynamic Programming Solution:",
      "1. Tabulation (Bottom-Up) Approach:",
      "   - Create a DP table with dimensions [n][maxWeight+1]",
      "   - Initialize base case for first item",
      "   - Fill table by considering each item's inclusion/exclusion",
      "   - Return maximum value from last cell of DP table",
      "",
      "2. Memoization (Top-Down) Approach:",
      "   - Implemented but commented out in the code",
      "   - Uses recursive calls with memoization to store results"
  ],
  "algorithmCharacteristics": [
      "Optimal Substructure: Maximum value derived from subproblems",
      "Overlapping Subproblems: Avoids recomputation with DP table",
      "State Representation: [item index][remaining capacity]",
      "Time Efficiency: O(n*maxWeight) via tabulation"
  ],
  "complexityDetails": {
      "time": "O(n*maxWeight) where n is number of items",
      "space": "O(n*maxWeight) for the DP table",
      "explanation": "The solution efficiently computes maximum value by building up solutions to subproblems in a table."
  },
  "cppcode": `#include <bits/stdc++.h>
using namespace std;

class Solution {
private:
  // Memoization helper function (commented out in main solution)
  int dpcheck(int index, vector<int> weight, vector<int> value, int maxWeight, vector<vector<int>>& dp) {
      if(index == 0) return weight[0] <= maxWeight ? value[0] : 0;
      
      if(dp[index][maxWeight] != -1) return dp[index][maxWeight];
      int notcount = dpcheck(index-1, weight, value, maxWeight, dp);
      int count = INT_MIN;
      if(weight[index] <= maxWeight) {
          count = value[index] + dpcheck(index-1, weight, value, maxWeight-weight[index], dp);
      } 
      return dp[index][maxWeight] = max(count, notcount);
  }

public:
  // Main knapsack function using tabulation
  int knapSack(int maxWeight, vector<int>& value, vector<int>& weight) {
      int n = value.size();
      vector<vector<int>> dp(n, vector<int>(maxWeight+1, 0));
      
      // Initialize first row
      for(int j = weight[0]; j <= maxWeight; j++) {
          dp[0][j] = value[0];
      }
      
      // Fill DP table
      for(int i = 1; i < n; i++) {
          for(int j = 0; j <= maxWeight; j++) {
              int notcount = dp[i-1][j];
              int count = INT_MIN;
              if(weight[i] <= j) {
                  count = value[i] + dp[i-1][j-weight[i]];
              }
              dp[i][j] = max(count, notcount);
          }
      }
      return dp[n-1][maxWeight];
  }
};

int main() {
  int testCases;
  cin >> testCases;
  cin.ignore();
  
  while(testCases--) {
      int capacity, numberOfItems;
      vector<int> weights, values;
      string input;
      
      // Read capacity and number of items
      getline(cin, input);
      stringstream ss(input);
      ss >> capacity >> numberOfItems;
      
      // Read values
      getline(cin, input);
      ss.clear();
      ss.str(input);
      int number;
      while(ss >> number) {
          values.push_back(number);
      }
      
      // Read weights
      getline(cin, input);
      ss.clear();
      ss.str(input);
      while(ss >> number) {
          weights.push_back(number);
      }
      
      Solution solution;
      cout << solution.knapSack(capacity, values, weights) << endl;
      cout << "~" << endl;
  }
  return 0;
}`,
  "javacode": `import java.util.*;
import java.io.*;

public class KnapsackSolution {
  
  // Memoization helper function
  private int dpcheck(int index, int[] weight, int[] value, int maxWeight, int[][] dp) {
      if(index == 0) return weight[0] <= maxWeight ? value[0] : 0;
      
      if(dp[index][maxWeight] != -1) return dp[index][maxWeight];
      
      int notcount = dpcheck(index-1, weight, value, maxWeight, dp);
      int count = Integer.MIN_VALUE;
      if(weight[index] <= maxWeight) {
          count = value[index] + dpcheck(index-1, weight, value, maxWeight-weight[index], dp);
      }
      return dp[index][maxWeight] = Math.max(count, notcount);
  }
  
  // Main knapsack function
  public int knapSack(int maxWeight, int[] value, int[] weight) {
      int n = value.length;
      int[][] dp = new int[n][maxWeight+1];
      
      // Initialize first row
      for(int j = weight[0]; j <= maxWeight; j++) {
          dp[0][j] = value[0];
      }
      
      // Fill DP table
      for(int i = 1; i < n; i++) {
          for(int j = 0; j <= maxWeight; j++) {
              int notcount = dp[i-1][j];
              int count = Integer.MIN_VALUE;
              if(weight[i] <= j) {
                  count = value[i] + dp[i-1][j-weight[i]];
              }
              dp[i][j] = Math.max(count, notcount);
          }
      }
      return dp[n-1][maxWeight];
  }
  
  public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      int testCases = Integer.parseInt(br.readLine());
      
      while(testCases-- > 0) {
          String[] firstLine = br.readLine().split(" ");
          int capacity = Integer.parseInt(firstLine[0]);
          int numberOfItems = Integer.parseInt(firstLine[1]);
          
          int[] values = Arrays.stream(br.readLine().split(" "))
                             .mapToInt(Integer::parseInt)
                             .toArray();
          
          int[] weights = Arrays.stream(br.readLine().split(" "))
                              .mapToInt(Integer::parseInt)
                              .toArray();
          
          KnapsackSolution solution = new KnapsackSolution();
          System.out.println(solution.knapSack(capacity, values, weights));
          System.out.println("~");
      }
  }
}`,
  "pythoncode": `class Solution:
  def dpcheck(self, index, weight, value, maxWeight, dp):
      if index == 0:
          return value[0] if weight[0] <= maxWeight else 0
      
      if dp[index][maxWeight] != -1:
          return dp[index][maxWeight]
      
      notcount = self.dpcheck(index-1, weight, value, maxWeight, dp)
      count = float('-inf')
      if weight[index] <= maxWeight:
          count = value[index] + self.dpcheck(index-1, weight, value, maxWeight-weight[index], dp)
      
      dp[index][maxWeight] = max(count, notcount)
      return dp[index][maxWeight]
  
  def knapSack(self, maxWeight, value, weight):
      n = len(value)
      dp = [[0]*(maxWeight+1) for _ in range(n)]
      
      # Initialize first row
      for j in range(weight[0], maxWeight+1):
          dp[0][j] = value[0]
      
      # Fill DP table
      for i in range(1, n):
          for j in range(maxWeight+1):
              notcount = dp[i-1][j]
              count = float('-inf')
              if weight[i] <= j:
                  count = value[i] + dp[i-1][j-weight[i]]
              dp[i][j] = max(count, notcount)
      
      return dp[n-1][maxWeight]

if __name__ == "__main__":
  import sys
  input = sys.stdin.read
  data = input().split('\n')
  
  idx = 0
  testCases = int(data[idx])
  idx += 1
  
  for _ in range(testCases):
      # Read capacity and number of items
      firstLine = data[idx].split()
      capacity = int(firstLine[0])
      numberOfItems = int(firstLine[1])
      idx += 1
      
      # Read values
      values = list(map(int, data[idx].split()))
      idx += 1
      
      # Read weights
      weights = list(map(int, data[idx].split()))
      idx += 1
      
      solution = Solution()
      print(solution.knapSack(capacity, values, weights))
      print("~")`,
  "language": "cpp",
  "javaLanguage": "java",
  "pythonlanguage": "python",
  "complexity": {
      "time": "O(n*maxWeight)",
      "space": "O(n*maxWeight)"
  },
  "link": "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
  "notes": [
      "The tabulation approach is generally preferred for better performance",
      "Space can be optimized to O(maxWeight) using a 1D array",
      "Handles multiple test cases efficiently",
      "Input reading is robust with proper string parsing"
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

export default Dynamic3;