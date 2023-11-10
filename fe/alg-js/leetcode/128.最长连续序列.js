/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums)
  let maxLen = 0
  for (let n of set) {
    let len = 1
    // 从中间向两边扩散查找
    let left = n - 1, right = n + 1
    while (set.has(left)) {
      // 找到就删掉，避免重复遍历，导致超时
      set.delete(left)
      left--
      len++
    }
    while (set.has(right)) {
      set.delete(right)
      right++
      len++
    }
    maxLen = Math.max(len, maxLen)
  }
  return maxLen
};
// @lc code=end

