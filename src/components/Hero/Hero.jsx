import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img
            src="/images/CEO sacha.png"
            alt="Sacha"
            className="hero-person"
          />
        </div>

        <div className="hero-center">
          <div className="hero-logo">
            <img src="/images/brand-logo.png" alt="Sacha's Taste" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">TASTE THE DELICIOUSNESS</h1>
            <p className="hero-subtitle">
              From home-made flavour to your table, we use only the finest
              ingredients to guarantee you the best quality and taste. Eat well,
              feel great, and fall in love with your meal, each and every time.
            </p>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/images/sample_food (1).png"
            alt="Delicious Food"
            className="hero-food"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
