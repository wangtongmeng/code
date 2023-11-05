const fs = require('fs')
// 直接覆盖
// fs.writeFile('./a.txt', 'bbbb', function(err) {
//   console.log(err);
// })

// 追加内容
fs.readFile('./a.txt', 'utf8', function (err, data) {
  if (!err) {
    let newData = data + '8888'
    fs.writeFile('./a.txt', newData, function(err) {
      if (!err) {
        console.log('追加成功');
      }
    })
  }
})