const { profileStatus } = require("../constants/enum")
const { statusCode } = require("../constants/statusCode")
const UserModel = require("../databaseModels/User/user")
const { verifyToken } = require("../helper/jwt")


async function verifyJwtToken(req, res, next) {
    try {

        const token = req.header.token || req.header("Authorization")
        if (!token) {
            return res.status(statusCode.UNAUTHORIZED).send({ message: "Unauthorized." })
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length)
        }

        let { err, result } = verifyToken(token)

        if (err) {
            return res.status(statusCode.UNAUTHORIZED).send({ message: "Unauthorized." })
        }

        const tokenUser = await UserModel.findById(result?.id).populate('roles')

        if (!tokenUser) {
            return res.status(statusCode.UNAUTHORIZED).send({ message: "Unauthorized." })
        }

        if (tokenUser.status == profileStatus.Inactive) {
            return res.status(statusCode.UNAUTHORIZED).send({ message: "Please contact with admin." })
        }
        req.decode = tokenUser;
        next();

    } catch (error) {
        console.log("Error in verifyToken middleware:", error)

        return res.status(statusCode.BAD_REQUEST).send({ message: error?.message })

    }
}

module.exports = { verifyJwtToken }