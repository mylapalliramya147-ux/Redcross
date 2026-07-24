import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Indian Red Cross Society" className="footer-logo-img" />
            <span className="footer-logo-text">APREDCROSS</span>
          </div>
          <p className="footer-description">
            Dedicated to providing humanitarian aid and saving lives through blood donation, 
            disaster relief, and emergency response services.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="footer-contact">
            <p><i className="fas fa-map-marker-alt"></i> 123 Red Cross Road, Hyderabad, Telangana 500001</p>
            <p><i className="fas fa-phone"></i> +91 1234 567 890</p>
            <p><i className="fas fa-envelope"></i> info@apredcross.org</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AP Red Cross Society. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;