import React from "react";
import "./Delivery.css";

const Delivery = () => {
  return (
    <section className="delivery">
      <div className="delivery-container">
        <div className="delivery-content">
          <div className="delivery-text">
            <h2 className="delivery-subtitle">REAL FAST FOOD</h2>
            <h1 className="delivery-title">DELIVERY</h1>
            <p className="delivery-description">
              We prioritize quality and convenience. From home-made flavour to
              your table, we use only the finest ingredients to guarantee you
              the best quality and taste. Experience authentic flavors delivered
              right to your door with speed and care.
            </p>
          </div>
        </div>
        <div className="delivery-image">
          <img src="/images/delivery service.jpg" alt="Fast Food Delivery" />
        </div>
      </div>
    </section>
  );
};

export default Delivery;
