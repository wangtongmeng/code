/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // 1.递归的写法
  // if (n <= 1) {
  //   return n
  // }
  // return fib(n-1) + fib(n-2)
  // 2.公式推理
  // let dp = [0, 1]
  // for (let i = 2; i <=n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2]
  // }
  // return dp[n]
  // 3.优化空间复杂度
  // 时间复杂度：O(n) 空间复杂度：O(1)
  if (n <= 1) {
    return n
  }

  let n1 = 0
  let n2 = 1
  for (let i = 2; i <= n; i++)  {
    const n3 = n1 + n2
    n1 = n2
    n2 = n3
  }
  return n2
};
// @lc code=end

