const bt = require("./bt");
// 后续遍历
const postOrder = (root) => {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};

postOrder(bt); // 4526731
// f5
