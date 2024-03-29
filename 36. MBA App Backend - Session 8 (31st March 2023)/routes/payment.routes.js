const paymentController = require("../controllers/payment.controller")
const {verifyToken} = require('../middlewares/authjwt');
const { verifyPaymentReqBody } = require("../middlewares")

module.exports = function (app) {
    app.get("/mba/api/payements", [verifyToken], paymentController.getAllpayments);
    app.get("/mba/api/payments/:id", [verifyToken], paymentController.getPaymentById);
    app.post("/mba/api/payments", [verifyToken, verifyPaymentReqBody.validatePaymentRequestBody ], paymentController.createPayment)
}