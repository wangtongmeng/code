// 归并排序

Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    let left = [];
    let right = [];
    let mid = arr[0];
    // 注意这里 i 从 1 开始
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((n, i) => (this[i] = n));
};

// const arr = [5, 4, 3, 2, 1];
const arr = [2, 4, 5, 3, 1];
arr.quickSort(arr);
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// 时间复杂度
//   递归的时间复杂度是O(logN)
//   分区操作的时间复杂度是O(n)
//   时间复杂度：O(n * logN)
