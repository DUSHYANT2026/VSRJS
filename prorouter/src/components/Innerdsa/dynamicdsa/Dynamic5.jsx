import React from 'react';

function Dynamic5() {
  const codeexample = [
    {
      question: `Climbing Stairs`,
      questionlink: "https://leetcode.com/problems/climbing-stairs/",
    },
    {
      question: `Maximum Subarray`,
      questionlink: "https://leetcode.com/problems/maximum-subarray/",
    },
    {
      question: `House Robber`,
      questionlink: "https://leetcode.com/problems/house-robber/",
    },
    {
      question: `Min Cost Climbing Stairs`,
      questionlink: "https://leetcode.com/problems/min-cost-climbing-stairs/",
    },
    {
      question: `Best Time to Buy and Sell Stock`,
      questionlink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    },
    {
      question: `Longest Increasing Subsequence (LIS)`,
      questionlink: "https://leetcode.com/problems/longest-increasing-subsequence/",
    },
    {
      question: `Coin Change`,
      questionlink: "https://leetcode.com/problems/coin-change/",
    },
    {
      question: `Unique Paths`,
      questionlink: "https://leetcode.com/problems/unique-paths/",
    },
    {
      question: `Unique Paths II`,
      questionlink: "https://leetcode.com/problems/unique-paths-ii/",
    },
    {
      question: `Decode Ways`,
      questionlink: "https://leetcode.com/problems/decode-ways/",
    },
    {
      question: `Word Break`,
      questionlink: "https://leetcode.com/problems/word-break/",
    },
    {
      question: `Partition Equal Subset Sum`,
      questionlink: "https://leetcode.com/problems/partition-equal-subset-sum/",
    },
    {
      question: `Target Sum`,
      questionlink: "https://leetcode.com/problems/target-sum/",
    },
    {
      question: `Longest Common Subsequence (LCS)`,
      questionlink: "https://leetcode.com/problems/longest-common-subsequence/",
    },
    {
      question: `Maximum Product Subarray`,
      questionlink: "https://leetcode.com/problems/maximum-product-subarray/",
    },
    {
      question: `Coin Change 2`,
      questionlink: "https://leetcode.com/problems/coin-change-2/",
    },
    {
      question: `Edit Distance`,
      questionlink: "https://leetcode.com/problems/edit-distance/",
    },
    {
      question: `Jump Game`,
      questionlink: "https://leetcode.com/problems/jump-game/",
    },
    {
      question: `Jump Game II`,
      questionlink: "https://leetcode.com/problems/jump-game-ii/",
    },
    {
      question: `Palindromic Substrings`,
      questionlink: "https://leetcode.com/problems/palindromic-substrings/",
    },
    {
      question: `Minimum Path Sum`,
      questionlink: "https://leetcode.com/problems/minimum-path-sum/",
    },
    {
      question: `Maximum Length of Repeated Subarray`,
      questionlink: "https://leetcode.com/problems/maximum-length-of-repeated-subarray/",
    },
    {
      question: `Counting Bits`,
      questionlink: "https://leetcode.com/problems/counting-bits/",
    },
    {
      question: `Perfect Squares`,
      questionlink: "https://leetcode.com/problems/perfect-squares/",
    },
    {
      question: `Ones and Zeroes`,
      questionlink: "https://leetcode.com/problems/ones-and-zeroes/",
    },
    {
      question: `Regular Expression Matching`,
      questionlink: "https://leetcode.com/problems/regular-expression-matching/",
    },
    {
      question: `Wildcard Matching`,
      questionlink: "https://leetcode.com/problems/wildcard-matching/",
    },
    {
      question: `Best Time to Buy and Sell Stock IV`,
      questionlink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
    },
    {
      question: `Best Time to Buy and Sell Stock with Cooldown`,
      questionlink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    },
    {
      question: `Burst Balloons`,
      questionlink: "https://leetcode.com/problems/burst-balloons/",
    },
    {
      question: `Minimum Insertion Steps to Make a String Palindrome`,
      questionlink: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
    },
    {
      question: `Longest Valid Parentheses`,
      questionlink: "https://leetcode.com/problems/longest-valid-parentheses/",
    },
    {
      question: `Russian Doll Envelopes`,
      questionlink: "https://leetcode.com/problems/russian-doll-envelopes/",
    },
    {
      question: `Dungeon Game`,
      questionlink: "https://leetcode.com/problems/dungeon-game/",
    },
    {
      question: `Maximum Profit in Job Scheduling`,
      questionlink: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
    },
    {
      question: `Minimum Difficulty of a Job Schedule`,
      questionlink: "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",
    },
    {
      question: `Number of Ways to Stay in the Same Place After Some Steps`,
      questionlink: "https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/",
    },
    {
      question: `Minimum Cost to Merge Stones`,
      questionlink: "https://leetcode.com/problems/minimum-cost-to-merge-stones/",
    },
    {
      question: `Knight Probability in Chessboard`,
      questionlink: "https://leetcode.com/problems/knight-probability-in-chessboard/",
    },
    {
      question: `Maximum Sum of 3 Non-Overlapping Subarrays`,
      questionlink: "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
    },
    {
      question: `Count Unique Characters of All Substrings of a Given String`,
      questionlink: "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/",
    },
    {
      question: `Minimum Window Subsequence`,
      questionlink: "https://leetcode.com/problems/minimum-window-subsequence/",
    },
    {
      question: `Stone Game IV`,
      questionlink: "https://leetcode.com/problems/stone-game-iv/",
    },
    {
      question: `Maximum Number of Points with Cost`,
      questionlink: "https://leetcode.com/problems/maximum-number-of-points-with-cost/",
    },
    {
      question: `Minimum Number of Refueling Stops`,
      questionlink: "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
    },
    {
      question: `Number of Music Playlists`,
      questionlink: "https://leetcode.com/problems/number-of-music-playlists/",
    },
    {
      question: `Minimum Falling Path Sum II`,
      questionlink: "https://leetcode.com/problems/minimum-falling-path-sum-ii/",
    },
    {
      question: `Maximum Subarray Sum with One Deletion`,
      questionlink: "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/",
    },
    {
      question: `Minimum Cost to Cut a Stick`,
      questionlink: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
    },
    {
      question: `Number of Ways to Form a Target String Given a Dictionary`,
      questionlink: "https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 mb-16 animate-gradient">
        Dynamic Programming (LeetCode)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {codeexample.map((item, index) => (
          <a
            className="block p-8 bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 text-center hover:bg-gradient-to-br from-indigo-50 to-purple-100 group"
            >
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">
                {item.question}
              </h2>

              
              <a    key={index} href={item.questionlink} target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-white">
                   View Problem
              </button>
              </a>
            </div>
          </a>
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 animate-background"></div>
    </div>
  );
};

  export default Dynamic5;