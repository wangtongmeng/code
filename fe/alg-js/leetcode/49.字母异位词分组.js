/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map()
  for (str of strs) {
    let letters = Array.from(str)
    letters.sort()
    let key = letters.toString()
    if (!map.get(key)) {
      map.set(key, [str])
    } else {
      let arr = map.get(key)
      arr.push(str)
    }
  }
  return Array.from(map.values())
};
// @lc code=end

