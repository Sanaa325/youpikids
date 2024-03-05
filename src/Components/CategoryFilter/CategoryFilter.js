import React from 'react';
import "./categoryfilter.css";

const CategoryFilter = ({ selectedCategory, onChange }) => {
  const categories = ['Toutes les activités', 'De 1 à 2 ans', 'De 3 à 12 ans'];

  return (
    <div className="category-section">
      <ul className="category-filter">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
