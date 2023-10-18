/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set = new Set(nums1)
  let ret = []
  nums2.forEach(n => {
    if (set.has(n)) {
      ret.push(n)
      set.delete(n)
    }
  })
  return ret
 
};
// @lc code=end

// if (nums1.length === 0 || nums2.length === 0) {
//   return []
// }
// let map = new Map()
// let ret = []

// for (i = 0; i < nums1.length; i++) {
//   let n = nums1[i]
//   if (!map.get(n)) {
//     map.set(n, 1)
//   }
// }
// for (i = 0; i < nums2.length; i++) {
//   let n = nums2[i]
//   if (map.get(n)) {
//     ret.push(n)
//     map.set(n, 0)
//   }
// }

// return ret