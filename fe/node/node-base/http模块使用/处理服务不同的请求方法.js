// 创建http服务器 接收请求-返回响应-断开连接
// 处理响应数据格式
// 处理客户端不同的请求方法

var http = require('http')
var fs = require('fs')
var url = require('url')
// 创建实例
var server = http.createServer()
// 监听端口
server.listen(8080, function() {
  console.log('http:127.0.0.1:8080');
})

server.on('request', function(req, res) {
  if (req.method === 'GET') {
    // 访问http://127.0.0.1:8080/user?id=123
    console.log(req.url); // /user?id=123
    console.log(url.parse(req.url, true).query.id); // 123
    
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
  } else if (req.method === 'POST') {
    // 处理post请求
  }
  
})