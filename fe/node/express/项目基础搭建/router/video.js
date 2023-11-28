const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
  res.send('/index')
})
router.get('/list', (req, res) => {
  res.send('/list')
})

module.exports = router