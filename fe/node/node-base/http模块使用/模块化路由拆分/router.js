var fs = require('fs')
var url = require('url')
var controller = require('./controller')
module.exports = (req, res) => {
  if (req.method === 'GET') {
    // 访问http://127.0.0.1:8080/user?id=123
    console.log(req.url); // /user?id=123
    console.log(url.parse(req.url, true).query.id); // 123
    
    if (req.url === '/') {
      controller.index(req, res)
    } else {
      fs.readFile('./dog.webp', function(err, data) {
        res.end(data)
      })
    }
  } else if (req.method === 'POST') {
    // 处理post请求
    var data = ''
    req.on('data', function(d) {
      // d是buffer
      data += d
    })
    req.on('end', function() {
      controller.user(require('querystring').parse(data), res)
    })
    res.end()
  }
}