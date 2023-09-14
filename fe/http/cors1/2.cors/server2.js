let express = require('express')
let app = express()

let whiteList = ['http://localhost:3000']
app.use(function(req, res, next) {
  let origin = req.headers.origin
  if (whiteList.includes(origin)) {
    // 设置哪些源访可以问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪些头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name') // 设置多个 'name, age'
    // 允许携带哪些方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 允许前端获取哪个头
    res.setHeader('Access-Control-Expose-Headers', 'name')
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6) // 设置6s内不重复发options请求
    if (req.method === 'OPTIONS') {
      res.end() // options请求不做任何处理
    }
  }
  next()
})

app.use(express.static(__dirname))

app.get('/getData', function (req, res) {
  console.log(req.headers);
  res.end('4000服务接口数据')
})
app.put('/getData', function (req, res) {
  res.setHeader('name', 'zhaoliu')
  console.log(req.headers);
  res.end('4000服务接口数据')
})

app.listen(4000)