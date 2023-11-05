// 创建http服务器 接收请求-返回响应-断开连接
// 处理响应数据格式
// 处理客户端不同的请求方法

var http = require('http')

var router = require('./router')
// 创建实例
var server = http.createServer()
// 监听端口
server.listen(8080, function() {
  console.log('http:127.0.0.1:8080');
})

server.on('request', function(req, res) {
  router(req, res)
})