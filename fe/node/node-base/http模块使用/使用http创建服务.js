// 创建http服务器 接收请求-返回响应-断开连接
// 处理响应数据格式
// 处理客户端不同的请求方法

var http = require('http')
var fs = require('fs')
// 创建实例
var server = http.createServer()
// 监听端口
server.listen(8080, function() {
  console.log('http:127.0.0.1:8080');
})

server.on('request', function(req, res) {
  // res.write('ok') // 写入响应数据

  // 处理响应数据格式
  // 1.中文
  // res.setHeader('Content-type', 'text/plain;charset=utf-8') // text/plain 纯文本  charset=utf-8 字符集 utf-8
  // res.write('你好') // 写入响应数据
  
  // 2.有html标签
  // res.setHeader('Content-type', 'text/html;charset=utf-8') // text/html 文本/子类型是html  charset=utf-8 字符集 utf-8
  // res.write('<h1>你好</h1>')
  // res.end() // 断开连接

  // 3.读取外部html文件并返回
  // fs.readFile('./index.html', 'utf-8', function(err, data) {
  //   // 因为在html文件中，有文件的格式生命，所以不需要再通过header设置返回内容格式了
  //   res.write(data)
  //   res.end()
  // })

  // 4.处理不同请求，返回不同内容
  if (req.url === '/') {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
      res.write(data)
      res.end()
    })
  } else {
    fs.readFile('./dog.webp', function(err, data) {
      res.end(data)
    })
  }
})