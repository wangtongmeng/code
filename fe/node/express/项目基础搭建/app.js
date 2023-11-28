const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

const usersRouter = require('./router/users')
const videoRouter = require('./router/video')

app.use('/user', usersRouter)
app.use('/video', videoRouter)

// 解析客户端请求中间件
app.use(express.json())
app.use(express.urlencoded())
// 跨域
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
})