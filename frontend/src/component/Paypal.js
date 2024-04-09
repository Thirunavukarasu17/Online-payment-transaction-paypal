import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const Paypal = () => {
  const [product] = useState({
    name: "botle",
    price: 300,
    description: "This is my new Product",
    quantity: 1,
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const initialOptions = {
    "client-id": 'AWZ0DzFX5A7uwLMtsclxrUiLYn7KZd02cSAUJRjD6vb7o4I2smMLBe5vZ3tXUgP-78IghPklRgdOM5R2',
    currency: "USD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
  };

  const paypalCreateOrder = async (data, actions) => {
    console.log("paypalCreateOrderData-->>", data);
    // return order ID
    const CreateOrderResponse = await actions.order.create({
      purchase_units: [
        {
          // Send all kind of information Product
          product: product.name,
          amount: {
            value: product.price,
          },
          description: product.description,
          quantity: product.quantity,
          //   shipping: {
          //     name: {
          //       full_name: "John Doe",
          //     },
          //     address: {
          //       address_line_1: "1 Main St",
          //       admin_area_2: "San Jose",
          //       admin_area_1: "CA",
          //       postal_code: "95131",
          //       country_code: "US",
          //     },
          //   },
          payment_type: "single charge",
        },
      ],
    });

    console.log("response", CreateOrderResponse);
    return CreateOrderResponse;
  };

  const paypalOnApprove = async (data, actions) => {
    // return Payer Details
    const approveResponse = await actions.order.capture();

    // Execute Backend API to Save Data in Database

    console.log("response", approveResponse);
    setPaymentSuccess(true);
    return approveResponse;
  };

  return (
    <div>
      <div className="conrainer mx-auto mt-5 shadow-lg my-5 col-4 mt-5 mb-5">
        <div className=" mt-5 p-2">
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              createOrder={paypalCreateOrder}
              onApprove={paypalOnApprove}
              onError={(error) => error}
              style={{ layout: "vertical" }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      {paymentSuccess ? (
        <h3 className="text-success"> Payment Succesfully done ... </h3>
      ) : (
        ""      )}
    </div>
  );
};

export default Paypal;
