/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  // dp[i] 表示以nums[i]为结尾的连续递增子序列
  // nums[i]>nums[i-1] dp[i] = dp[i-1]+1;

  // 本题需要连续，所以只和前面的比较就可以了
  // 而如果不需要连续，则dp[i] 需要与(j=0;j<i;j++)的dp[j]循环比较，同时需要比较的就是nums[i]和nums[j]了、

  const len = nums.length;
  const dp = new Array(len).fill(1);
  let result = 1;

  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }

    result = dp[i] > result ? dp[i] : result;
  }

  return result;
};
// @lc code=end
