import React from "react";
import serv3left from "../../images/serv3-left.png";

const Services3 = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>Sales Assist .</h3>
            <p>
              Do you have a product with a proven track record? Good social
              media presence? We offer sales assist training to provide you with
              the skills & processes to generate those much needed sales for
              your business. .{" "}
            </p>
            <div className="service__btn">
              <a href="/" className="btn btn-smart">
                Enquire Now
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="service__img">
              <img src={serv3left} alt="abt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services3;
