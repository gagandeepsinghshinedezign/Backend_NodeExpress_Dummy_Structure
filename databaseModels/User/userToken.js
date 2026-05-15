const mongoose = require('mongoose')
const { otpTypes } = require('../../constants/enum')

const userTokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    token: { type: String, required: true, trim: true },
    type: { type: String, enum: [...Object.values(otpTypes)], required: true }
}, { timestamp: true })

const UserTokenModel = mongoose.model('usertoken', userTokenSchema)

module.exports = UserTokenModel