import React from 'react';
import './App.css';
import HighFiveButton from './containers/HighFiveButtonContainer.js';
import RaccoonImg from './containers/imageContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Give high five to a raccon, don't be shy!
      </p>
      <RaccoonImg />
      <HighFiveButton />
      </header>
    </div>
  );
}

export default App;
