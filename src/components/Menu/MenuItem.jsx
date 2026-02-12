import React from "react";
import "./MenuItem.css";

const MenuItem = ({ name, description, image }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-content">
        <h3 className="menu-item-title">{name}</h3>
        <p className="menu-item-description">{description}</p>
      </div>
      <div className="menu-item-image">
        {image && <img src={image} alt={name} />}
      </div>
    </div>
  );
};

export default MenuItem;
