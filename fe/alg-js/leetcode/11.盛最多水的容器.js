/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    // 计算面积
    let curArea = (right - left) * (Math.min(height[left], height[right]))
    maxArea = Math.max(curArea, maxArea)
    // 将两个指针高度较小的向内移动
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
};
// @lc code=end

