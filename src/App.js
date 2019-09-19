import React from 'react';
import './App.css';
import HighFiveButton from './components/HighFiveButton/index.js';
import RaccoonImg from './components/RaccoonImg/index.js';

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
