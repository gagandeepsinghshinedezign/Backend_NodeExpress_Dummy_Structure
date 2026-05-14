const jwt = require('jsonwebtoken')
const config = require('../config')

function generateToken(payload) {
    try {
        const token = jwt.sign(payload, config.env.jwtSecret)
        return token
    } catch (error) {
        console.log("Error in token signature:", error)
    }
}

function verifyToken(token) {
    try {

        const decode = jwt.verify(token, config.env.jwtSecret)
    } catch (error) {
        console.log("Error in token verification:", error)
    }
}


module.exports = {
    generateToken, verifyToken
}