import React from "react";
import MenuItem from "./MenuItem";
import { menuData } from "../../data";
import "./Menu.css";

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="menu-title">
            <span className="menu-title-light">CHECK OUT THE</span>
            <br />
            <span className="menu-title-bold">MENU</span>
          </h2>
        </div>

        <div className="menu-featured">
          {menuData.featured.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>

        <div className="menu-categories">
          <div className="menu-column">
            <div className="menu-category">
              <h3 className="category-title">COMBOS and SPECIALS</h3>
              <ul className="category-list">
                <li>Combo 1 - Full meal deal</li>
                <li>Combo 2 - Family pack</li>
                <li>Special of the day</li>
              </ul>
            </div>

            <div className="menu-category">
              <h3 className="category-title">SALADS</h3>
              <ul className="category-list">
                <li>Garden Salad - Fresh greens</li>
                <li>Fattoush - Traditional Lebanese</li>
                <li>Tabouleh - Parsley salad</li>
              </ul>
            </div>

            <div className="menu-category">
              <h3 className="category-title">SIDES</h3>
              <ul className="category-list">
                <li>Crispy Fries</li>
                <li>Aromatic Rice</li>
                <li>Pita Bread</li>
              </ul>
            </div>
          </div>

          <div className="menu-column">
            <div className="menu-category">
              <h3 className="category-title">STARTERS</h3>
              <ul className="category-list">
                <li>Hummus - Chickpea dip</li>
                <li>Falafel - Crispy fritters</li>
                <li>Baba Ganoush</li>
              </ul>
            </div>

            <div className="menu-category">
              <h3 className="category-title">DRINKS</h3>
              <ul className="category-list">
                <li>Soft Drinks</li>
                <li>Fresh Juices</li>
                <li>Lebanese Tea</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
