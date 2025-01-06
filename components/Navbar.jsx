import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import Weather from './Weather';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Log In button clicked!');
    // Navigate to the Login page
    navigate('/login');
  };

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
        <button onClick={handleClick}>Log In</button>
        <div className='weather'>
        <Weather /> {/* Integrating the Weather component */}

      </div>
      </div>
     
    </nav>
    
  );
};

export default Navbar;
