/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length % 2 !== 0) {
    return false
  }
  let middle = s.length / 2
  let leftStr = s.substring(0, middle)
  let rightStr = s.substring(middle)
  return leftStr === rightStr
};
// @lc code=end

