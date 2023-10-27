/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) {
    return []
  }
  let res = [], queue = [root]
  while (queue.length) {
    let sum = 0
    let count = queue.length
    let len = queue.length
    while (len > 0) {
      let node = queue.shift()
      sum += node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    res.push((sum / count).toFixed(5))
  }
  return res
};
// @lc code=end

