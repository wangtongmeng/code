/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
  if (!root) {
    return []
  }
  let res = [], queue = [root]
  while (queue.length) {
    let max = -Infinity
    let len = queue.length
    while (len > 0) {
      let node = queue.shift()
      max = Math.max(node.val, max)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    res.push(max)
  }
  return res
};
// @lc code=end

