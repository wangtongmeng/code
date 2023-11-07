const fs = require('fs')
const express = require('express')
const { promisify } = require('util')
const readFile = promisify(fs.readFile) // 把回调式api转成promise式api
const writeFile = promisify(fs.writeFile)

const app = express()
app.use(express.urlencoded()) // 处理post请求，请求体格式是'content-type'是 'application/x-www-form-urlencoded'的格式
app.use(express.json()) // 处理post请求，请求体格式是content-type是application/json的格式


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
    let back = await readFile('./db.json', 'utf8')
    // 处理数据
    res.send(JSON.parse(back).users)
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
  let back = await readFile('./db.json')
    const jsonObj = JSON.parse(back)
    body.id = jsonObj.users[jsonObj.users.length - 1].id + 1
    jsonObj.users.push(body)
    try {
      let w = await writeFile('./db.json', JSON.stringify(jsonObj))
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


app.listen(3000, () => {
  console.log('run http://127.0.0.1:3000');
})