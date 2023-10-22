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
var detectCycle = function(head) {
    
};
// @lc code=end

// if (!head || !head.next) return null;
//     let slow = head.next;
//     let fast = head.next.next;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//       if (fast === slow) {
//         slow = head
//         while (fast !== slow) {
//           slow = slow.next
//           fast = fast.next
//         }
//         return slow
//       }
//     }
//     return null

