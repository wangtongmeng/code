
// // 1.导出单个数据，通过module.exports导出，通过require引入
// var m1 = require('./m1.js')
// console.log(m1); // this is commonjs

// // 2. 导出多个值
// var m1 = require('./m1.js')
// console.log(m1); // { val: 'val', foo: 'foo' }

// 3. 导出多个值简写
var m1 = require('./m1.js')
console.log(m1); // { val: 'val', foo: 'foo' }