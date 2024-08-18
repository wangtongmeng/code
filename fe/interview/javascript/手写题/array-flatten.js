// 单层 扁平化 数组
// [1, [2, [3], 4], 5] => [1, 2, [3], 4, 5]
// 数组深度扁平化
// [1, [2, [3], 4], 5] => [1, 2, 3, 4, 5]

// 数组扁平化，使用 push
function flatten1(arr) {
  const res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((n) => res.push(n));
    } else {
      res.push(item);
    }
  });
  return res;
}
console.log(flatten1([1, [2, [3], 4], 5])); // [ 1, 2, [ 3 ], 4, 5 ]

// 数组扁平化，使用 concat
function flatten2(arr) {
  let res = [];
  arr.forEach((item) => {
    res = res.concat(item);
  });
  return res;
}
console.log(flatten2([1, [2, [3], 4], 5])); // [ 1, 2, [ 3 ], 4, 5 ]

// 数组深度扁平化，使用 push
function flattenDeep1(arr) {
  const res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      const flattenItem = flattenDeep1(item);
      flattenItem.forEach((n) => res.push(n));
    } else {
      res.push(item);
    }
  });
  return res;
}
console.log(flattenDeep1([1, [2, [3], 4], 5])); // [ 1, 2, 3, 4, 5 ]
// 数组深度扁平化，使用 concat
function flattenDeep2(arr) {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      const flattenItems = flattenDeep2(item);
      res = res.concat(flattenItems);
    } else {
      res = res.concat(item);
    }
  });
  return res;
}
console.log(flattenDeep2([1, [2, [3], 4], 5])); // [ 1, 2, 3, 4, 5 ]
