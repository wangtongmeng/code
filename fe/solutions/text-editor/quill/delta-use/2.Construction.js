import Delta from 'quill-delta';
// 创建一个delta对象，参数可以是ops数组，也可以是delta对象
// new Delta()
// new Delta(ops)
// new Delta(delta)
// 创建delta对象
const delta1 = new Delta({ops: [{insert: 'hello'}]});
const delta2 = new Delta([{insert: 'hello'}]);
console.log(delta1.ops, delta2.ops)