const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
  res.send('/index')
})
router.get('/users', (req, res) => {
  res.send('/users')
})

module.exports = router