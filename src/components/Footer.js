import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_text">
          <h1>Contact Us</h1>
          <p>office@designindia.co.in 09876 543210</p>
        </div>
        <div className="footer__social">
          <ul className="contactCircles">
            <li>
              <a href="https://www.facebook.com/nihal.mulla.18659">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/b659d2adcb8746a">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://github.com/Mr-Nihal-Mulla">
                <FaGithubAlt />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sw_engineer_nihalmulla/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
