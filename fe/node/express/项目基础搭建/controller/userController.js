const {User} = require('../model/index')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const {promisify}  = require('util')
const {createToken} = require('../util/jwt')
const rename = promisify(fs.rename)

// 用户注册
exports.register = async (req, res) => {
  console.log(req.body);
  const userModel = new User(req.body)
  const dbback = await userModel.save()
  res.status(201).json(dbback)
}
// 用户登录
exports.login = async (req, res) => {
  // 客户端数据验证
  // 连接数据库查询
  let dbBack = await User.findOne(req.body)
  if (!dbBack) {
    res.status(402).json({error: '邮箱或密码不正确'})
  }
  
  dbBack = dbBack.toJSON()
  // dbBack.token = jwt.sign(dbBack, '83d04a25-4be9-46ea-aa08-760b4bc55276')
  dbBack.token = await createToken(dbBack)
  res.status(200).json(dbBack)
}

exports.update = async (req, res) => {
  console.log('1',req);
  let dbBack = await User.findByIdAndUpdate(req.user.userInfo._id, req.body, {new: true})
  res.status(202).json({user: dbBack})
}

// 用户列表
exports.list = async (req, res) => {
  res.send('/users')
}

exports.delete = async (req, res) => {

}

// 用户头像上传
exports.headimg = async (req, res) => {
  console.log('1', req.file);
  // {
  //   fieldname: 'headimg',
  //   originalname: 'dog.jpeg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: 'public/',
  //   filename: 'a9ea77fbe1dc536b6b743e87089abf1f',
  //   path: 'public/a9ea77fbe1dc536b6b743e87089abf1f',
  //   size: 233181
  // }
  const fileArr = req.file.originalname.split('.')
  const filetype = fileArr[fileArr.length - 1]
  try {
    await rename('./public/' + req.file.filename, `./public/${req.file.filename}.${filetype}`)
    res.status(201).json({filepath: req.file.filename + '.' + filetype})
  } catch(error) {
    res.status(500).json({err: error})
  }
}