/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 问题核心就是如何解决环形问题
  // 1 6 3 9 2
  // 首尾元素去掉一个，就可以将环变成原本的线性数组

  const nums1 = nums.slice(0, nums.length - 1);
  const nums2 = nums.slice(1);

  const nomalRob = (numArr) => {
    if (nums.length <= 1) return nums[0];

    const dp = [];
    dp[0] = numArr[0];
    dp[1] = Math.max(numArr[0], numArr[1]);

    for (let i = 2; i < numArr.length; i++) {
      dp[i] = Math.max(numArr[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[numArr.length - 1];
  };

  return Math.max(nomalRob(nums1), nomalRob(nums2));
};
// @lc code=end
