/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  // 两个相邻相同的字母会删除
  const stack = []
  for (let letter of s) {
    if (letter === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(letter)
    }
  }
  return stack.join('')
};
// @lc code=end


