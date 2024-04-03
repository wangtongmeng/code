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
var fib = function (n) {
  if (n <= 1) return n;

  const arr = new Array(n + 1);

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};
// @lc code=end
