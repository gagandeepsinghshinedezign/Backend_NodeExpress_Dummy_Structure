const profileStatus = {
    Active: "Active",
    Inactive: "Inactive",
    Suspended: "Suspended"
}

const accountType = {
    Email: "Email",
    Phone: "PhoneNumber",
    Google: "Google",
    Facebook: "Facebook",
    Apple: "Apple"

}

const otpTypes = {
    Signup: "Signup",
    Signin: "Signin",
    ResetPassword: "ResetPassword",
    VerifyEmail: "VerifyEmail",
    TwoFactorAuth: "TwoFactorAuth",
    DeleteAccount: "DeleteAccount"
}

module.exports = { profileStatus, accountType, otpTypes }