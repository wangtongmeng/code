// 一个是应用级别的路径 app.get('/')
// 一个是通过路由实例 router.get('/')

var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000

// all方法，不关心方法，只要路径能匹配到就行
app.all('/xx', (req, res) => {
  res.send('xxx')
})

// 正则匹配
// // 匹配 /user /uer
// app.get('/us?er', (req, res) => {
//   res.send(`${req.method} -- ${req.url}`)
// })
// // 匹配 /user /ussser 等
// app.get('/us+er', (req, res) => {
//   res.send(`${req.method} -- ${req.url}`)
// })

// 获取路由动态参数
// app.get('/user/:id', (req, res) => {
//   console.log(req.params.id);
//   res.send(req.params.id)
// })

// 路由的链式调用
// app
// .get('/', (req, res) => {
//   res.send('/index')
// })
// .get('/video', (req, res) => {
//   res.send('/video')
// })

// 关于响应方法
app.get('/', (req, res) => {
  res.send('/index')
  // res.download() // 下载文件
  // res.end()
  // res.json() // json格式的响应数据
  // res.redirect() // 重定向
  // res.render() // 模板渲染
  // res.status() // 设置状态码
  // res.sendStatus() // 状态码和数据一起返回
  // 方法的链式调用
  // res.status(200).json({})
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
