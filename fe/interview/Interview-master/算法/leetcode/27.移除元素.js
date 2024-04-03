/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let ans = 0;
  for (const num of nums) {
    if (num != val) {
      nums[ans] = num;
      ans++;
    }
  }
  return ans;
};
// @lc code=end
