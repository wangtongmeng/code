/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const visited = [];

  while (head !== null) {
    if (visited.includes(head)) {
      return head;
    }
    visited.push(head);
    head = head.next;
  }
  return null;
};
// @lc code=end
