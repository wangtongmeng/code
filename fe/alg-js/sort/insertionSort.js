// 插入排序
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i += 1) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    this[j] = temp;
  }
};

// const arr = [5, 4, 3, 2, 1];
const arr = [2, 4, 5, 3, 1];
arr.insertionSort(arr);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
