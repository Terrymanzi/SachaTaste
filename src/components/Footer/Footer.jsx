import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-subtitle">Taste the Deliciousness</h2>
          <h1 className="footer-title">SACHA's TASTE</h1>
          {/* <p className="footer-tagline">
            Built by <span className="font-extrabold">Terry</span>
            <span> ®</span>
          </p> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026 Sacha's Taste. Built by{" "}
          <span className="font-extrabold">Terry</span>
          <span> ®</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
