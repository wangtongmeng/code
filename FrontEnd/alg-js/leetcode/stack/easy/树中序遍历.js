// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

/* 
输入：root = [1,null,2,3]
输出：[1,3,2]

输入：root = []
输出：[]


输入：root = [1]
输出：[1]

输入：root = [1,2]
输出：[2,1]

输入：root = [1,null,2]
输出：[1,2]


提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 

进阶: 递归算法很简单，你可以通过迭代算法完成吗？
*/

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

// 递归实现

// 中序遍历
var inorderTraversal1 = (root) => {
    let result = []
    var inorderTraversal1 = (node) => {
        if(node) {
            // 先遍历左子树
            inorderTraversal1(node.left)
           // 再根节点
            result.push(node.val)
            // 最后遍历右子树
            inorderTraversal1(node.right)
        }
    }
    inorderTraversal1(root)
    return result
};
// 迭代实现

var inorderTraversal2 = function(root) {
    let list = []
    let stack = []
    let node = root
    while(stack.length || node) { 
        if(node) {
            stack.push(node)
            node = node.left
            continue
        }
        node = stack.pop()
        list.push(node.val)
        node = node.right
    }
    return list
};
// 进一步简化：


// 中序遍历
const inorderTraversal3 = (root) => {
    let list = []
    let stack = []
    let node = root
    
    while(node || stack.length) {
    // 遍历左子树
      while(node) {
       stack.push(node)
        node = node.left
      }
      
      node = stack.pop()
      list.push(node.val)
      node = node.right
    }
    return list
}
// 复杂度分析：

// 空间复杂度：O(n)

// 时间复杂度：O(n)