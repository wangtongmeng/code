/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let vhead = new ListNode(0, head);
  let cur = vhead;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return vhead.next;
};
// @lc code=end

// // 虚拟头节点的方式
// const vhead = new ListNode(0, head)
// let cur = vhead
// while(cur.next) {
//   if (cur.next.val === val) {
//     cur.next = cur.next.next
//     continue
//   }
//   cur = cur.next
// }
// return vhead.next
