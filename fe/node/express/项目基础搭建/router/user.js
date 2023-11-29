const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')

router.get('/', (req, res) => {
  res.send('/index')
})
router
.post('/register',validator.register,userController.register) // validator.register 使用中间件校验
.post('/login', validator.login, userController.login)
.get('/list', userController.list)
.delete('/', userController.delete)

module.exports = router