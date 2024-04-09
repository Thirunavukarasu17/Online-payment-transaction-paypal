const PaymentService = require("../services/PaymentService");

const createCustomer = async (req, res) => {
  try {
    const resp = await PaymentService.makePayment(req.body);
    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const createSubscriptions = async (req, res) => {
  try {
    const resp = await PaymentService.createSubscriptions(req.body);
    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const updateSubscriptions = async (req, res) => {
  try {
    const resp = await PaymentService.updateSubscriptions(req.body);
    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const cancelSubscription = async (req, res) => {
  try {
    const resp = await PaymentService.cancelSubscription(req.body);
    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const paypalWebHook = async (req, res) => {
  try {
    const resp = await PaymentService.paypalWebHook(req.body);
    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const executePaymentSubscriptions = async (req, res) => {
  try {
    const resp = await PaymentService.executePaymentSubscriptions(req.body);
    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = {
  createCustomer,
  createSubscriptions,
  updateSubscriptions,
  cancelSubscription,
  paypalWebHook,
  executePaymentSubscriptions,
};
