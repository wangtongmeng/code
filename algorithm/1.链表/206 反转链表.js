/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 迭代
/**
 * 1. 前后两指针依次翻转并向后移动
 * 2. 翻转过程中需要临时保存第三个节点
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let pre = null, cur = head;
  while (cur) {
    let next = cur.next; // 临时保存第三个节点
    cur.next = pre; //  第二个节点指向第一个
    pre = cur; // 第一个节点向后移动一步
    cur = next; // 第二个节点向后移动一步

    // [cur.next, pre, cur] = [pre, cur, cur.next];
  }
  return pre;
}

// 递归
// 返回已经反转后的链表
// 回溯阶段进行反转
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let pre = head; // 第一个节点
  let tail = head.next; // 第二个节点
  let p = reverseList(head.next); // 反转后的节点

  // 下面两句发生在递归回溯的阶段，从最后两个翻转的节点开始执行
  pre.next = null;
  tail.next = pre;

  return p;
}