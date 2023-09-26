/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  const backtrack = (paths) => {
    if (paths.length === nums.length) {
      res.push(paths)
      return
    }
    nums.forEach(n => {
      if (paths.includes(n)) return
      backtrack(paths.concat(n))
    })
  } 

  backtrack([])

  return res
};
// @lc code=end

