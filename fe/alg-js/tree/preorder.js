const bt = require("./bt");
// 先序遍历
const preOrder = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};

preOrder(bt);
// 1
// 2
// 4
// 5
// 3
// 6
// 7
