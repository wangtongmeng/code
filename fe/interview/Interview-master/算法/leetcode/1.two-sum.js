/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    const index = nums.indexOf(another);
    if (index > -1) {
      return [i, index];
    }
  }
};
// @lc code=end
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 0],
  target = 6;
console.log(twoSum(nums, target));
