// Menu.js
import React from "react";
import "./menu.css";

function Menu({ menuItems, sweetItems, showCategory, selectedCategory }) {
  const categories = Object.keys(menuItems || sweetItems || {});

  return (
    <div className="MenuContainer">
      <ul className="Menu">
        {categories.map((category) => (
          <li
            className={`MenuButton ${selectedCategory === category ? "active" : ""}`}
            key={category}
          >
            <button onClick={() => showCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

