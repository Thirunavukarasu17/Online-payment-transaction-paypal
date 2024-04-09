const express = require("express");
const {
  createCustomer,
  createSubscriptions,
  executePaymentSubscriptions,
  cancelSubscription,
  updateSubscriptions,
} = require("../controllers/paymentsController");
const HandleErrors = require("../middlewares/handleErrors");

const paymentRoutes = express.Router();


paymentRoutes.post("/create-payment", HandleErrors(createCustomer));
paymentRoutes.post("/create-subscription", HandleErrors(createSubscriptions));
paymentRoutes.post("/update-subscription", HandleErrors(updateSubscriptions));
paymentRoutes.post("/cancel-subscription", HandleErrors(cancelSubscription));
paymentRoutes.post(
  "/execute-subscription",
  HandleErrors(executePaymentSubscriptions)
);
paymentRoutes.post("/paypal-webhook", HandleErrors(executePaymentSubscriptions));

module.exports = paymentRoutes;
