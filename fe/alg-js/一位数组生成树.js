// https://juejin.cn/post/7212263304395735096
// https://juejin.cn/post/6983904373508145189
const arr = [
  { id: "1", parentId: "0" },
  { id: "2", parentId: "0" },
  { id: "3", parentId: "0" },
  { id: "4", parentId: "1" },
  { id: "5", parentId: "1" },
  { id: "6", parentId: "2" },
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

    if (pid === 0) {
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
