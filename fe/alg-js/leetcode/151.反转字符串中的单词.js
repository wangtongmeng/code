/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ')
  // 移除多余空格
  // 将整个字符串反转
  // 将每个单词反转
};
// @lc code=end

