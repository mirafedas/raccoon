import React from 'react';
import './style.css';
import { changeBtnText } from '../../actions';

const HighFiveButton = ({ changeImage, imageIndex, buttonText, buttonTextIndex }) => (
  <button className="high-five-btn" onClick={() => changeImage(imageIndex + 1)}>{ changeBtnText({buttonText, buttonTextIndex}) }</button>
)

export default HighFiveButton;