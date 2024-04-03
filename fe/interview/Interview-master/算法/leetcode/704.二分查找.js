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
var search = function (nums, target) {
  const { length } = nums;
  if (length === 0) {
    return -1;
  }

  let lowIndex = 0;
  let highIndex = length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (target === nums[midIndex]) {
      return midIndex;
    } else if (target > nums[midIndex]) {
      lowIndex = midIndex + 1;
    } else if (target < nums[midIndex]) {
      highIndex = midIndex - 1;
    } else {
      return -1;
    }
  }
  return -1;
};
// @lc code=end
