import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Column 1 - Logo & About */}
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img 
              src="/indian-red-cross.png" 
              alt="Indian Red Cross Society Logo" 
              className="footer-logo-img"
              onError={(e) => {
                e.target.src ='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Indian_Red_Cross_Society_Logo.png/120px-Indian_Red_Cross_Society_Logo.png';
              }}
            />
            <div className="footer-logo-text-wrapper">
            <span className="footer-logo-text">APREDCROSS</span>
            </div>
          </div>
          <p className="footer-description">
            The AP Red Cross Society is a humanitarian organization dedicated to providing emergency assistance, 
            disaster relief, and education in communities across Andhra Pradesh. We work tirelessly to save lives 
            and support those in need.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-heading-underline"></div>
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Services
                </a>
              </li>
              <li>
                <a href="/events" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Events Calendar
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Contact
                </a>
              </li>
              <li>
              <a href="/donate" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  Donate Now
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Column 3 - Contact Us */}
        <div className="footer-section">
          <h3 className="footer-heading contact-heading">CONTACT US</h3>
          <div className="footer-heading-underline"></div>
          <div className="footer-contact">
            {/* Address */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
<<<<<<< HEAD
                <p className="contact-label">123 Red Cross Road,</p>
                <p className="contact-label">Hyderabad, Telangana</p>
                <p className="contact-label">500001</p>
=======
                <p className="contact-detail">Andhra Pradesh Red Cross Society<br />Red Cross Bhavan,<br />Governorpet,<br />Vijayawada - 520002</p>
>>>>>>> 7bbe395e992a519c96bbe4cddfd7bf4838e53cf8
              </div>
            </div>
            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-text">
                <a href="tel:+919876543210" className="contact-detail clickable">+91 XXXXX XXXXX</a>
              </div>
            </div>
            {/* Emergency Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-text">
<<<<<<< HEAD
                <p className="contact-label">+91 9876 543 210</p>
                <p className="contact-label contact-subtext">(Emergency)</p>
=======
                <a href="tel:+919876543210" className="contact-detail clickable">
                  +91 XXXXX XXXXX<br />
                  <span className="emergency-note">(Emergency)</span>
                </a>
>>>>>>> 7bbe395e992a519c96bbe4cddfd7bf4838e53cf8
              </div>
            </div>
            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <a href="mailto:info@apredcross.org" className="contact-detail clickable">info@apredcross.org</a>
              </div>
            </div>
            {/* Office Hours */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-text">
                <p className="contact-detail">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            {/* Emergency Service Hours */}
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-text">
                <p className="contact-detail">Emergency: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <div className="footer-heading-underline"></div>
          <p className="footer-newsletter-text">
            Subscribe to our newsletter to stay updated with our latest news, events, and 
            humanitarian activities.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your Email Address" 
              className="newsletter-input"
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="newsletter-btn" aria-label="Subscribe">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          <div className="security-badges">
            <div className="badge">
              <i className="fas fa-shield-alt"></i>
              <span>100% Secure</span>
            </div>
            <div className="badge">
              <i className="fas fa-heart"></i>
              <span>Trusted NGO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © 2026 Kakinada Red Cross Society. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/services">Services</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;