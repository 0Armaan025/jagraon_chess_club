import React from 'react';
import './testimonialscards.css';

const TestimonialsCards = ({ name, message, image }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={name} className='cardImg' />
          <p className='cardP'> {message} </p>
        </div>
        <div className="card-back">
        <h3 className='cardH3'>by {name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCards;
