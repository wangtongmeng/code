/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  const hashmap = new Map();

  let pA = headA;
  while (pA) {
    hashmap.set(pA, 1);
    pA = pA.next;
  }

  let pB = headB;
  while (pB) {
    if (hashmap.has(pB)) return pB;
    pB = pB.next;
  }
};
// @lc code=end
