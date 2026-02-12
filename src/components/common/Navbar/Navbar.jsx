import React, { useState } from "react";
import "./Navbar.css";

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

        {/* Menu */}
        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <button>OPENING TIMES</button>
          <button>FIND US</button>
          <button>ORDER NOW</button>
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
    </nav>
  );
};

export default Navbar;
