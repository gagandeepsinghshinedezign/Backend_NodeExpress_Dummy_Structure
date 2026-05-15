const bcrypt = require('bcrypt');


function generatePassword(password) {
    try {
        const saltRounds = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, saltRounds)

        return hashPassword
    } catch (error) {
        console.log("Error in generate hash pasword:", error)
    }
}

function comparePassword(password, hashPassword) {

    try {
        const comparePassword = bcrypt.compareSync(password, hashPassword)
        return comparePassword
    } catch (error) {
        console.log("Error in compare password:", error)
    }

}


module.exports = { generatePassword, comparePassword }