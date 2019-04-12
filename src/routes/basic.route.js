const express = require('express')

const router = express.Router()
const basicController = require('../controllers/basic.controller')

router.get('/', basicController.hello)

module.exports = router
