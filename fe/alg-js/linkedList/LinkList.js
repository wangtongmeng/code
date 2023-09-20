// 实现链表

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.length = 0
  }
}

class LinkList {
  constructor(){
    this.head = null
  }
  append(val) {
    let node = new Node(val)
    let p = this.head
    if (this.head) {
      // 找到链表最后一个节点，并把它的next赋值为node
      while (p.next) {
        p = p.next
      }
      p.next = node
    } else {
      // 如果没有head节点，链表是空的，把要创建的节点赋值给head
      this.head = node
    }
    this.length++
  }
  print() {
    if (!this.head) {
      console.log('empty');
      return;
    }

    let p = this.head
    let ret = ''
    do {
      ret += p.val + '=>'
      p = p.next
    } while(p.next)
    ret += p.val
    console.log(ret);
  }
}

// 1=>2=>3=>4
let linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)

linkList.print() // 1=>2=>3=>4