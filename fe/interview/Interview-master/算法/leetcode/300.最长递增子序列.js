/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  // dp[i] 以nums[i]为结尾的最长递增子序列
  // 最长递增子序列不一定包含最后一，所以最后的结果不一定是dp[nums.length]
  // dp[i]是与dp[0]~dp[i-1]比较所得，每次比较选较大的值更新dp[i]

  const len = nums.length;
  const dp = new Array(len).fill(1);
  let res = 1;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 递推公式！！！
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }

  console.log(dp);
  return res;
};
// @lc code=end
