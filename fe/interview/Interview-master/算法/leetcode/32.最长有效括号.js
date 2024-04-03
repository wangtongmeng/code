/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let maxLen = 0;
  let stack = [];
  // 初始化栈底元素为-1
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      // 为左括号时，将当前下标压入栈中
      stack.push(i);
    } else {
      // 为右括号时，先弹出栈顶元素表示匹配了当前右括号
      stack.pop();

      if (stack.length === 0) {
        // 栈为空，将当前下标压入栈中，表示当前右括号未被匹配
        stack.push(i);
      } else {
        // 说明有新的括号匹配上了，更新结算值
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }
  return maxLen;
}
// @lc code=end
