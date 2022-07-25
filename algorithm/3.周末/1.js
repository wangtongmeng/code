/**83. 删除排序链表中的重复元素 */
/**
 * 1. 定义两个指针
 * 2. 如果两个指针值相同，则后指针向后移动一位，同时改变前指针节点的next指向
 * 否则： 前后指针同时向后移动
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let pre = head,
    next = head.next;
  while (next) {
    if (pre.val === next.val) {
      pre.next = next.next;
    } else {
      pre = next;
    }

    next = next.next;
  }
  return head;
};
// 收获：1. 使用双指针

/**82. 删除排序链表中的重复元素 II */
// 需要比较当前节点 后面的多个节点是否相同， 81题比较当前节点和后面的节点即可
// cur后面的节点和 next后面的节点
// 1. 不相同： cur和next同时向后走一步
// 2. 相同：
//    1. next向后走，直到走到不同的节点
//    2. 将cur的next指针指向这个节点，进行下一次循环
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  const ret = new ListNode(null, head);

  let cur = ret,
    next = head;
  while (next && next.next) {
    if (cur.next.val === next.next.val) {
      // 后面节点相同
      while (next && next.next && cur.next.val === next.next.val) {
        next = next.next;
      }
      // 找到下一个不同的节点了
      cur.next = next.next;
    } else {
      cur = cur.next;
    }
    next = next.next;
  }
  return ret.next;
};
// 收获：1. 虚拟头节点： 如果头节点又可能被更换，就需要用到虚拟头节点
