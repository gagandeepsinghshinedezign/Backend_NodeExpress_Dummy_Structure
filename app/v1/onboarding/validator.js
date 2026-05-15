const { body, validationResult } = require('express-validator')

function validator(req, res, next) {

    console.log("req  in validator--->", req.body)

    const error = validationResult(req.body)
    console.log("Error in validator:", error)

    if (!error.isEmpty()) {

        return res.status(400).json({ message: error.errors[0].msg })
    }
    next()

}


module.exports = {
    /**
     * @description signup validator
     */

    validateSignup: [
        body('firstName')
            .isEmpty()
            .withMessage("Firstname is required."),


        body('email')
            .isEmpty()
            .withMessage('Email is required.')
            .custom((value) => {
                const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                if (!isEmail) {
                    throw new Error("Must be a valid email")
                }

                return true
            }),

        body('password')
            .isEmpty()
            .withMessage('Password is required.')
        ,

        body('confirmPassword')
            .isEmpty()
            .withMessage('Confirm password is required.')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Password and confirm password are not same')
                }
                return true

            }),
        validator
    ]


}