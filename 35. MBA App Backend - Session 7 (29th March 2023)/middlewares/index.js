const verifyMovieReqBody = require("./verifyMovieReqBody");
const verifyTheatreReqBody = require("./validateTheatreReqBody");
const authJwt = require("./authjwt");
const verifyUserReqBody = require("./validateUserReqBody");
const verifyBookingReqBody = require("./verifyBookingReqBody");
const verifyPaymentReqBody = require("./verifyPaymentReqBody");
module.exports = { 
    verifyMovieReqBody,
    verifyTheatreReqBody,
    authJwt,
    verifyUserReqBody,
    verifyBookingReqBody, 
    verifyPaymentReqBody
}