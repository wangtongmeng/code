const {User} = require('../model/index')
const jwt = require('jsonwebtoken')
const {createToken} = require('../util/jwt')

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
exports.list = async (req, res) => {
  res.send('/users')
}

exports.delete = async (req, res) => {

}