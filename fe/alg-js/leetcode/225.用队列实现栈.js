/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.queue1 = []
  this.queue2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  // 减少两个队列交换的次数， 只有当queue1为空时，交换两个队列
  // queue1空了，queue2可能有值
  if (!this.queue1.length) {
    [this.queue1, this.queue2] = [this.queue2, this.queue1]
  }
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift())
  }
  return this.queue1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  const x = this.pop()
  this.queue1.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.queue1.length && !this.queue2.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

