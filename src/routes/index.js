const express = require('express')
const basicRoute = require('./basic.route')

const router = express.Router()

router.use('/', basicRoute)
module.exports = router
