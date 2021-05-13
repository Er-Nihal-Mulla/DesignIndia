import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <h3>Design<span>India</span></h3>
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Brands</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="" className="navbar__last-child">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
