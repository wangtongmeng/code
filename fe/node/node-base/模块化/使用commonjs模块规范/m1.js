
// // 1.导出单个数据，通过module.exports导出，通过require引入
// var val = 'this is commonjs'
// module.exports = val

// 2. 导出多个值
// var val = 'val'
// var foo = 'foo'
// module.exports.val = val
// module.exports.foo = foo

// 3. 导出多个值简写
var val = 'val'
var foo = 'foo'
exports.val = val
exports.foo = foo