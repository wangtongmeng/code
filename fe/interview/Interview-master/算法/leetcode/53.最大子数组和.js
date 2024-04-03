/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
ar maxSubArray = function(nums) {
  // dp[i] 是 数组0-i的最大和
  // dp[i] = Math.max(dp[i-1]+nums[i], nums[i]); // 不关注局部，不关注dp[i-1]里面是什么情况
  // 最大dp不一定是dp[nums.length-1]

  const len = nums.length;
  const dp = new Array(len).fill(0);
  dp[0]= nums[0];

  let res = dp[0];

  for(let i=1; i< len; i++){
      dp[i] = Math.max(dp[i-1]+nums[i], nums[i]);
      res = dp[i]> res? dp[i]: res;
  }
console.log(dp)
  return res;
}
// @lc code=end

