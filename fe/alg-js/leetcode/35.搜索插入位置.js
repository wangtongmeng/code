/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleValue = nums[middleIndex];
    if (middleValue === target) {
      return middleIndex;
    } else if (middleValue > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return leftIndex;
};
// @lc code=end

// var searchInsert = function (nums, target) {
//   let leftIndex = 0, rightIndex = nums.length - 1
//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

//     if (nums[middleIndex] === target) {
//       return middleIndex
//     } else if (nums[middleIndex] > target) {
//       rightIndex = middleIndex - 1
//     } else {
//       leftIndex = middleIndex + 1
//     }
//   }

//   return leftIndex // 如果没找到返回leftIndex
// //   返回值究竟是low还是high的思考过程： 如果数组中没有target，那么跳出循环前的一步一定是mid=low=high （我用的条件是while(low<=high) ） (1)如果target>nums[mid],low=mid+1 target的位置在右侧，正好是low (2)如果target<nums[mid],high=mid-1 target的位置就是mid这个位置（这里有个隐含条件是target比nums[mid-1]大）。

// // 综上，可以通过返回 low 这个值获得正确答案

// };
