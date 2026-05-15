const { Roles } = require("../constants/global")
const RoleModel = require("../databaseModels/Role/roles")


async function createRole() {
    try {

        for (const key in Roles) {
            const r = await RoleModel.findOne({ name: Roles[key].name })
            if (!r) {
                await RoleModel.create({ name: Roles[key].name, displayValue: Roles[key].displayValue })
            }
        }
        return "Done"
    } catch (error) {
        console.log("Error in seeder creating role:", error)
        return Promise.reject(error)
    }
}

module.exports = { createRole }