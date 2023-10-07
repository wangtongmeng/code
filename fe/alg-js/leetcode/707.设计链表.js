/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function() {
  this.size = 0
  this.head = null
  this.tail = null
};

MyLinkedList.prototype.getNode = function(index) {
  let vhead = new ListNode(0, this.head)
  while (index--) {
    vhead = vhead.next
  }
  return vhead.next
}

/** 
 * @param {number} index
 * @return {number}
 */
// 获取链表中第 index个节点的值
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) {
    return -1
  }
  return this.getNode(index)?.val
}

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new ListNode(val, this.head)
  if (!this.tail) {
    this.tail = node
  }
  this.head = node
  this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new ListNode(val, null)
  if (this.tail) {
    this.tail.next = node
  } else {
    // 空链表
    this.head = node
  }
  this.tail = node
  this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) {
    return
  }
  let node = new ListNode(val, null)
 if (index === this.size) {
  this.addAtTail(val)
 } else if (index <= 0) {
  this.addAtHead(val)
 } else {
  const pre = this.getNode(index - 1)
  const node = new ListNode(val, pre.next)
  pre.next = node
  this.size++
 }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
 if (index < 0 || index >= this.size) {
  return
 }
 // 删除头结点
 if (index === 0) {
  this.head = this.head.next
  if (this.size === 1) {
    this.tail = null
  }
  this.size--
  return
 }
 // 索引有效的情况
 let curNode = this.getNode(index - 1)
 curNode.next =curNode.next.next
 // 处理尾节点
 if (index = this.size - 1) {
  this.tail = curNode
 }
 this.size--

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end



// var MyLinkedList = function() {
//   this.size = 0
//   this.tail = null
//   this.head = null
// };

// MyLinkedList.prototype.getNode = function(index) {
//   // 这里不存在没办法获取到节点的情况，都已经在前置方法做过判断
//   // 创建虚拟头节点
//   let node = new ListNode(0, this.head)
//   for (let i = 0; i <= index; i++) {
//     node = node.next
//   }
//   return node
// }

// /** 
//  * @param {number} index
//  * @return {number}
//  */
// // 获取链表中第 index个节点的值
// MyLinkedList.prototype.get = function(index) {
//   // 索引无效的情况
//   if (index < 0 || index >= this.size) {
//     return -1
//   }
//   return this.getNode(index)?.val
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//   const node = new ListNode(val, this.head)
//   this.head = node
//   if (!this.tail) {
//     this.tail = node
//   }
//   this.size++
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//   const node = new ListNode(val, null)

//   if (this.tail) {
//     this.tail.next = node
//   } else {
//     // 如果链表为空
//     this.head = node
//   }

//   this.tail = node
//   this.size++

// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
// // 在链表中的第 index个节点之前添加值为 val的节点。
// // 如果 index等于链表的长度，则该节点将附加到链表的末尾。如果 index大于链表长度，则不会插入节点。如果 index小于0，则在头部插入节点。
// if (index > this.size) {
//   return
// } 

// if (index === this.size) {
//   this.addAtTail(val)
// } else if (index <= 0) {
//   this.addAtHead(val)
// } else {
//   // 中间的情况
//   // 获取index的前一个节点
//   const prevNode = this.getNode(index - 1)
//   const node = new ListNode(val, prevNode.next)
//   prevNode.next = node
//   this.size++
// }
// };

// /** 
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//   if (index < 0 || index >= this.size) {
//     return
//   }
//   // 处理头结点
//   if (index === 0) {
//     this.head = this.head.next
//      // 如果链表中只有一个元素，删除头节点后，需要处理尾节点
//      if (index === this.size - 1) {
//       this.tail = null
//      }
//      this.size--
//      return
//   }
//   // 索引有效
//   let curNode = this.getNode(index - 1)
//   curNode.next = curNode.next.next
//   // 处理尾节点
//   if (index === this.size - 1) {
//     this.tail = curNode
//   }
//   this.size--
// };