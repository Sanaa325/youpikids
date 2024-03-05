import React from 'react';
import "./birthdaycard.css";


const BirthdayCard = ({ title, image, description, onClick }) => {
 
  const titleColors = {
    'YUMMY BIRTHDAY': '#8B2A79',
    'YOUPI FRIDAY': '#75C213',
    'YOUPI ANIMÉ': '#FFAC00',
    "KING'S BIRTHDAY": '#F15A35',
  };
  
  
  const color = titleColors[title] || '#333'; // Default color if not found

  let ageRangeText = '';

    
    if (title === 'YUMMY BIRTHDAY') {
      ageRangeText = 'À partir de 16,90e';
    } else if (title === 'YOUPI FRIDAY') {
      ageRangeText = 'À partir de 12,90e';
    } else if (title === 'YOUPI ANIMÉ') {
      ageRangeText = 'À partir de 18,90e';
    } else if (title === "KING'S BIRTHDAY") {
      ageRangeText = 'À partir de 21,90e';
    }

  return (
    <div className="birthday-card" onClick={onClick}>
      <img className='card-picture' src={image} alt={title} />
      <div className='card-body'>
        <h3 style={{ color }}>{title}</h3>
        <p>{description}</p>
        <p>{ageRangeText}</p>
        <button className="birthday-button">Détails de la formule</button>
      </div>



    </div>
  );
};

export default BirthdayCard;



