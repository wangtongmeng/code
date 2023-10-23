/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let map = new Map()
  let count = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let sum = nums1[i] + nums2[j]
      map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1)
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let sum = nums3[i] + nums4[j]
      if (map.get(0 - sum)) {
        count += map.get(0 - sum)
      }
    }
  }
  return count
};
// @lc code=end


// let map = new Map()
//   let count = 0
//   for (const n1 of nums1) {
//     for (const n2 of nums2) {
//       const sum = n1 + n2
//       map.set(sum, !map.get(sum) ? 1 : map.get(sum) + 1)
//     }
//   }
//   for (const n3 of nums3) {
//     for (const n4 of nums4) {
//       const sum = n3 + n4
//       if (map.get(0 - sum)) {
//         count += map.get(0 - sum)
//       }
//     }
//   }
//   return count

