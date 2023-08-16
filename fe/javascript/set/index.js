// 创建
let mySet = new Set();
// 添加
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("some text");
mySet.add({ a: 1, b: 2 });
console.log(mySet); //  Set(4) { 1, 5, 'some text', { a: 1, b: 2 } }
// 是否有
console.log(mySet.has(1)); // true
// 删除
mySet.delete(5);
console.log(mySet); // Set(3) { 1, 'some text', { a: 1, b: 2 } }
// 遍历
for (const item of mySet) {
  console.log(item);
  //   1
  // some text
  // { a: 1, b: 2 }
}

for (const item of mySet.keys()) {
  console.log(item);
  //   1
  // some text
  // { a: 1, b: 2 }
}

for (const item of mySet.values()) {
  console.log(item);
  //   1
  // some text
  // { a: 1, b: 2 }
}

for (const [key, value] of mySet.entries()) {
  console.log(key, value);
  //   1 1
  // some text some text
  // { a: 1, b: 2 } { a: 1, b: 2 }
}

// Array 和 Set 互转
console.log([...mySet]); // [ 1, 'some text', { a: 1, b: 2 } ]
console.log(Array.from(mySet)); // [ 1, 'some text', { a: 1, b: 2 } ]
console.log(new Set([1, 2, 3, 4])); // Set(4) { 1, 2, 3, 4 }

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
// 交集 set1 set2 都有的值
const intersection = new Set([...set1].filter((x) => set2.has(x)));
console.log(intersection); // Set(1) { 3 }
// 差集 set1 有，set2中没有的值
const difference = new Set([...set1].filter((x) => !set2.has(x)));
console.log(difference); // Set(2) { 1, 2 }
