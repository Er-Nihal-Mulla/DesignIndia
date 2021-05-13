import React from "react";
import abtright from "../images/abt-right.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
      <div className="row">
          <div className="col-6 p-25">
          <h3>About Us</h3>
          <h1>WelCome To <br></br> DesignIndia</h1>
        <p>
          Design India is a fashion business creating beautiful collections
          since its early inception in 2021 supplying retail and wholesale.{" "}
        </p>
        <div className="about__btn">
          <a href="/" className="btn btn-smart">
            Know More
          </a>
        </div>
          </div>
          <div className="col-6">
              <div className="about__img">
                  <img src={abtright} alt="abt" />
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default About;
