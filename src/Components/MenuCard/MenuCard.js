import React from 'react';
import './menucard.css';

const MenuCard = ({ image, name, description }) => (
    <div className="menu-card">
      {/* Positionnez l'image au-dessus du titre */}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
  
  export default MenuCard;