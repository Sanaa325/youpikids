import React from 'react';
import './activitycard.css'; 

const ActivityCard = ({ title, image, onClick }) => {
  return (
    <div className="activity-card" onClick={onClick}>
      <div className="activity-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="activity-info">
        <h3 className="activity-title">{title}</h3>
      </div>
    </div>
  );
};

export default ActivityCard;