import React from "react";

const Product = () => {
  return (
    <div>
      <div>
        <h2> Your Cart </h2>
        <div className="container mt-5 mx-auto col-6">
          <div className="col-sm-6">
            <div className="card">
              <h4> you have 1 item </h4>
              <div className="card-body">
                <h5 className="card-title"> Sample -1</h5>
              </div>
            </div>

            <div>
              <button className="btn">Buy</button>
            </div>
          </div>
          <div className="mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
