/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trimS = s.trim();
  const word = trimS.split(" ").pop();
  return word.length;
};
// @lc code=end
