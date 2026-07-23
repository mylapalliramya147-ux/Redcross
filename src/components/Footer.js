import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/logo.svg" 
                alt="Red Cross Logo" 
                className="footer-logo-img"
              />
              <h3>APRedcross</h3>
            </div>
            <p className="footer-description">
              The AP Red Cross Society is a humanitarian organization that provides 
              emergency assistance, disaster relief, and education in communities 
              affected by natural and man-made disasters.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><a href="/services">Disaster Relief</a></li>
              <li><a href="/services">Blood Donation</a></li>
              <li><a href="/services">First Aid Training</a></li>
              <li><a href="/services">Emergency Response</a></li>
              <li><a href="/services">Community Health</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                123 Red Cross Road, Hyderabad, Telangana
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +91 1234 567 890
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                info@apredcross.org
              </p>
              <p>
                <i className="fas fa-clock"></i>
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} APRedcross. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;