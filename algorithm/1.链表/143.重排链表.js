/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
//
/**
 * 将链表节点映射到数组中
 * 通过数字下标移动节点
 */
var reorderList = function (head) {
  if (!head || !head.next) return head;
  let p = head, arr = [];
  // 将链表节点放到数组中
  while (p) {
    arr[arr.length] = p;
    let temp = p.next;
    p.next = null; // 断开节点的相互链接
    p = temp;
  }

  // 在两端放置两个指针
  let p1 = 0, p2 = arr.length - 1;
  let ret = new ListNode(null), p3 = ret;
  while (p1 < p2) {
    p3.next = arr[p1];
    p3 = p3.next;
    p3.next = arr[p2];
    p3 = p3.next;

    p1++;
    p2--;
  }
  if (p1 === p2) p3.next = arr[p1];
  return ret.next;
};
// @lc code=end

