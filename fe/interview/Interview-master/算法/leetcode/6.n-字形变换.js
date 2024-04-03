/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  // !!!核心 一个V字是一组循环的结束
  const n = 2 * numRows - 2;
  const arr = new Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
    const index = i % n;

    const realIndex = Math.min(index, n - index);
    arr[realIndex] += s[i];
  }

  return arr.join("");
};
// @lc code=end
