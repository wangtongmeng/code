// 定义链表节点
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 定义链表
class LinkedList {
  constructor() {
    this.head = null; // 头节点
    this.tail = null; // 尾节点
  }

  // 在链表末尾添加节点
  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      // 如果链表为空，则新节点既是头节点也是尾节点
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 如果链表不为空，则将新节点追加到尾节点之后，并更新尾节点
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 在链表指定位置插入节点
  insertAt(index, value) {
    if (index < 0 || index > this.getLength()) {
      // 检查索引的有效性
      throw new Error("Invalid index");
    }

    const newNode = new ListNode(value);

    if (index === 0) {
      // 如果插入位置为头部，则将新节点作为新的头节点
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        // 如果链表为空，则新节点既是头节点也是尾节点
        this.tail = newNode;
      }
    } else if (index === this.getLength()) {
      // 如果插入位置为尾部，则将新节点追加到尾节点之后，并更新尾节点
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // 在其他位置插入节点
      let current = this.head;
      let prev = null;
      let count = 0;

      while (count < index) {
        prev = current;
        current = current.next;
        count++;
      }

      prev.next = newNode;
      newNode.next = current;
    }
  }

  // 删除链表指定位置的节点
  removeAt(index) {
    if (index < 0 || index >= this.getLength()) {
      // 检查索引的有效性
      throw new Error("Invalid index");
    }

    if (index === 0) {
      // 如果删除的是头节点，则更新头节点
      const removedNode = this.head;
      this.head = this.head.next;
      if (index === this.getLength() - 1) {
        // 如果链表只有一个节点，则更新尾节点
        this.tail = null;
      }
      return removedNode.value;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = current.next;

    if (index === this.getLength() - 1) {
      // 如果删除的是尾节点，则更新尾节点
      this.tail = prev;
    }

    return current.value;
  }

  // 获取链表的长度
  getLength() {
    let length = 0;
    let current = this.head;

    while (current) {
      length++;
      current = current.next;
    }

    return length;
  }

  // 获取链表的所有节点值，返回一个数组
  toArray() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}

// 示例用法
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insertAt(1, 4);
list.removeAt(2);

console.log(list.toArray()); // [1, 4, 3]
