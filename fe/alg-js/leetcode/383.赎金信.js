/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map = {}
  for (let n of magazine) {
    map[n] = map[n] ?  map[n] + 1 : 1
  }
  for (let n of ransomNote) {
    if (map[n]) {
      map[n]--
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

