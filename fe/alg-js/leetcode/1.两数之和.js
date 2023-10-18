/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    if (n > target) {
      continue
    }
    let n1 = target - n
    
    if (map.get(n1) !== 'number') {
      return [map.get(n1), i]
    } else {
      map.set(n, i)
    }
  }
  return []
};
// @lc code=end

