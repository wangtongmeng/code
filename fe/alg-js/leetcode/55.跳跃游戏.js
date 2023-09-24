/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let end = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    // 终点到i的距离小于等于nums[i]，则可以到达
    if (end - i <= nums[i]) {
      end = i
    }
  }
  return end === 0
  // 时间复杂度为 O(n)，空间复杂度为 O(1)
};
// @lc code=end

