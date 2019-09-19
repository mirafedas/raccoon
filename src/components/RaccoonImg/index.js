import React from 'react';
import './style.css';

const RaccoonImg = ({ imgURL }) => (
  <div>
    <img 
      src={imgURL} 
      className="main-img" 
      alt="Raccoon" 
    />
  </div>
)

export default RaccoonImg;