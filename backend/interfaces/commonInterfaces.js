// ResponseObject interface
const ResponseObject = {
    success: false,
  };
  
  // ICreteCustomerPayload interface
  const ICreteCustomerPayload = {
    product: {},
    token: {},
  };
  
  // IProduct interface
  const IProduct = {
    name: "",
    price: 0,
  };
  
  // Card interface
  const Card = {
    id: "",
    object: "",
    address_city: "",
    address_country: "",
    address_line1: "",
    address_line1_check: "",
    address_state: "",
    address_zip: "",
    address_zip_check: "",
    brand: "",
    country: "",
    cvc_check: "",
    exp_month: 0,
    exp_year: 0,
    funding: "",
    last4: "",
    name: "",
  };
  
  // IToken interface
  const IToken = {
    id: "",
    object: "",
    card: Card,
    client_ip: "",
    created: 0,
    email: "",
    livemode: false,
    type: "",
    used: false,
    currency: "",
    description: "",
    default_source: "",
  };
  
  // Augment Express Request interface
  const Express = {
    Request: {
      rawBody: null,
    },
  };
  