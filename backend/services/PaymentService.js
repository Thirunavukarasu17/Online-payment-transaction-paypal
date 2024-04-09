const { IProduct, ResponseObject } = require("../interfaces/commonInterfaces");
const { v4: uuidv4 } = require("uuid");
const paypal = require("paypal-rest-sdk");

// Set up PayPal SDK
//const clientId = 'AWZ0DzFX5A7uwLMtsclxrUiLYn7KZd02cSAUJRjD6vb7o4I2smMLBe5vZ3tXUgP-78IghPklRgdOM5R2';
//const clientSecret = 'ELeINHX-zxZbzP3-59n7LDHzwyJqjo_U4mktstetzERR3fOLA7HiiUuakgjf1xndpV5wQPfbTTQ-5d51';

//const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
//const client = new paypal.core.PayPalHttpClient(environment);



paypal.configure({
  mode: "sandbox",
  client_id: 'AWZ0DzFX5A7uwLMtsclxrUiLYn7KZd02cSAUJRjD6vb7o4I2smMLBe5vZ3tXUgP-78IghPklRgdOM5R2',
  client_secret: 'ELeINHX-zxZbzP3-59n7LDHzwyJqjo_U4mktstetzERR3fOLA7HiiUuakgjf1xndpV5wQPfbTTQ-5d51',
});

class PaymentService {
  constructor() {
    /**
     * Standard response object
     */
    this.response = undefined;
  }

  /*
    Make Payments
   */

  async makePayment(product) {
    try {
      // For single Charge
      const createPaymentJson = {
        intent: "sale",
        payer: {
          payment_method: "paypal",
        },
        redirect_urls: {
          return_url: "http://return.url",
          cancel_url: "http://cancel.url",
        },
        transactions: [
          {
            item_list: {
              items: [
                {
                  name: product.name ? product.name : "item",
                  sku: "item",
                  price: product.price.toString(),
                  currency: "USD",
                  quantity: product.quantity ? product.quantity : 1,
                },
              ],
            },
            amount: {
              currency: "USD",
              total: "1.00",
            },
            description: product.description,
          },
        ],
      };

      paypal.payment.create(createPaymentJson, function (error, payment) {
        if (error) {
          throw error;
        } else {
          console.log("Create Payment Response");
          console.log(payment);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  /*
    Subscription Payments
   */

  async createSubscriptions(payload) {
    try {
      const billingPlanAttribute = {
        name: "botle",
        price: 300,
        description: "This is my new Product",
        quantity: 1,
      };

      paypal.billingAgreement.create(
        billingPlanAttribute,
        function (error, billingAgreement) {
          if (error) {
            console.error(error);
          } else {
            console.log("billingAgreement", billingAgreement);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  /*
    Update Subscription
   */

  async updateSubscriptions(payload) {
    try {
      const billingPlanId = "21321323";
      const billingPlanAttribute = {};

      paypal.billingAgreement.update(
        billingPlanId,
        billingPlanAttribute,
        function (error, billingAgreement) {
          if (error) {
            console.error(error);
          } else {
            console.log("billingAgreement", billingAgreement);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  /*
    Cancel Subscription
   */

  async cancelSubscription(payload) {
    try {
      const billingAgreementId = "12345";

      const cancelNote = {
        note: "cancel the agreement",
      };

      paypal.billingAgreement.cancel(
        billingAgreementId,
        cancelNote,
        function (error, billingAgreement) {
          if (error) {
            console.error(error);
          } else {
            paypal.billingAgreement.get(
              billingAgreementId,
              function (error, billingAgreement) {
                if (error) {
                  console.error(error);
                  throw error;
                } else {
                  console.log("get subscription response", billingAgreement);
                }
              }
            );
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  /*
    Subscription Payment Execute
   */

  async executePaymentSubscriptions(payload) {
    try {
      const { token } = payload;
      paypal.billingAgreement.execute(payload, {});
    } catch (error) {
      console.error(error);
    }
  }

  /*
    Paypal Webhook
   */

  async paypalWebHook(payload) {
    try {
      const { token } = payload;
      const webhook = paypal.notification.webhook;
      console.log("webhook", webhook);
    } catch (error) {
      console.error(error);
    }
  }

  /*
    Refund Payments
   */

  async refundPayment(payload) {
    try {
      const paymentId = "12324";
      const data = {
        amount: {
          total: "300",
          currency: "USD",
        },
      };

      paypal.sale.refund(paymentId, data, function (error, refund) {
        if (error) {
          console.error(error);
        } else {
          console.log(refund);
          return { isError: false, error };
        }
      });

      // paypal.refund.get(id,);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new PaymentService();
