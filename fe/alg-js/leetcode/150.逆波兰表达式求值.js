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
    if (isNaN(Number(token))) {
      n2 = stack.pop(); // 先pop的放后面
      n1 = stack.pop();
      switch (token) {
        case "+":
          stack.push(n1 + n2);
          break;
        case "-":
          stack.push(n1 - n2);
          break;
        case "*":
          stack.push(n1 * n2);
          break;
        case "/":
          stack.push(Math.trunc(n1 / n2)); // 整数除法只保留整数部分，注意是左边除以右边
          break;
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
};
// @lc code=end
