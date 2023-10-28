/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  let max = 0
  const dfs = (node, depth) => {
    if (!node.left && !node.right) {
      max = Math.max(max, depth)
    }
    node.left && dfs(node.left, depth + 1)
    node.right && dfs(node.right, depth + 1)
  }
  dfs(root, 1)
  return max
};
// @lc code=end

// 层序遍历
// if (!root) {
//   return 0
// }
// let queue = [root]
// let height = 0
// while (queue.length) {
//   let len = queue.length
//   height++
//   for (let i = 0; i < len; i++) {
//     let node = queue.shift()
//     node.left && queue.push(node.left)
//     node.right && queue.push(node.right)
//   }
// }
// return height

