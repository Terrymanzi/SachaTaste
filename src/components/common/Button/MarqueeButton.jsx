import React from "react";
import "./MarqueeButton.css";

const MarqueeButton = ({ children, onClick }) => {
  return (
    <button className="marquee-button" onClick={onClick}>
      <span className="marquee-button-text">{children}</span>
    </button>
  );
};

export default MarqueeButton;
