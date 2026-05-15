const mongoose = require('mongoose')
const { profileStatus, accountType } = require('../../constants/enum')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trin: true, required: false },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    status: { type: String, enum: [...Object.values(profileStatus) || null], default: profileStatus.Active },
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'RoleModel' },
    account: { type: String, enum: [...Object.values(accountType) || null], }
}, { timestamp: true })

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel