/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head,
    pre = null,
    temp = null;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};
// @lc code=end

// // 1.双指针
// if (!head || !head.next) return head
// let temp = null, pre = null, cur = head
// while (cur) {
//   // 暂存下一个节点
//   temp = cur.next
//   // 改变当前节点next，使其指向前一个节点
//   cur.next = pre
//   // 向后移动，prev则是当前的cur，cur则是之前的下一个节点在temp中
//   pre = cur
//   cur = temp
// }
// // 循环完毕后，pre存储着最后节点的值，cur则是null
// return pre
// 2.递归
// function reverse(pre, cur) {
//   // 终止条件
//   if (!cur) {
//     return pre
//   }
//   // 暂存当前节点的下一个节点
//   const temp = cur.next
//   // 改变当前节点next指针，指向前一个节点
//   cur.next = pre
//   // 将当前节点和下一个节点传入reverse继续递归执行（执行循序是从后往前翻）
//   return reverse(cur, temp)
// }
// return reverse(null, head)
