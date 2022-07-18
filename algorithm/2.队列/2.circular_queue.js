/**
 * 循环队列
 */
class Queue {
  constructor(n) {
    this.arr = new Array(n);
    this.head = this.tail = 0;
    this.count = 0; // 记录队列中的元素个数
  }
}
// 入队
Queue.prototype.enqueue = function (val) {
  if (this.full()) return;
  this.arr[this.tail] = val;
  this.tail += 1;
  // if (this.tail === this.arr.length) this.tail=0
  this.tail %= this.arr.length;
  this.count += 1;
};
// 出队
Queue.prototype.dequeue = function () {
  if (this.empty()) return;
  this.head += 1;
  // if(this.head=this.arr.length)this.head=0
  this.head %= this.arr.length;
  this.count -= 1;
};
// 判空
Queue.prototype.empty = function () {
  return this.count === 0;
};
// 判满
Queue.prototype.full = function () {
  return this.count === this.arr.length;
};
// 数量
Queue.prototype.size = function () {
  return this.count;
};
// 清空
Queue.prototype.clear = function () {
  this.head = this.tail = this.count = 0;
};
// 输出
Queue.prototype.output = function () {
  let temp = [];
  for (i = 0, j = this.head; i < this.count; i++) {
    temp.push(this.arr[j]);
    j++;
    // if (j ===this.arr.length) j = 0;
    j %= this.arr.length;
  }
  return temp;
};
function test(opts, val) {
  let queue = new Queue(5);
  for (let i = 0; i < opts.length; i++) {
    switch (opts[i]) {
      case "insert":
        queue.enqueue(val[i]);
        break;
      case "front":
        console.log(`front element ${queue.front()}`);
        break;
      case "dequeue":
        queue.dequeue();
        break;
      case "size":
        console.log(`queue size ${queue.size()}`);
        break;
      default:
        break;
    }
    console.log(queue.output());
  }
}

let opts = [
  "insert",
  "insert",
  "insert",
  "dequeue",
  "insert",
  "insert",
  "dequeue",
  "insert",
  "insert",
];
let vals = [1, 2, 3, "", 4, 5, "", 6, 7];
test(opts, vals);
