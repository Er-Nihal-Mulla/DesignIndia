import React from "react";
import brndleft from "../images/brnd-left.png";

const Brands = () => {
  return (
    <div className="brand">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="brand__img">
              <img src={brndleft} alt="abt" />
            </div>
          </div>

          <div className="col-6 p-25">
            <h3>Our Brands</h3>
            <h1>
              WelCome To <br></br> DesignIndia
            </h1>
            <p>
              Design India it's unique brands for the purpose of
              retail & wholesale.
            </p>
            <div className="brand__btn">
              <a href="/" className="btn btn-smart">
                Know Brands
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
