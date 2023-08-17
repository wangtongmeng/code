// 去重
const arr = [1, 1, 2, 2, 3, 3];
console.log([...new Set(arr)]); // [ 1, 2, 3 ]

// 判断元素是否在集合中
const set = new Set(arr);
console.log(set.has(1)); // true

// 求交集
const set2 = new Set([1, 2]);
console.log(new Set([...set].filter((item) => set2.has(item)))); // Set(2) { 1, 2 }
