/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 let map = {}
 for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    let last = target - n
    if (map[last] != null) {
      return [map[last], i]
    } else {
      map[n] = i
    }
 }
 return []
};
// @lc code=end


// let map = {}
// for (let i = 0; i < nums.length; i++) {
//   let n = nums[i]
//   let last = target - n
//   if (map[last] != null) {
//     return [map[last], i]
//   } else {
//     map[n] = i
//   }
// }
// return []

