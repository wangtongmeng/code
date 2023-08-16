// vscode 左侧点击行号生成红点，点击f5 查看variables 可以看到数据结构
const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };

a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a;
while (p) {
  console.log(p.val); // a b c d
  p = p.next;
}

// 插入
const e = { val: "e" };
c.next = e;
e.next = d;

// 删除
c.next = d;
