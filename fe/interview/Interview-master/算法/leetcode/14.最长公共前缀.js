/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  str1 = strs[0];
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    if (strs.every((s) => s.charAt(i) === str1[i])) {
      result += str1[i];
    } else {
      return result;
    }
  }
  return result;
};
// @lc code=end
