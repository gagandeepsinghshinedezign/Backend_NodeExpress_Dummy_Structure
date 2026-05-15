const { Roles } = require("../../../constants/global")
const { statusCode } = require("../../../constants/statusCode")
const UserModel = require("../../../databaseModels/User/user")
const { generatePassword } = require("../../../helper/bcrypt")
const { randomOTP } = require("../../../helper/common")


module.exports = {
    /**
     * @description : sign up 
     */

    signup: async (req, res) => {
        try {

            const { firstName, lastName, email, password, type } = req.body

            const isUserExist = await UserModel.findOne({ email: email })
            console.log("in signup")

            // if (isUserExist) {
            //     return res.status(statusCode.BAD_REQUEST).send({ message: "User with email id already exist." })
            // }

            // let role = Roles.User.name

            // let hashPassword = generatePassword(password);

            // let user = {
            //     firstName: firstName,
            //     lastName: lastName,
            //     email: email,
            //     password: hashPassword,
            //     role: role,
            //     account: type
            // }

            // let createdUser = await UserModel.create(user);

            // let otp = randomOTP(4)

            // return res.status(statusCode.CREATED).send({ data: createdUser, message: "User created successfully." })

        } catch (error) {
            console.log("Error in sign up:", error)
        }
    }
}