/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let middle = Math.floor( (left + right) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1

};
// @lc code=end


// let leftIndex = 0
//   let rightIndex = nums.length - 1
//   // 左右闭区间，用 <=
//   while(leftIndex <= rightIndex) {
//     const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (nums[middleIndex] === target) {
//       return middleIndex
//     } else if (nums[middleIndex] > target) {
//       rightIndex = middleIndex - 1
//     } else {
//       leftIndex = middleIndex + 1
//     }
//   }
//   return -1