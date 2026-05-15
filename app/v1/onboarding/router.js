const express = require('express')
const { validateSignup } = require('./validator')
const controller = require('./controller')

const router = express.Router()

router.post("/signup", validateSignup, controller.signup)

module.exports = router