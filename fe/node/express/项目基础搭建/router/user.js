const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')
const { verifyToken } = require('../util/jwt')

router.get('/', (req, res) => {
  res.send('/index')
})
router
  .post('/register', validator.register, userController.register) // validator.register 使用中间件校验
  .post('/login', validator.login, userController.login)
  .get('/list', verifyToken, userController.list) // 用户列表接口，需要做登录认证
  .delete('/', userController.delete)

module.exports = router