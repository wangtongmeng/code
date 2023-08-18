const bt = require("./bt");
// 先序遍历
// const preOrder = (root) => {
//   if (!root) return;
//   console.log(root.val);
//   preOrder(root.left);
//   preOrder(root.right);
// };

// 非递归版
const preOrder = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

preOrder(bt);
// 1
// 2
// 4
// 5
// 3
// 6
// 7
