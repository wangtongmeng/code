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
  // let set1 = new Set(nums1)
  // let set2 = new Set(nums2)
  // let ret = []
  // for (let n of set1) {
  //   if (set2.has(n)) {
  //     ret.push(n)
  //   }
  // }
  // return ret
  let map = new Map()
  let ret = []
  for (let n of nums1) {
    map.set(n, true)
  }

  for (let n of nums2) {
    if (map.has(n)) {
      ret.push(n)
      map.delete(n)
    }
  }
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

// 通过 set
// let set1 = new Set(nums1)
  // let set2 = new Set(nums2)
  // let set3= new Set()
  // for (n of set1) {
  //   if (set2.has(n)) {
  //     set3.add(n)
  //   }
  // }
  // return Array.from(set3)
// 通过 map
// let map = {}
//   let ret = []
//   for (let n of nums1) {
//     map[n] = true
//   }
//   for (let n of nums2) {
//     if (map[n]) {
//       ret.push(n)
//       map[n] = false
//     }
//   }
//   return ret