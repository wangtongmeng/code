/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // 双指针
  let left = 0
  let right = s.length - 1
  let temp = ''
  while (left < right) {
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
  return s
};
// @lc code=end

