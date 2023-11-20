/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = []
  }
  insert(val) {
    this.heap.push(val)
    this.shiftUp(this.heap.length - 1)
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
  shiftUp(index) {
    if (index === 0) {
      return
    }
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index)
    let rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  swap(i1, i2) {
    let temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }
  getLeftIndex(index) {
    return index * 2 + 1
  }
  getRightIndex(index) {
    return index * 2 + 2
  }
}
var findKthLargest = function(nums, k) {
  const heap = new MinHeap()
  nums.forEach(n => {
    heap.insert(n)
    if (heap.size() > k) {
      heap.pop()
    }
  })
  return heap.peek()
};
// @lc code=end

