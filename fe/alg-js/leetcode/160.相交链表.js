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
var getIntersectionNode = function(headA, headB) {
  
    function getLen (head) {
      let n = 0
      let cur = head
      while (cur) {
        cur = cur.next
        n++
      }
      return n
    }
    let lenA = getLen(headA)
    let lenB = getLen(headB)
    if (lenA < lenB) {
      [lenA, lenB] = [lenB, lenA]; // 注意加；！不然语法会有问题
      [headA, headB] = [headB, headA]
    }
    console.log(lenA, lenB);
    let n = lenA - lenB
    console.log(n);
    while (n) {
      headA = headA.next
      n--
    }
    while (headA) {
      if (headA === headB) {
        return headA
      }
      headA = headA.next
      headB = headB.next
    }
    return null
};
// @lc code=end

