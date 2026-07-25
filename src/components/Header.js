import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <img 
              src="/logo.svg" 
              alt="Red Cross Logo" 
              className="logo"
            />
            <span className="logo-text">APRedcross</span>
          </Link>
        </div>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <a 
                href="https://apredcross.org/calender" 
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-divider">|</li>
            {/* Second set of Home, About, Contact */}
            <li className="nav-item nav-item-secondary">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active secondary' : 'nav-link secondary'
                }
                end
              >
                <i className="fas fa-home"></i> Home
              </NavLink>
            </li>
            <li className="nav-item nav-item-secondary">
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active secondary' : 'nav-link secondary'
                }
              >
                <i className="fas fa-info-circle"></i> About
              </NavLink>
            </li>
            <li className="nav-item nav-item-secondary">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active secondary' : 'nav-link secondary'
                }
              >
                <i className="fas fa-envelope"></i> Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/donate" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active donate-btn' : 'nav-link donate-btn'
                }
              >
                Donate
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;