var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000

// 应用级别中间件
// app.use((req, res, next) => {

// })

// 路由级别中间件
// app.get('/user', (req, res, next) => {

// })

// 写在路由方法里的中间件
// app.get('/user', (req, res, next) => {
//   console.log('1');
//   next()
// },(req, res, next) => {
//   console.log('2');
//   next()
// }, function(req, res) {
//   console.log('1');
//   res.send('1')
// })

// 通过路由实例，使用路由中间件
// const router = express.Router() // 方便拆分文件 路由相关的放在router/index.js module.exports = router
// router.get('/', (req, res, next) => {
//   console.log(req.method);
//   res.send('/index')
// })
// router.get('/users', (req, res) => {
//   console.log(req.method);
//   res.send('/users')
// })
// // app.use(router) // 使用路由中间件
// app.use('/user', router) // 添加路由前缀

// 路由拆分
const userRouter = express.Router() // router/index.js  module.exports = router
userRouter.get('/', (req, res) => res.send('/index'))
userRouter.get('/users', (req, res) => res.send('/users'))
const videoRouter = express.Router() // router/video.js  module.exports = router
videoRouter.get('/', (req, res) => res.send('/index'))
videoRouter.get('/list', (req, res) => res.send('/videoList'))
app.use('/user', userRouter) // 主文件注册
app.use('/video', videoRouter)



app.get('/error', (req, res) => {
  JSON.parse('(') // 中间发生错误
  res.send('error')
})

// 通过中间件，处理路由匹配不到的情况 404
app.use((req, res, next) => {
  res.status(404).send('404 Not Found')
})
// 四个参数时，表示错误中间件
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('service error')
})

// express内置中间件
// https://expressjs.com/zh-cn/4x/api.html

// 第三方中间件
// https://expressjs.com/en/resources/middleware.html


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
