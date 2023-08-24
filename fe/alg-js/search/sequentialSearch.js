// 顺序搜索
Array.prototype.sequentialSearch = function (target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return i; // 返回下标
    }
  }

  return -1;
};

const res = [1, 2, 3, 4, 5].sequentialSearch(3);
console.log(res); // 2

// 时间复杂度 O(n)
// 空间复杂度 O(1)
