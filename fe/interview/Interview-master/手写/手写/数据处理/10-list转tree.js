// list转tree

const list = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门1-1", pid: 1 },
  { id: 3, name: "部门1-2", pid: 1 },
  { id: 4, name: "部门1-1-1", pid: 2 },
  { id: 5, name: "部门1-2-1", pid: 3 },
  { id: 6, name: "部门2", pid: 0 },
  { id: 7, name: "部门2-1", pid: 6 },
  { id: 8, name: "部门3", pid: 0 },
];

// const listTree = [
//   {
//     id: 1,
//     name: "部门1",
//     pid: 0,
//     children: [
//       {
//         id: 2,
//         name: "部门1-1",
//         pid: 1,
//         children: [
//           {
//             id: 4,
//             name: "部门1-1-1",
//             pid: 2,
//             children: [],
//           },
//         ],
//       },
//       {
//         id: 3,
//         name: "部门1-2",
//         pid: 1,
//         children: [
//           {
//             id: 5,
//             name: "部门1-2-1",
//             pid: 3,
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "部门2",
//     pid: 0,
//     children: [
//       {
//         id: 7,
//         name: "部门2-1",
//         pid: 6,
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "部门3",
//     pid: 0,
//     children: [],
//   },
// ];

function buildTree(list, pid) {
  const tree = [];
  for (const item of list) {
    if (item.pid === pid) {
      const children = buildTree(list, item.id);
      if (children.length > 0) {
        item.children = children;
      }
      tree.push(item);
    }
  }
  return tree;
}

const listTree = buildTree(list, 0);
console.log(listTree);
