import React from 'react';
import './style.css';
import RaccoonImg from '../RaccoonImg';
import enot1 from '/Users/mvasylykiv/Documents/React/high-five/src/img/images.jpeg';
import enot2 from '/Users/mvasylykiv/Documents/React/high-five/src/img/high.jpg';



const HighFiveButton = () => {
  return <button className="high-five-btn" onClick={changeURL}>High five!</button>
}

export default HighFiveButton;