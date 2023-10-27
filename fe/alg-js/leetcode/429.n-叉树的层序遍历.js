/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
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
      if (node?.children?.length) {
        queue.push(...node.children)
      }
      len--
    }
    res.push(curLevel)
  }
  return res
};
// @lc code=end

