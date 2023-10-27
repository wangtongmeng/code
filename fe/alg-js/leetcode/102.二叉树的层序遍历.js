/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  let res = [], queue = [root]
  while (queue.length) {
    let curLevel = []
    let len = queue.length
    while (len > 0) {
      let node = queue.shift()
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    res.push(curLevel)
  }
  return res
};
// @lc code=end

