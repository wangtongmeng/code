/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
  // 慢指针：指向更新 新数组下标的位置
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== 0) {
      [nums[slowIndex], nums[fastIndex]] = [nums[fastIndex], nums[slowIndex]];
      slowIndex++;
    }
  }
};
// @lc code=end

