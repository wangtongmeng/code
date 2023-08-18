const bt = require("./bt");
// 后续遍历
// const postOrder = (root) => {
//   if (!root) return;
//   postOrder(root.left);
//   postOrder(root.right);
//   console.log(root.val);
// };

// 非递归版
const postOrder = (root) => {
  if (!root) return;
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n); // 先存储
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
};

postOrder(bt); // 4526731
// f5
