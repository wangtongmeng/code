/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 动态规划 斐波那契
  // let dp = [1,2]
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i -1] + dp[i - 2]
  // }
  // return dp[n - 1]
  // 优化空间复杂度
  if (n <= 2) {
    return n
  }
  let n1 = 1
  let n2 = 2
  for (let i = 3; i <= n; i++) {
    let temp = n1 + n2
    n1 = n2
    n2 = temp
  }
  return n2
};
// @lc code=end

