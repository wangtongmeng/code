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
