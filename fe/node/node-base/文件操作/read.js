// 读取文件

var fs = require('fs')
fs.readFile('./a.txt', 'utf8', function (err, data) {
  console.log(err, data);
})