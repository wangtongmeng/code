/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/**
 * 快慢指针： 如果有环，快指针一定能追上慢指针
 */
var hasCycle = function(head) {
  if(!head) return false;
  // 定义快慢指针
  let pre = head, next = head.next;

  while(pre != next && next && next.next) {
    // 慢指针走一步，快指针走两步
    pre = pre.next;
    next = next.next.next;
  }
  return pre === next;
};