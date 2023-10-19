/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let n1, n2;
  for (token of tokens) {
    switch (token) {
      case "+":
        n1 = stack.pop();
        n2 = stack.pop();
        stack.push(n1 + n2);
        break;
      case "-":
        n1 = stack.pop();
        n2 = stack.pop();
        stack.push(n1 - n2);
        break;
      case "*":
        n1 = stack.pop();
        n2 = stack.pop();
        stack.push(n1 * n2);
        break;
      case "/":
        n1 = stack.pop(); 
        n2 = stack.pop();
        stack.push(Math.trunc(n2 / n1)); // 这里需要取整，注意是左边除以右边
        break;
      default:
        stack.push(Number(token));
    }
  }
  return stack[0];
};
// @lc code=end
