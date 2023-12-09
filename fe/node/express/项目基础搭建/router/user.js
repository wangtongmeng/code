const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')
const { verifyToken } = require('../util/jwt')
const multer = require('multer')
const upload = multer({dest: 'public/'})

router.get('/', (req, res) => {
  res.send('/index')
})
router
  .post('/register', validator.register, userController.register) // validator.register 使用中间件校验
  .post('/login', validator.login, userController.login)
  .get('/list', verifyToken, userController.list) // 用户列表接口，需要做登录认证
  .put('/', verifyToken, validator.update, userController.update) // 修改用户信息
  .post('/headimg', verifyToken, upload.single('headimg'), userController.headimg)
  .delete('/', userController.delete)

module.exports = router