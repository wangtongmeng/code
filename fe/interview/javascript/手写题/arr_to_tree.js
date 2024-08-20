function convert(arr) {
  const map = new Map();
  let root = null;

  // 首先将所有节点映射到一个 Map 中
  arr.forEach((item) => {
    const { id, name, parentId } = item;
    const treeNode = { id, name, children: [] };
    map.set(id, treeNode);
    if (parentId === 0) {
      root = treeNode; // 记录根节点
    }
  });

  // 然后遍历一次，将子节点添加到父节点的 children 中
  arr.forEach((item) => {
    const { id, parentId } = item;
    if (parentId !== 0) {
      const parentNode = map.get(parentId);
      const currentNode = map.get(id);
      if (parentNode) {
        parentNode.children.push(currentNode);
      }
    }
  });

  return root;
}

const arr = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 1 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 2 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
];

// 测试不同的数组顺序
const shuffledArr = [
  { id: 4, name: "部门D", parentId: 2 },
  { id: 1, name: "部门A", parentId: 0 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 2, name: "部门B", parentId: 1 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 3, name: "部门C", parentId: 1 },
];

const tree = convert(shuffledArr);
console.info(JSON.stringify(tree, null, 2));
