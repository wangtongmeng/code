/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // dp[i][j]
  // a...a  dp[i+1][j-1] + 2
  // a...b  Math.max(dp[i][j-1], dp[i+1][j])
  // 综上 dp[i][j] 依赖的是i+1，所以i要从大到小遍历
  // 综上 dp[i][j] 依赖的是j-1，所以j小到大遍历
  // 因为dp[i][j],i===j时都为1，所以j从i+1开始遍历
  const l = s.length;
  const dp = Array.from(Array(l), () => Array(l).fill(0));

  for (let i = 0; i < l; i++) {
    dp[i][i] = 1;
  }

  for (let i = l - 1; i >= 0; i--) {
    for (let j = i + 1; j < l; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][l - 1];
};
// @lc code=end
