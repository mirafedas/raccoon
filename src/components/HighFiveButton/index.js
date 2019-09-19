import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

const HighFiveButton = ({ changeImage, imageIndex }) => (
  <Button 
  id="toggle"
  color="secondary"
  variant="outlined" 
  className="high-five-btn"
  onClick={() => changeImage(imageIndex + 1)}>
  { imageIndex ? 'Go back' : "High five!" }
  </Button>
)

export default HighFiveButton;