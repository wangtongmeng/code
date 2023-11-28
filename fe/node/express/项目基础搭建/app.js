const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const router = require('./router')

const PORT = process.env.PORT || 3000

// 解析客户端请求中间件
app.use(express.json())
app.use(express.urlencoded())
// 跨域
app.use(cors())
// 日志
app.use(morgan('dev')) // 开发环境记录日志

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
})