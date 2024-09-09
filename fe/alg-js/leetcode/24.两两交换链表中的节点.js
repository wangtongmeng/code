/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  let vhead = new ListNode(0, head);
  let cur = vhead,
    temp = null;
  while (cur.next && cur.next.next) {
    let pre = cur.next;
    let after = cur.next.next;
    temp = after.next;

    cur.next = after;
    after.next = pre;
    pre.next = temp;

    cur = pre;
  }
  return vhead.next;
};

// var swapPairs = function (head) {
//   let vhead = new ListNode(0, head);
//   let cur = vhead,
//     temp = null;
//   while (cur.next && cur.next.next) {
//     let left = cur.next;
//     let right = cur.next.next;
//     temp = right.next;
//     cur.next = right;
//     right.next = left;
//     left.next = temp;
//     cur = left; // 新的right
//   }
//   return vhead.next;
// };
// @lc code=end

//  // 创建一个虚拟头结点
//  let vhead = new ListNode(0, head)
//  let cur = vhead
//  // 链表总数为偶数个，则cur.next可能为null
//  // 链表总数为基数个，则cur.next.next可能为null
//  while (cur.next && cur.next.next) {
//    const temp = cur.next // 1
//    const temp1 = cur.next.next.next // 3
//    cur.next = cur.next.next // cur的next指针从1指向2，指向1的指针断开
//    cur.next.next = temp // 2的next指针指向1
//    temp.next = temp1 // 1的next指针指向3
//    cur = cur.next.next // cur向后移动两位，进行下两个节点的交换
//  }
//  return vhead.next
