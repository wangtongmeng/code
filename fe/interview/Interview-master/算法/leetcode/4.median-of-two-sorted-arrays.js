/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [...nums1, ...nums2].sort();
  const len = mergedArr.length;

  if (len % 2 === 1) {
    return mergedArr[Math.ceil(len / 2) - 1];
  } else {
    return (mergedArr[len / 2] + mergedArr[len / 2 - 1]) / 2;
  }
};
// @lc code=end
const nums1 = [1, 2, 5],
  nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));
