// tree转list

// const list = [
//   { id: 1, name: "部门1", pid: 0 },
//   { id: 2, name: "部门1-1", pid: 1 },
//   { id: 3, name: "部门1-2", pid: 1 },
//   { id: 4, name: "部门1-1-1", pid: 2 },
//   { id: 5, name: "部门1-2-1", pid: 3 },
//   { id: 6, name: "部门2", pid: 0 },
//   { id: 7, name: "部门2-1", pid: 6 },
//   { id: 8, name: "部门3", pid: 0 },
// ];

const listTree = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门1-1",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门1-1-1",
            pid: 2,
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: "部门1-2",
        pid: 1,
        children: [
          {
            id: 5,
            name: "部门1-2-1",
            pid: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "部门2",
    pid: 0,
    children: [
      {
        id: 7,
        name: "部门2-1",
        pid: 6,
        children: [],
      },
    ],
  },
  {
    id: 8,
    name: "部门3",
    pid: 0,
    children: [],
  },
];

// 核心点在于，利用...结构，去掉children属性
// 再利用递归，对children树执行该方法

function flattenTree(tree) {
  const list = [];
  for (const item of tree) {
    const { children, ...rest } = item;
    list.push(rest);
    if (children && children.length > 0) {
      list.push(...flattenTree(children));
    }
  }
  return list;
}

const list = flattenTree(listTree);
console.log(list);
