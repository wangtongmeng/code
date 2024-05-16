/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 有序的，整数，有target是相邻的0到多个
  // 二分法，先找到元素相等的，再向左右找到比他小和大的
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let resultStart = -1;
  let resultEnd = -1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleValue = nums[middleIndex];
    if (middleValue === target) {
      // 向左找到比target小的
      let targetIndex = middleIndex;
      // while ()
    }
  }
};
// @lc code=end
