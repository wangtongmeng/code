const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
router.get('/', (req, res) => {
  res.send('/index')
})
router
.get('/list', userController.list)
.delete('/', userController.delete)

module.exports = router