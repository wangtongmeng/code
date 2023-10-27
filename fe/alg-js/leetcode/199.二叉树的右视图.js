/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
  if (!root) {
    return []
  }
  let res = [], queue = [root]
  while (queue.length) {
    let len = queue.length
    while (len > 0) {
      let node = queue.shift()
      if (len === 1) {
        res.push(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
  }

  return res
};
// @lc code=end

