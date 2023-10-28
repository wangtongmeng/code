/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = {}
  for (n of nums) {
    map[n] = map[n] ? map[n] + 1 : 1
  }
  return Object.entries(map).sort((a,b) => b[1] - a[1]).slice(0, k).map(i => i[0])
};
// @lc code=end


// let map = {}
//   for (n of nums) {
//     map[n] = (map[n] || 0) + 1
//   }
//   return Object.entries(map).sort((a,b) => b[1] - a[1]).slice(0, k).map(i => i[0])

