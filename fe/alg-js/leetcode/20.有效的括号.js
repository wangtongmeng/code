/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 let map = {
  "(": ")",
  "{": "}",
  "[": "]"
 }
 let stack = []
 for (let letter of s) {
  if (map[letter]) {
    stack.push(map[letter])
  } else {
    let last = stack.pop()
    if (last !== letter) {
      return false
    }
  }
 }
 return stack.length === 0
};
// @lc code=end


// if (s.length % 2 !== 0) {
//   return false;
// }

// let map = {
//   '(': ')',
//   '{': '}',
//   '[': ']'
// }
// let stack = []
// for (let i = 0; i < s.length; i++) {
//   let letter = s[i]
//   if (map[letter]) {
//     stack.push(map[letter])
//   } else {
//     const last = stack.pop()
//     if (last === letter) {
//       continue
//     } else {
//       return false
//     }
//   }
// }
// return stack.length === 0

