class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i) {
    // return (i - 1) >> 1;
    return Math.floor((i - 1) / 2);
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  // 插入
  // 将值插入堆的底部，即数组的尾部
  // 然后上移：将这个值和父节点进行交换，直到父节点小于等于插入的值。
  // 大小为k的堆中插入元素的时间复杂度为O(logk) 堆的高度
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  // 用数组尾部元素替换堆顶（直接删除会破坏堆结构）。
  // 然后下移：将新堆顶和它的子节点进行交换，直到子节点大于等于这个新堆顶。
  // 大小为 k 的堆中删除堆顶的时间复杂度为 O(logk)
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  // 获取堆顶和堆的大小
  // 获取堆顶：返回数组的头部。
  // 获取堆的大小：返回数组的长度。
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

// 左侧添加红点f5
const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
