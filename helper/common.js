

/**
 * @description: generate random OTP
 */

function randomOTP(length, isOtp = "true") {

    let otpString = isOtp ? "0123456789" : "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let result = ''
    let counter = 0

    while (counter < length) {
        result += otpString.charAt(Math.floor(Math.random() * otpString.length))
        counter++
    };

    return result


}

module.exports = { randomOTP }