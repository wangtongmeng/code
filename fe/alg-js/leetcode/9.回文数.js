/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = "" + x;
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
};
// @lc code=end

// 数字转字符串转数组，翻转比较
// var isPalindrome = function (x) {
//   let str = "" + x;
//   let reverseStr = str.split("").reverse().join("");
//   return str === reverseStr;
// };
