import React, { useState } from "react";
import "./Navbar.css";
import MarqueeButton from "../Button/MarqueeButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/images/brand-logo.png" alt="sacha-Taste Brand Logo" />
        </div>

        {/* Mobile Only ORDER NOW Button */}
        <button className="btn-mobile-order">ORDER NOW</button>

        {/* Desktop Menu Buttons */}
        <div className="navbar-buttons">
          {/* Opening Times with Dropdown */}
          <div className="opening-times-wrapper">
            <button className="btn-outlined">OPENING TIMES</button>
            <div className="opening-times-dropdown">
              <div className="dropdown-header">OPENING HOURS</div>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">MON</span>
                  <span className="time">11.30-10PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">TUES</span>
                  <span className="time">11.30-11PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">WED</span>
                  <span className="time">11.30-11PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">THUR</span>
                  <span className="time">11.30-12AM</span>
                </div>
                <div className="hours-item">
                  <span className="day">FRI</span>
                  <span className="time">11.30-1AM</span>
                </div>
                <div className="hours-item">
                  <span className="day">SAT</span>
                  <span className="time">11.30-1AM</span>
                </div>
                <div className="hours-item">
                  <span className="day">SUN</span>
                  <span className="time">11.30-11PM</span>
                </div>
              </div>
              <div className="dropdown-footer">OR UNTIL SOLD OUT</div>
              <div className="halal-badge">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="50"
                    y="60"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="600"
                  >
                    حلال
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <button className="btn-outlined">FIND US</button>
          <button className="btn-filled">ORDER NOW</button>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      <div className={`menu-overlay ${menuOpen ? "active" : ""}`}>
        <div className="menu-overlay-content">
          {/* Logo */}
          <div className="menu-logo">
            <img src="/images/brand-logo.png" alt="sacha-Taste Brand Logo" />
          </div>

          {/* Close Button */}
          <button className="menu-close" onClick={toggleMenu}>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <nav className="menu-nav">
            <a href="#about">ABOUT</a>
            <a href="#menu">MENU</a>
            <a href="#locations">LOCATIONS</a>
            <a href="#corporate">CORPORATE</a>
            <a href="#careers">CAREERS</a>
          </nav>

          {/* Order Buttons - Marquee */}
          <div className="menu-order-marquee">
            <div className="marquee-content">
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              {/* Duplicate for seamless loop */}
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
              <MarqueeButton>ORDER NOW</MarqueeButton>
            </div>
          </div>

          {/* Social Media */}
          <div className="menu-social">
            <span className="social-label">FOLLOW US</span>
            <div className="social-icons">
              <a href="#facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="bottom-nav">
        <div className="bottom-nav-container">
          {/* Opening Times with Dropdown */}
          <div className="bottom-nav-item opening-times-wrapper-mobile">
            <button className="bottom-nav-btn">OPENING TIMES</button>
            <div className="opening-times-dropdown-mobile">
              <div className="dropdown-header">OPENING HOURS</div>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">MON</span>
                  <span className="time">11.30-10PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">TUES</span>
                  <span className="time">11.30-11PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">WED</span>
                  <span className="time">11.30-11PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">THUR</span>
                  <span className="time">11.30-12AM</span>
                </div>
                <div className="hours-item">
                  <span className="day">FRI</span>
                  <span className="time">11.30-1AM</span>
                </div>
                <div className="hours-item">
                  <span className="day">SAT</span>
                  <span className="time">11.30-1AM</span>
                </div>
                <div className="hours-item">
                  <span className="day">SUN</span>
                  <span className="time">11.30-11PM</span>
                </div>
              </div>
              <div className="dropdown-footer">OR UNTIL SOLD OUT</div>
              <div className="halal-badge">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="50"
                    y="60"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="600"
                  >
                    حلال
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <button className="bottom-nav-btn bottom-nav-order">ORDER NOW</button>
          <button className="bottom-nav-btn">FIND US</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
