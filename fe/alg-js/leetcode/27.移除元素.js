/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slow = 0, fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};
// @lc code=end


// // 1.暴力破解法 两层for循环
//   // 2.双指针
//   // 快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
//   // 慢指针：指向更新 新数组下标的位置
//   let slow = 0
//   for (let fast = 0; fast < nums.length; fast++) {
//     if (nums[fast] !== val) {
//       nums[slow++] = nums[fast]
//     }
//   }
//   return slow

// 双指针 头尾交换
// let left = 0, right = nums.length - 1
//     while (left <= right) {
//         if (nums[left] === val) {
//             let temp = nums[right]
//             nums[right] = nums[left]
//             nums[left] = temp
//             right--
//         } else {
//             left++
//         }

//     }
//     return right + 1