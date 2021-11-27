class Node {
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}

// 节点+指针

function ListNode () {
    let head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)

    let p = head, ret = ''
    while(p) {
        ret += `${p.val} ->`
        p = p.next
    }
    ret += 'null'
    console.log(ret)
}
// ListNode() // 1 ->2 ->3 ->4 ->null

// 双数组
function ListNode(){
    const data = [] // 存数据
    const next = [] // 存指针
    
    function addNode(index, p, val) {
        next[p] = next[index]
        next[index] = p
        data[p] = val
    }
}