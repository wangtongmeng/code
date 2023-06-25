// https://juejin.cn/post/7212263304395735096
// https://juejin.cn/post/6983904373508145189
const arr = [
  { id: "4", pid: "1" },
  { id: "5", pid: "1" },
  { id: "6", pid: "2" },
  { id: "1", pid: "0" },
  { id: "2", pid: "0" },
  { id: "3", pid: "0" },
];

let mapSelf = {};
let mapChildren = {};
let topId = "0";
arr.forEach((item) => {
  mapSelf[item.id] = item;
});

// 主要思路也是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储。不同点在遍历的时候即做Map存储,有找对应关系。性能会更好。

function arrayToTree(items) {
  const result = []; // 存放结果集
  const itemMap = {}; //
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]["children"],
    };

    const treeItem = itemMap[id];

    if (pid === "0") {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

console.log(JSON.stringify(arrayToTree(arr)));

// export const uisToTree = (items: IMenuNewConfig[]) => {
//   const rootId = '0';
//   const result = []; // 存放结果集
//   const itemMap = {}; //
//   for (const item of items) {
//     const id = item.code;
//     const pid = item.parentCode;

//     if (!itemMap[id]) {
//       itemMap[id] = {
//         children: [],
//       };
//     }

//     itemMap[id] = {
//       ...item,
//       children: itemMap[id].children,
//     };

//     const treeItem = itemMap[id];

//     if (pid === rootId) {
//       result.push(treeItem);
//     } else {
//       if (!itemMap[pid]) {
//         itemMap[pid] = {
//           children: [],
//         };
//       }
//       itemMap[pid].children.push(treeItem);
//       itemMap[pid].children = itemMap[pid].children.sort((a: IMenuNewConfig, b: IMenuNewConfig) => {
//         const aOder = a.settings.order || 0;
//         const bOder = b.settings.order || 0;
//         return aOder - bOder;
//       });
//     }
//   }
//   return result;
// };
