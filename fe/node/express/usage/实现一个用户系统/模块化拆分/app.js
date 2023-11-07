const fs = require('fs')
const express = require('express')
const { promisify } = require('util')
const readFile = promisify(fs.readFile) // 把回调式api转成promise式api
const writeFile = promisify(fs.writeFile)

const app = express()
app.use(express.urlencoded()) // 处理post请求，请求体格式是'content-type'是 'application/x-www-form-urlencoded'的格式
app.use(express.json()) // 处理post请求，请求体格式是content-type是application/json的格式
let db = require('./db')


// app.get('/', function (req, res) {
//   fs.readFile('./db.json', 'utf8', function (err, data) {
//     if (!err) {
//       // 处理数据
//       var back = JSON.parse(data)
//       res.send(back.users)
//     } else {
//       // 处理错误
//       res.status(500).json({err})
//     }
//   })
// })

app.get('/', async function (req, res) {
  try {
    let back = await db.getDb()
    // 处理数据
    res.send(back.users)
  } catch (err) {
    // 处理错误
    res.status(500).json({ err })
  }
})

app.post('/', async function (req, res) {
  let body = req.body
  if (!body) {
    res.status(403).json({
      error: '缺少用户信息'
    })

  }
  let jsonObj = await db.getDb()
  body.id = jsonObj.users[jsonObj.users.length - 1].id + 1
  jsonObj.users.push(body)
  try {
    let w = await db.serveDb(jsonObj)
    if (!w) {
      res.status(200).send({
        msg: '添加成功'
      })
    }
  } catch (error) {
    res.status(500).json({
      error
    })
  }
})

app.put('/:id', async (req, res) => {
  try {
    let userInfo = await db.getDb()
    let userId = Number.parseInt(req.params.id)
    let user = userInfo.users.find(item => item.id === userId)
    if (!user) {
      res.status(403).json({
        error: '用户不存在'
      })
    }
    const body = req.body
    user.username = body.username ? body.username : user.username
    user.age = body.age ? body.age : body.age
    userInfo.users[userId - 1] = user
    if (!await db.serveDb(userInfo)) {
      res.status(201).json({
        msg: '修改成功'
      })
    }
  } catch (error) {
    res.status(500).json({error})
  }
})


app.listen(3000, () => {
  console.log('run http://127.0.0.1:3000');
})