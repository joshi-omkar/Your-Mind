import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => (
  <div className = "header">
      <h2>
        <Link to='/'><span>Mental Health Tracker</span></Link>
      </h2>
  </div>
)
export default Header;