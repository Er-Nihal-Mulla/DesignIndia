import React from "react";
import serv1left from "../../images/serv1-left.png";

const Services1 = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>Wholesale Assist.</h3>

            <p>
              Want to take your business to the next level? Roll out your
              products in beautiful boutiques & stores. How to work out
              economies of scale, margins and most importantly how to create
              those critical contacts & customers.{" "}
            </p>
            <div className="service__btn">
              <a href="/" className="btn btn-smart">
                Enquire Now
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="service__img">
              <img src={serv1left} alt="abt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
