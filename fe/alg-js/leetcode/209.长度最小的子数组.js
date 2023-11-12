/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0, right = 0
  let sum = 0
  let len = Infinity
  while (right < nums.length) {
    sum += nums[right]
    if (sum >= target) {
      while (sum - nums[left] >= target) {
        sum -= nums[left]
        left++
      }
      len = Math.min(len, right - left + 1)
    }
    right++
  }
  
  return len === Infinity ? 0 : len
};
// @lc code=end

// // 双指针 滑动窗口
// let left = 0, right = 0
// let res = Infinity // 返回结果
// let sum = 0
// while (right < nums.length) {
//   sum += nums[right]
//   if (sum >= target) {
//     // 不断移动左指针，直到不能再缩小为止
//     while (sum - nums[left] >= target) {
//       sum -= nums[left++]
//     }
//     res = Math.min(res, right - left + 1)
//   }
//   right++
// }
// return res === Infinity ? 0 : res

