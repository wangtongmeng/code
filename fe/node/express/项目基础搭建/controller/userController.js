const {User} = require('../model/index')
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
  const dbBack = await User.findOne(req.body)

  res.status(200).json(dbBack)
}
exports.list = async (req, res) => {
  res.send('/users')
}

exports.delete = async (req, res) => {

}