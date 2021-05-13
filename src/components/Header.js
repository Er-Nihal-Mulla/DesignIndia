import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Est. 2021</h3>
            <h1>DesignIndia</h1>
            <p>
              Designed to make the wearer feel glamorous to explore and express
              their own sense of style.
            </p>
          </div>
          <div className="banner__btn">
            <a href="/" className="btn btn-smart">
              Hire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
