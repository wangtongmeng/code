const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')

router.get('/', (req, res) => {
  res.send('/index')
})
router
.post(
  '/register',
validator.register, // 使用中间件校验
userController.register
)
.get('/list', userController.list)
.delete('/', userController.delete)

module.exports = router