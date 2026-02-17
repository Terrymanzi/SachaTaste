import React from "react";
import "./MarqueeText.css";

const MarqueeText = ({ lines = [] }) => {
  // Default messages if none provided
  const defaultLines = [
    "THE TASTIEST FOODS AT YOUR DOORSTEP!",
    "THE TASTIEST HUMMUS KEEP IT SQEW!",
    "THE TASTIEST FALAFEL KEEP IT SQEW!",
  ];

  const displayLines = lines.length > 0 ? lines : defaultLines;

  return (
    <section className="marquee-text-section">
      <div className="marquee-container">
        {displayLines.map((line, index) => (
          <div key={index} className={`marquee-line marquee-line-${index + 1}`}>
            <div className="marquee-content">
              {/* Repeat the text multiple times for seamless loop */}
              <span className="marquee-item">{line}</span>
              <span className="marquee-item">{line}</span>
              <span className="marquee-item">{line}</span>
              <span className="marquee-item">{line}</span>
              <span className="marquee-item">{line}</span>
              <span className="marquee-item">{line}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeText;
