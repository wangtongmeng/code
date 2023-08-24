// 二分搜索
Array.prototype.binarySearch = function (target) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid];
    if (target > element) {
      low = mid + 1;
    } else if (target < element) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.binarySearch(4)); // 3
console.log(arr.binarySearch(0)); // -1

// 时间复杂度
//  每次比较都使搜索范围缩小一半。
//  时间复杂度：O(logN)
