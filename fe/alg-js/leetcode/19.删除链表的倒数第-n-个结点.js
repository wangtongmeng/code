/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let vhead = new ListNode(0, head)
  let slow = vhead
  let fast = vhead
  //由虚拟头节点前进n个节点时,fast.next可推断不为null
  // 1=>2=>3，n=1，遍历完fast=1
  while (n--) {
    fast = fast.next
  }
  //遍历直至fast.next = null， 即尾部节点。 此时slow指向倒数第n个节点
  // 1=>2=>3，遍历完fast=1，遍历完fast=3，slow=2，此时slow正好是要删除节点的前一个节点
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  //倒数第n个节点可推断其next节点不为空
  slow.next = slow.next.next
  return vhead.next
};
// @lc code=end

