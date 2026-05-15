const { Roles } = require("../constants/global");
const { statusCode } = require("../constants/statusCode");


const isAdmin = (req, res, next) => {
    try {
        const user = req.decode;
        if (user.role.name == Roles.Admin.name) {
            next();
            return;
        }
        return res.status(statusCode.BAD_REQUEST).send({ message: "Unauthorized" })
    } catch (error) {
        console.log("Error in role:", error)
    }
}

module.exports = isAdmin 