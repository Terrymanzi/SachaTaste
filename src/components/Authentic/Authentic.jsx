import React from "react";
import "./Authentic.css";

const Authentic = () => {
  return (
    <section className="authentic">
      <div className="authentic-container">
        <div className="authentic-content">
          <div className="authentic-header">
            <h3 className="authentic-subtitle">TASTE THE DELICIOUSNESS</h3>
            <h2 className="authentic-title">
              <span className="authentic-title-light">OUR BEST ONE</span>
              <br />
              <span className="authentic-title-bold">YET!</span>
            </h2>
          </div>
          <div className="authentic-text">
            <p>
              Crisp lettuce, diced tomato and our world-famous Special garlic
              sauce, all in a toasted warm Lebanese flatbread, with your choice
              of chicken or beef.
            </p>
            <p>
              CHICKEN SHAWARMA: Succulent chicken shawarma strips, char-grilled
              in aromatic herbs and spices.
            </p>
            <p>
              BEEF SHAWARMA: Tender beef shawarma, marinated in Mediterranean
              spices and grilled until perfect.
            </p>
            <p>
              Topped with your choice of our signature sauces and fresh
              vegetables, creating the ultimate flavor experience that keeps you
              coming back.
            </p>
          </div>
        </div>
        <div className="authentic-image">
          <img src="/images/sample_food (1).png" alt="Our Best Recipe" />
        </div>
      </div>
    </section>
  );
};

export default Authentic;
