const bt = require("./bt");
// 中序遍历
// const inOrder = (root) => {
//   if (!root) return;
//   inOrder(root.left);
//   console.log(root.val);
//   inOrder(root.right);
// };

// 非递归版
const inOrder = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

inOrder(bt); //4251637
