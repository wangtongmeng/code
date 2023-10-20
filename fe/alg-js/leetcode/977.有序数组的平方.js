/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let len = nums.length
  let ret = new Array(len).fill(0)
  let left = 0;
  let right = len - 1
  let cur = len - 1
  while (left <= right) {
    let leftSquare = nums[left] * nums[left]
    let rightSquare = nums[right] * nums[right]
    if (leftSquare < rightSquare) {
      ret[cur] = rightSquare
      right--
    } else {
      ret[cur] = leftSquare
      left++
    }
    cur--
  }
  return ret
};
// @lc code=end

// 双指针：数组两边的数字平方最大，越往里越小，从两边取出平方较大的从数组尾部往前放
// let n = nums.length
// let ret = new Array(n).fill(0)
// let i = 0, j = n - 1, k = n - 1
// while(i <= j) {
//   let left = nums[i] * nums[i]
//   let right = nums[j] * nums[j]
//   if (left < right) {
//     ret[k--] = right
//     j--
//   } else {
//     ret [k--] = left
//     i++
//   }
// } 
// return ret

