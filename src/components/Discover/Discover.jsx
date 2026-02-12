import React from "react";
import "./Discover.css";

const Discover = () => {
  return (
    <section className="discover">
      <div className="discover-container">
        <div className="discover-header">
          <h2 className="discover-title">
            <span className="discover-title-normal">DISCOVER</span>{" "}
            <span className="discover-title-bold">US</span>
          </h2>
        </div>

        <div className="discover-content">
          <div className="discover-text">
            <h3 className="discover-subtitle">Real African Flavor</h3>
            <h4 className="discover-heading">We Delivered,</h4>
            <h4 className="discover-heading">We Shared Food</h4>
            <p className="discover-description">
              From one country to another, we bring the taste of home to your
              table. Sacha's Taste is not just a restaurant, it's a celebration
              of authentic African flavors, crafted with passion and served with
              love. Every dish tells a story, every bite is a journey, and every
              meal is an experience that connects you to the rich culinary
              heritage of Africa.
            </p>
            <p className="discover-description">
              We believe in quality, authenticity, and the power of food to
              bring people together. Our commitment is to deliver not just
              meals, but memories that last a lifetime.
            </p>
          </div>

          <div className="discover-image">
            <img src="/images/packaging (1).jpg" alt="Food Delivery" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
