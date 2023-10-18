/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  
};
// @lc code=end

// if (nums.length < 3) {
//   return []
// }

// let list = []
// // 通过排序和双指针的方式
// nums.sort((a, b) => a - b) // n*logn

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === nums[i - 1]) {
//     continue
//   }
//   // 以num[i]为基准，找另外两个数，和为0的情况
//   let left = i + 1
//   let right = nums.length - 1
//   while(left < right) {
//     if (nums[left] + nums[right] + nums[i] === 0) {
//       // 命中
//       list.push([nums[left], nums[right], nums[i]])
//       // 相邻数可能相同，找到不同的数字
//       while (nums[left] === nums[left+1]) {
//         left++
//       }
//       left++ // ?
//       while (nums[right] === nums[right - 1]) {
//         right--
//       }
//       right-- // ?
//     } else if (nums[left] + nums[right] + nums[i] > 0) {
//       // 和大于0，减小
//       right--
//     } else {
//       // 和小于0，增加
//       left++
//     }
//   }
// }

// return list
