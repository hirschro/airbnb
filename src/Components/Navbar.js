import React from 'react';
import AirbnbLogo from "../images/airbnb1.png";

import "../styles.css";

export default function Navbar() {
  return(
    <nav>
      <img src={AirbnbLogo} className="nav--logo" alt="airbnb logo" />
    </nav>
  ) 
}