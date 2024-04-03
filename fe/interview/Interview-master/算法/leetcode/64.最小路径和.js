/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 1.推导出dp公式
  //dp[i][j] = Math.min(dp[i-1][j], dp[j-1][i])+grid[i][j]

  const len1 = grid.length;
  const len2 = grid[0].length;

  const dp = Array.from(Array(len1), () => Array(len2).fill(0));

  // 2. 初始化dp数组，第一行、第一列的逻辑特殊
  dp[0][0] = grid[0][0];

  for (let j = 1; j < len2; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < len1; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  console.log(dp);
  return dp[len1 - 1][len2 - 1];
};
// @lc code=end
