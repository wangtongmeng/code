const {User} = require('../model/index')
exports.register = async (req, res) => {
  console.log(req.body);
  const userModel = new User(req.body)
  const dbback = await userModel.save()
  res.status(201).json(dbback)
}

exports.list = async (req, res) => {
  res.send('/users')
}

exports.delete = async (req, res) => {

}