const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
}, { timestamp: true })

const Roles = mongoose.model('Roles', RoleSchema)

module.exports = Roles