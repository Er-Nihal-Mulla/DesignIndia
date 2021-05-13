import React from "react";
import serv2right from "../../images/serv2-right.png";

const Services2 = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="service__img">
              <img src={serv2right} alt="abt" />
            </div>
          </div>

          <div className="col-6 p-25">
            <h3>Start Up Assist.</h3>
            <p>Start Up Assist… Take your ideas to reality. </p>
            <div className="service__btn">
              <a href="/" className="btn btn-smart">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
