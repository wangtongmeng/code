class LinkList {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

let link = new LinkList(1)
console.log(link.val, link.next); // 1 null