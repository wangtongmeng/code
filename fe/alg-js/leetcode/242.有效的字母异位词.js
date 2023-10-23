/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  let map = {}
  for (letter of s) {
    map[letter] = map[letter] ?  map[letter] + 1 : 1
  }
  for (letter of t) {
    if (map[letter]) {
      map[letter]--
    } else {
      return false
    }
  }
  return true
};
// @lc code=end


// if (s.length !== t.length) return false;
// // 定义一个hash表，记录字符串字母出现的次数
// let map = {}
// for (let i = 0; i < s.length; i++) {
//   let letter = s[i]
//   map[letter] =  !map[letter] ? 1 : map[letter] + 1
// }
// for (let i = 0; i < t.length; i++) {
//   let letter = t[i]
//   if (!map[letter]) {
//     return false
//   } else {
//     map[letter]--
//   }
// }
// return true

