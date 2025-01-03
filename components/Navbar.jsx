import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">History</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/plantrip">Plan Trip</Link></li>
          <li><a href="#Sample">Sample</a></li>
        </ul>
        <button>Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
