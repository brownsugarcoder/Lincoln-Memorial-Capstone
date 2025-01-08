// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We'll create this CSS file next

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are passionate about providing unforgettable tours and experiences.
            Join us to explore the best destinations with expert guides.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/about">History</a></li>
            <li><a href="/plantrip">Plan Trip</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><i className="ri-map-pin-line"></i> 123 Travel Lane, Washington, DC</p>
          <p><i className="ri-phone-line"></i> +1 (234) 567-8901</p>
          <p><i className="ri-mail-line"></i> info@travelagency.com</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
