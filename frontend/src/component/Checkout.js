//import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [product] = useState({
    name: "SAMPLE PRODUCT-1",
    price: 300,
    description: "This is my new Product",
    quantity: 1,
  });

  const [show, setShow] = useState(false);

  // const checkoutApi = async() => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:4000/payments/create-payment`,
  //       product
  //     );
  //     console.log("response", response);
  //     navigate("/paypal");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="container">
      <div className="container mt-5 mx-auto col-6  ">
        <h4> Checkout Form </h4>
        <div
          className={
            show
              ? "col-sm-6 text-center    text-center  shadow-lg"
              : "text-center col-sm-6 text-center  "
          }
        >
          <div className="card">
            <div className="card-body">
              <div
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                <h6>Product : {product.name}</h6>
                <h6>price :  $ {product.price}</h6>
                <h6>description : {product.description}</h6>
                <h6>quantity : {product.quantity}</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 ">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/place-order")}
          >
            {/* <Link to="/paypal"> Checkout </Link> */}
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
