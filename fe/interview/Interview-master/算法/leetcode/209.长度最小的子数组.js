/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 滑动窗口
var minSubArrayLen = function (target, nums) {
  let start, end;
  start = end = 0;
  let sum = 0;
  let len = nums.length;
  let ans = Infinity;

  while (end < len) {
    sum += nums[end];
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === Infinity ? 0 : ans;
};

// 暴力解法
// var minSubArrayLen = function(target, nums) {
//     const len = nums.length;
//     let res = 0;

//     const getSum = (arr, i,j) => arr.slice(i, j+1).reduce((a,b)=>a+b);

//     for(let i = 0; i< len; i++) {
//         for(let j = i; j<len; j++) {
//             if(getSum(nums, i, j)>=target) {
//                 res = res===0?j-i+1 : Math.min(res, j-i+1);
//             }
//         }
//     }
//     return res;
// };
// @lc code=end
