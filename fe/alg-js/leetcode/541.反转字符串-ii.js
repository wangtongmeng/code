/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
let left = 0, right = 0
let temp = ''
let arr = split('')
let len = arr.length
for (let i = 0; i < len; i += 2 * k) {
  left = i
  right = i + k - 1 > 
}

};
// @lc code=end


// let left = 0, right = 0;
// let temp = ''
// let arr = s.split('')
// for (let i = 0, length = arr.length; i <  length; i += 2 * k) { // 每隔 2k 个字符的前 k 个字符进行反转
//   left = i
//   right = i + k - 1 > length - 1 ? length - 1 : i + k - 1
//   while (left < right) {
//     temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left++
//     right--
//   }
// }
// return arr.join('')

