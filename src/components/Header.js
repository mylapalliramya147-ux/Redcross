import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateDropdownOpen, setIsDonateDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDonateDropdown = () => {
    setIsDonateDropdownOpen(!isDonateDropdownOpen);
  };

  const handleDonateHover = () => {
    setIsDonateDropdownOpen(true);
  };

  const handleDonateLeave = () => {
    setIsDonateDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Indian_Red_Cross_Society_Logo.png/120px-Indian_Red_Cross_Society_Logo.png" alt="Red Cross" className="logo" />
          <div className="logo-text-wrapper">
            <span className="logo-text">Kakinada Red Cross</span>
            <span className="logo-subtitle">Government Of Andhra Pradesh</span>
          </div>
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item dropdown"
                onMouseEnter={handleDonateHover}
                onMouseLeave={handleDonateLeave}
            >
              <button 
                className="nav-link dropdown-toggle"
                onClick={toggleDonateDropdown}
              >
                Donate
              </button>
              <ul className={`dropdown-menu ${isDonateDropdownOpen ? 'active' : ''}`}>
                  <li>
                    <NavLink
                      to="/become-a-donor"
                      className={({ isActive }) =>
                        isActive ? 'dropdown-item active' : 'dropdown-item'
                      }
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDonateDropdownOpen(false);
                      }}
                    >
                      Become a Donor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/become-a-volunteer"
                      className={({ isActive }) =>
                        isActive ? 'dropdown-item active' : 'dropdown-item'
                      }
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDonateDropdownOpen(false);
                      }}
                    >
                      Become a Volunteer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/donate"
                      className={({ isActive }) =>
                        isActive ? 'dropdown-item active' : 'dropdown-item'
                      }
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDonateDropdownOpen(false);
                      }}
                    >
                      Donate Money
                    </NavLink>
                  </li>
                </ul>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link logout-btn">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  to="/admin/login"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
              </li>
            )}
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