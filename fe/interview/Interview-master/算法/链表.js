// 合并有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next());
    return l2;
  }
};

// 环形链表，给定一个链表，判断链表中是否有环。
// 数组解法
var hasCycle = function (head) {
  let arr = [];
  while (head) {
    if (arr.includes(head)) {
      return true;
    }
    arr.push(head);
    head = head.next;
  }
  return false;
};
// 快慢指针解法
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast) {
    if (!fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

// 翻转链表
// 把每个节点的next调换成prev,  prev <- head(cur) <- next
// prev <- head(cur) <- next
var reverseList = function (head) {
  let prev = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = prev;

    prev = cur;
    cur = next;
  }
  return prev;
};

// 删除链表倒数第n个元素
// 快指针先往前移动n，这样快指针和慢指针就相差n，当快指针指向null时，慢指针就处于倒数第n个了
var removeNthFromEnd = function (head, n) {
  let newHead = new ListNode();
  newHead.next = head;
  let slow = newHead;
  let fast = newHead;

  for (i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return newHead.next;
};

// 找到两个单链表相交的交点
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/dai-ma-sui-xiang-lu-160-xiang-jiao-lian-wxkmq/
// 暴力解法，如果有环的情况有问题
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  while (pA) {
    let pB = headB;

    while (pB) {
      if (pA === pB) return pA;
      pB = pB.next;
    }

    pA = pA.next;
  }
};
// map解法
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
