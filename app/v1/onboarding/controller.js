const { otpTypes } = require("../../../constants/enum")
const { Roles } = require("../../../constants/global")
const { statusCode } = require("../../../constants/statusCode")
const RoleModel = require("../../../databaseModels/Role/roles")
const UserModel = require("../../../databaseModels/User/user")
const UserTokenModel = require("../../../databaseModels/User/userToken")
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

            if (isUserExist) {
                return res.status(statusCode.BAD_REQUEST).send({ message: "User with email id already exist." })
            }

            let role = await RoleModel.findOne({ name: Roles.User.name })
            // let role = "user"

            let hashPassword = generatePassword(password);

            let user = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashPassword,
                roleId: role?._id,
                account: type
            }

            let createdUser = await UserModel.create(user);

            let otp = randomOTP(4)

            console.log("otp--->", otp)
            createdUser.otp = otp
            console.log("createdUser--->", createdUser)
            const tokenDetail = {

                token: otp,

            }

            await UserTokenModel.findOneAndUpdate(
                { userId: createdUser._id, type: otpTypes.Signup }, // filter

                tokenDetail,                 // update data

                { new: true, upsert: true }  // options
            )

            return res.status(statusCode.CREATED).send({ data: createdUser, message: "User created successfully." })

        } catch (error) {
            console.log("Error in sign up:", error)
        }
    }
}