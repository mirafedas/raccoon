import React from 'react';
import './style.css';

const HighFiveButton = ({ changeImage, imageIndex }) => (
  <button className="high-five-btn" onClick={() => changeImage(imageIndex + 1)}>High five!</button>
)

export default HighFiveButton;