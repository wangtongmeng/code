/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let leftIndex = 0, rightIndex = nums.length - 1
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (nums[middleIndex] === target) {
      return middleIndex
    } else if (nums[middleIndex] > target) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }

  return leftIndex // 如果没找到返回leftIndex


};
// @lc code=end

