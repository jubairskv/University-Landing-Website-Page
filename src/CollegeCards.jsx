import React from 'react';
 
const CollegeCard = ({ title, description, imageUrl,Date }) => {
  return (
    <div className="college-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{Date}</p>
    </div>
  );
};

export default CollegeCard;

