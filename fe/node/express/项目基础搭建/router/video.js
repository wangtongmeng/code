const express = require('express')
const router = express.Router()
const videoController = require('../controller/videoController')
router.get('/', videoController.index)
router.get('/list', videoController.list)

module.exports = router