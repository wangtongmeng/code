// 快速排序

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


function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let flag = arr[0]
  let left = []
  let right = []
  // 注意这里从1开始，因为第一个拿去做标识位了
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(flag, quickSort(right))
}

console.log(quickSort(arr)); //  [ 1, 2, 3, 4, 5 ]
// 时间复杂度：O(n * logN)
// 空间复杂度 O(n * logN)

// 原地快排
function quickSort2(arr, start, end) {
  function quick1(arr, start, end) {
    let init = start
    let flag = arr[init]
    start++
    while(start <= end) {
      while (arr[end] > flag) {
        end--
      }
      while(arr[start] < flag) {
        start++
      }
      if (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
      }
    }
    [arr[init], arr[start -1]] = [arr[start -1], arr[init]]
    return start
  }
  // 通过双指针找到左边比flag大的，右边比flag小的进行交换
  if (start < end) {
    let index = quick1(arr, start, end) // 标志位的值
    quickSort2(arr, start, index - 1)
    quickSort2(arr, index, end)
  }
  return arr
}
console.log(quickSort2(arr, 0, arr.length -1)); // [ 1, 2, 3, 4, 5 ]
// 时间复杂度：O(n * logN)
// 空间复杂度 O(1)