/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 将链表值放入数组，利用双指针判断是否回文
  let vals = []
  while (head !== null) {
    vals.push(head.val)
    head = head.next
  }
  let left = 0
  let right = vals.length - 1
  while (left < right) {
    if (vals[left] !== vals[right]) {
      return false
    } else {
      left++
      right--
    }
  }
  return true
};
// @lc code=end

