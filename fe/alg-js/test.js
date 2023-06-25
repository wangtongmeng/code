const arr = [
  { id: "4", pid: "1", settings: { order: 0 } },
  { id: "6", pid: "2", settings: { order: 2 } },
  { id: "3", pid: "0", settings: { order: 5 } },
  { id: "1", pid: "0", settings: { order: 3 } },
  { id: "5", pid: "1", settings: { order: 1 } },
  { id: "2", pid: "0", settings: { order: 4 } },
];

// pid对应的数组项
let pidMap = {};
let rootId = "0";
arr.forEach((item) => {
  pidMap[item.pid] = pidMap[item.pid] ? [...pidMap[item.pid], item] : [item];
});

// 生成树且排序
function toTree(pidMap, pid) {
  let parentItems = pidMap[pid] || [];
  // 排序
  parentItems = parentItems.sort((a, b) => {
    const aOrder = a?.settings?.order;
    const bOrder = b?.settings?.order;
    return aOrder - bOrder;
  });
  // 处理子节点
  parentItems.map((item) => {
    item.children = toTree(pidMap, item.id);
  });
  return parentItems;
}

console.log(JSON.stringify(toTree(pidMap, rootId)));
