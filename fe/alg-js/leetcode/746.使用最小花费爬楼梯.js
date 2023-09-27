/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // const dp = [0, 0]
  // for (let i = 2; i <= cost.length; i++) {
  //   dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  // }
  // return dp[cost.length]

  // 优化空间复杂度
  let dp1 = 0
  let dp2 = 0
  for (let i = 2; i <= cost.length; i++) {
    dpi = Math.min(dp1 + cost[i - 2], dp2 + cost[i - 1])
    dp1 = dp2
    dp2 = dpi
  }
  return dp2
};
// @lc code=end

